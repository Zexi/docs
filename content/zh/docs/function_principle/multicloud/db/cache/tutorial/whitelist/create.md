---
title: "新建白名单"
date: 2021-11-29T11:55:25+08:00
weight: 10
description: >
    新建Redis实例的白名单
---

该功能用于新建白名单。

1. 在左侧导航栏，选择 **_"数据库/Redis/Redis实例"_** 菜单项，进入Redis实例页面。
2. 单击Redis实例名称项，进入Redis实例详情页面。
2. 单击“白名单设置”页签，弹出新建白名单对话框。
3. 设置分组名，在白名单中输入允许访问Redis实例的IP地址和IP地址段，单击 **_"确定"_** 按钮。
4. 白名单创建完成后，只有在实例白名单中的IP地址才可以访问Redis实例。

{{% alert title="说明" %}}
- 当有多个IP地址和IP地址段时，需要用英文逗号分隔。
- 一个实例最多支持设置20个IP地址和IP地址段。
{{% /alert %}}