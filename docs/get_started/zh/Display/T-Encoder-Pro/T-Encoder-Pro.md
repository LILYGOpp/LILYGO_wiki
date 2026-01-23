---
title: LILYGO T-Encoder Pro
show_source: false
tags: ESP32-S3, Encoder, AMOLED, Rotary, HMI
---

<div style="width:100%; display:flex;justify-content: center;">

![T-Encoder Pro](./assets/T-Encoder-Pro-1.jpg)

</div>

<div style="padding: 1em 0 0 0; display: flex; justify-content: center">
    <a target="_blank" style="margin: 1em;color: white; font-size: 0.9em; border-radius: 0.3em; padding: 0.5em 2em; background-color:rgb(63, 201, 28)" href="https://lilygo.cc/products/t-encoder-plus">官网购买</a>
</div>

## 版本迭代:
| Version                               | Update date                       |
| :-------------------------------: | :-------------------------------: |
| T-Encoder-Pro_V1.0            | 2024-02-02                         |

## 购买链接

| Product                     | SOC           |  FLASH  |  PSRAM   | Link                   |
| :------------------------: | :-----------: |:-------: | :---------: | :------------------: |
| T-Encoder-Pro_V1.0   | ESP32S3R8 |   16M   |8M (Octal SPI)| [LILYGO Mall](https://www.lilygo.cc/products/t-encoder-plus) <br /> [Banggood Mall](https://m.banggood.in/LILYGO-T-Encoder-Pro-ESP32-S3-Rotary-Encoder-CHSC5816-ESP32-S3FN4R2-Circuit-Board-1_2-inch-AMOLED-Touch-Display-Wireless-Module-p-2018774.html) |

## 目录
- [描述](#描述)
- [预览](#预览)
- [模块](#模块)
- [快速开始](#快速开始)
- [引脚总览](#引脚总览)
- [常见问题](#常见问题)
- [项目](#项目)
- [资料](#资料)
- [依赖库](#依赖库)

## 描述

LILYGO T-Encoder-Pro 是一款配备AMOLED触摸屏的智能控制旋钮开发板，核心基于 ESP32-S3 R8 高性能 Wi-Fi/蓝牙双模芯片，集成 2.04 英寸 SH8601A 触摸 AMOLED 显示屏（分辨率 390×390），支持电容触控交互。硬件功能丰富，包含旋转编码器（支持左右旋转和按压操作）、蜂鸣器、振动电机、8MB PSRAM 和 16MB Flash 存储，并配备双 Qwiic 4-Pin 接口以快速扩展传感器或模块。设计上注重高集成度与交互性，适用于嵌入式 UI 开发、智能家居控制面板、音频调音台、便携式设备原型或物联网终端，兼顾低功耗与高性能需求。

## 预览

### 实物图

<div style="width:100%; display:flex;justify-content: center;">

![T-Encoder-Pro](./assets/T-Encoder-Pro-2.jpg)

</div>

### 引脚图

<img src="./assets/T-Encoder-Pro-pin-zh.jpg" alt="summary" width=100%>

## 模块

### MCU

*   芯片：ESP32-S3-R8
*   PSRAM：8M (Octal SPI)
*   FLASH：16M
*   其他说明：更多资料请访问[乐鑫官方ESP32-S3数据手册](https://www.espressif.com.cn/sites/default/files/documentation/esp32-s3_datasheet_en.pdf)

### 屏幕

*   尺寸：2.04英寸AMOLED
*   分辨率：390×390px
*   屏幕类型：AMOLED
*   驱动芯片：SH8601A-W14-T06
*   兼容库：Arduino_GFX
*   总线通信协议：SPI/QSPI

###  触摸

*   芯片：CHSC5816
*   总线通信协议：I2C

### 编码器

*   类型：旋转编码器
*   功能：支持左右旋转和按压操作

### 反馈设备

*   蜂鸣器：音频反馈
*   振动电机：触觉反馈

### 概述
<img src="./assets/T-Encoder-Pro-info-zh.jpg" alt="summary" width=80%>

| 组件 | 描述 |
| :--: | :--: |
| MCU | ESP32-S3R8 Dual-core LX7 microprocessor |
| FLASH | 16MB |
| PSRAM | 8MB |
| 屏幕 | 2.04英寸 SH8601A AMOLED (390×390) |
| 触摸 | CHSC5816 触摸电容屏 |
| 编码器 | 旋转编码器（支持按压） |
| 蜂鸣器 | 音频反馈 |
| 振动电机 | 触觉反馈 |
| 无线 | 2.4 GHz Wi-Fi & Bluetooth 5 (LE) |
| USB | 1 × USB Port and OTG (TYPE-C接口) |
| 拓展接口 | 2 × QWIIC 4pin接口 |
| 按键 | 1 x RESET 按键 + 1 x BOOT 按键 |
| 固定孔 | 3 × M2螺丝孔 |
| 尺寸 | **43.5×43.5×27.5mm** |

## 快速开始

### 示例支持

| Example | Support IDE And Version| Description | Picture |
| ------  | ------  | ------ | ------ | 
| [GFX](./examples/GFX) | `[Arduino IDE][esp32_v3.0.7]` |  |  |
| [Lvgl_CIT](./examples/Lvgl_CIT) |`[Arduino IDE][esp32_v3.0.7]` | Product factory original testing |  |
| [CHSC5816](./examples/CHSC5816) | `[Arduino IDE][esp32_v3.0.7]` |  |  |
| [Rotary_Encoder](./examples/Rotary_Encoder) | `[Arduino IDE][esp32_v3.0.7]` |  |  |
| *（更多示例请参考GitHub仓库）* | | | |

| Firmware | Description | Picture |
| ------  | ------  | ------ |
| [Lvgl_CIT](./firmware/[T-Encoder-Pro_V1.0][Lvgl_CIT]_firmware_V1.0.0.bin) | Original |  |


### PlatformIO
1.  安装[VisualStudioCode](https://code.visualstudio.com/Download)，根据你的系统类型选择安装。
2.  打开VisualStudioCode软件侧边栏的"扩展"（或者使用<kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>X</kbd>打开扩展），搜索"PlatformIO IDE"扩展并下载。
3.  在安装扩展的期间，你可以前往GitHub下载程序，你可以通过点击带绿色字样的"<> Code"下载主分支程序，也通过侧边栏下载"Releases"版本程序。
4.  扩展安装完成后，打开侧边栏的资源管理器（或者使用<kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>E</kbd>打开），点击"打开文件夹"，找到刚刚你下载的项目代码（整个文件夹），点击"添加"，此时项目文件就添加到你的工作区了。
5.  打开项目文件中的"platformio.ini"（添加文件夹成功后PlatformIO会自动打开对应文件夹的"platformio.ini"）,在"[platformio]"目录下取消注释选择你需要烧录的示例程序（以"default_envs = xxx"为标头），然后点击左下角的"<kbd>√</kbd>"进行编译，如果编译无误，将单片机连接电脑，点击左下角"<kbd>→</kbd>"即可进行烧录。

### Arduino
1. 安装[Arduino](https://www.arduino.cc/en/software)，根据你的系统类型选择安装。

2. 打开项目文件夹的“example”目录，选择示例项目文件夹，打开以“.ino”结尾的文件即可打开Arduino IDE项目工作区。

3. 打开右上角“工具”菜单栏->选择“开发板”->“开发板管理器”，找到或者搜索“esp32”，下载作者名为“Espressif Systems”的开发板文件。接着返回“开发板”菜单栏，选择“ESP32 Arduino”开发板下的开发板类型，选择的开发板类型由“platformio.ini”文件中以[env]目录下的“board = xxx”标头为准，如果没有对应的开发板，则需要自己手动添加项目文件夹下“board”目录下的开发板。

4. 打开菜单栏“[文件](image/6.png)”->“[首选项](image/6.png)”，找到“[项目文件夹位置](image/7.png)”这一栏，将项目目录下的“libraries”文件夹里的所有库文件连带文件夹复制粘贴到这个目录下的“libraries”里边。

5. 在 "工具 "菜单中选择正确的设置，如下表所示。

| Setting                               | Value                                 |
| :-------------------------------: | :-------------------------------: |
| Board                                | ESP32S3 Dev Module|
| Upload Speed                     | 921600                               |
| USB Mode                           | Hardware CDC and JTAG     |
| USB CDC On Boot                | Enabled                             |
| USB Firmware MSC On Boot | Disabled                             |
| USB DFU On Boot                | Disabled                             |
| CPU Frequency                   | 240MHz (WiFi)                    |
| Flash Mode                         | QIO 80MHz                         |
| Flash Size                           | 16MB (128Mb)                     |
| Core Debug Level                | None                                 |
| Partition Scheme                | 16M Flash (3MB APP/9.9MB FATFS) |
| PSRAM                                | OPI PSRAM                         |
| Arduino Runs On                  | Core 1                               |
| Events Run On                     | Core 1                               |

6. 选择正确的端口。

7. 点击右上角“<kbd>[√]</kbd>”进行编译，如果编译无误，将单片机连接电脑，点击右上角“<kbd>[→]</kbd>”即可进行烧录。

### 开发平台
1.  [Micropython](https://micropython.org/)
2.  [Arduino IDE](https://www.arduino.cc/en/software)
3.  [Platform IO](https://platformio.org/)

## 引脚总览

| 屏幕引脚       | ESP32S3引脚      |
| :------------------: | :------------------:|
| SDIO0                     | IO11                  |
| SDIO1                     | IO13                  |
| SDIO2                     | IO7                  |
| SDIO3                     | IO14                  |
| SCLK                  | IO12                  |
| RST                    | IO4                  |
| VCI EN                | IO3                  |
| CS                    | IO10                  |

| 触摸引脚          | ESP32S3引脚      |
| :------------------: | :------------------:|
| RST                  | IO8                  |
| INT                  | IO9                    |
| SDA                  | IO5                  |
| SCL                  | IO6                  |

| 旋转编码器引脚          | ESP32S3引脚      |
| :------------------: | :------------------:|
| KNOB DATA A      | IO1                  |
| KNOB DATA B      | IO2                  |
| KNOB KEY      | IO0                  |

| 蜂鸣器引脚          | ESP32S3引脚      |
| :------------------: | :------------------:|
| BUZZER DATA      | IO17                  |

>*详细引脚定义请参考原理图* 

## 相关测试

*（编码器精度、触控响应、功耗测试数据待补充）*

## 常见问题

*   **Q. T-Encoder Pro的主要应用场景是什么？**
    A. T-Encoder Pro适用于智能家居控制面板、音频设备调音台、工业HMI界面、多媒体控制器等需要精确旋钮控制和图形显示的场景。

*   **Q. 编码器支持哪些操作？**
    A. 编码器支持左右旋转（用于数值调节、菜单选择等）和按压操作（用于确认、选择等功能）。

*   **Q. 如何连接外部传感器？**
    A. 可以通过板载的2个QWIIC 4pin接口快速连接兼容的传感器模块，支持即插即用。

*   **Q. 触觉反馈如何实现？**
    A. 通过振动电机提供触觉反馈，可以在旋转编码器操作或特定事件时提供物理反馈，增强用户体验。

*   **Q. 屏幕显示效果如何？**
    A. 采用2.04英寸AMOLED屏幕，分辨率390×390，显示效果清晰鲜艳，支持触摸操作。

## 项目

* [SCH_T-Encoder-Pro_V1.0](https://github.com/Xinyuan-LilyGO/T-Encoder-Pro/blob/arduino-esp32-libs_V3.0.7/project/[SCH][T-Encoder-Pro_V1.0].pdf)
* [SCH_T-Encoder-Pro_V1.0_TFT_FPC](https://github.com/Xinyuan-LilyGO/T-Encoder-Pro/blob/arduino-esp32-libs_V3.0.7/project/[SCH][T-Encoder-Pro_V1.0][TFT_FPC].pdf)

## 资料
*   [ESP32-S3 Datasheet](https://www.espressif.com.cn/sites/default/files/documentation/esp32-s3_datasheet_en.pdf)
*   [CHSC5816 Datasheet](https://github.com/Xinyuan-LilyGO/T-Encoder-Pro/blob/arduino-esp32-libs_V3.0.7/information/DS_CHSC5816_V1.1.5.pdf)
*   [CHSC5816 Application Note](https://github.com/Xinyuan-LilyGO/T-Encoder-Pro/blob/arduino-esp32-libs_V3.0.7/information/CHSC5816-ApplicationDoc_US_V04.pdf)
*   [DXQ120MYB2416A Datasheet](https://github.com/Xinyuan-LilyGO/T-Encoder-Pro/blob/arduino-esp32-libs_V3.0.7/information/DXQ120MYB2416A.pdf)

## 依赖库
*   [Arduino_GFX-1.3.7](https://github.com/moononournation/Arduino_GFX)
*   [lvgl-8.3.5](https://github.com/lvgl/lvgl)
*   [SensorLib-0.1.4](https://github.com/lewisxhe/SensorsLib)