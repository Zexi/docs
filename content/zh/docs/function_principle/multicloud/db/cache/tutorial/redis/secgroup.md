---
title: "关联安全组"
date: 2021-11-29T11:37:44+08:00
weight: 70
description: >
    为Redis实例关联安全组
---

安全组是一种虚拟的包过滤防火墙，通过设置安全组规则来控制Redis实例的访问规则等。仅腾讯云平台的Redis实例支持关联安全组。

1. 在左侧导航栏，选择 **_"数据库/Redis/Redis实例"_** 菜单项，进入Redis实例页面。
2. 单击Redis实例右侧操作列 **_"更多"_** 按钮，选择下拉菜单 **_"关联安全组"_** 菜单项，弹出关联安全组对话框。
2. 在关联安全组对话框中支持关联或取消关联安全组。
    - 关联安全组：选择要绑定的安全组，最多支持5个。如没有符合需求的安全组，可单击“新建安全组”超链接，在弹出的新建安全组页面配置相关参数，单击 “确定” 按钮，创建安全组。
    - 取消关联安全组：取消选择安全组，至少保留一个安全组。
3. 单击 **_"确定"_** 按钮，完成操作。