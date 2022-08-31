---
title: "查看Redis实例详情"
date: 2021-11-29T11:54:12+08:00
weight: 130
description: >
    查看Redis实例的详情页
---

该功能用于查看Redis实例的详细信息。

1. 在左侧导航栏，选择 **_"数据库/Redis/Redis实例"_** 菜单项，进入Redis实例页面。
2. 单击Redis实例名称项，进入Redis实例详情页面。
2. 查看以下信息：
    - 基本信息：包括云上ID、ID、名称、状态、域、项目、平台、计费方式、区域、可用区（若有备可用区，也将在此处显示）、云账号、创建时间、更新时间、备注。
    - 数据库信息：包括类型版本、节点类型、性能类型、可维护时间段、实例规格、CPU、储存架构、内存。
    - 链接信息：包括内网地址、外网地址以及开启外网地址操作（仅阿里云支持）、数据库端口号、VPC、子网、访问方式、安全组。
        - 开启外网地址仅阿里云Redis实例支持，开启后需要等待一分钟所有才会开启成功，开启成功后用户可通过外网地址和端口后连接数据库。
    - 其他信息：支持开启或关闭删除保护。