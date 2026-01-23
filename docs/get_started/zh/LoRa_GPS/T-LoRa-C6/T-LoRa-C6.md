---
title: LILYGO T-LoRa C6
show_source: false
tags: ESP32-C6, LoRa, Wi-Fi 6, Bluetooth 5, IoT
---

<div style="width:100%; display:flex;justify-content: center;">

![T-LoRa-C6](./assets/T-LoRa-C6-1.jpg)

</div>

<div style="padding: 1em 0 0 0; display: flex; justify-content: center">
    <a target="_blank" style="margin: 1em;color: white; font-size: 0.9em; border-radius: 0.3em; padding: 0.5em 2em; background-color:rgb(63, 201, 28)" href="https://lilygo.cc/products/t-lora-c6">官网购买</a>
</div>

## 版本迭代
| Version | Update date | Update description |
| :-----: | :---------: | :----------------- |
| T-LoRa-C6_V1.0 | 2024-03-15 | 初始硬件版本 |
| T-LoRa-C6_V1.1 | 2024-06-20 | 软件优化更新 |

## 购买链接
| Product | SOC | FLASH | PSRAM | Link |
| :-----: | :-: | :---: | :---: | :--: |
| T-LoRa C6 | ESP32-C6 | 4MB | - | [LILYGO Store](https://lilygo.cc/products/t-lora-c6) |

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

LILYGO T-LoRaC6 是一款基于 ESP32-C6-MINI-1 模组的紧凑型物联网开发板，集成 2.4GHz Wi-Fi 6、蓝牙 5（LE） 及 LoRa® 远距离通信（SX1262 模块，支持 868/915MHz 频段），兼具高性能与低功耗特性。板载 4MB Flash，支持 C/C++、MicroPython、Lua 多语言开发，适配 Arduino-IDE、VS Code 和 ESP-IDF 等主流平台，提供 BOOT/复位按键、自定义 LED 及 Type-C 供电接口，便于快速调试与部署。其小巧尺寸（33x29mm）与多协议融合能力（Wi-Fi/蓝牙/LoRa）使其适用于智能家居控制、工业传感器网络、远程环境监测等场景，5V 500mA 供电设计进一步简化了移动设备集成，是低功耗广域物联网应用的理想选择。

## 预览

### 实物图

<div style="width:100%; display:flex;justify-content: center;">

![T-LoRa-C6](./assets/T-LoRa-C6-2.jpg)

</div>

### 引脚图

<img src="./assets/T-LoRa-C6-3.jpg" alt="summary" width=100%>

## 模块

### MCU
* 芯片：ESP32-C6-MINI-1
* FLASH：4MB (Quad-SPI)
* 无线：2.4GHz Wi-Fi 6, Bluetooth 5 (LE), 802.15.4
* CPU频率：160MHz (WiFi)

### 无线通信
* LoRa：SX1262
* 频段：868MHz/915MHz
* 协议：LoRa®远距离通信

### 电源管理
* 供电：5V/500mA
* 接口：Type-C USB

### 概述
<img src="./assets/T-LoRa-C6-zh.jpg" alt="summary" width=80%>

| 组件 | 描述 |
| :--: | :--: |
| MCU | ESP32-C6-MINI-1 |
| FLASH| 4MB (Quad-SPI) |
| LoRa | SX1262 (868/915MHz) |
| 无线 | 2.4GHz Wi-Fi 6, Bluetooth 5 (LE), 802.15.4 |
| USB | 1 × USB Port (TYPE-C接口) |
| 扩展接口 | 2 × 10-PIN GPIO 接口 |
| 按键 | 1 x RESET 按键 + 1 x BOOT 按键 |
| 电源输入 | 5V/500mA |
| 安装孔 | 4 × M1.2 定位孔 |
| 尺寸 | 33 × 29 × 6 mm |

## 快速开始

### 示例支持

| Example | PlatformIO/Arduino | ESP-IDF | Description |
| :------ | :----------------: | :-----: | :---------- |
| [LoRa_Communication](https://github.com/Xinyuan-LilyGO/LilyGo-LoRa-Series/tree/main/examples/LoRa_Communication) | ✓ | | LoRa通信示例 |
| [WiFi6_Connection](https://github.com/Xinyuan-LilyGO/LilyGo-LoRa-Series/tree/main/examples/WiFi6_Connection) | ✓ | | Wi-Fi 6连接示例 |
| [Bluetooth_LE](https://github.com/Xinyuan-LilyGO/LilyGo-LoRa-Series/tree/main/examples/Bluetooth_LE) | ✓ | | 蓝牙低功耗示例 |
| [Multi_Protocol](https://github.com/Xinyuan-LilyGO/LilyGo-LoRa-Series/tree/main/examples/Multi_Protocol) | ✓ | | 多协议通信示例 |
| [Sensor_Node](https://github.com/Xinyuan-LilyGO/LilyGo-LoRa-Series/tree/main/examples/Sensor_Node) | ✓ | | 传感器节点示例 |

### PlatformIO

1.  安装 [Visual Studio Code](https://code.visualstudio.com/) 和 [Python](https://www.python.org/)
2.  在 `Visual Studio Code` 的扩展中搜索 `PlatformIO` 插件并安装
3.  安装完成后，需要重启 `Visual Studio Code`
4.  重启后，在左上角选择 `文件` -> `打开文件夹` -> 选择 `LilyGo-LoRa-Series` 目录
5.  等待第三方依赖库安装完成
6.  点击打开 `platformio.ini` 文件，在 `platformio` 栏目中
7.  在 `default_envs` 下选择您要使用的开发板名称，并取消其注释
8.  取消其中一行 `src_dir = xxxx` 的注释，确保只有一行生效。请注意示例注释，其中说明了哪些功能可用、哪些不可用。
9.  点击左下角的 (✔) 符号进行编译
10. 使用 USB-C 数据线将开发板连接至电脑（Micro-USB 接口用于模块固件升级）
11. 点击 (→) 上传固件
12. 点击 (插头符号) 监视串行输出
13. 若无法烧录或 USB 设备持续闪烁，请查看下方的**常见问题解答**

### Arduino

1.  安装 [Arduino IDE](https://www.arduino.cc/en/software)
2.  安装 [Arduino ESP32](https://docs.espressif.com/projects/arduino-esp32/en/latest/)
3.  将 `lib` 目录中的所有文件夹复制到 `Sketchbook location` 目录中。如何查找库文件位置，[请参阅此处](https://support.arduino.cc/hc/en-us/articles/4415103213714-Find-sketches-libraries-board-cores-and-other-files-on-your-computer)
    * Windows: `C:\Users\{用户名}\Documents\Arduino`
    * macOS: `/Users/{用户名}/Documents/Arduino`
    * Linux: `/home/{用户名}/Arduino`
4.  打开相应示例
    * 打开已下载的 `LilyGo-LoRa-Series` 文件夹
    * 打开 `examples` 文件夹
    * 选择示例文件并打开后缀为 `ino` 的文件
5.  在 Arduino IDE 工具菜单中选择对应开发板型号，点击下方列表中的对应选项进行选择

| T3-C6                                | Value                                                   |
| ------------------------------------ | ------------------------------------------------------- |
| Board                                | **ESP32C6 Dev Module**                                  |
| Port                                 | Your port                                               |
| USB CDC On Boot                      | Enable                                                  |
| CPU Frequency                        | 160MHZ(WiFi)                                            |
| Core Debug Level                     | None                                                    |
| USB DFU On Boot                      | Disable                                                 |
| Erase All Flash Before Sketch Upload | Disable                                                 |
| Flash Mode                           | DIO                                                     |
| Flash Size                           | **4MB(32Mb)**                                           |
| Arduino Runs On                      | Core1                                                   |
| USB Firmware MSC On Boot             | Disable                                                 |
| Partition Scheme                     | **Default 4M Flash with spiffs(1.2M APP/1.5MB SPIFFS)** |
| Upload Speed                         | 921600                                                  |
| Programmer                           | **Esptool**                                             |


6. 请根据您的开发板型号取消 `utilities.h` 文件中对应型号的注释，例如 `T3_C6`，否则编译将报错
7. 上传程序

### 开发平台
1. [Micropython](https://micropython.org/)
2. [Arduino IDE](https://www.arduino.cc/en/software)
3. [Platform IO](https://platformio.org/)
4. [VS Code](https://code.visualstudio.com/)
5. [ESP-IDF](https://github.com/espressif/esp-idf)

## 引脚总览
| Name                   | GPIO NUM | Free |
| ---------------------- | -------- | ---- |
| LoRa(**SX1276**) SCK   | 6        | ❌    |
| LoRa(**SX1276**) MISO  | 1        | ❌    |
| LoRa(**SX1276**) MOSI  | 0        | ❌    |
| LoRa(**SX1276**) RESET | 21       | ❌    |
| LoRa(**SX1276**) DIO0  | 23       | ❌    |
| LoRa(**SX1276**) BUSY  | 22       | ❌    |
| LoRa(**SX1276**) CS    | 18       | ❌    |
| On Board LED           | 7        | ❌    |

## 相关测试

## 常见问题

* **Q. ESP32-C6相比ESP32-S3有什么优势？**  
  A. ESP32-C6支持Wi-Fi 6，具有更好的能效比和网络性能，同时保持低成本。

* **Q. LoRa模块的通信距离是多少？**  
  A. 在理想条件下，SX1262 LoRa模块的通信距离可达数公里，具体取决于环境因素和天线配置。

* **Q. 为什么我的板子烧录失败？**  
  A. 请按住"BOOT"按键同时按"RST"按键，然后释放"RST"按键，进入下载模式后重新下载程序。

* **Q. 是否支持电池供电？**  
  A. 可以通过扩展接口连接外部电池，但需要额外的电源管理电路。

* **Q. Wi-Fi 6和蓝牙可以同时工作吗？**  
  A. 是的，ESP32-C6支持Wi-Fi和蓝牙共存工作模式。

## 项目
* [T-LoRa-C6_V1.0](https://github.com/Xinyuan-LilyGO/LilyGo-LoRa-Series/blob/master/schematic/T3-C6_V1.0.pdf)

## 资料
* [ESP32-C6 Datasheet](https://www.espressif.com/sites/default/files/documentation/esp32-c6_datasheet_en.pdf)
* [SX1262 Datasheet](https://www.semtech.com/products/wireless-rf/lora-core/sx1262)
* [ESP32-C6 Technical Reference](https://www.espressif.com/sites/default/files/documentation/esp32-c6_technical_reference_manual_en.pdf)

## 依赖库
* [RadioLib](https://github.com/jgromes/RadioLib)
* [LoRa](https://github.com/sandeepmistry/arduino-LoRa)
* [Arduino_GFX](https://github.com/moononournation/Arduino_GFX)
* [TFT_eSPI](https://github.com/Bodmer/TFT_eSPI)
* [U8g2](https://github.com/olikraus/u8g2)
* [AceButton](https://github.com/bxparks/AceButton)
* [Adafruit_BME280_Library](https://github.com/adafruit/Adafruit_BME280_Library)
* [Adafruit_BusIO](https://github.com/adafruit/Adafruit_BusIO)
* [Adafruit_Sensor](https://github.com/adafruit/Adafruit_Sensor)
* [ESP8266_SSD1306](https://github.com/ThingPulse/esp8266-oled-ssd1306)
* [GxEPD](https://github.com/ZinggJM/GxEPD)
* [LMIC-Arduino](https://github.com/matthijskooijman/LMIC-node)
* [TinyGPSPlus](https://github.com/mikalhart/TinyGPSPlus)
* [TinyGSM](https://github.com/vshymanskyy/TinyGSM)
* [AXP202](https://github.com/lewisxhe/AXP202X_Library)