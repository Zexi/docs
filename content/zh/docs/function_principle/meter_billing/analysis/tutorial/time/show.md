---
title: "查看每月的费用分析"
date: 2022-01-26T18:19:59+08:00
weight: 20
description: >
    查看指定月份下的消费趋势及不同维度的消费占比
---

1. 在左侧导航栏，选择 **_"费用/费用分析/时间"_** 菜单项，进入时间页面。
2. 在时间页面，单击指定月份名称项，进入指定月份下实际成本页面。
3. 查看以下信息：
    - 自定义消费：查看指定月份内的消费金额。
    - 本年消费：查看指定月份的本年内的消费金额

    {{% alert title="说明" %}}
账单中出现负数是因为产生了退款，如包年包月机器提前释放退款、使用优惠券后退款、以及账号享受的其他优惠的退款。
    {{% /alert %}}
    - 消费趋势：以柱状图的形式查看指定时间内月下的消费金额及消费趋势。
    - 查看不同维度的费用账单分析。
        - 平台：以列表的形式显示指定时间段中不同平台消费金额及比例，以环形图的形式显示总消费金额和不同平台的消费金额及比例。
        - 资源类型：以列表的形式显示指定时间段中不同资源类型（虚拟机和云硬盘）的消费金额及比例；以环形图的形式显示指定时间段中总消费金额和不同资源类型的消费金额及比例。
        - 资源：以柱形图和列表的形式显示指定时间段中消费TOP N(默认为TOP 10，支持修改为TOP 10、TOP 20、TOP 30、全部)的资源和消费金额，支持通过资源类型过滤指定资源类型的消费TOP N(默认为TOP 10，支持修改为TOP 10、TOP 20、TOP 30、全部)的资源和消费金额。柱形图仅包括资源名称和消费金额，列表包括资源名称、资源类型、项目以及费用信息。
        - 云账号：以柱形图和列表的形式显示指定时间段中消费TOP N(默认为TOP 10，支持修改为TOP 10、TOP 20、TOP 30、全部)的云账号消费金额。
        - 云订阅：以柱形图和列表的形式显示指定时间段中消费TOP N(默认为TOP 10，支持修改为TOP 10、TOP 20、TOP 30、全部)的云订阅消费金额。
        - 区域：以列表的形式显示指定时间段中不同区域下的消费金额及比例；以环形图的形式显示指定时间段中总消费金额和不同区域下的消费金额及比例。
        - 计费模式：以列表的形式显示指定时间段中按量付费和包年包月类型计费模式消费的金额及比例；以环形图的形式显示指定时间段中总消费金额、不同计费模式消费金额及比例。
        - 域（部门）：以列表的形式显示指定时间段中不同域（部门）的消费金额及比例；以环形图的形式显示指定时间范围总消费金额和不同域（部门）的消费金额及比例。项目视图下不可见。
        - 项目：以柱形图和列表的形式显示指定时间段中TOP N(默认为TOP 10，支持修改为TOP 10、TOP 20、TOP 30、全部)的项目消费金额，支持通过域过滤，展示指定时间段中指定域下的TOP N(默认为TOP 10，支持修改为TOP 10、TOP 20、TOP 30、全部)的项目消费金额。
        - 标签：以列表的形式查看指定时间段中指定标签下的不同标签值对应的资源消费金额及比例；以环形图的形式查看指定标签下的总消费金额、不同标签值对应资源消费金额及比例。
        - 自定义：以列表的形式查看指定时间段中指定维度下的不同维度项对应的资源消费金额及比例；以环形图的形式查看指定时间段中指定维度下的总消费金额、不同维度值对应的消费金额及比例。

{{% alert title="说明" %}}
若自定义维度列没有取值，请在[维度管理](../../../../dimension)页面查看是否已配置了自定义维度。
{{% /alert %}}