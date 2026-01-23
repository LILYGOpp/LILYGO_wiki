---
title: LILYGO T-Display S3 Pro LR1121
show_source: false
tags: ESP32-S3, AMOLED, LoRa, LR1121
---

<div style="width:100%; display:flex;justify-content: center;">

![T-Display-S3-Pro-LR1121](./assets/T-Display-S3-Pro-LR1121-1.jpg)

</div>

<div style="padding: 1em 0 0 0; display: flex; justify-content: center">
    <a target="_blank" style="margin: 1em;color: white; font-size: 0.9em; border-radius: 0.3em; padding: 0.5em 2em; background-color:rgb(103, 175, 8)" href="https://lilygo.cc/">官网购买</a>
</div>

## 版本迭代:
| Version | Update date | Update description |
| :-----: | :---------: | :---------------- |
| T-Display-S3-Pro-LR1121_V1.0 | 2024-01-01 | 初始版本 |

## 购买链接

| Product | SOC | FLASH | PSRAM | Link |
| :-----: | :--: | :---: | :---: | :--: |
| T-Display S3 Pro LR1121 | ESP32-S3 | 16M | 8M (Octal SPI) | [LILYGO Mall](https://lilygo.cc/) |

## 目录
- [描述](#描述)
- [预览](#预览)
- [模块](#模块)
- [快速开始](#快速开始)
- [相关测试](#相关测试)
- [常见问题](#常见问题)
- [项目](#项目)
- [资料](#资料)
- [依赖库](#依赖库)

## 描述

T-Display S3 Pro LR1121 是一款基于 ESP32-S3 微控制器的高集成度开发板，主打多功能与高性能。其核心搭载 16MB Flash 和 8MB PSRAM，支持复杂应用运行。配备 1.91 英寸 AMOLED 显示屏，并支持触摸功能。内置 PMU（电源管理单元）和 RTC（实时时钟），结合 VBUS 电源管理，优化了低功耗设计。扩展方面，提供 STEMMA QT/Qwlic 双接口，兼容快速传感器连接；支持 SD 卡存储，并预留丰富 GPIO、ADC 通道及 UART 通信接口，便于外设扩展。此外，板载 LoRa (LR1121) 模块，支持多频段通信。该产品适用于智能穿戴、物联网终端等需要显示交互与多传感器集成的场景。

## 预览

### 实物图

<div style="width:100%; display:flex;justify-content: center;">

![T-Display-S3-Pro-LR1121](./assets/T-Display-S3-Pro-LR1121-2.jpg)

</div>

### 引脚图

<img src="./assets/T-Display-S3-Pro-LR1121-3.jpg" alt="summary" width=100%>

## 模块

### 1. MCU

*   芯片：ESP32-S3-R8
*   PSRAM：8M (Octal SPI)
*   FLASH：16M
*   其他说明：更多资料请访问[乐鑫官方ESP32-S3数据手册](https://www.espressif.com.cn/sites/default/files/documentation/esp32-s3_datasheet_en.pdf)

### 2. 屏幕

*   尺寸：1.91英寸AMOLED
*   分辨率：待补充
*   屏幕类型：IPS AMOLED
*   驱动芯片：RM67162
*   兼容库：TFT_eSPI, Arduino_GFX
*   总线通信协议：SPI/QSPI

### 概述

| 组件 | 描述 |
| :--: | :--: |
| MCU | ESP32-S3R8 Dual-core LX7 microprocessor |
| FLASH| 16MB |
| PSRAM | 8MB|
| 屏幕 | 1.91 英寸 RM67162 IPS AMOLED |
| 触摸 | 电容触摸屏 |
| LoRa | LR1121 (1276/868/915MHz) |
| 存储 | TF 卡 |
| RTC | PCF85063ATL/1 |
| 电源管理 | AXPM65611 + BQ25896 |
| 无线 | 2.4 GHz Wi-Fi & Bluetooth 5 (LE) |
| USB | 1 × USB Port and OTG (TYPE-C接口) |
| IO 接口 | 2×13 双排扩展接口 |
| 拓展接口 | FPC天线 + TF卡 + STEMMA QT/QWIIC + JST-GH 1.25MM |
| 按键 | 1 x RESET 按键 + 1 x BOOT 按键 |
| 孔位 | 4 × 2mm定位孔 |
| 尺寸 | **60×32×12mm** |

## 快速开始

### 示例支持

| Example | PlatformIO/Arduino | ESP-IDF | Description |
| :------ | :----------------: | :-----: | :---------- |
| [Factory](https://github.com/Xinyuan-LilyGO/LilyGo-AMOLED-Series/blob/master/examples/Factory/Factory.ino) | ✓ | | 出厂示例 |

| *（更多示例请参考GitHub仓库）* | | | |

### PlatformIO
1.  安装[VisualStudioCode](https://code.visualstudio.com/Download)，根据你的系统类型选择安装。
2.  打开VisualStudioCode软件侧边栏的"扩展"（或者使用<kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>X</kbd>打开扩展），搜索"PlatformIO IDE"扩展并下载。
3.  在安装扩展的期间，你可以前往GitHub下载程序，你可以通过点击带绿色字样的"<> Code"下载主分支程序，也通过侧边栏下载"Releases"版本程序。
4.  扩展安装完成后，打开侧边栏的资源管理器（或者使用<kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>E</kbd>打开），点击"打开文件夹"，找到刚刚你下载的项目代码（整个文件夹），点击"添加"，此时项目文件就添加到你的工作区了。
5.  打开项目文件中的"platformio.ini"（添加文件夹成功后PlatformIO会自动打开对应文件夹的"platformio.ini"）,在"[platformio]"目录下取消注释选择你需要烧录的示例程序（以"default_envs = xxx"为标头），然后点击左下角的"<kbd>√</kbd>"进行编译，如果编译无误，将单片机连接电脑，点击左下角"<kbd>→</kbd>"即可进行烧录。

### Arduino
1.  安装[Arduino](https://www.arduino.cc/en/software)，根据你的系统类型选择安装。
2.  打开项目文件夹的"example"目录，选择示例项目文件夹，打开以".ino"结尾的文件即可打开Arduino IDE项目工作区。
3.  打开右上角"工具"菜单栏->选择"开发板"->"开发板管理器"，找到或者搜索"esp32"，下载作者名为"Espressif Systems"的开发板文件。接着返回"开发板"菜单栏，选择"ESP32 Arduino"开发板下的开发板类型，选择的开发板类型由"platformio.ini"文件中以[env]目录下的"board = xxx"标头为准，如果没有对应的开发板，则需要自己手动添加项目文件夹下"board"目录下的开发板。
4.  打开菜单栏"文件"->"首选项"，找到"项目文件夹位置"这一栏，将项目目录下的"libraries"文件夹里的所有库文件连带文件夹复制粘贴到这个目录下的"libraries"里边。
5.  在"工具"菜单中选择正确的设置，如下表所示。

#### ESP32-S3
| Setting | Value |
| :-----: | :---: |
| Board | ESP32S3 Dev Module |
| Upload Speed | 921600 |
| USB Mode | Hardware CDC and JTAG |
| USB CDC On Boot | Enabled |
| USB Firmware MSC On Boot | Disabled |
| USB DFU On Boot | Disabled |
| CPU Frequency | 240MHz (WiFi) |
| Flash Mode | QIO 80MHz |
| Flash Size | 16MB (128Mb) |
| Core Debug Level | None |
| Partition Scheme | 16M Flash (3MB APP/9.9MB FATFS) |
| PSRAM | OPI PSRAM |
| Arduino Runs On | Core 1 |
| Events Run On | Core 1 |

6.  选择正确的端口。
7.  点击右上角"<kbd>√</kbd>"进行编译，如果编译无误，将单片机连接电脑，点击右上角"<kbd>→</kbd>"即可进行烧录。

### 开发平台
1.  [Micropython](https://micropython.org/)
2.  [Arduino IDE](https://www.arduino.cc/en/software)
3.  [Platform IO](https://platformio.org/)


## 相关测试

*（功耗及其他测试数据待补充）*

## 常见问题

*   **Q. 看了以上教程我还是不会搭建编程环境怎么办？**
    A. 如果看了以上教程还不懂如何搭建环境的可以参考[LilyGo-Document](https://github.com/Xinyuan-LilyGO/LilyGo-Document)文档说明来搭建。

*   **Q. 为什么我的板子一直烧录失败呢？**
    A. 请按住"BOOT"按键，再按一下"RST"按键，然后点击烧录，进入下载模式。

*   **Q. LR1121 LoRa模块支持哪些频段？**
    A. LR1121模块支持1276MHz、868MHz和915MHz等多个频段，请根据您所在地区的法规选择合适的频段。

*   **Q. 如何连接外部传感器？**
    A. 可以通过板载的STEMMA QT/QWIIC接口快速连接兼容的传感器模块，也可以通过2×13的双排扩展接口连接其他外设。

## 项目
*   [T-Display S3 AMOLED Plus](https://github.com/Xinyuan-LilyGO/LilyGo-AMOLED-Series/blob/master/schematic/T-Display-S3-AMOLED-Plus.pdf)

## 资料
*   [ESP32-S3 Datasheet](https://www.espressif.com.cn/sites/default/files/documentation/esp32-s3_datasheet_en.pdf)
*   [LR1121 Datasheet](https://www.semtech.com/products/wireless-rf/lora-connect/lr1121)
*   *（更多资料请参考GitHub仓库）*

## 依赖库
*   [lvgl 8.3.9](https://github.com/lvgl/lvgl)
*   [AceButton](https://github.com/bxparks/AceButton)
*   [TFT_eSPI](https://github.com/Bodmer/TFT_eSPI)
*   [Arduino_GFX](https://github.com/moononournation/Arduino_GFX)
*   [XPowersLib](https://github.com/lewisxhe/XPowersLib)
*   [SensorLib](https://github.com/lewisxhe/SensorsLib)
*   [TinyGPSPlus](https://github.com/mikalhart/TinyGPSPlus)
*   [Arduino_NeoPixel](https://github.com/adafruit/Adafruit_NeoPixel)
*   [OneWire](https://github.com/PaulStoffregen/OneWire)
*   [SparkFun MAX3010x Pulse and Proximity Sensor Library](https://github.com/sparkfun/SparkFun_MAX3010x_Pulse_and_Proximity_Sensor_Library)