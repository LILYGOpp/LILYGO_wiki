---
title: LILYGO T-Connect Pro
show_source: false
tags: ESP32-S3, LoRa, CAN, Ethernet, Industrial
---

<div style="width:100%; display:flex;justify-content: center;">

![T-Connect Pro](./assets/T-Connect-Pro1.jpg)

</div>

<div style="padding: 1em 0 0 0; display: flex; justify-content: center">
    <a target="_blank" style="margin: 1em;color: white; font-size: 0.9em; border-radius: 0.3em; padding: 0.5em 2em; background-color:rgb(63, 201, 28)" href="#">官网购买</a>
</div>

## 版本迭代:
| Version | Update date | Update description |
| :-----: | :---------: | :---------------- |
| T-Connect-Pro_V1.0 |  | 初始版本 |

## 购买链接

| Product | SOC | FLASH | PSRAM | Link |
| :-----: | :--: | :---: | :---: | :--: |
| T-Connect Pro | ESP32-S3-R8 | 16MB | 8MB | [LILYGO Mall](#) |

## 目录
- [描述](#描述)
- [预览](#预览)
- [模块](#模块)
- [软件部署](#软件部署)
- [引脚总览](#引脚总览)
- [相关测试](#相关测试)
- [常见问题](#常见问题)
- [项目](#项目)

## 描述

T-Connect-Pro 是一款基于 ESP32-S3 的多功能工业级控制与通信模块，集成 LoRa（SX1262 芯片）、ST7796 LCD 显示屏、CAN总线、以太网接口及双串口（RS232/RS485），支持 12~24V 宽电压输入与 10A 继电器输出，适用于复杂工业自动化与物联网场景。

**核心特性**
- 多协议通信：集成LoRa远距离传输、CAN总线控制、以太网、RS232/RS485串口
- 工业级设计：支持12~24V宽电压输入，10A继电器输出
- 丰富接口：3层板堆叠设计，集成触摸屏、传感器、QWIIC扩展接口
- 实时显示：ST7796 TFT屏幕提供直观的数据显示和操作界面
- 电源管理：AXP2101高度集成电源管理单元

## 预览

### 实物图

<div style="width:100%; display:flex;justify-content: center;">

![T-Connect Pro](./assets/T-Connect-Pro2.jpg)

</div>

### 引脚图

<img src="./assets/T-Connect-Pro-zh.jpg" alt="summary" width=100%>

## 模块

### MCU

* 芯片：ESP32-S3-R8
* PSRAM：8M (Octal SPI) 
* FLASH：16M
* 相关资料：
    >[Espressif ESP32-S3 Datasheet](https://www.espressif.com.cn/sites/default/files/documentation/esp32-s3_datasheet_en.pdf)

### 屏幕

<!-- * 尺寸：英寸LCD屏幕 -->
* 分辨率：222x480px
* 屏幕类型：TFT、LCD
* 驱动芯片：ST7796
* 总线通信协议：标准SPI
* 依赖库：
    >[Arduino_GFX-1.4.6](https://github.com/moononournation/Arduino_GFX)

###  触摸

* 芯片：CST226SE
* 总线通信协议：IIC
* 依赖库：
    >[Arduino_DriveBus-1.1.16]()

###  Lora

* 模块：HPD16A
* 芯片：SX1262
* 使用总线通信协议：标准SPI
* 相关资料：
    >[HPD16A_V1.1](./information/HPDTEK_HPD16A_TCXO_V1.1.pdf)  <br /> 
    >[SX1262_V2.1](./information/DS_SX1261-2_V2_1.pdf)
* 依赖库：
    >[RadioLib-6.6.0](https://github.com/jgromes/RadioLib)

### CAN

* 模块：TD501MCANFD
* 使用总线通信协议：TWAI
* 相关资料：
    >[TD501MCANFD](./information/TD501MCANFD_MORNSUN.pdf)

###  RS485

* 模块：TD501D485H-A
* 使用总线通信协议：UART
* 相关资料：
    >[TD501D485H-A](./information/TD501D485H-A_K-CUT.pdf)

###  RS232

* 模块：TD501D232H
* 使用总线通信协议：UART
* 相关资料：
    >[TD501D232H](./information/TD501D232H_WJ146289.pdf)

### 以太网

* 芯片：W5500
* 使用总线通信协议：标准SPI
* 依赖库：
    >[Ethernet_V2.0.0](http://www.arduino.cc/en/Reference/Ethernet)

### 概述

T-Connect-Pro基于主控芯片ESP32S3，由3层板子堆叠组合而成的产品，功能丰富多样，板载3种不同通信模块：CAN、RS485、RS232实现远距离传输，拥有一个以太网接口、一个继电器接口、一个Lora模块（SX1262），配备LCD屏幕使得操作更加便捷。

| 组件 | 描述 |
| :--: | :--: |
| MCU | ESP32-S3-R8 |
| FLASH | 16MB |
| PSRAM | 8MB |
| 轴传感器 | BMA423 (I²C) |
| 以太网 | W5500 (SPI) |
| LoRa | HPD16A模块 SX1262芯片，433~920MHz(可选) |
| CAN | TD501MCANFD (TWAI) |
| RS485 | TD501D485H-A (UART) |
| RS232 | TD501D232H (UART) |
| 继电器 | 10A输出 |
| 电源管理 | AXP2101 PMU |
| 屏幕 | ST7796 TFT LCD，222×480px (SPI) |
| 触摸 | CST226SE (I²C) |
| 无线 | 2.4 GHz Wi-Fi & Bluetooth 5 (LE) |
| USB | 1 × USB Port and OTG (TYPE-C接口) |
| 扩展接口 | 1 × QWIIC接口 |
| 按键 | 1 x RESET按键 + 1 x BOOT按键(内置) |
| 电源输入 | 12~24V DC + 5V/500mA USB |
| 安装孔 | 4 × M3mm螺丝孔 |
| 尺寸 | **带底座88×72×60mm** |

## 快速开始

### 示例支持

| Example | `[Platformio IDE][espressif32-v6.5.0]`<br />`[Arduino IDE][esp32_v2.0.14]` | Description | Picture |
| ------  | ------ | ------ | ------ | 
| [CAN](https://github.com/Xinyuan-LilyGO/T-Connect-Pro/tree/main/examples/CAN) |  <p align="center">![alt text][supported] | | |
| [CST226SE](https://github.com/Xinyuan-LilyGO/T-Connect-Pro/tree/main/examples/CST226SE) |  <p align="center">![alt text][supported] | | |
| [Ethernet_HTTP](https://github.com/Xinyuan-LilyGO/T-Connect-Pro/tree/main/examples/Ethernet_HTTP) |  <p align="center">![alt text][supported] | | |
| [Ethernet_Relay](https://github.com/Xinyuan-LilyGO/T-Connect-Pro/tree/main/examples/Ethernet_Relay) |  <p align="center">![alt text][supported] | | |
| [Ethernet_Scan](https://github.com/Xinyuan-LilyGO/T-Connect-Pro/tree/main/examples/Ethernet_Scan) |  <p align="center">![alt text][supported] | | |
| [GFX](https://github.com/Xinyuan-LilyGO/T-Connect-Pro/tree/main/examples/GFX) |  <p align="center">![alt text][supported] | | |
| [GFX_SX1262](https://github.com/Xinyuan-LilyGO/T-Connect-Pro/tree/main/examples/GFX_SX1262) |  <p align="center">![alt text][supported] | | |
| [Original_Test](https://github.com/Xinyuan-LilyGO/T-Connect-Pro/tree/main/examples/Original_Test) |  <p align="center">![alt text][supported] | 出厂程序 | |
| [Relay](https://github.com/Xinyuan-LilyGO/T-Connect-Pro/tree/main/examples/Relay) |  <p align="center">![alt text][supported] | | |
| [RS485](https://github.com/Xinyuan-LilyGO/T-Connect-Pro/tree/main/examples/RS485) |  <p align="center">![alt text][supported] | | |
| [RS485_2](https://github.com/Xinyuan-LilyGO/T-Connect-Pro/tree/main/examples/RS485_2) |  <p align="center">![alt text][supported] | | |
| [SX126x_Channel_Activity_Detection_Blocking](https://github.com/Xinyuan-LilyGO/T-Connect-Pro/tree/main/examples/SX126x_Channel_Activity_Detection_Blocking) |  <p align="center">![alt text][supported] | | |
| [SX126x_Channel_Activity_Detection_Interrupt](https://github.com/Xinyuan-LilyGO/T-Connect-Pro/tree/main/examples/SX126x_Channel_Activity_Detection_Interrupt) |  <p align="center">![alt text][supported] | | |
| [SX126x_PingPong](https://github.com/Xinyuan-LilyGO/T-Connect-Pro/tree/main/examples/SX126x_PingPong) |  <p align="center">![alt text][supported] | | |
| [SX1262_Receive_Interrupt](https://github.com/Xinyuan-LilyGO/T-Connect-Pro/tree/main/examples/SX1262_Receive_Interrupt) |  <p align="center">![alt text][supported] | | |
| [raw](https://github.com/Xinyuan-LilyGO/T-Connect-Pro/tree/main/examples/raw) |  <p align="center">![alt text][supported] | | |
| [ttn_abp](https://github.com/Xinyuan-LilyGO/T-Connect-Pro/tree/main/examples/ttn_abp) |  <p align="center">![alt text][supported] | | |
| [ttn_otaa](https://github.com/Xinyuan-LilyGO/T-Connect-Pro/tree/main/examples/ttn_otaa) |  <p align="center">![alt text][supported] | | |

[supported]: https://img.shields.io/badge/-supported-green "example"

| Firmware | Description | Picture |
| ------  | ------  | ------ |
| [Original_Test](https://github.com/Xinyuan-LilyGO/T-Connect-Pro/tree/main/firmware/(屏幕色彩测试项增加黑色背景测试)[T-Connect-Pro_V1.0][Original_Test]_firmware_202502191117.bin) | 出厂程序 |  |


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

## 引脚总览

| 屏幕引脚  | ESP32S3引脚|
| :------------------: | :------------------:|
| MOSI         | IO11       |
| MISO         | IO13       |
| DC         | IO41       |
| SCLK         | IO12       |
| CS         | IO21       |
| BL         | IO46       |

| 触摸引脚  | ESP32S3引脚|
| :------------------: | :------------------:|
| SDA         | IO39      |
| SCL         | IO40       |
| RST         | IO47      |
| INT         | IO3       |

| 以太网引脚  | ESP32S3引脚|
| :------------------: | :------------------:|
| MOSI         | IO11       |
| MISO         | IO13       |
| RST         | IO48       |
| SCLK         | IO12       |
| CS         | IO10       |
| INT         | IO9       |

| Lora引脚  | ESP32S3引脚|
| :------------------: | :------------------:|
| MOSI         | IO11       |
| MISO         | IO13       |
| RST         | IO42       |
| SCLK         | IO12       |
| CS         | IO14       |
| INT/DIO1         | IO45       |
| BUSY         | IO38       |

| RS485引脚  | ESP32S3引脚|
| :------------------: | :------------------:|
| UART_TX         | IO17       |
| UART_RX         | IO18       |

| RS232引脚  | ESP32S3引脚|
| :------------------: | :------------------:|
| UART_TX         | IO4       |
| UART_RX         | IO5       |

| CAN引脚  | ESP32S3引脚|
| :------------------: | :------------------:|
| TWAI_TX         | IO6      |
| TWAI_RX         | IO7       |

## 相关测试


## 常见问题

### 看了以上教程我还是不会搭建编程环境怎么办？
如果看了以上教程还不懂如何搭建环境的可以参考[LilyGo-Document](https://github.com/Xinyuan-LilyGO/LilyGo-Document)文档说明来搭建。

### 为什么打开Arduino IDE时他会提醒我是否要升级库文件？我应该升级还是不升级？
选择不升级库文件，不同版本的库文件可能不会相互兼容所以不建议升级库文件。

### LoRa模块支持哪些频段？
LoRa模块支持433~920MHz频段，具体频段版本可根据需求选择。

### 为什么我的板子一直烧录失败呢？
请按住"BOOT"按键重新下载程序。

### T-Connect Pro 上是否有任何 GPIO 端口是内部保留的，或不应用于外部 I/O 模块？
T-Connect-Pro的GPIO端口都使用了，有其他端口可作用于外部

### 扩展外部输入/输出的推荐方法是什么？
I²C I/O 扩展器

### 在将 LoRa (SX1262) 与 Wi-Fi 或蓝牙一起使用时，是否存在已知的限制或引脚冲突问题？
不存在，WiFi是芯片内置功能

### 从主板为外部低功耗I/O模块供电是否安全，还是建议使用外部电源？
“安全，主板可为传感器或小电流拓展设备直接供电。但是推荐使用外部供电

### 是否有将外部I/O或控制模块连接到该电路板的参考设计或示例？
没有 仅支持已有[示例](https://github.com/Xinyuan-LilyGO/T-Connect-Pro?tab=readme-ov-file#examples-support)


## 项目
* [T-Connect-Pro_V1.0](https://github.com/Xinyuan-LilyGO/T-Connect-Pro/blob/main/project/T-Connect-Pro_V1.0.pdf)

## 资料
* [ESP32-S3 Datasheet](https://www.espressif.com.cn/sites/default/files/documentation/esp32-s3_datasheet_en.pdf)
* [HPD16A Module](https://github.com/Xinyuan-LilyGO/T-Connect-Pro/blob/main/information/HPDTEK_HPD16A_TCXO_V1.1.pdf)
* [SX1262 Datasheet](https://github.com/Xinyuan-LilyGO/T-Connect-Pro/blob/main/information/DS_SX1261-2_V2_1.pdf)
* [TD501MCANFD](https://github.com/Xinyuan-LilyGO/T-Connect-Pro/blob/main/information/TD501MCANFD_MORNSUN.pdf)
* [TD501D485H-A](https://github.com/Xinyuan-LilyGO/T-Connect-Pro/blob/main/information/TD501D485H-A_K-CUT.pdf)
* [TD501D232H](https://github.com/Xinyuan-LilyGO/T-Connect-Pro/blob/main/information/TD501D232H.pdf)

## 依赖库
* 触摸：[Arduino_DriveBus-1.1.2](https://github.com/Xk-w/Arduino_DriveBus)
* LoRa：[RadioLib-6.6.0](https://github.com/jgromes/RadioLib)
* 屏幕：[Arduino_GFX](https://github.com/moononournation/Arduino_GFX)
* 以太网：[Ethernet_V2.0.0](http://www.arduino.cc/en/Reference/Ethernet)