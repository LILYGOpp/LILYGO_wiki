---
title: LILYGO T3-S3 MVSR Board
show_source: false
tags: ESP32-S3, LoRa, Audio, Voice, Vibration, RTC
---

<div style="width:100%; display:flex;justify-content: center;">

![T3-S3_MVSRBoard](./assets/T3-S3_MVSRBoard01.jpg)

</div>

<div style="padding: 1em 0 0 0; display: flex; justify-content: center">
    <a target="_blank" style="margin: 1em;color: white; font-size: 0.9em; border-radius: 0.3em; padding: 0.5em 2em; background-color:rgb(63, 201, 28)" href="https://lilygo.cc/products/t3-s3-mvsr-board">官方购买</a>
</div>

## 版本迭代
| Version | Update date | Update description |
| :-----: | :---------: | :----------------- |
| T3-S3-MVSRBoard_V1.0                      | 2024-11-06                    |   初始版本      |
| T3-S3-MVSRBoard_V1.1                      | 2025-03-18                    |   更换麦克风型号      |

## 购买链接
| Product | SOC | FLASH | PSRAM | Link |
| :-----: | :-: | :---: | :---: | :--: |
| T3-S3 MVSR Board | ESP32-S3 | 4MB | 2MB | [LILYGO Store](https://lilygo.cc/products/t3-s3-mvsr-board) |

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

T3-S3 MVSR版本是基于T3-S3主板设计了带有震动马达，麦克风，扬声器，RTC功能扩展模块的版本，这个版本的主要功能应用是用于LoRa语音收发功能。这个扩展版本目前支持T3S3的SX1262和SX1280两个型号主板。SX1262版本使用的是FSK制式，SX1280使用的是LoRa制式。在GitHub上有对应的测试Demo供你开发参考使用。当然，这个扩展版本还可以用于一些AI语音交互功能，或者MP3播放等。

## 预览

### 实物图

<div style="width:100%; display:flex;justify-content: center;">

![T3-S3_MVSRBoard](./assets/T3-S3_MVSRBoard02.jpg)

</div>

### 引脚图

<img src="./assets/T3-S3_MVSRBoard.jpg" alt="summary" width=100%>

## 模块

### MCU
* 芯片：ESP32-S3FH4R2
* PSRAM：2MB (OPI PSRAM)
* FLASH：4MB
* 无线：2.4GHz Wi-Fi + Bluetooth 5.0

### 扬声器

* 芯片：MAX98357A
* 总线通信协议：IIS
* 其他：默认使用9dB增益
* 相关资料：
    >[MAX98357A](https://github.com/Xinyuan-LilyGO/T3-S3-MVSRBoard/blob/main/information/MAX98357AETE+T.pdf)
* 依赖库：
    >[Arduino_DriveBus-1.1.16]()

###  麦克风

 #### T3-S3-MVSRBoard_V1.0 版本
 * 芯片：MSM261S4030H0R
 * 总线通信协议：IIS
 * 相关资料：
    >[MSM261S4030H0R](https://github.com/Xinyuan-LilyGO/T3-S3-MVSRBoard/blob/main/information/MEMSensing-MSM261S4030H0R.pdf)
 * 依赖库：
     >[Arduino_DriveBus-1.1.16]()

 #### T3-S3-MVSRBoard_V1.1 版本
 * 芯片：MP34DT05-A
 * 总线通信协议：PDM
 * 相关资料：
    >[MP34DT05-A](https://github.com/Xinyuan-LilyGO/T3-S3-MVSRBoard/blob/main/information/mp34dt05-a.pdf)
 * 依赖库：
    >[Arduino_DriveBus-1.1.16]()

###  RTC

* 芯片：PCF85063ATL
* 总线通信协议：IIC
* 相关资料：
    >[PCF85063ATL](https://github.com/Xinyuan-LilyGO/T3-S3-MVSRBoard/blob/main/information/PCF85063ATL-1,118.pdf)
* 依赖库：
    >[Arduino_DriveBus-1.1.16]()

### 无线通信
* LoRa模块：SX1262 / SX1280
* 频段：868/915MHz (SX1262) / 2.4GHz (SX1280)
* 调制方式：FSK (SX1262) / LoRa (SX1280)

### 功能扩展
* 振动马达：触觉反馈
* 存储：TF卡扩展

### 概述

T3-S3-MVSRBoard 是针对 T3-S3_V1.2 主板的背板设计，具有板载扬声器和麦克风扩展功能，静态电流极低。此外，它还包含振动和 RTC（实时时钟）功能。

| 组件 | 描述 |
| :--: | :--: |
| MCU | ESP32-S3FH4R2 Dual-core LX7 |
| FLASH| 4MB |
| PSRAM | 2MB|
| 音频输入 | MP34DT05-A PDM麦克风 |
| 音频输出 | MAX98357A I2S扬声器 |
| LoRa | SX1262 (868/915MHz) / SX1280 (2.4GHz) |
| RTC | PCF85063ATL 实时时钟 (I2C) |
| 振动 | 触觉振动马达 |
| 存储 | TF 卡扩展 |
| 无线 | 2.4GHz Wi-Fi + Bluetooth 5.0 |
| USB | 1 × USB Port (TYPE-C接口) |
| GPIO接口 | 2.54mm间距 2×20 扩展IO接口 |
| 屏幕 | I2C OLED (可选) |
| 按键 | 1 x RESET 按键 + 1 x BOOT 按键 |
| 电源输入 | 5V/500mA |
| 安装孔 | 2 × 2mm 定位孔 |
| 尺寸 | 66 × 27 × 15 mm |

## 快速开始

### 示例支持


| Example | `[Platformio IDE][espressif32-v6.5.0]`<br />`[Arduino IDE][esp32_v2.0.14]` | Description | Picture |
| ------  | ------ | ------ | ------ | 
| [DMIC_ReadData](https://github.com/Xinyuan-LilyGO/T3-S3-MVSRBoard/blob/main/examples/DMIC_ReadData) |  <p align="center">![alt text][supported] | | |
| [DMIC_SD](https://github.com/Xinyuan-LilyGO/T3-S3-MVSRBoard/blob/main/examples/DMIC_SD) |  <p align="center">![alt text][supported] | | |
| [GFX](https://github.com/Xinyuan-LilyGO/T3-S3-MVSRBoard/blob/main/examples/GFX) |  <p align="center">![alt text][supported] | | |
| [IIC_Scan_2](https://github.com/Xinyuan-LilyGO/T3-S3-MVSRBoard/blob/main/examples/IIC_Scan_2) |  <p align="center">![alt text][supported] | | |
| [Original_Test](https://github.com/Xinyuan-LilyGO/T3-S3-MVSRBoard/blob/main/examples/Original_Test) |  <p align="center">![alt text][supported] | 出厂程序 | |
| [PCF85063](https://github.com/Xinyuan-LilyGO/T3-S3-MVSRBoard/blob/main/examples/PCF85063) |  <p align="center">![alt text][supported] | | |
| [PCF85063_Scheduled_INT](https://github.com/Xinyuan-LilyGO/T3-S3-MVSRBoard/blob/main/examples/PCF85063_Scheduled_INT) |  <p align="center">![alt text][supported] | | |
| [PCF85063_Timer_INT](https://github.com/Xinyuan-LilyGO/T3-S3-MVSRBoard/blob/main/examples/PCF85063_Timer_INT) |  <p align="center">![alt text][supported] | | |
| [SD](https://github.com/Xinyuan-LilyGO/T3-S3-MVSRBoard/blob/main/examples/SD) |  <p align="center">![alt text][supported] | | |
| [SD_Music](https://github.com/Xinyuan-LilyGO/T3-S3-MVSRBoard/blob/main/examples/SD_Music) |  <p align="center">![alt text][supported] | | |
| [Sleep_Wake_Up](https://github.com/Xinyuan-LilyGO/T3-S3-MVSRBoard/blob/main/examples/Sleep_Wake_Up) |  <p align="center">![alt text][supported] | | |
| [SX126x_PingPong](https://github.com/Xinyuan-LilyGO/T3-S3-MVSRBoard/blob/main/examples/SX126x_PingPong) |  <p align="center">![alt text][supported] | | |
| [SX126x_PingPong](https://github.com/Xinyuan-LilyGO/T3-S3-MVSRBoard/blob/main/examples/SX126x_PingPong_2) |  <p align="center">![alt text][supported] | | |
| [SX126x_Walkie_Talkie](https://github.com/Xinyuan-LilyGO/T3-S3-MVSRBoard/blob/main/examples/SX126x_Walkie_Talkie) |  <p align="center">![alt text][supported] | | |
| [SX127x_PingPong](https://github.com/Xinyuan-LilyGO/T3-S3-MVSRBoard/blob/main/examples/SX127x_PingPong) |  <p align="center">![alt text][supported] | | |
| [SX127x_PingPong_2](https://github.com/Xinyuan-LilyGO/T3-S3-MVSRBoard/blob/main/examples/SX127x_PingPong_2) |  <p align="center">![alt text][supported] | | |
| [SX128x_PingPong_2](https://github.com/Xinyuan-LilyGO/T3-S3-MVSRBoard/blob/main/examples/SX128x_PingPong_2) |  <p align="center">![alt text][supported] | | |
| [Vibration_Motor](https://github.com/Xinyuan-LilyGO/T3-S3-MVSRBoard/blob/main/examples/Vibration_Motor) |  <p align="center">![alt text][supported] | | |
| [Voice_Codec2_Speaker](https://github.com/Xinyuan-LilyGO/T3-S3-MVSRBoard/blob/main/examples/Voice_Codec2_Speaker) |  <p align="center">![alt text][supported] | | |
| [Voice_Speaker](https://github.com/Xinyuan-LilyGO/T3-S3-MVSRBoard/blob/main/examples/Voice_Speaker) |  <p align="center">![alt text][supported] | | |
| [Wifi_Music](https://github.com/Xinyuan-LilyGO/T3-S3-MVSRBoard/blob/main/examples/Wifi_Music) |  <p align="center">![alt text][supported] | | |

[supported]: https://img.shields.io/badge/-supported-green "example"

| Firmware | Description | Picture |
| ------  | ------  | ------ |
| [Original_Test(V1.0)](https://github.com/Xinyuan-LilyGO/T3-S3-MVSRBoard/blob/main/firmware/T3-S3-MVSRBoard_V1.0/) | 出厂程序 |  |
| [Original_Test(V1.1)](https://github.com/Xinyuan-LilyGO/T3-S3-MVSRBoard/blob/main/firmware/T3-S3-MVSRBoard_V1.1/) | 出厂程序 |  |


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
| Flash Size | 16MB (128Mb) |
| Core Debug Level | None |
| Partition Scheme | 16M Flash (3MB APP/9.9MB FATFS) |
| PSRAM | OPI PSRAM |
| Arduino Runs On | Core 1 |
| Events Run On | Core 1 |

6. 选择正确的端口。
7. 点击右上角"<kbd>√</kbd>"进行编译，如果编译无误，将单片机连接电脑，点击右上角"<kbd>→</kbd>"即可进行烧录。

### 开发平台
1. [Micropython](https://micropython.org/)
2. [Arduino IDE](https://www.arduino.cc/en/software)
3. [Platform IO](https://platformio.org/)
4. [VS Code](https://code.visualstudio.com/)

## 引脚总览

| 扬声器引脚  | ESP32S3引脚|
| :------------------: | :------------------:|
| BCLK         | IO40       |
| LRCLK         | IO41       |
| DATA         | IO39       |
| SD_MODE         | IO38       |

> #### T3-S3-MVSRBoard_V1.0 版本
> | 麦克风引脚  | ESP32S3引脚|
> | :------------------: | :------------------:|
> | BCLK         | IO47        |
> | WS         | IO15       |
> | DATA         | IO48        |
> | EN         | IO35       |

> #### T3-S3-MVSRBoard_V1.1 版本
> | 麦克风引脚  | ESP32S3引脚|
> | :------------------: | :------------------:|
> | LRCLK         | IO15       |
> | DATA         | IO48       |
> | EN         | IO35       |

| 振动马达引脚  | ESP32S3引脚|
| :------------------: | :------------------:|
| DATA         | IO46       |

| RTC引脚  | ESP32S3引脚|
| :------------------: | :------------------:|
| SDA         | IO42       |
| SCL         | IO45       |
| INT         | IO16       |

| SX126x引脚  | ESP32S3引脚|
| :------------------: | :------------------:|
| CS         | IO7       |
| RST         | IO8       |
| SCLK         | IO5       |
| MOSI         | IO6       |
| MISO         | IO3       |
| DIO1         | IO33       |
| BUSY         | IO34       |

| SX127x引脚  | ESP32S3引脚|
| :------------------: | :------------------:|
| CS         | IO7       |
| RST         | IO8       |
| SCLK         | IO5       |
| MOSI         | IO6       |
| MISO         | IO3       |
| DIO0         | IO9       |
| DIO1         | IO33       |
| DIO2         | IO34       |
| DIO3         | IO21       |
| DIO4         | IO10       |
| DIO5         | IO36       |

| SX128x引脚  | ESP32S3引脚|
| :------------------: | :------------------:|
| CS         | IO7       |
| RST         | IO8       |
| SCLK         | IO5       |
| MOSI         | IO6       |
| MISO         | IO3       |
| DIO1         | IO9       |
| BUSY         | IO36       |
| TX         | IO10       |
| RX         | IO21       |

## 相关测试

### 功耗
| Firmware | Program| Description | Picture |
| ------  | ------  | ------ | ------ | 
| [Sleep_Wake_Up](https://github.com/Xinyuan-LilyGO/T3-S3-MVSRBoard/blob/main/firmware/[T3-S3-MVSRBoard_V1.0][Sleep_Wake_Up][SX1262]_firmware_V1.0.0_202411041104.bin) | [Sleep_Wake_Up](https://github.com/Xinyuan-LilyGO/T3-S3-MVSRBoard/blob/main/examples/Sleep_Wake_Up) | 静态电流: 2.77 µA 更多信息请查看 [功耗测试日志](https://github.com/Xinyuan-LilyGO/T3-S3-MVSRBoard/blob/main/relevant_test/PowerConsumptionTestLog_[T3-S3-MVSRBoard_V1.0]_20241104.pdf) | |

### 音频性能
| 参数 | 规格 | 
| :------: | :--------: | 
| 采样率 | 8-48 kHz | 
| 位深度 | 16-bit | 
| 信噪比 | >90 dB | 

## 常见问题

* **Q. 如何调节外接天线电阻？**  
  A. 参考下图箭头指向处可更换电阻实现调整外接天线的电阻：
  <img src="./assets/T3-S3_MVSRBoard04.jpg" alt="天线电阻调节" width=60%>

* **Q. SX1262和SX1280版本有什么区别？**  
  A. SX1262支持868/915MHz频段，使用FSK调制；SX1280支持2.4GHz频段，使用LoRa调制。

* **Q. 支持哪些音频格式？**  
  A. 支持WAV、MP3等常见音频格式，可通过软件解码库扩展支持。

* **Q. LoRa语音通信距离是多少？**  
  A. 在理想条件下，语音通信距离可达数公里，具体取决于环境因素和天线配置。

* **Q. 是否支持实时语音传输？**  
  A. 支持实时语音采集、压缩和LoRa传输，可实现语音对讲功能。

## 项目
* [T3-S3-MVSRBoard_V1.0](https://github.com/Xinyuan-LilyGO/T3-S3-MVSRBoard/blob/main/project/T3-S3-MVSRBoard_V1.0.pdf)

## 资料
* [MAX98357A Datasheet](https://github.com/Xinyuan-LilyGO/T3-S3-MVSRBoard/blob/main/information/MAX98357AETE+T.pdf)
* [MP34DT05-A Datasheet](https://github.com/Xinyuan-LilyGO/T3-S3-MVSRBoard/blob/main/information/mp34dt05-a.pdf)
* [PCF85063ATL Datasheet](https://github.com/Xinyuan-LilyGO/T3-S3-MVSRBoard/blob/main/information/PCF85063ATL-1,118.pdf)
* [MSM261S4030H0R Datasheet](https://github.com/Xinyuan-LilyGO/T3-S3-MVSRBoard/blob/main/information/MEMSensing-MSM261S4030H0R.pdf)
* [ESP32-S3 Datasheet](https://www.espressif.com/sites/default/files/documentation/esp32-s3_datasheet_en.pdf)

## 依赖库
* [Arduino_DriveBus](https://github.com/Xk-w/Arduino_DriveBus)
* [Audio Libraries](https://github.com/earlephilhower/ESP8266Audio)
* [LoRa Radio Libraries](https://github.com/jgromes/RadioLib)