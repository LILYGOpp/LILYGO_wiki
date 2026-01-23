---
title: LILYGO T-Circle
show_source: false
tags: T-Circle, LCD, ESP32
---

<div style="width:100%; display:flex;justify-content: center;">

![T-Circle](./assets/T-Circle-1.jpg)

</div>

<div style="padding: 1em 0 0 0; display: flex; justify-content: center">
    <a target="_blank" style="margin: 1em;color: white; font-size: 0.9em; border-radius: 0.3em; padding: 0.5em 2em; background-color:rgb(103, 175, 8)" href="https://lilygo.cc/products/t-circle-s3?variant=44912874062005">官网购买</a>
</div>

> **注意**：T-Circle 为 ESP32 版本，点这里切换到 ESP32-S3 版本 [T-Circle S3](https://wiki.lilygo.cc/get_started/zh/LCD_OLED/T-Circle-S3/T-Circle-S3.html) 版本。

## 版本迭代:
| Version | Update date | Update description |
| :-----: | :---------: | :---------------- |
| T-Circle_V1.0 | 2021-03-14 | 初始版本 |

## 购买链接

| Product | SOC | FLASH | PSRAM | Link |
| :-----: | :--: | :---: | :---: | :--: |
| T-Circle | ESP32 | 16M | 8M (Octal SPI) | [LILYGO Mall](https://lilygo.cc/products/t-circle-s3?variant=44912874062005) |

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

LILYGO T-Circle是ESP32版本的圆形屏幕开发板，核心搭载0.75英寸TFT LCD圆形显示屏，支持160x160分辨率与262K色彩显示，配备CST816D电容式触摸芯片实现精准触控交互。硬件采用GCPD01N驱动芯片，通过12引脚（包括3V3供电、SPI接口的MOSI/SCK/CS、I2C通信的SDA/SCL、BLE使能引脚BLEEN等）与外部设备连接，兼容Arduino等开发框架。其紧凑设计集成了高精度显示、触控及低功耗通信功能，适用于智能手表、物联网设备界面或微型嵌入式系统的原型开发。

## 预览

### 实物图

<div style="width:100%; display:flex;justify-content: center;">

![T-Circle](./assets/T-Circle-2.jpg)

</div>

### 引脚图

<img src="./assets/T-Circle-zh.jpg" alt="summary" width=100%>

## 模块

### 1. MCU

*   芯片：ESP32
*   PSRAM：8M (Octal SPI)
*   FLASH：16M
*   其他说明：更多资料请访问[乐鑫官方ESP32数据手册](https://www.espressif.com/sites/default/files/documentation/esp32_datasheet_en.pdf)

### 2. 屏幕

*   尺寸：0.75英寸LCD圆屏幕
*   分辨率：160x160px
*   屏幕类型：TFT LCD
*   驱动芯片：GC9D01N
*   兼容库：TFT_eSPI, Arduino_GFX
*   总线通信协议：SPI

### 3. 触摸

*   芯片：CST816D
*   总线通信协议：IIC

### 概述
<img src="./assets/T-Circle-zh.jpg" alt="summary" width=80%>

| 组件 | 描述 |
| :--: | :--: |
| MCU | ESP32 |
| FLASH| 16MB |
| PSRAM | 8MB (Octal SPI)|
| 屏幕 | 0.75英寸 GC9D01N LCD (160x160) |
| 触摸 | CST816D 电容触摸屏 |
| 总线 | SPI |
| 无线 | 2.4 GHz Wi-Fi & Bluetooth |
| 拓展接口 | 12pin 拓展接口 |
| 按键 | 1 x RESET 按键 + 1 x BOOT 按键 |
| 电源 | 5V/500mA |
| 孔位 | 2 × M1.6*2 |
| 尺寸 | **32*17mm** |

## 快速开始

### 示例支持

| Example | PlatformIO/Arduino | ESP-IDF | Description |
| :------ | :----------------: | :-----: | :---------- |
| [Basic Display](https://github.com/Xinyuan-LilyGO/T-Circle) | ✓ | | 基础显示示例 |
| [Touch Test](https://github.com/Xinyuan-LilyGO/T-Circle) | ✓ | | 触摸测试示例 |
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

#### ESP32
| Setting | Value |
| :-----: | :---: |
| Board | ESP32 Dev Module |
| Upload Speed | 921600 |
| CPU Frequency | 240MHz (WiFi) |
| Flash Mode | QIO 80MHz |
| Flash Size | 16MB (128Mb) |
| Core Debug Level | None |
| Partition Scheme | 默认配置 |
| PSRAM | Enabled |

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

*   **Q. T-Circle 和 T-Circle S3 有什么区别？**
    A. T-Circle 核心主控为 ESP32，而 T-Circle S3 核心主控为性能更强的 ESP32-S3。请根据您的项目需求选择相应的版本。

## 项目
*   [T-Circle-S3](https://github.com/Xinyuan-LilyGO/T-Circle-S3/blob/arduino-esp32-libs_V2.0.14/project/T-Circle-S3_V1.0.pdf) *(请注意，此原理图为S3版本，ESP32版本原理图请参考GitHub仓库)*

## 资料
*   [GC9D01N](https://github.com/Xinyuan-LilyGO/T-Circle-S3/blob/arduino-esp32-libs_V2.0.14/information/GC9D01N.pdf)
*   [MAX98357A](https://github.com/Xinyuan-LilyGO/T-Circle-S3/blob/arduino-esp32-libs_V2.0.14/information/MAX98357AETE+T.pdf)
*   [MSM261S4030H0R](https://github.com/Xinyuan-LilyGO/T-Circle-S3/blob/arduino-esp32-libs_V2.0.14/information/MSM261S4030H0R.pdf)
*   [MP34DT05-A](https://github.com/Xinyuan-LilyGO/T-Circle-S3/blob/arduino-esp32-libs_V2.0.14/information/mp34dt05-a.pdf)

## 依赖库
*   [TFT_eSPI-2.5.43](https://github.com/Bodmer/TFT_eSPI)
*   [Arduino_DriveBus-1.1.16](https://github.com/Xk-w/Arduino_DriveBus)
*   [Arduino_GFX-1.3.7](https://github.com/moononournation/Arduino_GFX)
*   [ESP32-audioI2S-3.0.6](https://github.com/schreibfaul1/ESP32-audioI2S)
*   [DFRobot_MSM261](https://github.com/DFRobot/DFrobot_MSM261)
*   [FastLED-3.6.0](https://github.com/FastLED/FastLED)