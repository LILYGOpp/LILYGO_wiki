---
title: LILYGO T-Display Bar
show_source: false
tags: AMOLED, Display
---

<div style="width:100%; display:flex;justify-content: center;">

![T-Display-Bar](./assets/T-Display-Bar-1.jpg)

</div>

<div style="padding: 1em 0 0 0; display: flex; justify-content: center">
    <a target="_blank" style="margin: 1em;color: white; font-size: 0.9em; border-radius: 0.3em; padding: 0.5em 2em; background-color:rgb(63, 201, 28)" href="https://lilygo.cc/products/t-display-bar">官网购买</a>
</div>

## 版本迭代:
| Version | Update date | Update description |
| :-----: | :---------: | :---------------- |
|  |  |  |

## 购买链接

| Product | SOC | FLASH | PSRAM | Link |
| :-----: | :--: | :---: | :---: | :--: |
| T-Display Bar | ESP32-S3R8 | 16MB | 8MB (OPI PSRAM) | [LILYGO Mall](https://lilygo.cc/products/t-display-bar) |

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

LILYGO T-Display Bar 是一款高度集成化的嵌入式智能显示模组，核心搭载 ESP32-S3 高性能芯片，融合多功能传感器与高精度显示技术。其核心配置如下：

**显示系统**
* 配备 2.25英寸IPS全彩LCD屏，采用 ST7789驱动IC，分辨率为 76×284像素（RGB排列）。
* 支持 电容式触摸（独立Touch_IRQ/Touch_RST控制），提供流畅的人机交互体验。
* 通过SPI总线连接（CS/DC/RST/BL/MOSI/SCLK引脚），优化显示控制效率。

**智能感知能力**
* 集成 BH1260AP AI传感器，支持六轴IMU（加速度计+陀螺仪）及个性化运动追踪。
* 配备I²C接口（SDA/SCL）及专用控制引脚（EN/RST/IRQ），实现低功耗环境感知与实时数据交互。

**扩展性与接口**
* 提供 QWIIC生态接口（兼容I²C设备），支持快速扩展传感器模组。
* 集成 TF卡存储（SPI接口：MOSI/MISO/SCK/CS）及 蜂鸣器驱动（BUZZer_IO）。
* 采用 USB Type-C接口，支持 5V/500mA供电与程序烧录一体化设计。

**物理特性**
* 紧凑型结构设计（69×23×15mm），兼顾工业部署与便携设备需求。
* 引脚布局高度优化（如TFT CS/DC等复用ESP32-GPIO），简化二次开发流程。

## 预览

### 实物图

<div style="width:100%; display:flex;justify-content: center;">

![T-Display-Bar](./assets/T-Display-Bar-2.jpg)

</div>

### 引脚图

<img src="./assets/T-Display-Bar-pin.jpg" alt="summary" width=100%>

## 模块

### MCU

* 芯片：ESP32-S3-R8
* PSRAM：8M (OPI PSRAM)
* FLASH：16M
* 其他说明：更多资料请访问[乐鑫官方ESP32-S3数据手册](https://www.espressif.com.cn/sites/default/files/documentation/esp32-s3_datasheet_en.pdf)

### 屏幕

* 尺寸：2.25英寸IPS LCD
* 分辨率：76x284px
* 屏幕类型：IPS LCD
* 驱动芯片：ST7789
* 兼容库：TFT_eSPI
* 总线通信协议：SPI

### 触摸

* 芯片：CST816
* 总线通信协议：IIC

### 传感器

* 芯片：BHI260AP
* 功能：支持六轴IMU（加速度计+陀螺仪），AI传感器
* 总线通信协议：IIC

### 概述
<img src="./assets/T-Display-Bar-info.jpg" alt="summary" width=80%>

| 组件 | 描述 |
| :--: | :--: |
| MCU | ESP32-S3R8 Dual-core LX7 microprocessor |
| FLASH| 16MB |
| PSRAM | 8MB|
| 屏幕 | 2.25 英寸 ST7789 IPS LCD (76*284px)|
| 触摸 | CST816 电容触摸屏 |
| 传感器 | BHI260AP AI传感器，支持六轴IMU |
| 存储 | TF 卡 |
| 蜂鸣器 | 有源蜂鸣器 |
| 无线 | 2.4 GHz Wi-Fi & Bluetooth 5 (LE) |
| USB | 1 × USB Port and OTG(TYPE-C接口) |
| IO 接口 | 2.54mm间距 13pin接口 |
| 拓展接口 | 2 × QWIIC接口 + 1 x 电池座子 |
| 按键 | 1 x RESET 按键 + 1 x BOOT 按键 + 1 x IO38 按键 + 1 x Sleep 按键 |
| 尺寸 | **69x23x15mm** |

## 快速开始

### 示例支持

| Example                  | Description                                                        |
| ------------------------ | ------------------------------------------------------------------ |
| Factory                  | Factory test example, Includes desktop weather and Bluetooth mouse |
| TFT_ESPI_Example         | TFT_espi library adaptation                                        |
| LVGL_Example             | lvgl library adaptation                                            |
| WIFI_Config              | wifi configuration example                                         |
| BHI260AP                 | 6 axis IMU sensor example                                          |
| BHI260AP_StepCounter     | walking step counter example                                       |
| BQ27220                  | Battery level monitor meter                                        |
| BQ25896                  | Power control chip routines                                        |
| RTC                      | PCF8563 Real-Time Clock example                                    |
| SD Card                  | SD card example                                                    |
| Colour_Test              | TFT display colour test                                            |
| Colour_Test2             | TFT display colour test                                            |
| TouchDrv_CSTxxx_GetPoint | display touch example                                              |
| Sleep_Mode               | ESP32S3 sleep mode example                                         |

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

| Arduino IDE Setting                  | Value                                   |
| ------------------------------------ | -------------------------------------- |
| Board                                | **ESP32S3 Dev Module**                  |
| Port                                 | Your port                               |
| USB CDC On Boot                      | Enable                                  |
| CPU Frequency                        | 240MHZ(WiFi)                            |
| Core Debug Level                     | None                                    |
| USB DFU On Boot                      | Disable                                 |
| Erase All Flash Before Sketch Upload | Disable                                 |
| Events Run On                        | Core1                                   |
| Flash Mode                           | QIO 80MHZ                               |
| Flash Size                           | **16MB(128Mb)**                         |
| Arduino Runs On                      | Core1                                   |
| USB Firmware MSC On Boot             | Disable                                 |
| Partition Scheme                     | **8M with spiffs(3M APP/1.5MB SPIFFS)** |
| PSRAM                                | **OPI PSRAM**                           |
| Upload Mode                          | **UART0/Hardware CDC**                  |
| Upload Speed                         | 921600                                  |
| USB Mode                             | **CDC and JTAG**                        |

6. 选择正确的端口。
7. 点击右上角"<kbd>√</kbd>"进行编译，如果编译无误，将单片机连接电脑，点击右上角"<kbd>→</kbd>"即可进行烧录。

### 开发平台
1. [Micropython](https://micropython.org/)
2. [Arduino IDE](https://www.arduino.cc/en/software)
3. [Platform IO](https://platformio.org/)

## 引脚总览

| GPIO | SPI      | I2C     | TFT(SPI) | TOUCH(I2C) | BUZZER     | BHI260AP(I2C) | BUTTON  | SD(SPI) | USB   | BQ27220 | FLASH128M | UART  |
| ---- | -------- | ------- | -------- | ---------- | ---------- | ------------- | ------- | ------- | ----- | ------- | --------- | ----- |
| IO2  |          | I2C_SDA |          |            |            |               |         |         |       |         |           |       |
| IO3  |          | I2C_SDA |          |            |            |               |         |         |       |         |           |       |
| IO12 | SPI_MOSI |         |          |            |            |               |         |         |       |         |           |       |
| IO13 | SPI_MISO |         |          |            |            |               |         |         |       |         |           |       |
| IO14 | SPI_SCK  |         |          |            |            |               |         |         |       |         |           |       |
| IO6  |          |         | TFT_MOSI |            |            |               |         |         |       |         |           |       |
| IO7  |          |         | TFT_SCLK |            |            |               |         |         |       |         |           |       |
| IO8  |          |         | TFT_CS   |            |            |               |         |         |       |         |           |       |
| IO5  |          |         | TFT_DC   |            |            |               |         |         |       |         |           |       |
| IO40 |          |         | TFT_RST  |            |            |               |         |         |       |         |           |       |
| IO15 |          |         | TFT_BL   |            |            |               |         |         |       |         |           |       |
| IO18 |          |         |          |            |            | BHI260AP_IRQ  |         |         |       |         |           |       |
| IO17 |          |         |          |            |            | BHI260AP_RST  |         |         |       |         |           |       |
| IO16 |          |         |          |            |            | BHI260AP_EN   |         |         |       |         |           |       |
| IO11 |          |         |          |            |            |               |         | SD_CS   |       |         |           |       |
| IO9  |          |         |          |            | BUZZER_PIN |               |         |         |       |         |           |       |
| IO21 |          |         |          | TOUCH_IRQ  |            |               |         |         |       |         |           |       |
| IO1  |          |         |          | TOUCH_RST  |            |               |         |         |       |         |           |       |
| IO38 |          |         |          |            |            |               | Button1 |         |       |         |           |       |
| IO0  |          |         |          |            |            |               | Button2 |         |       |         |           |       |
| IO19 |          |         |          |            |            |               |         |         | USB_N |         |           |       |
| IO20 |          |         |          |            |            |               |         |         | USB_P |         |           |       |
| IO10 |          |         |          |            |            |               |         |         |       | GPOUT   |           |       |
| IO27 |          |         |          |            |            |               |         |         |       |         | SPIHD     |       |
| IO28 |          |         |          |            |            |               |         |         |       |         | SPIWP     |       |
| IO29 |          |         |          |            |            |               |         |         |       |         | SPICS0    |       |
| IO30 |          |         |          |            |            |               |         |         |       |         | SPICLK    |       |
| IO31 |          |         |          |            |            |               |         |         |       |         | SPIQ      |       |
| IO32 |          |         |          |            |            |               |         |         |       |         | SPID      |       |
| IO44 |          |         |          |            |            |               |         |         |       |         |           | U0RXD |
| IO43 |          |         |          |            |            |               |         |         |       |         |           | U0TXD |

## 相关测试



## 常见问题

* **Q. 看了以上教程我还是不会搭建编程环境怎么办？**  
  A. 如果看了以上教程还不懂如何搭建环境的可以参考[LilyGo-Document](https://github.com/Xinyuan-LilyGO/LilyGo-Document)文档说明来搭建。

* **Q. 为什么打开Arduino IDE时他会提醒我是否要升级库文件？我应该升级还是不升级？**  
  A. 选择不升级库文件，不同版本的库文件可能不会相互兼容所以不建议升级库文件。

* **Q. 为什么我的板子上"Uart"接口没有输出串口数据，是不是坏了用不了啊？**  
  A. 因为项目文件默认配置将USB接口作为Uart0串口输出作为调试，"Uart"接口连接的是Uart0，不经配置自然是不会输出任何数据的。  
  PlatformIO用户请打开项目文件"platformio.ini"，将"build_flags = xxx"下的选项"-DARDUINO_USB_CDC_ON_BOOT=true"修改成"-DARDUINO_USB_CDC_ON_BOOT=false"即可正常使用外部"Uart"接口。  
  Arduino用户打开菜单"工具"栏，选择USB CDC On Boot: "Disabled"即可正常使用外部"Uart"接口。

* **Q. 为什么我的板子一直烧录失败呢？**  
  A. 请按住"BOOT"按键重新下载程序。

## 项目
* [T-Display-Bar](https://github.com/Xinyuan-LilyGO/T-Display-Bar/blob/master/hardware/H764%20T-Display%20Bar_V1.1.pdf)

## 资料
* [ESP32-S3 Datasheet](https://www.espressif.com.cn/sites/default/files/documentation/esp32-s3_datasheet_en.pdf)
* [BHI260AP Datasheet]()

## 依赖库
* [ESP32-BLE-Mouse](https://github.com/T-vK/ESP32-BLE-Mouse)
* [ArduinoJson](https://github.com/bblanchon/ArduinoJson)
* [lvgl](https://github.com/lvgl/lvgl)
* [MadgwickAHRS](https://github.com/arduino-libraries/MadgwickAHRS)
* [SensorsLib](https://github.com/lewisxhe/SensorsLib)
* [XPowersLib](https://github.com/lewisxhe/XPowersLib)
* [TFT_eSPI](https://github.com/Bodmer/TFT_eSPI)