---
title: LILYGO T-ETH-Lite
show_source: false
---
<!-- **[English](README.MD) | 中文** -->

<div style="width:100%; display:flex;justify-content: center;">

![T-Display K230](./assets/T-ETH-Lite-1.jpg)

</div>

<div style="padding: 1em 0 0 0; display: flex; justify-content: center">
    <a target="_blank" style="margin: 1em;color: white; font-size: 0.9em; border-radius: 0.3em; padding: 0.5em 2em; background-color:rgb(63, 201, 28)" href="https://lilygo.cc/products/t-eth-lite?variant=43120880746677">官网购买</a>
    <!-- <a target="_blank" style="margin: 1em;color: white; font-size: 0.9em; border-radius: 0.3em; padding: 0.5em 2em; background-color:rgb(63, 201, 28)" href="https://www.aliexpress.com/store/911876460">速卖通</a>-->
</div> 

## 简介

T-ETH-Lite 是一款多功能嵌入式开发板，搭载 ESP32 主控芯片，深度融合以太网通信、本地存储与供电扩展能力。硬件层面配备 16MB 闪存与 8MB PSRAM，为复杂应用提供充足的数据处理与缓存空间；内置 RTL8201 以太网模块，通过 ETH_POWER_PIN（IO12）、ETH_MDIO_PIN（IO18）等接口实现高效网络传输，同时预留 POE 供电拓展接口，简化设备部署的供电需求。开发板整合了丰富的 GPIO 资源（覆盖 GPIO02 至 GPIO39），支持多路 ADC 信号采集（如 ADC1_CH0、ADC2_CH4）及电容触控功能（TOUCH02-TOUCH09），并集成 TF 卡扩展槽（SD_CS 引脚为 IO05），便于本地数据存储。其设计兼顾工业级稳定性与物联网设备的灵活性，可广泛应用于智能控制、远程监测及自动化系统中，满足高可靠性、低延迟与多外设协同的场景需求。

## 外观及功能介绍
### 外观
<img src="./assets/T-ETH-Lite-2.jpg" alt="summary" width=80%>

### 引脚图 

<img src="./assets/T-ETH-Lite-pin-zh.jpg" alt="summary" width=100%>

## 模块资料
### 概述

> 注意：T-ETH-Lite 为 ESP32 版本 ,点这里切换到ESP32-S3版本[T-ETH-Lite S3](https://wiki.lilygo.cc/get_started/zh/LoRa_GPS/T-ETH-Lite/T-ETH-Lite-S3/T-ETH-Lite-S3.html)版本

<img src="./assets/T-ETH-Lite-info-zh.jpg" alt="summary" width=100%>

| 组件 | 描述 |
| --- | --- |
| 储存 | TF卡
| 拓展 | 2 x 15io拓展 
| 按键 | 1 x BOOT按键 + 1 x Reset按键 |
| LED | 3 x 指示灯(Power/link/ACT)
| 电源 | 5V/500mA |
| 接口 | 1 x USB Type-C接口 |
| 定位孔 | 4 x 2mm定位孔 |

### 相关资料链接

Github:[T-ETH-Lite](https://github.com/Xinyuan-LilyGO/LilyGO-T-ETH-Series)

- [DP9900M](https://github.com/Xinyuan-LilyGO/LilyGO-T-ETH-Series/blob/master/datasheet/ETH-POE-DP9900M-5V.pdf)
- [DP5300](https://github.com/Xinyuan-LilyGO/LilyGO-T-ETH-Series/blob/master/datasheet/ETH-PRO-POE-DP5300-12V.pdf)

#### 原理图
- [T-ETH-Lite](https://github.com/Xinyuan-LilyGO/LilyGO-T-ETH-Series/blob/master/schematic/T-ETH-Lite-ESP32.pdf)

#### 依赖库

- [Adafruit_BME280_Library](https://github.com/adafruit/Adafruit_BME280_Library)
- [Adafruit_BusIO-1.16.1](https://github.com/Xinyuan-LilyGO/T-Echo-Lite/tree/main/libraries/Adafruit_BusIO-1.16.1)
- [Adafruit_NeoPixel](https://github.com/adafruit/Adafruit_NeoPixel)
- [Adafruit_Sensor](https://github.com/adafruit/Adafruit_Sensor)
- [ESP32_USB_Stream](https://github.com/esp-arduino-libs/ESP32_USB_Stream)
- [ETHClass2](https://github.com/Xinyuan-LilyGO/LilyGO-T-ETH-Series/blob/master/lib/ETHClass2)
- [LoRa](https://github.com/sandeepmistry/arduino-LoRa)
- [ModbusMaster](https://github.com/4-20ma/ModbusMaster)
- [RadioLib](https://github.com/jgromes/RadioLib)
- [StreamDebugger](https://github.com/plerup/StreamDebugger)
- [TFT_eSPI](https://github.com/Bodmer/TFT_eSPI)
- [TinyGPSPlus](https://github.com/mikalhart/TinyGPSPlus)
- [TinyGSM](https://github.com/vshymanskyy/TinyGSM)
- [U8g2](https://github.com/olikraus/u8g2)

## 软件开发
### Arduino 设置参数


| Arduino IDE Setting                  | Value                          |
|--------------------------------------|--------------------------------|
| Board                                | ESP32 Dev Module             |
| Port                                 | Your port                      |
| CPU Frequency                        | 240MHZ(WiFi/BT)                   |
| Core Debug Level                     | Debug                           |
| Erase All Flash Before Sketch Upload | Disable                        |
| Events Run On                        | Core1                          |
| Flash Frequency                      | 80MHZ                      |
| Flash Mode                           | QIO                    |
| Flash Size                           | 16MB(128Mb)                    |
| Arduino Runs On                      | Core1                          |
| Partition Scheme                     | 16M Flash(3M APP/9.9MB FATFS)  |
| PSRAM                                | Enable                    |
| Upload Speed                         | 921600                         |

### 开发平台

1. [ESP-IDF](https://www.espressif.com/zh-hans/products/sdks/esp-idf)
2. [Arduino IDE](https://www.arduino.cc/en/software)
3. [VS Code](https://code.visualstudio.com/)
4. [Micropython](https://micropython.org/)

## 产品技术支持 


