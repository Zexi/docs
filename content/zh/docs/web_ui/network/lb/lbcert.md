---
title: "证书"
weight: 3
description: 当在负载均衡实例上配置HTTPS监听转发来自HTTPS协议的请求时，需要配置证书。
---

当在负载均衡实例上配置HTTPS监听转发来自HTTPS协议的请求时，需要配置证书。负载均衡只支持PEM格式的证书。

**证书来源**：

- 同步公有云上被实例上的https监听绑定的证书，并自动在证书缓存里添加一条记录，同步下来的证书默认本域共享。从公有云同步下来的证书会存在未同步到证书内容和证书密钥的情况，此时证书状态部分可用，即这类证书只能用于证书详情-缓存列表对应平台区域上的监听使用，部分可用状态的证书当对应公有云账号删除时，将会一并删除。
- 通过云管平台新建证书。

**入口**：在云管平台单击左上角![](../../../images/intro/nav.png)导航菜单，在弹出的左侧菜单栏中单击 **_"网络/负载均衡/证书"_** 菜单项，进入证书页面。

![](../../../images/network/lbcert1.png)

## 新建证书

{{% alert title="说明" %}}

**常用证书申请流程**：

- 本地生成私钥：openssl genrsa -out privateKey.pem 2048 ，其中生成的privateKey.pem为私钥文件，请妥善保管。
- 生成证书请求文件：openssl req -new -key privateKey.pem -out server.csr ，其中server.csr是证书请求文件，可用其去申请证书。
- 获取请求文件中的内容前往 CA 等机构站点申请证书。
{{% /alert %}}

1. 单击列表上方 **_"新建"_** 按钮，弹出新建证书对话框。
2. 设置以下参数：
    - 证书名称：设置证书名称。
    - 证书内容：cert.pem证书的内容，证书内容要求：
        - 以-----BEGIN CERTIFICATE-----开头,以-----END CERTIFICATE-----结尾；
        - 每行64个字符，最后一行长度可以不足64个字符；
        - 证书内容不能包含空格。
    - 证书密钥：privkey.pem密钥的内容，密钥内容要求：
        - 以-----BEGIN RSA PRIVATE KEY-----开头,以-----END RSA PRIVATE KEY-----结尾；
        - 每行64个字符，最后一行长度可以不足64个字符；
        - 证书密钥内容不能包含空格。
3. 单击 **_"确定"_** 按钮，新建证书。

## 更改项目

该功能用于更改证书所属项目。当证书为私有状态时，才可以更改项目。

**单个证书更改项目**

1. 在证书页面，单击证书右侧操作列 **_"更多"_** 按钮，选择下拉菜单 **_"更改项目"_** 菜单项，弹出更改项目对话框。
2. 修改域和项目，单击 **_"确定"_** 按钮。

**批量更改项目**

1. 在证书列表中选择一个或多个证书，单击列表上方 **_"批量操作"_** 按钮，选择下拉菜单 **_"更改项目"_** 菜单项，弹出更改项目对话框。
2. 修改域和项目，单击 **_"确定"_** 按钮。

## 设置共享

该功能用于设置证书的共享状态。

项目资源的共享范围有五种：

- 不共享（私有）：即项目资源只能本项目的用户可以使用。
- 项目共享-部分（本域内多项目共享）：即项目资源可以共享到同域下的指定项目（一个或多个），只有本项目和被共享项目下的用户可以使用项目资源。
- 项目共享-全部（本域共享）：即项目资源可以共享给域下所有项目，即项目所在域的用户都可以使用项目资源。
- 域共享-部分（多域共享）：即项目资源可以共享到指定域（一个或多个），只有项目资源所在域和共享域下的用户可以使用项目资源。
- 域共享-全部（全局共享）：即项目资源可以共享给全部域使用，即系统中所有用户都可以使用项目资源。

{{% alert title="说明" %}}
设置域共享的条件：

- 在{{<oem_name>}}平台已开启三级权限。
- 用户处于管理后台。

设置项目共享的条件：

- 用户处于管理后台或域管理后台。

{{% /alert %}}

**单个证书设置共享**

1. 在证书页面，单击证书右侧操作列 **_"更多"_** 按钮，选择下拉菜单 **_"设置共享"_** 菜单项，弹出设置共享对话框。
2. 配置以下参数。
   - 当共享范围选择为“不共享”时，即项目资源的共享范围为私有，仅本项目的用户可以使用。
   - 当共享范围选择为“项目共享”时，需要选择本域下可共享的项目。
       - 当项目选择同域下的一个或多个项目时，即项目资源的共享范围为项目共享-部分，只有项目资源所在项目和共享项目下的用户可以使用项目资源。
       - 当项目选择全部时，即项目资源的共享范围为项目共享-全部，项目所在域下的用户都可以使用项目资源。
   - 当共享范围选择为“域共享”时，需要选择共享的域。
       - 当域选择其中的一个或多个域时，即项目资源的共享范围为域共享-部分，只有项目资源所在域和共享域下的用户可以使用域资源。
       - 当域选择全部时，即项目资源的共享范围为域共享-全部，系统中的所有用户都可以使用项目资源。
3. 单击 **_"确定"_** 按钮，完成操作。

**批量设置共享**

多个证书批量设置的共享范围必须相同。否则请单独为证书设置共享。

1. 在证书列表中选择一个或多个证书，单击列表上方 **_"批量操作"_** 按钮，选择下拉菜单 **_"设置共享"_** 菜单项，弹出设置共享对话框。
2. 配置以下参数。
   - 当共享范围选择为“不共享”时，即项目资源的共享范围为私有，仅本项目的用户可以使用。
   - 当共享范围选择为“项目共享”时，需要选择本域下可共享的项目。
       - 当项目选择同域下的一个或多个项目时，即项目资源的共享范围为项目共享-部分，只有项目资源所在项目和共享项目下的用户可以使用项目资源。
       - 当项目选择全部时，即项目资源的共享范围为项目共享-全部，项目所在域下的用户都可以使用项目资源。
   - 当共享范围选择为“域共享”时，需要选择共享的域。
       - 当域选择其中的一个或多个域时，即项目资源的共享范围为域共享-部分，只有项目资源所在域和共享域下的用户可以使用域资源。
       - 当域选择全部时，即项目资源的共享范围为域共享-全部，系统中的所有用户都可以使用项目资源。
3. 单击 **_"确定"_** 按钮，完成操作。

## 删除证书

该功能用于删除证书，当证书关联的监听数量为0时，才可以删除。

1. 单击证书右侧操作列 **_"删除"_** 按钮，弹出操作确认对话框。
2. 单击 **_"确定"_** 按钮，完成操作。

## 查看证书详情

该功能用于查看证书的详细信息。

1. 在证书页面，单击证书名称项，进入证书详情页面。
2. 详情页面顶部菜单项支持对证书进行删除操作。
3. 查看证书的云上ID、ID、名称、状态、域、项目、指纹、证书域名、过期时间、创建时间、更新时间、备注。

## 查看证书关联的监听列表

该功能用于查看证书关联的https监听列表。

1. 在证书页面，单击证书名称项，进入证书详情页面。
2. 单击“监听”页签，进入监听页面。
3. 查看证书关联的所有https监听信息。

### 更换证书

该功能用于为https监听更换证书，当证书快到期时可通过该功能批量为https监听更换证书。

**单个更换证书**

1. 在监听页面，单击监听右侧操作列 **_"更换证书"_** 按钮，弹出更换证书对话框。
2. 选择新证书，单击 **_"确定"_** 按钮，完成操作。

**批量更换证书**

{{% alert title="说明" %}}
仅支持为同一个域下的监听批量更换证书。
{{% /alert %}}

1. 在监听页面中选择一个或多个监听，单击列表上方 **_"更换证书"_** 按钮，弹出更换证书对话框。
2. 选择新证书，单击 **_"确定"_** 按钮，完成操作。

## 查看证书缓存列表

缓存列表来源有两种：
- 创建公有云平台的负载均衡实例使用{{<oem_name>}}平台上的证书时，该证书将缓存到公有云平台。
- 同步公有云平台上的负载均衡证书，将同步在{{<oem_name>}}平台新建证书和缓存记录。

1. 在证书页面，单击证书名称项，进入证书详情页面。
2. 单击“缓存列表”页签，进入缓存页面。
3. 查看缓存列表信息，包括证书名称、证书域名、过期时间、关联扩展域名、平台、区域、云账号。

### 删除缓存

该功能用于删除公有云上对应账号区域的证书。当证书关联的监听数量为0时，才可以删除。

1. 在证书页面，单击证书名称项，进入证书详情页面。
2. 单击“缓存列表”页签，进入缓存页面。
3. 单击证书缓存右侧操作列 **_"删除"_** 按钮，弹出操作确认对话框。
4. 单击 **_"确定"_** 按钮，完成操作。

## 查看操作日志

该功能用于查看证书相关操作的日志信息。

1. 在证书页面，单击证书名称项，进入证书详情页面。
2. 单击“操作日志”页签，进入操作日志页面。
    - 加载更多日志：列表默认显示20条操作日志信息，如需查看更多操作日志，请单击 **_"加载更多"_** 按钮，获取更多日志信息。
    - 查看日志详情：单击操作日志右侧操作列 **_"查看"_** 按钮，查看日志的详情信息。支持复制详情内容。
    - 查看指定时间段的日志：如需查看某个时间段的操作日志，在列表右上方的开始日期和结束日期中设置具体的日期，查询指定时间段的日志信息。
    - 导出日志：目前仅支持导出本页显示的日志。单击右上角![](../../../images/system/download.png)图标，在弹出的导出数据对话框中，设置导出数据列，单击 **_"确定"_** 按钮，导出日志。