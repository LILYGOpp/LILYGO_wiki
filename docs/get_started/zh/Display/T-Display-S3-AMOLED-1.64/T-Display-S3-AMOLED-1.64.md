---
title: LILYGO T-Display S3 AMOLED 1.43
show_source: false
tags: AMOLED, Display
---
<!-- **[English](README.MD) | 中文** -->

<div style="width:100%; display:flex;justify-content: center;">

![T-Display-S3-AMOLED-1.64](./assets/T-Display-S3-AMOLED-1.64-1.jpg)

</div>

<div style="padding: 1em 0 0 0; display: flex; justify-content: center">
    <a target="_blank" style="margin: 1em;color: white; font-size: 0.9em; border-radius: 0.3em; padding: 0.5em 2em; background-color:rgb(63, 201, 28)" href="https://lilygo.cc/products/t-display-s3-amoled-1-64?variant=44437365031093">官网购买</a>
    <!-- <a target="_blank" style="margin: 1em;color: white; font-size: 0.9em; border-radius: 0.3em; padding: 0.5em 2em; background-color:rgb(63, 201, 28)" href="https://www.aliexpress.com/store/911876460">速卖通</a> -->
</div>

## 版本迭代:
| Version | Update date | Update description |
| :-----: | :---------: | :---------------- |
| T-Display-S3-AMOLED-1.43_V1.0 | 2024-05-20 | 初始版本 |
| T-Display-S3-AMOLED-1.43-1.75_V1.0 | 2024-11-25 | 新增排线、新增H0175Y003AM屏幕适配 |
| T-Display-S3-AMOLED-1.43-1.75_V1.0 | 2025-01-13 | 新增DO0143FMST10屏幕适配 |

## 购买链接

| Product | SOC | FLASH | PSRAM | Link |
| :-----: | :--: | :---: | :---: | :--: |
| T-Display-S3-AMOLED-1.43-1.75 | ESP32S3R8 | 16M | 8M (Octal SPI) | [LILYGO Mall](https://lilygo.cc/products/t-display-s3-amoled-1-64?_pos=8&_sid=eacfa858d&_ss=r) |

## 描述

T-Display-S3 AMOLED 1.64 是一款基于 ESP32-S3R8 双核 LX7 微处理器的高性能物联网开发板，集成 2.4 GHz Wi-Fi 和蓝牙 5（LE）无线通信功能，支持多平台开发（Arduino、PlatformIO-IDE、ESP-IDF）。其核心亮点为 1.64 英寸 ICMA3311 AMOLED 显示屏，分辨率达 280×456 像素，采用 QSPI 总线接口并兼容 Arduino_GFX 图形库，可快速实现丰富的图形界面开发。板载 16MB Flash 和 8MB PSRAM，提供充足存储与内存资源，同时支持电池电压检测（ADC 脚位 I004）及 5V/500mA USB 充电，兼顾低功耗与移动场景需求。其他功能包括电容触摸交互、外显式流量控制、STEMMA OT/Qwilc 扩展接口及 RF SH 1.0mm + 4W 射频设计，适用于智能穿戴、嵌入式 GUI、工业控制等场景，以紧凑尺寸（28×42mm）实现高性能与多功能的平衡。


## 预览

### 实物图

<div style="width:100%; display:flex;justify-content: center;">

<img src="./assets/T-Display-S3-AMOLED-1.64-2.jpg" alt="summary" width=80%>

</div>

### 引脚图 

<img src="./assets/T-Display-S3-AMOLED-1.64-zh.jpg" alt="summary" width=100%>

## 模块

###  MCU

* 芯片：ESP32-S3-R8
* PSRAM：8M (Octal SPI) 
* FLASH：16M
* 其他说明：更多资料请访问[乐鑫官方ESP32-S3数据手册](https://www.espressif.com.cn/sites/default/files/documentation/esp32-s3_datasheet_en.pdf)

### 2. 屏幕

*   尺寸：1.64英寸AMOLED
*   分辨率：280×456px
*   屏幕类型：AMOLED
*   驱动芯片：ICMA3311
*   兼容库：Arduino_GFX
*   总线通信协议：QSPI

### 概述
<img src="./assets/T-Display-S3-AMOLED-1.64-info-zh.jpg" alt="summary" width=80%>

| 组件 | 描述 |
| :--: | :--: |
| MCU | ESP32-S3R8 Dual-core LX7 microprocessor |
| FLASH| 16MB |
| PSRAM | 8MB|
| 屏幕 | 1.64英寸 ICMA3311 AMOLED (280×456) |
| 触摸 | FT3168 触摸电容屏 |
| 总线 | QSPI |
| LoRa | 1276/868/915MHz |
| 存储 | TF 卡 |
| 充电芯片 | SY6970 |
| RTC | PCF8563 |
| 无线 | 2.4 GHz Wi-Fi & Bluetooth 5 (LE) |
| USB | 1 × USB Port and OTG (TYPE-C接口) |
| IO 接口 | 2 × 2×7 扩展IO接口 |
| 拓展接口 | 2 × STEMMA QT/Qwlic + JST-GH 电池座子 + 天线座子 |
| 按键 | 1 x RESET 按键 + 1 x BOOT 按键 |
| 尺寸 | **28×42×11mm** |

> 该芯片在未接电池5V供电时输出波形将非常不稳定，需要连接电池使用或者软件关闭电池通道，这样的话情况将会得到缓解
## 快速开始


## 快速开始

### 示例支持

| Example | PlatformIO/Arduino | ESP-IDF | Description |
| :------ | :----------------: | :-----: | :---------- |
| [FT3168](https://github.com/Xinyuan-LilyGO/T-Display-S3-AMOLED-1.43-1.75/tree/main/examples/FT3168) | ✓ | | FT3168触摸示例 |
| [Original Test](https://github.com/Xinyuan-LilyGO/T-Display-S3-AMOLED-1.43-1.75/tree/main/examples/Original_Test) | ✓ | | DO0143FAT01(DO0143FMST02)出厂测试 |
| [GFX](https://github.com/Xinyuan-LilyGO/T-Display-S3-AMOLED-1.43-1.75/tree/main/examples/GFX) | ✓ | | GFX图形库示例 |
| [GFX FT3168 Image](https://github.com/Xinyuan-LilyGO/T-Display-S3-AMOLED-1.43-1.75/tree/main/examples/GFX_FT3168_Image) | ✓ | | GFX图像显示示例 |
| [SY6970](https://github.com/Xinyuan-LilyGO/T-Display-S3-AMOLED-1.43-1.75/tree/main/examples/SY6970) | ✓ | | SY6970电源管理示例 |
| [SY6970 OTG](https://github.com/Xinyuan-LilyGO/T-Display-S3-AMOLED-1.43-1.75/tree/main/examples/SY6970_OTG) | ✓ | | SY6970 OTG功能示例 |
| [Light Sleep Wake Up](https://github.com/Xinyuan-LilyGO/T-Display-S3-AMOLED-1.43-1.75/tree/main/examples/Light_Sleep_Wake_Up) | ✓ | | 轻睡眠唤醒示例 |
| [Deep Sleep Wake Up](https://github.com/Xinyuan-LilyGO/T-Display-S3-AMOLED-1.43-1.75/tree/main/examples/Deep_Sleep_Wake_Up) | ✓ | | 深度睡眠唤醒示例 |
| [PCF8563](https://github.com/Xinyuan-LilyGO/T-Display-S3-AMOLED-1.43-1.75/tree/main/examples/PCF8563) | ✓ | | PCF8563 RTC示例 |
| [PCF8563 Scheduled INT](https://github.com/Xinyuan-LilyGO/T-Display-S3-AMOLED-1.43-1.75/tree/main/examples/PCF8563_Scheduled_INT) | ✓ | | PCF8563定时中断示例 |
| [PCF8563 Timer INT](https://github.com/Xinyuan-LilyGO/T-Display-S3-AMOLED-1.43-1.75/tree/main/examples/PCF8563_Timer_INT) | ✓ | | PCF8563计时器中断示例 |
| [Deep Sleep PCF8563 Scheduled Wake Up](https://github.com/Xinyuan-LilyGO/T-Display-S3-AMOLED-1.43-1.75/tree/main/examples/Deep_Sleep_PCF8563_Scheduled_Wake_Up) | ✓ | | PCF8563定时唤醒深度睡眠示例 |
| [Deep Sleep PCF8563 Timer Wake Up](https://github.com/Xinyuan-LilyGO/T-Display-S3-AMOLED-1.43-1.75/tree/main/examples/Deep_Sleep_PCF8563_Timer_Wake_Up) | ✓ | | PCF8563计时器唤醒深度睡眠示例 |
| [SD](https://github.com/Xinyuan-LilyGO/T-Display-S3-AMOLED-1.43-1.75/tree/main/examples/SD) | ✓ | | SD卡读写示例 |
| [Original_Test_H0175Y003AM](https://github.com/Xinyuan-LilyGO/T-Display-S3-AMOLED-1.43-1.75/tree/main/examples/Original_Test_H0175Y003AM) | ✓ | | H0175Y003AM屏幕出厂测试 |
| [Original_Test_DO0143FMST10](https://github.com/Xinyuan-LilyGO/T-Display-S3-AMOLED-1.43-1.75/tree/main/examples/Original_Test_DO0143FMST10) | ✓ | | DO0143FMST10屏幕出厂测试 |
| [Deep_Sleep_Wake_Up_H0175Y003AM](https://github.com/Xinyuan-LilyGO/T-Display-S3-AMOLED-1.43-1.75/tree/main/examples/Deep_Sleep_Wake_Up_H0175Y003AM) | ✓ | | H0175Y003AM屏幕深度睡眠唤醒 |
| [Light_Sleep_Wake_Up_H0175Y003AM](https://github.com/Xinyuan-LilyGO/T-Display-S3-AMOLED-1.43-1.75/tree/main/examples/Light_Sleep_Wake_Up_H0175Y003AM) | ✓ | | H0175Y003AM屏幕轻睡眠唤醒 |
| [lvgl_benchmark](https://github.com/Xinyuan-LilyGO/T-Display-S3-AMOLED-1.43-1.75/tree/main/examples/lvgl_benchmark) | ✓ | | LVGL性能测试 |
| [iic_scan](https://github.com/Xinyuan-LilyGO/T-Display-S3-AMOLED-1.43-1.75/tree/main/examples/iic_scan) | | ✓ | I2C设备扫描 |
| [touch](https://github.com/Xinyuan-LilyGO/T-Display-S3-AMOLED-1.43-1.75/tree/main/examples/touch) | | ✓ | 触摸功能测试 |
| [screen_touch_lvgl_9](https://github.com/Xinyuan-LilyGO/T-Display-S3-AMOLED-1.43-1.75/tree/main/examples/screen_touch_lvgl_9) | | ✓ | 屏幕触摸与LVGL结合示例 |

Github：[T-Display-S3-AMOLED-1.64](https://github.com/Xinyuan-LilyGO/T-Display-S3-AMOLED-1.64-1.75/tree/main)


* [CO5300](https://github.com/Xinyuan-LilyGO/T-Display-S3-AMOLED-1.64/blob/arduino-esp32-libs_V2.0.14/information/CO5300_V0.01.pdf)
* [FT3168](https://github.com/Xinyuan-LilyGO/T-Display-S3-AMOLED-1.64/blob/arduino-esp32-libs_V2.0.14/information/FT3168.pdf)
* [DO0164FMST02](https://github.com/Xinyuan-LilyGO/T-Display-S3-AMOLED-1.64/blob/arduino-esp32-libs_V2.0.14/information/SPEC-DO0164FMST02-20240126.pdf)
* [AN_SY6970](https://github.com/Xinyuan-LilyGO/T-Display-S3-AMOLED-1.64/blob/arduino-esp32-libs_V2.0.14/information/AN_SY6970.pdf)
* [EVB_SY6970](https://github.com/Xinyuan-LilyGO/T-Display-S3-AMOLED-1.64/blob/arduino-esp32-libs_V2.0.14/information/EVB_SY6970.pdf)

### PlatformIO
1. 安装[VisualStudioCode](https://code.visualstudio.com/Download)，根据你的系统类型选择安装。
2. 打开VisualStudioCode软件侧边栏的"扩展"（或者使用<kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>X</kbd>打开扩展），搜索"PlatformIO IDE"扩展并下载。
3. 在安装扩展的期间，你可以前往GitHub下载程序，你可以通过点击带绿色字样的"<> Code"下载主分支程序，也通过侧边栏下载"Releases"版本程序。
4. 扩展安装完成后，打开侧边栏的资源管理器（或者使用<kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>E</kbd>打开），点击"打开文件夹"，找到刚刚你下载的项目代码（整个文件夹），点击"添加"，此时项目文件就添加到你的工作区了。
5. 打开项目文件中的"platformio.ini"（添加文件夹成功后PlatformIO会自动打开对应文件夹的"platformio.ini"）,在"[platformio]"目录下取消注释选择你需要烧录的示例程序（以"default_envs = xxx"为标头），然后点击左下角的"<kbd>√</kbd>"进行编译，如果编译无误，将单片机连接电脑，点击左下角"<kbd>→</kbd>"即可进行烧录。

### Arduino
1. 安装[Arduino](https://www.arduino.cc/en/software)，根据你的系统类型选择安装。
2. 打开项目文件夹的"example"目录，选择示例项目文件夹，打开以".ino"结尾的文件即可打开Arduino IDE项目工作区。
3. 打开右上角"工具"菜单栏->选择"开发板"->"开发板管理器"，找到或者搜索"esp32"，下载作者名为"Espressif Systems"的开发板文件。接着返回"开发板"菜单栏，选择"ESP32 Arduino"开发板下的开发板类型，选择的开发板类型由"platformio.ini"文件中以[env]目录下的"board = xxx"标头为准，如果没有对应的开发板，则需要自己手动添加项目文件夹下"board"目录下的开发板。
4. 打开菜单栏"文件"->"首选项"，找到"项目文件夹位置"这一栏，将项目目录下的"libraries"文件夹里的所有库文件连带文件夹复制粘贴到这个目录下的"libraries"里边。
5. 在"工具"菜单中选择正确的设置，如下表所示。


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

6. 选择正确的端口。
7. 点击右上角"<kbd>√</kbd>"进行编译，如果编译无误，将单片机连接电脑，点击右上角"<kbd>→</kbd>"即可进行烧录。

## 项目
* [T-Display-S3-AMOLED-1.64_V1.0](https://github.com/Xinyuan-LilyGO/T-Display-S3-AMOLED-1.64/blob/arduino-esp32-libs_V2.0.14/project/T-Display-AMOLED-1.64_V1.0.pdf)


## 资料
* [PCF8563](https://github.com/Xinyuan-LilyGO/T-Display-S3-AMOLED-1.43-1.75/blob/main/information/PCF8563.pdf)
* [SH8601](https://github.com/Xinyuan-LilyGO/T-Display-S3-AMOLED-1.43-1.75/blob/main/information/SH8601Z.pdf)
* [DO0143FAT10](https://github.com/Xinyuan-LilyGO/T-Display-S3-AMOLED-1.43-1.75/blob/main/information/DO0143FMST10-DWO.pdf)
* [AN_SY6970](https://github.com/Xinyuan-LilyGO/T-Display-S3-AMOLED-1.43-1.75/blob/main/information/AN_SY6970.pdf)
* [EVB_SY6970](https://github.com/Xinyuan-LilyGO/T-Display-S3-AMOLED-1.43-1.75/blob/main/information/EVB_SY6970.pdf)

## 依赖库
* [Arduino_GFX-1.3.7](https://github.com/moononournation/Arduino_GFX)
* [Arduino_DriveBus-1.1.16]()
* [JPEGDEC-1.2.8](https://github.com/bitbank2/JPEGDEC)
* [lvgl-8.3.5](https://lvgl.io)
* [MiniTV](https://github.com/moononournation/MiniTV)
* [SensorLib](https://github.com/lewisxhe/SensorsLib)
