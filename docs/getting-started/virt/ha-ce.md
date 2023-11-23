---
sidebar_position: 2
edition: ce
---

# 高可用安装 

使用 [ocboot](https://github.com/yunionio/ocboot) 部署工具高可用安装 Cloudpods 服务，更符合生产环境的部署需求。

## 环境准备

import OcbootEnv from '../_parts/_quickstart-ocboot-env.mdx';

<OcbootEnv />

假设准备好了 3 台 CentOS7 机器，以及 1 台 Mariadb/MySQL 的机器，规划如下：

| role         | ip            | interface | note                                                        |
| ------------ | ------------- | --------- | ----------------------------------------------------------- |
| k8s primary  | 10.127.90.101 | eth0      | 第1个控制节点                                               |
| k8s master 1 | 10.127.90.102 | eth0      | 第2个控制节点                                               |
| k8s master 2 | 10.127.90.103 | eth0      | 第3个控制节点                                               |
| k8s VIP      | 10.127.190.10 | -         | keepalived 使用的 vip ，会优先绑定在 3 个控制节点中的第一个 |
| DB           | 10.127.190.11 | -         | 数据库独立节点 pswd="0neC1oudDB#",  port=3306               |

其中 DB 的部署目前是不归 ocboot 部署工具管理的，需要提前手动部署。 建议使用 MariaDB 数据库，不要使用 MySQL 5.6及以下版本，防止出现索引长度 bug： Index column size too large. The maximum column size is 767 bytes. 的问题。各发行版对应 MariaDB 版本如下：

- Centos 7.6-7.9  Minimal(X86_64和ARM64) 默认安装MariaDB 5.5.68
- Debian 10-11(X86_64和ARM64) 默认安装MariaDB 10.3.1
- Kylin V10 sp2(X86_64和ARM64) 默认安装MariaDB 10.3.4

另外高可用的数据库部署也可以参考文档：[部署 Mariadb HA 环境](../misc/db-ha) 。

## 高可用集群 ntp 一致性

请在安装之前，确保各个待部署节点的时间一致，否则会出现在签发证书步骤失败。

如果是联网安装，可以参考下面的命令，确保集群内每台服务器都与互联网时间保持一致：

```bash
# 您可以选择更方便、可达的授时服务器
# 如果提示没有ntpdate 命令，请使用 os 对应的包管理器自行安装
# 例如在centos 上： yum install -y ntp && systemctl enable ntpd --now
$ ntpdate -u edu.ntp.org.cn && hwclock -w && ntpdate -u -q edu.ntp.org.cn
```

## 开始安装

### 下载 ocboot

import OcbootClone from '@site/src/components/OcbootClone';

<OcbootClone />

### 编写部署配置

import OcbootConfigHA from '@site/src/components/OcbootConfigHA';

<OcbootConfigHA productVersion='Edge' />

### 开始部署

```bash
$ ./ocboot.py install ./config-k8s-ha.yml
```

等待部署完成后，就可以使用浏览器访问 https://10.127.190.10 (VIP), 输入用户名 `admin` 和密码 `admin@123`，进入前端。

另外部署完成后，可以给已有集群添加节点，参考文档：[添加计算节点](../host)，注意这里添加节点的控制节点 ip 不要用 vip ，只能用第1个控制节点的实际 ip ，因为 vip 有可能漂移到其他节点上，但通常只有第1个节点配置了 ssh 免密登陆登陆其他节点的权限，用其他控制节点会导致 ssh 登陆不上。

## 常见问题

### 1. 如何手动重新添加控制控制节点？

3个控制节点都会运行 kube-apiserver, etcd 这些关键服务，如果遇到某一个节点遇到 etcd 数据不一致，可以将该节点 reset 后重新加入集群，步骤如下：

```bash
# 到其他正常的控制节点创建 join token
$ export KUBECONFIG=/etc/kubernetes/admin.conf
$ ocadm token create --description "ocadm-playbook-node-joining-token" --ttl 90m
2fmpbx.7zikd8sp5uhaxrjr

# 获取控制节点认证
$ /opt/yunion/bin/ocadm init phase upload-certs | grep -v upload-certs
6150f8da2dcdf3a8a730f407ddce9f1cb9f24b15ffa4e4b3680e16ed40201cf0

##########  注意下面的命令需要登陆到需要重新加入的节点执行  ###########
# 如果该节点曾经作为计算节点加入过云平台
# 需要备份当前宿主机 /etc/yunion/host.conf 配置
[your-reset-node] $ cp /etc/yunion/host.conf /etc/yunion/host.conf.manual.bk

# 登陆到需要重新 reset 加入的节点，reset 当前的 kubernetes 环境
[your-reset-node] $ kubeadm reset -f

# 假设当前的网卡为 bond0(如果不做 bond ，物理网卡一般为 eth0 之类的名称)，ip 为 172.16.84.40，需要加入集群 172.16.84.101:6443 集群
[your-reset-node] $ ocadm join \
        --control-plane 172.16.84.101:6443 \ # 加入的目标集群
        --token 2fmpbx.7zikd8sp5uhaxrjr --certificate-key 6150f8da2dcdf3a8a730f407ddce9f1cb9f24b15ffa4e4b3680e16ed40201cf0 --discovery-token-unsafe-skip-ca-verification \ # 加入认证信息
        --apiserver-advertise-address 172.16.84.40 --node-ip 172.16.84.40 \ # 该节点 ip
        --as-onecloud-controller \ # 作为 cloudpods 控制节点
        --enable-host-agent \ # 作为 cloudpods 计算节点
        --host-networks 'bond0/br0/172.16.84.40' \ # 计算节点的桥接网络，意思创建 br0 网桥，并把 bond0 加入进来，给 br0 网桥配置 ip 172.16.84.40
        --high-availability-vip 172.16.84.101 --keepalived-version-tag v2.0.25 # keepalived 的 vip ，保证 kube-apiserver 的高可用性

# 等待加入完成后，还原 /etc/yunion/host.conf.manual.bk 配置
[your-reset-node] $ cp /etc/yunion/host.conf.manual.bk /etc/yunion/host.conf

# 重启 host 服务
$ kubectl get pods -n onecloud -o wide | grep host | grep $your-reset-node
$ kubectl delete pods -n onecloud default-host-xxxx
```

以上手动的步骤参考了 ocboot join master-node 的逻辑，可参考 [https://github.com/yunionio/ocboot/blob/master/onecloud/roles/master-node/tasks/main.yml](https://github.com/yunionio/ocboot/blob/master/onecloud/roles/master-node/tasks/main.yml) 。
