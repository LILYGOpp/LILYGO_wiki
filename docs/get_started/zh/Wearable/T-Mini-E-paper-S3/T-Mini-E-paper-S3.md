---
title: LILYGO T-Mini E paper S3
show_source: false
tags: ESP32-S3, E-Paper, LoRa, Low Power, IoT
---

<div style="width:100%; display:flex;justify-content: center;">

![T-Mini-E-paper-S3](./assets/T-Mini-E-paper-S3-1.jpg)

</div>

<div style="padding: 1em 0 0 0; display: flex; justify-content: center">
    <a target="_blank" style="margin: 1em;color: white; font-size: 0.9em; border-radius: 0.3em; padding: 0.5em 2em; background-color:rgb(63, 201, 28)" href="https://lilygo.cc/products/t-mini-epaper-s3">官网购买</a>
</div>

## 版本迭代
| Version | Update date | Update description |
| :-----: | :---------: | :----------------- |
| T-Mini-E-paper-S3_V1.0 | 2023-11-10 | 初始硬件版本 |
| T-Mini-E-paper-S3_V1.2 | 2024-01-15 | 硬件优化更新 |

## 购买链接
| Product | SOC | FLASH | PSRAM | Link |
| :-----: | :-: | :---: | :---: | :--: |
| T-Mini E-paper S3 | ESP32-S3 | 4MB | 2MB | [LILYGO Store](https://lilygo.cc/products/t-mini-epaper-s3) |

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

LILYGO T-MINI E-Paper S3 Kit 是一款紧凑型（102x24.5x53mm）多功能开发板，搭载 ESP32-S3FN4R2 双核处理器（支持 Wi-Fi/蓝牙 5）。其核心亮点在于集成了低功耗 1.02 英寸电子墨水屏（128x80 分辨率）、支持 868/915/923MHz 频段的 SX1262 LoRa 远距离通信模块，以及 3.7V 18350 锂电池供电。板载功能还包括 TF 卡存储扩展、PCF85063ATL RTC 实时时钟、丰富的 GPIO 接口（SPI/I2C等），并支持深度睡眠。非常适用于构建远程环境监测节点、低功耗信息显示标签、便携式数据记录器等物联网应用场景。

## 预览

### 实物图

<div style="width:100%; display:flex;justify-content: center;">

![T-Mini-E-paper-S3](./assets/T-Mini-E-paper-S3-2.jpg)

</div>

### 引脚图

<img src="./assets/T-Mini-E-paper-S3-pin.jpg" alt="summary" width=100%>

## 模块

### MCU
* 芯片：ESP32-S3FN4R2
* PSRAM：2MB (QSPI PSRAM) 
* FLASH：4MB
* 无线：2.4 GHz Wi-Fi & Bluetooth 5 (LE)

### 屏幕
* 尺寸：1.02英寸电子墨水屏
* 分辨率：128×80px
* 屏幕类型：E-Paper
* 兼容库：GxEPD
* 总线通信协议：SPI

### 无线通信
* LoRa：SX1262
* 频段：868MHz/915MHz/923MHz（可选）

### 电源管理
* RTC：PCF85063ATL 实时时钟
* 电池：18350 3.7V 锂电池

### 概述
<img src="./assets/T-Mini-E-paper-S3-info.jpg" alt="summary" width=80%>

| 组件 | 描述 |
| :--: | :--: |
| MCU | ESP32-S3FN4R2 Dual-core LX7 microprocessor |
| FLASH| 4MB |
| PSRAM | 2MB|
| 屏幕 | 1.02英寸 E-Paper (128×80) |
| LoRa | SX1262 (868/915/923MHz) |
| RTC | PCF85063ATL 实时时钟 |
| 存储 | TF 卡扩展 |
| 无线 | 2.4 GHz Wi-Fi & Bluetooth 5 (LE) |
| USB | 1 × USB Port (TYPE-C接口) |
| 扩展接口 | 1 x LoRa天线接口 + 1 x QWIIC 接口 |
| 按键 | 1 x RESET 按键 + 1 x BOOT 按键 |
| 电池 | 18350 3.7V 锂电池 |
| 安装孔 | M1 × 4 |
| 尺寸 | 102 × 24.5 × 53 mm |

## 快速开始

### 示例支持


| 示例                | 描述                                                       |
| ---------------------- | ----------------------------------------------------------------- |
| Extension              | LORA 扩展模块示例、RTC 实时时钟示例                               |
| Meun_Lora_Shield       | 带 Meshtastic 功能模式的菜单示例（使用 PlatformIO 构建） |
| Meun                   | 菜单界面模式示例 example                                       |
| GxEPD_TF_Card_Example  | TF 卡功能示例example                                                   |
| Hello_World_U8G2_Fonts | U8G2 字体库使用示例 example                                                 |
| GxEPD_Example          |电子墨水屏、SD 卡及 WiFi 功能测试示例     |
| Partial_UpdateTest     | 电子墨水屏局部刷新功能测试示例                   |

### PlatformIO

1. 安装 [Visual Studio Code](https://code.visualstudio.com/) 和 [Python](https://www.python.org/)
2. 在 `Visual Studio Code` 的扩展中搜索 `PlatformIO` 插件并安装
3. 安装完成后，需要重启 `Visual Studio Code`
4. 重启后，在左上角选择 `文件` -> `打开文件夹` -> 选择 `LilyGO-Mini-Epaper-S3` 目录
5. 等待第三方依赖库安装完成
6. 点击打开 `platformio.ini` 文件，在 `platformio` 栏目中
7. 在 `default_envs` 下选择您要使用的开发板名称，并取消其注释
8. 取消其中一行 `src_dir = xxxx` 的注释，确保只有一行生效
9. 点击左下角的 (✔) 符号进行编译
10. 将开发板连接至电脑 USB 接口
11. 点击 (→) 上传固件
12. 点击 (插头符号) 监视串行输出
13. 若无法烧录或 USB 设备持续闪烁，请查看下方的**常见问题解答**

### Arduino

* 推荐使用PlatformIO，无需繁琐步骤

1. 安装 [Arduino IDE](https://www.arduino.cc/en/software)
2. 安装 [Arduino ESP32 2.0.5 或更高版本](https://docs.espressif.com/projects/arduino-esp32/en/latest/)
3. 将 [lib 文件夹](https://github.com/Xinyuan-LilyGO/LilyGO-Mini-Epaper-S3/edit/main/lib/) 中的所有目录复制到 Arduino 库文件夹（例如 C:\Users\您的用户名\Documents\Arduino\libraries）
4. 打开 Arduino IDE，点击`工具`

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
| Partition Scheme | Default 4MB with spiffs (1.5MB APP/1.5MB SPIFFS) |
| PSRAM | QSPI PSRAM |
| Arduino Runs On | Core 1 |
| Events Run On | Core 1 |

5. 选择 `LilyGO-Mini-Epaper-S3` -> 任意示例
6. 选择 `端口`（`ESP32S3-Dev-Module` 需外接 U2T 才能识别端口）
7. 点击 `上传`，等待编译和烧录完成
8. 若无法烧录或 USB 设备持续闪烁，请查看下方的**常见问题解答**

### 开发平台
1. [Micropython](https://micropython.org/)
2. [Arduino IDE](https://www.arduino.cc/en/software)
3. [Platform IO](https://platformio.org/)
4. [VS Code](https://code.visualstudio.com/)

## 引脚总览

| GPIO | LORA      | TF      | EPD(SPI) | RTC     | BUTTON       | USB   |
| ---- | --------- | ------- | -------- | ------- | ------------ | ----- |
| IO0  |           |         |          |         | Button_BOOT  |       |
| IO3  |           |         |          |         | Button_RIGHT |       |
| IO4  |           |         |          |         | Button_LEFT  |       |
| IO5  | Lora_DIO1 |         |          |         |              |       |
| IO6  | Lora_MISO |         |          |         |              |       |
| IO8  | Lora_SCK  |         |          |         |              |       |
| IO9  |           |         |          | RTC_SCL |              |       |
| IO10 |           |         | EPD_BUSY |         |              |       |
| IO11 |           |         | EPD_RST  |         |              |       |
| IO13 |           |         | EPD_CS   |         |              |       |
| IO14 |           |         | EPD_SCLK |         |              |       |
| IO15 |           |         | EPD_MOSI |         |              |       |
| IO16 | Lora_BUSY |         |          |         |              |       |
| IO17 | Lora_MOSI |         |          |         |              |       |
| IO18 |           |         |          | RTC_SDA |              |       |
| IO19 |           |         |          |         |              | USB_N |
| IO20 |           |         |          |         |              | USB_P |
| IO21 | Lora_RST  |         |          |         |              |       |
| IO38 |           | TF_MISO |          |         |              |       |
| IO39 |           | TF_MOSI |          |         |              |       |
| IO40 |           | TF_CS   |          |         |              |       |
| IO41 |           | TF_SCK  |          |         |              |       |
| IO42 |           |         | EPD_EN   |         |              |       |

## 相关测试

### 功耗
| Firmware | Program | Description | 
| :------: | :-----: | :---------- | 
| `[T-Mini-E-paper-S3_V1.2][Normal_Display]_firmware_V1.0.0.bin` | `正常显示` | 功耗: 待补充 | 
| `[T-Mini-E-paper-S3_V1.2][Deep_Sleep]_firmware_V1.0.0.bin` | `深度睡眠` | 功耗: 待补充 | 

## 常见问题

1. `Mini-E-Paper-S3` 使用 USB 作为 JTAG 上传端口。如需通过 USB 打印串口信息，需要开启 USB_CDC_ON_BOOT 配置。
2. 如果上传程序时无法找到端口，或者 USB 已被用于其他功能导致端口不显示，请手动进入上传模式:
    1. 通过 USB 数据线连接开发板
    2. 长按 BOOT 键不松开，同时按下 RST 键
    3. 松开 RST 键
    4. 松开 BOOT 键
    5. 上传程序

3. 若上述方法无效，请烧录[固件文件](https://github.com/Xinyuan-LilyGO/LilyGO-Mini-Epaper-S3/blob/main/firmware/README.MD) 以检测硬件是否正常

## 项目
* [T-Mini-E-paper-S3_V1.2](https://github.com/Xinyuan-LilyGO/LilyGO-Mini-Epaper-S3/blob/main/schematic/Mini-Epaper-S3-V1.2.pdf)
* [LoRa Shield](https://github.com/Xinyuan-LilyGO/LilyGO-Mini-Epaper-S3/blob/main/schematic/Mini%20e-paper-LoRa%20Shield_Schematic.pdf)

## 资料
* [ESP32-S3 Datasheet](https://www.espressif.com/sites/default/files/documentation/esp32-s3_datasheet_en.pdf)
* [SX1262 Datasheet](https://www.semtech.com/products/wireless-rf/lora-core/sx1262)
* [PCF85063ATL Datasheet](https://www.nxp.com/products/analog-and-mixed-signal/real-time-clocks/rtcs-with-ic-bus/tiny-real-time-clock-calendar-with-alarm-function-and-ic-bus:PCF85063A)

## 依赖库
* [GxEPD](https://github.com/bot1131357/GxEPD)
* [RadioLib](https://github.com/jgromes/RadioLib)
* [Adafruit_GFX_Library](https://github.com/adafruit/Adafruit-GFX-Library)
* [PCF8563_library](https://github.com/lewisxhe/PCF8563_Library)
* [AceButton](https://github.com/bxparks/AceButton)
* [adafruit_NeoPixel](https://github.com/adafruit/Adafruit_NeoPixel)
* [arduino_json](https://github.com/bblanchon/ArduinoJson)
* [BMA423](https://github.com/BoschSensortec/BMA423-Sensor-API)
* [Mecha_QMC5883L-master](https://github.com/bot1131357/Mecha_QMC5883L-master)
* [QMC5883LCompass](https://github.com/mprograms/QMC5883LCompass)