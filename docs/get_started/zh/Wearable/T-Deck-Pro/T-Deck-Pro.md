---
title: LILYGO T-Deck Pro
show_source: false
tags: ESP32-S3, 4G, LoRa, E-Paper, GPS
---

<div style="width:100%; display:flex;justify-content: center;">

![T-Deck Pro](./assets/T-Deck-Pro1.jpg)

</div>

<div style="padding: 1em 0 0 0; display: flex; justify-content: center">
    <a target="_blank" style="margin: 1em;color: white; font-size: 0.9em; border-radius: 0.3em; padding: 0.5em 2em; background-color:rgb(63, 201, 28)" href="https://lilygo.cc/products/t-deck-pro">官网购买</a>
</div>

## 版本迭代:

不同的硬件版本可能具有不兼容的代码。请确认您的硬件版本，并进入相应的 `git 分支`。
硬件方面的差异可以在相应的“readme”文件和“原理图”中查看。

|        name         |                                                      git branch                                                      |                                                  change                                                   |                                                      schematic                                                      |                                   firmware                                    |     state     |
| :-----------------: | :------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------: | :-----------: |
|   T-Deck-Pro V1.0   |     [HD-V1-250326](https://github.com/Xinyuan-LilyGO/T-Deck-Pro/tree/HD-V1-250326?tab=readme-ov-file#t-deck-pro)     | [readme](https://github.com/Xinyuan-LilyGO/T-Deck-Pro/tree/HD-V1-250326?tab=readme-ov-file#zero-version-) |     [SCH](https://github.com/Xinyuan-LilyGO/T-Deck-Pro/tree/HD-V1-250326/hardware/T-Deckpro%20v1.0%2024-05-16)      | [V1](https://github.com/Xinyuan-LilyGO/T-Deck-Pro/tree/HD-V1-250326/firmware) |   Available   |
|   T-Deck-Pro V1.1   |   [HD-V2-250915](https://github.com/Xinyuan-LilyGO/T-Deck-Pro/tree/HD-V2-250915?tab=readme-ov-file#t-deck-pro-v11)   | [readme](https://github.com/Xinyuan-LilyGO/T-Deck-Pro/tree/HD-V2-250915?tab=readme-ov-file#zero-version-) |     [SCH](https://github.com/Xinyuan-LilyGO/T-Deck-Pro/tree/HD-V2-250915/hardware/T-Deckpro%20v1.1%2025-09-15)      | [V2](https://github.com/Xinyuan-LilyGO/T-Deck-Pro/tree/HD-V2-250915/firmware) |   Available   |
| T-Deck-Pro MAX V1.0 | [HD-V3-250911](https://github.com/Xinyuan-LilyGO/T-Deck-Pro/tree/HD-V3-250911?tab=readme-ov-file#t-deck-pro-max-v01) | [readme](https://github.com/Xinyuan-LilyGO/T-Deck-Pro/tree/HD-V3-250911?tab=readme-ov-file#zero-version-) | [SCH](https://github.com/Xinyuan-LilyGO/T-Deck-Pro/tree/HD-V3-250911/hardware/T-Deck%20Pro%20Max%20V0.1%2025-09-11) | [V3](https://github.com/Xinyuan-LilyGO/T-Deck-Pro/tree/HD-V3-250911/firmware) | Not Available |


## 购买链接

| Product | SOC | FLASH | PSRAM | Link |
| :-----: | :--: | :---: | :---: | :--: |
| T-Deck Pro | ESP32-S3FN16R8 | 16MB | 8MB | [LILYGO Mall](https://lilygo.cc/products/t-deck-pro) |

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

LILYGO T-Deck Pro是一款基于ESP32-S3芯片的高度集成多功能开发平台，支持4G通信和LoRa远距离无线传输，配备电子墨水屏（EPD）及触摸功能，兼顾低功耗显示与交互。其硬件模块涵盖GPS定位、陀螺仪传感、麦克风语音输入、SD卡存储、机械键盘以及自学习AI IMU，适用于物联网、户外设备、智能终端等场景。可以根据需求选择想要的版本，（版本一搭载了音频模块PCM512A，版本二搭载了4G模块A7682E）提供灵活配置，可满足工业控制、环境监测、便携设备等多元化需求。

## 预览

### 实物图

<div style="width:100%; display:flex;justify-content: center;">

![T-Deck Pro](./assets/T-Deck-Pro2.jpg)

</div>

### 引脚图

<img src="./assets/T-Deck-Pro3.jpg" alt="summary" width=100%>

## 模块

### MCU

* 芯片：ESP32-S3FN16R8 Dual-core LX7 microprocessor
* PSRAM：8MB
* FLASH：16MB
* 无线：Wi-Fi 802.11 b/g/n; Bluetooth 5.0 (LE)
* 其他说明：更多资料请访问[乐鑫官方ESP32-S3数据手册](https://www.espressif.com.cn/sites/default/files/documentation/esp32-s3_datasheet_en.pdf)

### 通信模块

* 4G模块：A7682E（可选版本）
* LoRa：SX1262芯片，支持433MHz~920MHz频段
* GPS：MIA-M10Q GNSS模块
* SIM卡：支持移动通信

### 显示与输入

* 屏幕：GDEQ031T10 3.1英寸电子墨水屏
* 分辨率：320×240像素
* 触摸：CST328触摸控制器
* 键盘：TCA8418机械键盘控制器

### 传感器系统

* 陀螺仪：BHI260AP AI IMU传感器
* 光线传感器：LTR_553ALS环境光传感器
* 麦克风：支持语音输入

### 音频系统

* 音频模块：PCM512A（可选版本）
* 功能：高质量音频输出

### 电源管理

* 电池：3.7V 1500mAh锂聚合物电池
* 充电芯片：BQ25896/BQ27220
* USB供电：5V/500mA Type-C接口

### 概述

| 组件 | 描述 |
| :--: | :--: |
| MCU | ESP32-S3FN16R8 Dual-core LX7 microprocessor |
| FLASH | 16MB |
| PSRAM | 8MB |
| 4G模块 | A7682E（可选） |
| LoRa | SX1262 (433MHz~920MHz) |
| GPS | MIA-M10Q GNSS模块 |
| 屏幕 | GDEQ031T10 3.1英寸电子墨水屏 (320×240) |
| 触摸 | CST328触摸控制器 |
| 键盘 | TCA8418机械键盘 |
| 陀螺仪 | BHI260AP AI IMU传感器 |
| 音频 | PCM512A（可选） |
| 光线传感器 | LTR_553ALS环境光传感器 |
| 电池 | 3.7V 1500mAh锂聚合物电池 |
| 电池管理 | BQ25896/BQ27220充电芯片 |
| 存储 | TF卡扩展 |
| 无线 | 2.4 GHz Wi-Fi & Bluetooth 5 (LE) |
| 通信 | SIM卡支持 |
| USB | 1 × USB Port and OTG (TYPE-C接口) |
| IO接口 | 2.54mm间距 2×20双排扩展IO接口 |
| 扩展接口 | 1 × QWIIC接口 |
| 电机控制 | IO电平控制 |
| 按键 | 1 x RESET按键 + 1 x BOOT按键 |
| 电源 | 5V/500mA |
| 定位孔 | 2 × 2mm定位孔 |
| 尺寸 | **120×66×13.5mm** |

#### A7682E

Test the functionality of the A7682E using [`examples/A7682E/test_AT`](https://github.com/Xinyuan-LilyGO/T-Deck-Pro/tree/master/examples/A7682E/test_AT)

A7682E is the LTE Cat 1 module that supports wirelesscommunication modes of LTE-FDD/GSM/GPRS/EDGE.   It supports maximum 10Mbps downlink rate and 5Mbps uplink rate. A7682E supports multiple built-in network protocols.

Control Via AT Commands
~~~
Frequency Bands LTE-FDD B1/B3/B5/B7/B8/B20
GSM/GPRS/EDGE 900/1800 MHz
Supply Voltage 3.4V ~ 4.2V, Typ: 3.8V
LTE Cat 1   (Uplink up to 5Mbps, Downlink up to10Mbps)
EDGE        (Uplink/Downlink up to 236.8Kbps)
GPRS        (Uplink/Downlink up to 85.6Kbps)
Firmware update via USB/FOTA
Support language calls
Support sending and receiving SMS messages
network protocols (TCP/IP/IPV4/IPV6/Multi-PDP/FTP/FTPS/HTTP/HTTPS/DNS)
RNDIS/PPP/ECM
SSL
~~~

## 快速开始

### 示例支持

```c
├─boards  : Some information about the board for the platformio.ini configuration project;
├─docs    : Place some documents;
├─data    : Picture resources used by the program;
├─example : Some examples;
├─firmare : `factory` compiled firmware;
├─hardware: Schematic diagram of the board, chip data;
└─lib     : Libraries used in the project;
```

### PlatformIO
1. 安装 [Visual Studio Code](https://code.visualstudio.com/) 和 [Python](https://www.python.org/)，然后克隆或下载该项目；
2. 在 `VisualStudioCode` 扩展中搜索 `PlatformIO` 插件并进行安装；
3. 安装完成后，您需要重启“Visual Studio Code”。
4. 打开此项目后，PlatformIO 将自动下载所需的三方库和依赖项，首次下载过程相对较长，请耐心等待；
5. 安装完所有依赖项后，您可以打开 `platformio.ini` 配置文件，在 `example` 中取消注释以选择一个例程，然后按 `ctrl+s` 保存 `.ini` 配置文件；
6. 在 VScode 中点击 ：ballot_box_with_check： 来编译项目，然后插入 USB 并在 VScode 中选择 COM。
7. 最后，点击arrow_right： 按钮将程序下载到 Flash 中；

### Arduino
1. 安装[Arduino](https://www.arduino.cc/en/software)，根据你的系统类型选择安装。
2. 打开项目文件夹的"example"目录，选择示例项目文件夹，打开以".ino"结尾的文件即可打开Arduino IDE项目工作区。
3. 打开右上角"工具"菜单栏->选择"开发板"->"开发板管理器"，找到或者搜索"esp32"，下载作者名为"Espressif Systems"的开发板文件。接着返回"开发板"菜单栏，选择"ESP32 Arduino"开发板下的开发板类型。
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
1. [VS Code](https://code.visualstudio.com/)
2. [Arduino IDE](https://www.arduino.cc/en/software)
3. [ESP-IDF](https://www.espressif.com/en/products/sdks/esp-idf)
4. [PlatformIO](https://platformio.org/)

## 引脚总览

~~~c
// Serial
#define SerialMon   Serial      // 
#define SerialAT    Serial1     // 
#define SerialGPS   Serial2     // 

// IIC Addr
#define BOARD_I2C_ADDR_TOUCH      0x1A // Touch        --- CST328
#define BOARD_I2C_ADDR_LTR_553ALS 0x23 // Light sensor --- LTR_553ALS
#define BOARD_I2C_ADDR_GYROSCOPDE 0x28 // Gyroscope    --- BHI260AP
#define BOARD_I2C_ADDR_KEYBOARD   0x34 // Keyboard     --- TCA8418
#define BOARD_I2C_ADDR_BQ27220    0x55 // BQ27220
#define BOARD_I2C_ADDR_BQ25896    0x6B // BQ25896

// IIC
#define BOARD_I2C_SDA  13
#define BOARD_I2C_SCL  14

// Keyboard
#define BOARD_KEYBOARD_SCL BOARD_I2C_SCL
#define BOARD_KEYBOARD_SDA BOARD_I2C_SDA
#define BOARD_KEYBOARD_INT 15
#define BOARD_KEYBOARD_LED 42

// Touch
#define BOARD_TOUCH_SCL BOARD_I2C_SCL
#define BOARD_TOUCH_SDA BOARD_I2C_SDA
#define BOARD_TOUCH_INT 12
#define BOARD_TOUCH_RST 45

// LTR-553ALS-WA  beam sensor
#define BOARD_ALS_SCL BOARD_I2C_SCL
#define BOARD_ALS_SDA BOARD_I2C_SDA
#define BOARD_ALS_INT 16

// Gyroscope
#define BOARD_GYROSCOPDE_SCL BOARD_I2C_SCL
#define BOARD_GYROSCOPDE_SDA BOARD_I2C_SDA
#define BOARD_GYROSCOPDE_INT 21
#define BOARD_GYROSCOPDE_RST -1

// SPI
#define BOARD_SPI_SCK  36
#define BOARD_SPI_MOSI 33
#define BOARD_SPI_MISO 47

// Display
#define LCD_HOR_SIZE 240
#define LCD_VER_SIZE 320
#define DISP_BUF_SIZE (LCD_HOR_SIZE * LCD_VER_SIZE)

#define BOARD_EPD_SCK  BOARD_SPI_SCK
#define BOARD_EPD_MOSI BOARD_SPI_MOSI
#define BOARD_EPD_DC   35
#define BOARD_EPD_CS   34
#define BOARD_EPD_BUSY 37
#define BOARD_EPD_RST  -1

// SD card
#define BOARD_SD_CS   48
#define BOARD_SD_SCK  BOARD_SPI_SCK
#define BOARD_SD_MOSI BOARD_SPI_MOSI
#define BOARD_SD_MISO BOARD_SPI_MISO

// Lora
#define BOARD_LORA_SCK  BOARD_SPI_SCK
#define BOARD_LORA_MOSI BOARD_SPI_MOSI
#define BOARD_LORA_MISO BOARD_SPI_MISO
#define BOARD_LORA_CS   3
#define BOARD_LORA_BUSY 6
#define BOARD_LORA_RST  4
#define BOARD_LORA_INT  5

// GPS
#define BOARD_GPS_RXD 44
#define BOARD_GPS_TXD 43
#define BOARD_GPS_PPS 1

// A7682E Modem
#define BOARD_A7682E_RI     7
#define BOARD_A7682E_ITR    8
#define BOARD_A7682E_RST    9
#define BOARD_A7682E_RXD    10
#define BOARD_A7682E_TXD    11
#define BOARD_A7682E_PWRKEY 40

// PCM5102A
#define BOARD_I2S_BCLK 7
#define BOARD_I2S_DOUT 8
#define BOARD_I2S_LRC 9

// Boot pin
#define BOARD_BOOT_PIN  0

// Motor pin
#define BOARD_MOTOR_PIN 2

// EN
#define BOARD_GPS_EN  39  // enable GPS module
#define BOARD_1V8_EN  38  // enable gyroscope module
#define BOARD_6609_EN 41  // enable 7682 module
#define BOARD_LORA_EN 46  // enable LORA module

// Mic
#define BOARD_MIC_DATA        17
#define BOARD_MIC_CLOCK       18
// -------------------------------------------------
~~~

## 相关测试

### 屏幕刷新方式
刷新过程解释：（刷新时间：从屏幕有动作开始到画面稳定的整个过程）

| 刷新类型 | 视觉表现 | 使用建议 |
| :------: | :------: | :------: |
| **全屏刷新** | 伴随多次闪烁 | 基础刷新模式 |
| **快速刷新** | 闪烁一次 | 连续操作≤5次后需全屏刷新 |
| **局部刷新** | 无闪烁 | 连续操作≤5次后需全屏刷新 |

> **注意**：快速刷新和局部刷新连续操作**5次后**，必须执行一次全屏刷新，以消除残影堆积现象。

## 常见问题

* **Q. 看了以上教程我还是不会搭建编程环境怎么办？**  
  A. 如果看了以上教程还不懂如何搭建环境的可以参考[LilyGo-Document](https://github.com/Xinyuan-LilyGO/LilyGo-Document)文档说明来搭建。

* **Q. 为什么打开Arduino IDE时他会提醒我是否要升级库文件？我应该升级还是不升级？**  
  A. 选择不升级库文件，不同版本的库文件可能不会相互兼容所以不建议升级库文件。

* **Q. 电子墨水屏出现残影怎么办？**  
  A. 连续使用快速刷新或局部刷新5次后，必须执行一次全屏刷新来消除残影。

* **Q. 为什么我的板子一直烧录失败呢？**  
  A. 请按住"BOOT"按键重新下载程序。

## 项目
* [T-DeckPro V1.0](https://github.com/Xinyuan-LilyGO/T-Deck-Pro/blob/master/hardware/T-Deckpro%2024-05-16/T-DeckPro%20V1.0%2024-05-16.pdf)

## 资料
* [ESP32-S3 Datasheet](https://www.espressif.com.cn/sites/default/files/documentation/esp32-s3_datasheet_en.pdf)
* [MAX98357A Audio Amplifier](https://github.com/Xinyuan-LilyGO/T3-S3-MVSRBoard/blob/main/information/MAX98357AETE+T.pdf)
* [MSM261S4030H0R Microphone](https://github.com/Xinyuan-LilyGO/T3-S3-MVSRBoard/blob/main/information/MEMSensing-MSM261S4030H0R.pdf)
* [PCF85063ATL RTC](https://github.com/Xinyuan-LilyGO/T3-S3-MVSRBoard/blob/main/information/PCF85063ATL-1,118.pdf)
* [MP34DT05-A Microphone](https://github.com/Xinyuan-LilyGO/T3-S3-MVSRBoard/blob/main/information/mp34dt05-a.pdf)

## 依赖库
~~~
zinggjm/GxEPD2@1.5.5
jgromes/RadioLib@6.4.2
lewisxhe/SensorLib@^0.2.0
mikalhart/TinyGPSPlus @ ^1.0.3
vshymanskyy/TinyGSM@^0.12.0
lvgl/lvgl @ ~8.3.9
lewisxhe/XPowersLib @ ^0.2.4
adafruit/Adafruit TCA8418 @ ^1.0.1
adafruit/Adafruit BusIO @ ^1.14.4
olikraus/U8g2_for_Adafruit_GFX@^1.8.0
adafruit/Adafruit GFX Library@^1.11.10
esphome/ESP32-audioI2S#v3.0.12
~~~