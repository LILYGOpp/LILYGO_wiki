---
title: LILYGO T3-STM32
show_source: false
tags: STM32WL55, LoRa, OLED, Low Power, IoT
---

<div style="width:100%; display:flex;justify-content: center;">

![T3-STM32](./assets/T3-STM32-1.jpg)

</div>

<div style="padding: 1em 0 0 0; display: flex; justify-content: center">
    <a target="_blank" style="margin: 1em;color: white; font-size: 0.9em; border-radius: 0.3em; padding: 0.5em 2em; background-color:rgb(63, 201, 28)" href="https://lilygo.cc/products/t3-stm32">官网购买</a>
</div>

## 购买链接
| Product | SOC | FLASH | SRAM | Link |
| :-----: | :-: | :---: | :--: | :--: |
| T3-STM32 | STM32WL55CCU6 | 256KB | 64KB | [LILYGO Store](https://lilygo.cc/products/t3-stm32) |

## 目录
- [描述](#描述)
- [预览](#预览)
- [模块](#模块)
- [快速开始](#快速开始)
- [引脚总览](#引脚总览)
- [相关测试](#相关测试)
- [常见问题](#常见问题)
- [项目](#项目)
- [资料](#资料)
- [依赖库](#依赖库)

## 描述

LILYGO T3 STM32 是一款基于 STM32WL55CCU6 低功耗微控制器的多功能物联网开发板，集成 LoRa 远程通信模块，支持 433/868/915MHz 多频段，适配全球物联网应用场景。其硬件配置包括 256KB 闪存与 64KB SRAM，搭载 SSD1315 驱动的 OLED 显示屏（通过 I2C 接口控制）、TF 卡存储扩展（SPI 协议）以及太阳能输入接口（4.4~6V），支持户外能源采集与低功耗运行。板载丰富的 GPIO 引脚，兼容 SPI、I2C、定时器等多种外设接口，并预留 QWIIC 生态连接器，便于传感器扩展。适用于远程监测、环境传感、LoRa 网关及太阳能供电设备等物联网终端的快速开发。

## 预览

### 实物图

<div style="width:100%; display:flex;justify-content: center;">

![T3-STM32](./assets/T3-STM32-2.jpg)

</div>

### 引脚图

<img src="./assets/T3-STM32-3.jpg" alt="summary" width=100%>

## 模块

### MCU
* 芯片：STM32WL55CCU6
* 架构：32-bit Arm® Cortex®-M4 + Cortex®-M0+ 双核
* FLASH：256KB
* SRAM：64KB
* 内置无线电：LoRa®, (G)FSK, (G)MSK, BPSK

### 屏幕
* 尺寸：0.96英寸OLED屏幕
* 分辨率：128×64px
* 驱动芯片：SSD1315
* 接口：I2C

### 无线通信
* LoRa：SX1262
* 频段：433MHz/868MHz/915MHz（可选）
* 天线接口：标准SMA接口

### 电源管理
* 供电：USB Type-C
* 太阳能输入：4.4~6V
* 电池开关：支持电池供电切换

### 概述

| 组件 | 描述 |
| :--: | :--: |
| MCU | STM32WL55CCU6 Dual-core Cortex-M4+M0+ |
| FLASH| 256KB |
| SRAM | 64KB |
| 屏幕 | 0.96英寸 SSD1315 OLED (128×64) |
| LoRa | SX1262 (433/868/915MHz) |
| 内置无线电 | LoRa®, (G)FSK, (G)MSK, BPSK |
| 存储 | TF 卡扩展 (SPI) |
| USB | 1 × USB Port (TYPE-C接口) |
| 扩展接口 | 2 × QWIIC 接口 + 2.54mm间距 2×13 GPIO |
| 调试接口 | 2.54mm间距 4针SWD接口 |
| 电源接口 | 太阳能输入接口 (4.4~6V) |
| 天线接口 | LoRa天线接口 + 五针天线座子 |
| 按键 | 1 x RESET 按键 + 1 x BOOT 按键 |
| 安装孔 | 2 × 2mm 定位孔 |
| 尺寸 | 66 × 27 × 13 mm |

## 快速开始

### 开发工具准备

#### 下载工具
1. **STM32CubeProgrammer** - [ST官方下载](https://www.st.com.cn/zh/development-tools/stm32cubeprog.html)
2. **J-Link** - [SEGGER下载](https://www.segger.com/downloads/jlink/#J-LinkSoftwareAndDocumentationPack)
3. **ST-Link** - [ST官方驱动](https://www.st.com.cn/zh/development-tools/stsw-link009.html)

> **注意**: JLink、STLink、STM32CubeProgrammer 三种下载器均需要使用驱动程序才能正常使用

### 开发平台
1. [STM32CubeIDE](https://www.st.com.cn/zh/development-tools/stm32cubeide.html#get-software)
2. [VS Code](https://code.visualstudio.com/)
3. [PlatformIO](https://platformio.org/)

### 示例支持

~~~
├─1_led : Create simple projects
├─2_jlink_rtt_print : Used only to test jlink printing
├─3_sdcard : Test TF card screen
├─4_oled : Test oled screen
├─5_RF_test : This example is AT Slave and is only used for RF testing
├─6_SubGHz_TXRX : Transceiver test using Lora modulation
├─DeepSleep : Test board sleep power consumption
├─PingPong : Port CubeMX package SubGHz_Phy_PingPong program
~~~

## 相关测试

## 常见问题

* **Q. 支持哪些调试器？**  
  A. 支持ST-Link、J-Link等多种调试器，通过4针SWD接口连接。

* **Q. 太阳能输入有什么要求？**  
  A. 支持4.4~6V太阳能输入，适合户外能源采集应用。

* **Q. LoRa频段如何选择？**  
  A. 提供433MHz、868MHz、915MHz三种频段版本，请根据所在地区的法规要求选择。

## 项目
* [T3-STM32_V1.0](https://github.com/Xinyuan-LilyGO/T3-STM32/blob/master/hardware/T3_STM32%20V1.0%2024-07-30.pdf)

## 资料
* [SSD1315 Datasheet](https://github.com/Xinyuan-LilyGO/T3-STM32/blob/master/hardware/SSD1315.pdf)
* [STM32WL55 Datasheet](https://www.st.com/resource/en/datasheet/stm32wl55cc.pdf)
* [SX1262 Datasheet](https://www.semtech.com/products/wireless-rf/lora-core/sx1262)

## 依赖库
* [STM32 HAL Library](https://www.st.com/en/embedded-software/stm32cubewl.html)
* [STM32CubeMX](https://www.st.com/en/development-tools/stm32cubemx.html)
* [LoRa Radio Driver](https://github.com/stm32-hotspot/STM32WL_LoRa_Radio_Driver)