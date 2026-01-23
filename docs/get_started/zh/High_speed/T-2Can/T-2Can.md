---
title: LILYGO T-2Can
show_source: false
tags: CAN, ESP32-S3, Communication
---

<div style="width:100%; display:flex;justify-content: center;">

![T-2Can](./assets/T-2Can-1.jpg)

</div>

<div style="padding: 1em 0 0 0; display: flex; justify-content: center">
    <a target="_blank" style="margin: 1em;color: white; font-size: 0.9em; border-radius: 0.3em; padding: 0.5em 2em; background-color:rgb(103, 175, 8)" href="https://lilygo.cc/products/t-2can">官网购买</a>
</div>

## 版本迭代:
| Version | Update date | Update description |
| :-----: | :---------: | :---------------- |
| T-2Can_V1.0 |  | 初始版本 |

## 购买链接

| Product | SOC | FLASH | PSRAM | Link |
| :-----: | :--: | :---: | :---: | :--: |
| T-2Can | ESP32-S3-WROOM-1U | 16MB | 8MB (OPI PSRAM) | [LILYGO Mall](https://lilygo.cc/products/t-2can) |

## 目录
- [描述](#描述)
- [预览](#预览)
- [模块](#模块)
- [软件部署](#软件部署)
- [常见问题](#常见问题)
- [项目](#项目)

## 描述

LILYGO T-2CAN 是一款高性能、紧凑型嵌入式通信模块，基于强大的 ESP32-S3 微控制器（集成 Wi-Fi 与蓝牙 BLE 无线连接），并创新性地集成双路独立 MCP2515 CAN 总线控制器。该模块严格遵循 CAN 2.0B 协议标准，支持高达 1 Mb/s 的通信速率，提供两路完全独立的 CAN 通道接口（包含 CAN_H, CAN_L, 信号地 SGND 及电源地 DGND），满足工业级通信需求。

**核心特性**
- 双路独立 CAN 接口：通过两片 MCP2515 实现，每路配备 6 个 29 位验收滤波器及 2 个 29 位验收屏蔽码，确保高可靠性数据过滤与传输。
- 强大主控：ESP32-S3 提供充沛的处理能力及 Wi-Fi/BLE 无线连接选项，便于构建网络化应用。
- 工业级设计：支持宽范围 DC 12-24V 电源输入，具备信号隔离设计（SGND/DGND），增强抗干扰能力。
- 丰富接口：提供标准 SPI 接口连接主控，集成 USB Type-C（供电/编程）、IPEX 天线接口、QWIIC 扩展接口及复位/引导按钮。
- 紧凑尺寸：约 18 x 39 x 91 mm，易于集成。

## 预览

### 实物图

<div style="width:100%; display:flex;justify-content: center;">

![T-2Can](./assets/T-2Can-2.jpg)

</div>

### 引脚图

<img src="./assets/T-2Can-pin.jpg" alt="summary" width=100%>

## 模块

###  MCU

* 芯片：ESP32-S3-WROOM-1U（MCN16R8）
* PSRAM：8M (OPI PSRAM)
* FLASH：16M
* 其他说明：更多资料请访问[乐鑫官方ESP32-S3数据手册](https://www.espressif.com.cn/sites/default/files/documentation/esp32-s3_datasheet_en.pdf)

###  CAN 控制器

* 芯片：MCP2515 × 2
* 协议标准：CAN 2.0B
* 通信速率：最高 1 Mb/s
* 滤波器：每路 6 个 29 位验收滤波器 + 2 个 29 位验收屏蔽码
* 总线通信协议：SPI

###  电源管理

* 输入电压：DC 12-24V
* USB供电：5V/500mA Type-C接口
* 隔离设计：信号地(SGND)与电源地(DGND)分离

### 概述
<img src="./assets/T-2Can-info.jpg" alt="summary" width=100%>

| 组件 | 描述 |
| :--: | :--: |
| MCU | ESP32-S3-WROOM-1U（MCN16R8） |
| FLASH| 16MB |
| PSRAM | 8MB |
| CAN控制器 | 双路 MCP2515 |
| 无线 | 2.4 GHz Wi-Fi & Bluetooth 5 (LE) |
| USB | 1 × USB Port and OTG(TYPE-C接口) |
| 电源输入 | 12V~24V DC |
| 扩展接口 | 2 × CAN接口 + 2 x 2.54mm间距 13pin接口 + 2 x QWIIC接口 |
| 按键 | 1 x RESET 按键 + 1 x BOOT 按键 |
| 天线 | IPEX 天线接口 |
| 尺寸 | **18x39x91mm** |

## 快速开始

### 示例支持

| Example | `[Platformio IDE][espressif32-v6.5.0]`<br />`[Arduino IDE][esp32_v2.0.14]` | Description | Picture |
| ------  | ------ | ------ | ------ | 
| [can](./examples/can) |  <p align="center">![alt text][supported] | | |
| [Original_Test](./examples/original_test) |  <p align="center">![alt text][supported] | 出厂程序 | |

[supported]: https://img.shields.io/badge/-supported-green "example"

| Firmware | Description | Picture |
| ------  | ------  | ------ |
| [original_test](./firmware/(修正can总线500k的串口提示)[T-2Can_V1.0][original_test]_firmware_202506210958.bin) | 出厂程序 |  |

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

### 开发平台
1. [VS Code](https://code.visualstudio.com/)
2. [Arduino IDE](https://www.arduino.cc/en/software)
3. [Platform IO](https://platformio.org/)


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
* [T-2Can_V1.0](https://github.com/Xinyuan-LilyGO/T-2Can/blob/main/project/T-2Can_V1.0.pdf)

## 资料
* [ESP32-S3 Datasheet](https://www.espressif.com.cn/sites/default/files/documentation/esp32-s3_datasheet_en.pdf)
* [MCP2515 Datasheet](https://ww1.microchip.com/downloads/aemDocuments/documents/APID/ProductDocuments/DataSheets/MCP2515-Stand-Alone-CAN-Controller-with-SPI-20001801J.pdf)
* [TD501MCANFD](https://github.com/Xinyuan-LilyGO/T-2Can-Pro/blob/main/information/TD501MCANFD_MORNSUN.pdf)
* [TD501D485H-A](https://github.com/Xinyuan-LilyGO/T-2Can-Pro/blob/main/information/TD501D485H-A_K-CUT.pdf)

## 依赖库
* [FastLED](https://github.com/FastLED/FastLED)
* [mcp2515](https://github.com/autowp/arduino-mcp2515)