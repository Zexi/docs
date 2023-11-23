import CodeBlock from '@theme/CodeBlock';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

function getConfig(productVersion) {
  const { siteConfig } = useDocusaurusContext();
  let shouldAsHost = () => {
    if (productVersion === 'CMP') {
      return 'false'
    }
    return 'true'
  }
  const content = `# primary_master_node 表示运行 k8s 和 Cloudpods 服务的节点
primary_master_node:
  # ansible ssh 登录 ip
  hostname: $PRIMARY_IP
  # 不使用本地登录方式
  use_local: false
  # ansible ssh 登录用户
  user: root
  # cloudpods 版本
  onecloud_version: "${siteConfig.customFields.release_version}"
  # 数据库连接地址
  db_host: "$DB_IP"
  # 数据库用户
  db_user: "$DB_USER"
  # 数据库密码
  db_password: "$DB_PSWD"
  # 数据库端口
  db_port: "$DB_PORT"
  # 节点 IP
  node_ip: "$PRIMARY_IP"
  # 对应 Kubernetes calico 插件默认网卡选择规则
  ip_autodetection_method: "can-reach=$PRIMARY_IP"
  # k8s 控制节点的 ip
  controlplane_host: $K8S_VIP
  # k8s 控制节点的端口
  controlplane_port: "6443"
  # 该节点作为 Cloudpods 私有云计算节点，如果不想让控制节点作为计算节点，可以设置为 false
  as_host: ${shouldAsHost()}
  # 虚拟机强行作为 Cloudpods 内置私有云计算节点（默认为 false）。开启此项时，请确保 as_host: true
  as_host_on_vm: ${shouldAsHost()}
  # 产品版本，从 [] 选择一个，FullStack 会安装融合云，CMP 安装多云管理版本，Edge 安装私有云
  product_version: '${productVersion}'
  # 设置镜像仓库，如果待部署的机器处于海外，可以用 dockerhub 的镜像仓库：docker.io/yunion
  image_repository: registry.cn-beijing.aliyuncs.com/yunionio
  # 启用高可用模式
  high_availability: true
  # 使用 minio 作为后端虚拟机镜像存储
  enable_minio: true
  insecure_registries:
  - $PRIMARY_IP:5000
  ha_using_local_registry: false
  # 计算节点默认网桥 br0 对应的网卡
  host_networks: "$PRIMARY_INTERFACE/br0/$PRIMARY_IP"

master_nodes:
  # 加入控制节点的 k8s vip
  controlplane_host: $K8S_VIP
  # 加入控制节点的 K8s apiserver 端口
  controlplane_port: "6443"
  # 作为 K8s 和 Cloudpods 控制节点
  as_controller: true
  # 该节点作为 Cloudpods 私有云计算节点，如果不想让控制节点作为计算节点，可以设置为 false
  as_host: ${shouldAsHost()}
  # 虚拟机强行作为 Cloudpods 内置私有云计算节点（默认为 false）。开启此项时，请确保 as_host: true
  as_host_on_vm: ${shouldAsHost()}
  # 从 primary 节点同步 ntp 时间
  ntpd_server: "$PRIMARY_IP"
  # 打开 keepalived HA
  high_availability: true
  hosts:
  - user: root
    hostname: "$MASTER_1_IP"
    host_networks: "$MASTER_1_INTERFACE/br0/$MASTER_1_IP"
  - user: root
    hostname: "$MASTER_2_IP"
    host_networks: "$MASTER_2_INTERFACE/br0/$MASTER_2_IP"`
  return content;
}

export default function OcbootConfigHA(props) {
  const productVersion = props.productVersion;
  const config = getConfig(props.productVersion);
  return (
    <div>
      <CodeBlock language='bash'>
        {
          `# 填充变量，生成配置
DB_IP="10.127.190.11"
DB_PORT=3306
DB_PSWD="0neC1oudDB#"
DB_USER=root

K8S_VIP=10.127.190.10
PRIMARY_INTERFACE="eth0"
PRIMARY_IP=10.127.90.101

MASTER_1_INTERFACE="eth0"
MASTER_1_IP=10.127.90.102
MASTER_2_INTERFACE="eth0"
MASTER_2_IP=10.127.90.103

cat > config-k8s-ha.yml <<EOF
${config}
EOF`
        }
      </CodeBlock>
    </div>
  )
}