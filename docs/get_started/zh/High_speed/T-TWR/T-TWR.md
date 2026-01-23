---
title: LILYGO T-TWR
show_source: false
tags: ESP32-S3, GNSS, Walkie-Talkie, OLED
---

<div style="width:100%; display:flex;justify-content: center;">

![T-TWR](./assets/T-TWR-1.jpg)

</div>

> 注意：T-TWR 有UHF以及VHF两种频段的接收机版本,主要的区别在于对讲机的频段不一样,UHF对讲机频段为400-480MHz,VHF对讲机频段为134-174MHz。

<div style="padding: 1em 0 0 0; display: flex; justify-content: center">
    <a target="_blank" style="margin: 1em;color: white; font-size: 0.9em; border-radius: 0.3em; padding: 0.5em 2em; background-color:rgb(103, 175, 8)" href="https://lilygo.cc/products/t-twr-rev2-1?variant=44505308528821">官网购买</a>
</div>

## 版本迭代:
| Version | Update date | Update description |
| :-----: | :---------: | :---------------- |
| T-TWR REV2.1 |  | 当前版本 |

## 购买链接

| Product | SOC | FLASH | PSRAM | Link |
| :-----: | :--: | :---: | :---: | :--: |
| T-TWR REV2.1 | ESP32-S3-WROOM-1-N16R8 | 16MB | 8MB (Octal SPI) | [LILYGO Mall](https://lilygo.cc/products/t-twr-rev2-1?variant=44505308528821) |

## 目录
- [描述](#描述)
- [预览](#预览)
- [模块](#模块)
- [快速开始](#快速开始)
- [常见问题](#常见问题)
- [项目](#项目)
- [资料](#资料)
- [依赖库](#依赖库)

## 描述

LILYGO T-TWR REV2.1 是一款基于 ESP32-S3-WROOM-1-N16R8 的高集成开发板，搭载 16MB Flash 和 8MB PSRAM，支持 Wi-Fi/蓝牙 5（LE）双模通信，内置 PMU AXP2102 电源管理单元，支持 USB/21700/18650 电池多种供电模式，适用于便携式设备开发。

**核心特性**
- 多系统定位：L76K GNSS模块支持GPS、BDS、GLONASS多系统定位及AGNSS辅助
- 对讲机功能：SA868 UHF/VHF对讲机模块，可选134-174MHz或350-480MHz频段
- 高清显示：1.3英寸SH1106 OLED屏（128×64分辨率，I²C接口）
- 电源管理：AXP2102电源管理芯片，支持多种供电模式
- 丰富接口：TF卡扩展、麦克风输入、环境传感器接口、RGB状态指示灯
- 便携设计：支持21700/18650电池，适合户外应用

## 预览

### 实物图

<div style="width:100%; display:flex;justify-content: center;">

![T-TWR](./assets/T-TWR-2.jpg)

</div>

### 引脚图

<img src="./assets/T-TWR-3.jpg" alt="summary" width=100%>

## 模块

###  MCU

* 芯片：ESP32-S3-WROOM-1-N16R8
* PSRAM：8M (Octal SPI)
* FLASH：16M
* 无线：Wi-Fi 802.11 b/g/n; Bluetooth 5.0 (LE)
* 其他说明：更多资料请访问[乐鑫官方ESP32-S3数据手册](https://www.espressif.com.cn/sites/default/files/documentation/esp32-s3_datasheet_en.pdf)

###  显示模块

* 屏幕：1.3英寸SH1106 OLED
* 分辨率：128×64像素
* 接口：I²C (SDA-1008/SCL-1009)
* 兼容库：U8g2

###  定位模块

* 芯片：L76K GNSS
* 支持系统：GPS、BDS、GLONASS
* 辅助定位：AGNSS
* 兼容库：TinyGPSPlus

###  通信模块

* 芯片：SA868
* 频段选项：
  - UHF版本：400-480MHz
  - VHF版本：134-174MHz
* 功能：对讲机通信

### 电源管理

* 芯片：AXP2102 PMU
* 供电方式：USB、21700电池、18650电池
* 电池类型：支持21700/18650电池 + 弹簧电池座

###  音频模块

* 芯片：RS2257XC6
* 功能：音频采集和处理

### 概述
<img src="./assets/T-TWR-4.jpg" alt="summary" width=100%>

| 组件 | 描述 |
| :--: | :--: |
| MCU | ESP32-S3-WROOM-1-N16R8 |
| FLASH | 16MB |
| PSRAM | 8MB (Octal SPI) |
| 屏幕 | 1.3英寸 SH1106 OLED (128×64) |
| 对讲机 | SA868 UHF/VHF模块 |
| 音频 | RS2257XC6 音频采集模块 |
| GNSS | L76K GNSS模块 (GPS/BDS/GLONASS) |
| 电源管理 | AXP2102 PMU |
| 电池 | 21700电池 / 18650电池 |
| LED | WS2812 RGB状态指示灯 |
| 编码器 | 支持旋转编码器控制 |
| 存储 | TF卡扩展接口 |
| 无线 | 2.4GHz Wi-Fi + Bluetooth 5.0 (LE) |
| USB | 1 × USB Port and OTG (TYPE-C接口) |
| IO接口 | 2 × 15pin扩展IO接口 |
| 扩展接口 | 2 × 1mm 4-pin STEMMA QT/QWIIC接口 + 天线接口 |
| 按键 | 1 x RESET + 1 x BOOT + 1 x PWR + 1 x PTT |
| 电源 | 5V/500mA |
| 定位孔 | 2 × 2mm定位孔 |
| 尺寸 | 产品：**126×39×29mm** <br>天线：**200mm** |

## 快速开始

### 示例支持

```txt
examples/
├── Factory                         # TWR Factory Application
├── GPS_Basic_Example               # GPS example
├── GPS_Full_Example                # GPS example
├── Pixels_RGBWstrandtest           # Pixels example
├── Pixels_Strandtest_Example       # Pixels example
├── SA868_ATDebug_Example           # Radio  AT Debug example
├── SA868_ESPSendAudio_Example      # Radio frequency sends ESP32 signal
├── SD_Test_Example                 # SD Test Example
├── SD_Time_Example                 # SD Time Example
├── WAV_Player                      # WAV Player
├── TFT_ArcFill_Example             # Screen extension example
├── TFT_Keypad_240x320_Example      # Screen extension example
├── U8g2_FontUsage_Example          # Onboard OLED U8G2 example
├── U8g2_GraphicsTest_Example       # Onboard OLED U8G2 example
└── U8g2_UpdateArea_Example         # Onboard OLED U8G2 example
```

### PlatformIO
1. 安装[VisualStudioCode](https://code.visualstudio.com/Download)，根据你的系统类型选择安装。
2. 打开VisualStudioCode软件侧边栏的"扩展"（或者使用<kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>X</kbd>打开扩展），搜索"PlatformIO IDE"扩展并下载。
3. 在安装扩展的期间，你可以前往GitHub下载程序，你可以通过点击带绿色字样的"<> Code"下载主分支程序，也通过侧边栏下载"Releases"版本程序。
4. 扩展安装完成后，打开侧边栏的资源管理器（或者使用<kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>E</kbd>打开），点击"打开文件夹"，找到刚刚你下载的项目代码（整个文件夹），点击"添加"，此时项目文件就添加到你的工作区了。
5. 打开项目文件中的"platformio.ini"（添加文件夹成功后PlatformIO会自动打开对应文件夹的"platformio.ini"）,在"[platformio]"目录下取消注释选择你需要烧录的示例程序（以"default_envs = xxx"为标头），然后点击左下角的"<kbd>√</kbd>"进行编译，如果编译无误，将单片机连接电脑，点击左下角"<kbd>→</kbd>"即可进行烧录。

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
3. [Platform IO](https://platformio.org/)


## 常见问题

* ⚠⚠⚠ **注意事项（特殊事项）**：
    1. **胶带式（射频）天线**必须连接好。如果不进行连接，射频模块可能会受损，而功率管理单元将自动关闭电源输出。
    2. 单独的 USB 电源可能无法满足供电需求，请连接电池使用。**Rev2.1 版本必须使用电池为射频单元供电，不能仅通过 USB 单独工作（因为射频电流非常大，使用电池供电可以最大程度地降低噪音）**
    3. 请注意，在进行高功率传输的调整时，请确保电池有足够的放电容量，否则由于电流不足，PMU 将会自动关闭。
    4. TWR Rev2.0 有两个版本，一个带有 NiceRF AT 固件，另一个是社区版，没有任何功能。对于社区版，请跳转至 [OpenRTX](https://github.com/OpenRTX/OpenRTX) 来烧录 [OpenRTX SA8x8 固件](https://github.com/OpenRTX/sa8x8-fw) 以供使用。对于初学者，建议使用 NiceRF 固件。
    5. TWR Rev2.1 不受版本限制。内置的 NiceRF 固件可以升级为 OpenRTX 固件，但升级后 NiceRF 固件无法恢复。

* **Q. 为什么打开Arduino IDE时他会提醒我是否要升级库文件？我应该升级还是不升级？**  
  A. 选择不升级库文件，不同版本的库文件可能不会相互兼容所以不建议升级库文件。

* **Q. UHF和VHF版本有什么区别？如何选择？**  
  A. UHF版本频段为400-480MHz，VHF版本频段为134-174MHz。选择取决于您所在地区的对讲机频段规定和使用环境。

* **Q. 为什么我的板子一直烧录失败呢？**  
  A. 请按住"BOOT"按键重新下载程序。

## 项目
* [T-TWR-Plus_Rev2.1](https://github.com/Xinyuan-LilyGO/T-TWR/blob/master/schematic/T-TWR-Plus_Rev2.1.pdf)

## 资料
* [ESP32-S3 Datasheet](https://www.espressif.com.cn/sites/default/files/documentation/esp32-s3_datasheet_en.pdf)
* [SA868 Datasheet](https://github.com/Xinyuan-LilyGO/T-TWR/blob/master/datasheet/SA868%202W%20Embedded%20walkie%20talkie%20moduleV1.3.pdf)
* [SPEC Document](https://github.com/Xinyuan-LilyGO/T-TWR/blob/master/datasheet/SPEC%20X096-2864KSWPG17-C30%20VER%20A.pdf)

## 依赖库
* [LilyGo TWR Library](https://github.com/Xinyuan-LilyGO/T-TWR)
* [U8g2](https://github.com/olikraus/u8g2)
* [TinyGPSPlus](https://github.com/mikalhart/TinyGPSPlus)
* [XPowersLib](https://github.com/lewisxhe/XPowersLib)
* [Adafruit_NeoPixel](https://github.com/adafruit/Adafruit_NeoPixel)
* [Adafruit_BME280_Library](https://github.com/adafruit/Adafruit_BME280_Library)
* [Adafruit_BusIO](https://github.com/adafruit/Adafruit_BusIO)
* [Adafruit_Sensor](https://github.com/adafruit/Adafruit_Sensor)
* [AceButton](https://github.com/bxparks/AceButton)
* [ESPAsyncWebServer](https://github.com/me-no-dev/ESPAsyncWebServer)
* [AsyncTCP](https://github.com/me-no-dev/AsyncTCP)
* [ESP8266Audio](https://github.com/earlephilhower/ESP8266Audio)
* [SdFat - Adafruit Fork](https://github.com/adafruit/SdFat.git)
* [TFT_eSPI](https://github.com/Bodmer/TFT_eSPI)    