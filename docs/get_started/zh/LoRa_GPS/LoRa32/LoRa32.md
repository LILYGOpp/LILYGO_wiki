---
title: LILYGO LoRa32
show_source: false
tags: LoRa, ESP32, OLED, IoT, SX1276, SX1278
---

<div style="width:100%; display:flex;justify-content: center;">

![LoRa32](./assets/LoRa32-1.jpg)

</div>

<div style="padding: 1em 0 0 0; display: flex; justify-content: center">
    <a target="_blank" style="margin: 1em;color: white; font-size: 0.9em; border-radius: 0.3em; padding: 0.5em 2em; background-color:rgb(63, 201, 28)" href="https://lilygo.cc/products/lora3">官网购买</a>
</div>

## 版本迭代:
| Version | Update date | Update description |
| :-----: | :---------: | :---------------- |
| T3_V1.6.1 (LoRa32 V2.1.6) | 最新版本 | 多协议物联网开发板 |

## 购买链接

| Product | SOC | FLASH | LoRa | Screen | Interface | Link |
| :-----: | :--: | :---: | :---: | :--: | :--: | :--: |
| LoRa32 | ESP32 | 4M | SX1276/SX1278 | 0.96" OLED | USB Micro | [LILYGO Mall](https://lilygo.cc/products/lora3) |

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

LILYGO T3_V1.6.1（LoRa32 V2.1.6）多协议物联网开发板是一款集成 ESP32 主控（4MB Flash）、0.96英寸 SSD1306 I²C OLED 屏（128×64分辨率）及低功耗 LoRa 模块的复合型硬件平台。

开发板支持 SX1276/SX1278 双频段 LoRa 模块，提供 Wi-Fi + 蓝牙4.2 + BLE 无线协议，支持双电源供电模式（USB接口或3.7V Li-Po电池，带电源切换开关），并具备 TF卡扩展槽和硬件复位/启动按键。LoRa模块可实现 +14dBm发射功率与9.9mA超低接收电流，适用于远程环境监测、LoRaWAN终端、低功耗传感器网关等物联网场景开发。

## 预览

### 实物图

<div style="width:100%; display:flex;justify-content: center;">

![LoRa32](./assets/LoRa32-2.jpg)

</div>

### 引脚图

<img src="./assets/LoRa32-pin.jpg" alt="summary" width=100%>

### 版本对比

<img src="./assets/LoRa32-version.jpg" alt="summary" width=100%>

## 模块

### MCU

* 芯片：ESP32
* FLASH：4MB
* 架构：Xtensa LX6 双核
* 无线：Wi-Fi 802.11b/g/n + Bluetooth 4.2 + BLE

### 屏幕

* 尺寸：0.96英寸 OLED
* 分辨率：128x64px
* 屏幕类型：OLED
* 驱动芯片：SSD1306
* 总线通信协议：I2C
* 引脚：SDA=IO21, SCL=IO22

### LoRa

* 芯片：SX1276 / SX1278
* 频率：SX1276: 868/915/923MHz, SX1278: 433MHz
* 发射功率：+14dBm
* 接收电流：9.9mA

### 串口转换

* 芯片：CH9102
* 功能：USB转串口

### 存储

* 类型：MicroSD (TF) 卡
* 接口：SPI

### 电源管理

* 输入：USB Micro 或 3.7V Li-Po 电池
* 特性：电源切换开关

### 概述
<img src="./assets/LoRa32-info-zh.jpg" alt="summary" width=100%>

| 组件 | 描述 |
| :--: | :--: |
| MCU | ESP32 |
| FLASH | 4MB |
| LoRa | SX1276 (868/915/923MHz) / SX1278 (433MHz) |
| 屏幕 | 0.96英寸 SSD1306 OLED (128×64) |
| 串口芯片 | CH9102 |
| 存储 | TF卡 |
| 无线 | 2.4GHz Wi-Fi + Bluetooth 4.2 + BLE |
| USB | 1 × USB Port (Micro接口) |
| IO 接口 | 2.54mm间距 2×13 拓展IO接口 |
| 拓展接口 | 3D WiFi天线 + LoRa外接天线 + 1.25mm JST GH 电源接口 |
| 按键 | RESET + BOOT |
| 电源输入 | 5V/500mA |
| 孔位 | 2 × 2mm定位孔 |
| 尺寸 | **66×36×15mm** |

## 快速开始

### 示例支持

```bash
./examples/
├── ArduinoLoRa                              # Only support SX1276/SX1278 radio module (仅支持 SX1276/SX1278 无线电模块)
│   ├── LoRaReceiver
│   └── LoRaSender
├── Display                                  # Only supports TBeam TFT Shield
│   ├── Free_Font_Demo
│   ├── TBeam_TFT_Shield
│   ├── TFT_Char_times
│   └── UTFT_demo
├── GPS                                      # T-Beam GPS demo examples
│   ├── TinyGPS_Example
│   ├── TinyGPS_FullExample
│   ├── TinyGPS_KitchenSink
│   ├── UBlox_BasicNMEARead                  # Only support Ublox GNSS Module           
│   ├── UBlox_NMEAParsing                    # Only support Ublox GNSS Module           
│   ├── UBlox_OutputRate                     # Only support Ublox GNSS Module      
│   └── UBlox_Recovery                       # Only support Ublox GNSS Module      
├── LoRaWAN                                  # LoRaWAN examples
│   ├── LMIC_Library_OTTA
│   └── RadioLib_OTAA
├── OLED
│   ├── SH1106FontUsage
│   ├── SH1106GraphicsTest
│   ├── SH1106IconMenu
│   ├── SH1106PrintUTF8
│   ├── SSD1306SimpleDemo
│   └── SSD1306UiDemo
├── PMU                                      # T-Beam & T-Beam S3 PMU demo examples
├── RadioLibExamples                         # RadioLib examples,Support SX1276/78/62/80...
│   ├── Receive_Interrupt
│   └── Transmit_Interrupt
├── Sensor                                   # Sensor examples,only support t-beams3-supreme
│   ├── BME280_AdvancedsettingsExample
│   ├── BME280_TestExample
│   ├── BME280_UnifiedExample
│   ├── PCF8563_AlarmByUnits
│   ├── PCF8563_SimpleTime
│   ├── PCF8563_TimeLib
│   ├── PCF8563_TimeSynchronization
│   ├── QMC6310_CalibrateExample
│   ├── QMC6310_CompassExample
│   ├── QMC6310_GetDataExample
│   ├── QMC6310_GetPolarExample
│   ├── QMI8658_BlockExample
│   ├── QMI8658_GetDataExample
│   ├── QMI8658_InterruptBlockExample
│   ├── QMI8658_InterruptExample
│   ├── QMI8658_LockingMechanismExample
│   ├── QMI8658_MadgwickAHRS
│   ├── QMI8658_PedometerExample
│   ├── QMI8658_ReadFromFifoExample
│   └── QMI8658_WakeOnMotion
|── T3S3Factory                              # T3 S3 factory test examples
└── Factory                                  # T-Beam & T-Beam S3 and BPF factory test examples
```
### PlatformIO

1. Install the **CH9102 USB bridge** driver for the first time.
   * [Windows](https://www.wch-ic.com/downloads/CH343SER_ZIP.html)
   * [Mac OS](https://www.wch-ic.com/downloads/CH34XSER_MAC_ZIP.html)
2. Install [Visual Studio Code](https://code.visualstudio.com/) and [Python](https://www.python.org/)
3. 在`Visual Studio Code`的扩展中搜索“PlatformIO”插件并安装它。
4. 安装完成后，您需要重新启动`Visual Studio Code`。
5. 重新启动`Visual Studio Code`后，在`Visual Studio Code`左上角选择“文件” -> “打开文件夹” -> 选择“LilyGo-LoRa-Series”目录
6. 等待第三方依赖库的安装完成
7. 点击 `platformio.ini` 文件，然后在 `platformio` 列中
8. 在 `default_envs` 中选择您想要使用的板卡名称，并取消其注释。
9. 取消对 `src_dir = xxxx` 中的一行注释，以确保只有一行生效。请注意示例中的注释，它们表明了哪些行有效，哪些行无效。
10. 点击左下角的（✔）符号进行编译11. 将电路板连接到计算机的 USB-C 接口，Micro-USB 接口用于模块固件升级。
12. 点击（→）上传固件
13. 点击（插头符号）以监控串行输出
14. 如果无法写入，或者 USB 设备持续闪烁，请查看下面的常见问题解答。

### Arduino

1. 首次安装“CH9102 USB 适配器”驱动程序。
* [Windows 系统](https://www.wch-ic.com/downloads/CH343SER_ZIP.html)
* [Mac OS 系统](https://www.wch-ic.com/downloads/CH34XSER_MAC_ZIP.html)
2. 安装[Arduino集成开发环境](https://www.arduino.cc/en/software)
3. 安装 [Arduino ESP32](https://docs.espressif.com/projects/arduino-esp32/en/latest)
4. 将“lib”目录中的所有文件夹复制到“草图书签位置”目录中。如何找到您自己的库文件的位置？[请参阅此处](https://support.arduino.cc/hc/en-us/articles/4415103213714-如何在您的计算机上找到草图、库、板载核心和其他文件)
* Windows： `C:\Users\{用户名}\Documents\Arduino`
* macOS： `/Users/{用户名}/Documents/Arduino`
* Linux： `/home/{用户名}/Arduino`
5. 打开相应的示例
* 打开下载的“LilyGo-LoRa-Series”
* 打开“示例”
* 选择示例文件并打开以“ino”结尾的文件
6. 在 Arduino 上，我先在 DE 工具项目中选择相应的板子，然后在下方的列表中点击相应的选项以进行选择。
    | Name                                 | Value                                |
    | ------------------------------------ | ------------------------------------ |
    | Board                                | **ESP32 Dev Module**                 |
    | Port                                 | Your port                            |
    | CPU Frequency                        | 240MHZ(WiFi/BT)                      |
    | Core Debug Level                     | None                                 |
    | Erase All Flash Before Sketch Upload | Disable                              |
    | Events Run On                        | Core1                                |
    | Flash Frequency                      | 80MHZ                                |
    | Flash Mode                           | QIO                                  |
    | Flash Size                           | **4MB(32Mb)**                        |
    | JTAG Adapter                         | Disabled                             |
    | Arduino Runs On                      | Core1                                |
    | Partition Scheme                     | **Huge APP (3MB No OTA/1MB SPIFFS)** |
    | PSRAM                                | **Enable**                           |
    | Upload Speed                         | 921600                               |
    | Programmer                           | **Esptool**                          |

7. 请根据您的开发板型号取消每个示例中的 `utilities.h` 文件的注释，例如 `T3_V1_3_SX1276` 或 `T3_V1_3_SX1278`，否则编译时会报错。
8. 上传示例

### 开发平台
1. [Arduino IDE](https://www.arduino.cc/en/software)
2. [Platform IO](https://platformio.org/)
3. [ESP-IDF](https://www.espressif.com/zh-hans/products/sdks/esp-idf)
4. [VS Code](https://code.visualstudio.com/)
5. [Micropython](https://micropython.org/)

## 引脚总览

### LoRa32 1.3

| Name                   | GPIO NUM | Free |
| ---------------------- | -------- | ---- |
| OLED(**SSD1306**) SDA  | 21       | ❌    |
| OLED(**SSD1306**) SCL  | 22       | ❌    |
| LoRa(**SX1276**) SCK   | 18       | ❌    |
| LoRa(**SX1276**) MISO  | 19       | ❌    |
| LoRa(**SX1276**) MOSI  | 27       | ❌    |
| LoRa(**SX1276**) RESET | 14       | ❌    |
| LoRa(**SX1276**) DIO0  | 26       | ❌    |
| LoRa(**SX1276**) DIO1  | 33       | ❌    |
| LoRa(**SX1276**) CS    | 18       | ❌    |
| Battery ADC            | 35       | ❌    |

[文档](https://github.com/Xinyuan-LilyGO/LilyGo-LoRa-Series/blob/master/docs/en/t3_v13_sx1276/t3_v13_sx1276.md)
### LoRa32 1.6.1

| Name                   | GPIO NUM | Free |
| ---------------------- | -------- | ---- |
| OLED(**SSD1306**) SDA  | 21       | ❌    |
| OLED(**SSD1306**) SCL  | 22       | ❌    |
| SD CS                  | 13       | ❌    |
| SD MOSI                | 15       | ❌    |
| SD MISO                | 2        | ❌    |
| SD SCK                 | 14       | ❌    |
| LoRa(**SX1276**) SCK   | 5        | ❌    |
| LoRa(**SX1276**) MISO  | 19       | ❌    |
| LoRa(**SX1276**) MOSI  | 27       | ❌    |
| LoRa(**SX1276**) RESET | 23       | ❌    |
| LoRa(**SX1276**) DIO1  | 33       | ❌    |
| LoRa(**SX1276**) DIO2  | 32       | ❌    |
| LoRa(**SX1276**) CS    | 18        | ❌    |
| Battery ADC            | 35       | ❌    |
| On Board LED           | 25       | ❌    |

[文档](https://github.com/Xinyuan-LilyGO/LilyGo-LoRa-Series/blob/master/docs/en/t3_v161_sx1276/t3_v161_sx1276_hw.md)

### LoRa32 TCXO

| Name                     | GPIO NUM | Free |
| ------------------------ | -------- | ---- |
| OLED(**SSD1306**) SDA    | 21       | ❌    |
| OLED(**SSD1306**) SCL    | 22       | ❌    |
| SD CS                    | 13       | ❌    |
| SD MOSI                  | 15       | ❌    |
| SD MISO                  | 2        | ❌    |
| SD SCK                   | 14       | ❌    |
| LoRa(**SX1276**) SCK     | 5        | ❌    |
| LoRa(**SX1276**) MISO    | 19       | ❌    |
| LoRa(**SX1276**) MOSI    | 27       | ❌    |
| LoRa(**SX1276**) RESET   | 23       | ❌    |
| LoRa(**SX1276**) DIO0    | 26       | ❌    |
| LoRa(**SX1276**) DIO1    | 32       | ❌    |
| LoRa(**SX1276**) CS      | 7        | ❌    |
| LoRa(**SX1276**) TCXO EN | 12       | ❌    |
| Battery ADC              | 35       | ❌    |
| On Board LED             | 25       | ❌    |

[文档](https://github.com/Xinyuan-LilyGO/LilyGo-LoRa-Series/edit/master/docs/en/t3_tcxo_sx1276/t3_tcxo_sx1276_hw.md)

* **ESP32 芯片的 GPIO33 及其以上的 GPIO 只能用于输入功能，不能设置为输出功能。**
* **在上传代码时需要移除 SD 卡，否则代码无法下载**
* **在初始化无线电之前，TCXO EN 必须设置为高电平**


## 相关测试

*测试数据待补充*

## 常见问题

* **Q. LoRa32 和 T3-S3 有什么区别？**  
  A. LoRa32 使用 ESP32 + SX1276/78 LoRa芯片，而 T3-S3 使用 ESP32-S3 + SX1262/80 LoRa芯片，处理器和LoRa芯片都不同。

* **Q. 如何选择 SX1276 和 SX1278 版本？**  
  A. 根据所在地区的频率法规选择：SX1276 支持 868/915/923MHz，SX1278 支持 433MHz。

* **Q. OLED 屏幕不显示？**  
  A. 检查 I2C 地址配置（SSD1306 通常为 0x3C），确认 SDA=IO21、SCL=IO22 的连接。

* **Q. LoRa 通信距离不理想？**  
  A. 检查天线连接，确保在开阔环境使用，考虑使用外接天线并正确配置阻抗匹配。

* **Q. 程序烧录失败？**  
  A. 确保驱动安装正确，按住 BOOT 按键再点击 RESET 进入下载模式。

## 项目

* [LoRa32 T3_V1.3 原理图](https://github.com/Xinyuan-LilyGO/LilyGo-LoRa-Series/blob/master/schematic/T3_V1.3.pdf)
* [LoRa32 T3_V1.6.1 原理图](https://github.com/Xinyuan-LilyGO/LilyGo-LoRa-Series/blob/master/schematic/T3_V1.6.1.pdf)
* [LoRa32 T3_TCXO 原理图](https://github.com/Xinyuan-LilyGO/LilyGo-LoRa-Series/blob/master/schematic/T3_V3.0.pdf)

## 资料

* [原理图](https://github.com/Xinyuan-LilyGO/LilyGo-LoRa-Series/blob/master/schematic/T3_V1.6.1.pdf)
* [ESP32 数据手册](https://www.espressif.com.cn/sites/default/files/documentation/esp32_datasheet_cn.pdf)
* [SX1276 数据手册](https://www.semtech.com/products/wireless-rf/lora-transceivers/sx1276)
* [SX1278 数据手册](https://www.semtech.com/products/wireless-rf/lora-transceivers/sx1278)
* [SSD1306 数据手册](https://cdn-shop.adafruit.com/datasheets/SSD1306.pdf)
* [CH9102 数据手册](https://www.wch.cn/products/CH9102.html)

## 依赖库

* [arduino-LoRa](https://github.com/sandeepmistry/arduino-LoRa) - LoRa 通信库
* [RadioLib](https://github.com/jgromes/RadioLib) - 无线通信库
* [U8g2](https://github.com/olikraus/u8g2) - OLED 显示库
* [Adafruit_SSD1306](https://github.com/adafruit/Adafruit_SSD1306) - SSD1306 驱动
* [ESP8266_SSD1306](https://github.com/ThingPulse/esp8266-oled-ssd1306) - OLED 显示库
* [TFT_eSPI](https://github.com/Bodmer/TFT_eSPI) - TFT 显示库
* [SD](https://github.com/esp8266/Arduino/tree/master/libraries/SD) - SD 卡库