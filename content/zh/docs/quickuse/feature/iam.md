---
title: "认证与安全"
weight: 4
description: 介绍安全检查、安全告警、操作日志的内容。
---

## 安全检查

平台会根据系统内置规则扫描下图中的安全性较低的资源，用户可以按照费用优化处理资源，提升平台资源的安全性。详情请参考[优化建议-安全检查](../../../web_ui/suggest/securitysuggest)。

## 安全告警

安全告警即实时监测系统中的安全告警事件，如异常登录等，当发现安全问题后，将会及时通知管理员用户进行处理等。目前仅支持异常登录的安全告警事件，当用户连续登录失败后被锁定将会发送安全告警记录发送给锁定用户以及用户所在域的域管理员和系统管理员。详情请参考[认证与安全-安全告警](../../../web_ui/iam/securityalert/securityalert).

## 查看操作日志

操作日志用于显示系统中的所有操作的日志信息，便于审计用户操作以及出现异常操作后快速定位问题原因等。
详情请参考[系统配置-操作日志](../../../web_ui/systemconfig/log/log/).