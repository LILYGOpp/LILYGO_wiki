---
title: LILYGO T3-S3 E-paper
show_source: false
tags: ESP32-S3, E-Paper, LoRa, Low Power, IoT
---

<div style="width:100%; display:flex;justify-content: center;">

![T3-S3-E-paper](./assets/T3-S3-E-paper-1.jpg)

</div>

<div style="padding: 1em 0 0 0; display: flex; justify-content: center">
    <a target="_blank" style="margin: 1em;color: white; font-size: 0.9em; border-radius: 0.3em; padding: 0.5em 2em; background-color:rgb(63, 201, 28)" href="https://lilygo.cc/products/ts-s3-epaper">官方购买</a>
</div>

## 版本迭代
| Version | Update date | Update description |
| :-----: | :---------: | :----------------- |
| T3-S3-E-paper_V1.0 | 2023-12-16 | 初始硬件版本 |
| T3-S3-E-paper_V1.1 | 2024-03-10 | 软件优化更新 |

## 购买链接
| Product | SOC | FLASH | PSRAM | Link |
| :-----: | :-: | :---: | :---: | :--: |
| T3-S3 E-paper | ESP32-S3 | 4MB | 2MB | [LILYGO Store](https://lilygo.cc/products/ts-s3-epaper) |

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

T3-S3 E-Paper 是一款基于 ESP32S3FH4R2 微控制器的低功耗物联网开发板，集成 2.4GHz Wi-Fi 和蓝牙 5.0 双模无线通信，并支持多种 LoRa 射频模块（包括 SX1280、SX1276、SX1262），覆盖 2.4GHz 及 868/915MHz 频段，适用于远距离低功耗数据传输场景。其核心搭载 2.13 英寸电子墨水屏（DEPG0213BN），分辨率为 250×122，屏幕尺寸紧凑（48.55×23.70mm），兼具低功耗与高可视性，适合信息静态显示需求（如电子标签、环境监测）。硬件配置包括 4MB Flash 和 2MB PSRAM，支持 SD 卡扩展存储，并提供 USB 或 3.7V 锂电池双供电（带电池开关），满足移动设备长续航需求。板载 Reset/Boot 按键、多频段天线（板载+外置）及紧凑机身设计（67×29mm），使其在智慧农业、工业传感、智能仓储等领域具有广泛适用性。

## 预览

### 实物图

<div style="width:100%; display:flex;justify-content: center;">

![T3-S3-E-paper](./assets/T3-S3-E-paper-2.jpg)

</div>

### 引脚图

<img src="./assets/T3-S3-E-paper-zh.jpg" alt="summary" width=100%>

## 模块

### MCU
* 芯片：ESP32-S3FH4R2
* PSRAM：2MB (OPI PSRAM)
* FLASH：4MB
* 无线：2.4 GHz Wi-Fi & Bluetooth 5 (LE)

### 屏幕
* 尺寸：2.13英寸电子墨水屏
* 分辨率：250×122px
* 屏幕类型：E-Paper
* 驱动芯片：DEPG0213BN
* 兼容库：GxEPD
* 总线通信协议：SPI

### 无线通信
* LoRa模块：SX1280/SX1276/SX1262
* 频段：2.4GHz / 868MHz / 915MHz
* 特性：多频段支持

### 电源管理
* 供电：USB Type-C / 3.7V锂电池
* 电池开关：支持供电切换

### 概述
<img src="./assets/T3-S3-E-paper-info-zh.jpg" alt="summary" width=80%>

| 组件 | 描述 |
| :--: | :--: |
| MCU | ESP32-S3FH4R2 Dual-core LX7 |
| FLASH| 4MB |
| PSRAM | 2MB|
| 屏幕 | 2.13英寸 DEPG0213BN E-Paper (250×122) |
| LoRa | SX1280 (2.4GHz) / SX1276/SX1262 (868/915MHz) |
| 存储 | TF 卡扩展 |
| 无线 | 2.4 GHz Wi-Fi & Bluetooth 5 (LE) |
| USB | 1 × USB Port (TYPE-C接口) |
| 扩展接口 | 1 × STEMMA QT/QWIIC接口 + FPC天线接口 |
| GPIO接口 | 2.54mm间距 2×13 扩展IO接口 |
| 电池接口 | JST-GH 2MM 接口 |
| 按键 | 1 x RESET 按键 + 1 x BOOT 按键 |
| 安装孔 | 4 × 2mm 定位孔 |
| 尺寸 | 67 × 29 × 15 mm |

## 快速开始

### 示例支持

| Example | PlatformIO/Arduino | ESP-IDF | Description |
| :------ | :----------------: | :-----: | :---------- |
| [E-Paper_Display](https://github.com/Xinyuan-LilyGO/Lilygo-LoRa-Epaper-series/tree/master/examples/Display) | ✓ | | 电子墨水屏显示示例 |
| [LoRa_Communication](https://github.com/Xinyuan-LilyGO/Lilygo-LoRa-Epaper-series/tree/master/examples/RadioLibExamples) | ✓ | | LoRa通信示例 |
| [SD_Card](https://github.com/Xinyuan-LilyGO/Lilygo-LoRa-Epaper-series/tree/master/examples/SD) | ✓ | | SD卡读写示例 |


### PlatformIO
1. 安装[VisualStudioCode](https://code.visualstudio.com/Download)，根据你的系统类型选择安装。
2. 打开VisualStudioCode软件侧边栏的"扩展"（或者使用<kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>X</kbd>打开扩展），搜索"PlatformIO IDE"扩展并下载。
3. 在安装扩展的期间，你可以前往GitHub下载程序，你可以通过点击带绿色字样的"<> Code"下载主分支程序，也通过侧边栏下载"Releases"版本程序。
4. 扩展安装完成后，打开侧边栏的资源管理器（或者使用<kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>E</kbd>打开），点击"打开文件夹"，找到刚刚你下载的项目代码（整个文件夹），点击"添加"，此时项目文件就添加到你的工作区了。
5. 打开项目文件中的"platformio.ini"（添加文件夹成功后PlatformIO会自动打开对应文件夹的"platformio.ini"）,在"[platformio]"目录下取消注释选择你需要烧录的示例程序（以"default_envs = xxx"为标头），然后点击左下角的"<kbd>√</kbd>"进行编译，如果编译无误，将单片机连接电脑，点击左下角"<kbd>→</kbd>"即可进行烧录。

### Arduino
1. 安装[Arduino](https://www.arduino.cc/en/software)，根据你的系统类型选择安装。
2. 打开项目文件夹的"example"目录，选择示例项目文件夹，打开以".ino"结尾的文件即可打开Arduino IDE项目工作区。
3. 打开右上角"工具"菜单栏->选择"开发板"->"开发板管理器"，找到或者搜索"esp32"，下载作者名为"Espressif Systems"的开发板文件。接着返回"开发板"菜单栏，选择"ESP32S3 Dev Module"开发板。
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
| Flash Size | 4MB (32Mb) |
| Core Debug Level | None |
| Partition Scheme | Default 4MB with spiffs |
| PSRAM | OPI PSRAM |
| Arduino Runs On | Core 1 |
| Events Run On | Core 1 |

6. 选择正确的端口。
7. 点击右上角"<kbd>√</kbd>"进行编译，如果编译无误，将单片机连接电脑，点击右上角"<kbd>→</kbd>"即可进行烧录。

### 开发平台
1. [Micropython](https://micropython.org/)
2. [Arduino IDE](https://www.arduino.cc/en/software)
3. [Platform IO](https://platformio.org/)

## 引脚总览

~~~c

#define EDP_BUSY_PIN            48
#define EDP_RSET_PIN            47
#define EDP_DC_PIN              16
#define EDP_CS_PIN              15
#define EDP_CLK_PIN             14 // CLK
#define EDP_MOSI_PIN            11 // MOSI
#define EDP_MISO_PIN            -1

#define RADIO_SCLK_PIN          5
#define RADIO_MISO_PIN          3
#define RADIO_MOSI_PIN          6
#define RADIO_CS_PIN            7
#define RADIO_DIO1_PIN          33
#define RADIO_BUSY_PIN          34
#define RADIO_RST_PIN           8
#define RADIO_POW_PIN           35

//! SX1276/78 module only
#define RADIO_DIO0_PIN          9
#define RADIO_DIO3_PIN          21
#define RADIO_DIO4_PIN          10
#define RADIO_DIO5_PIN          36
//! end

#define SDCARD_MOSI             EDP_MOSI_PIN
#define SDCARD_SCLK             EDP_CLK_PIN
#define SDCARD_MISO             2
#define SDCARD_CS               13

#define BOARD_LED               37
#define LED_ON                  HIGH

#define BAT_ADC_PIN             1
#define BUTTON_PIN              0

~~~

## 相关测试

### E-Paper性能
| 刷新模式 | 刷新时间 | 功耗 |
| :------: | :--------: | :--: |
| 全屏刷新 | 2-3秒 | 较高 |
| 局部刷新 | 0.3-0.5秒 | 较低 |
| 睡眠模式 | 0秒 | 极低 |

## 常见问题

* **Q. 如何调节外接天线电阻？**  
  A. 参考下图调整电阻方向实现调节外接天线的电阻：
  <img src="./assets/T3-S3-E-paper-3.jpg" alt="天线电阻调节" width=60%>

* **Q. 电子墨水屏刷新率为什么比较慢？**  
  A. 这是电子墨水屏的特性，全屏刷新需要2-3秒，但刷新后无需供电即可保持显示，适合静态信息展示。

* **Q. 支持哪些LoRa模块？**  
  A. 支持SX1280（2.4GHz）、SX1276/SX1262（868/915MHz）多种LoRa模块。

* **Q. 电池续航时间多久？**  
  A. 在深度睡眠模式下，配合适当容量的锂电池可达到数周至数月的续航。

* **Q. 为什么我的板子烧录失败？**  
  A. 请按住"BOOT"按键同时按"RST"按键，然后释放"RST"按键，进入下载模式后重新下载程序。

## 项目
* [T3-S3-E-paper_V1.0](https://github.com/Xinyuan-LilyGO/Lilygo-LoRa-Epaper-series/blob/master/schematic/T3S3_E-paper%20V1.0%2023-12-16.pdf)

## 资料
* [DEPG0213BN Datasheet](https://github.com/Xinyuan-LilyGO/Lilygo-LoRa-Epaper-series/blob/master/datasheet/DEPG0213BN.pdf)
* [ESP32-S3 Datasheet](https://www.espressif.com/sites/default/files/documentation/esp32-s3_datasheet_en.pdf)
* [SX1262 Datasheet](https://www.semtech.com/products/wireless-rf/lora-core/sx1262)
* [SX1276 Datasheet](https://www.semtech.com/products/wireless-rf/lora-transceivers/sx1276)
* [SX1280 Datasheet](https://www.semtech.com/products/wireless-rf/lora-core/sx1280)

## 依赖库
* [GxEPD](https://github.com/bot1131357/GxEPD)
* [RadioLib](https://github.com/jgromes/RadioLib)
* [Adafruit-GFX-Library](https://github.com/adafruit/Adafruit-GFX-Library)
* [SensorLib](https://github.com/lewisxhe/SensorsLib)