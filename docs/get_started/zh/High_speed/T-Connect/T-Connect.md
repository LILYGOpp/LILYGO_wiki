---
title: LILYGO T-Connect
show_source: false
tags: ESP32-S3, RS485, CAN, Industrial
---

<div style="width:100%; display:flex;justify-content: center;">

![T-Connect](./assets/T-Connect-1.jpg)

</div>

<div style="padding: 1em 0 0 0; display: flex; justify-content: center">
    <a target="_blank" style="margin: 1em;color: white; font-size: 0.9em; border-radius: 0.3em; padding: 0.5em 2em; background-color:rgb(103, 175, 8)" href="https://lilygo.cc/products/t-connect">官网购买</a>
</div>

## 版本迭代:
| Version | Update date | Update description |
| :-----: | :---------: | :---------------- |
| T-Connect_V1.0 |  | 初始版本 |

## 购买链接

| Product | SOC | FLASH | PSRAM | Link |
| :-----: | :--: | :---: | :---: | :--: |
| T-Connect | ESP32-S3-R8 | 16MB | 8MB (Octal SPI) | [LILYGO Mall](https://lilygo.cc/products/t-connect) |

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

T-Connect 是一款基于 ESP32-S3 芯片的多功能开发板，搭载 8MB PSRAM 和 16MB Flash，支持 Wi-Fi/蓝牙双模通信及 RS485/CAN 工业协议，内置 APA102 LED 驱动可直接控制 RGB 灯带。其丰富的 UART 接口和复用引脚（如 SGD/SGC 系列）适配物联网设备、工业自动化、智能照明等场景，兼具高集成度与扩展灵活性，适用于复杂环境下的稳定通信与多样化控制需求。

**核心特性**
- 多协议支持：最大支持三组RS485和一组CAN总线输出不同数据
- 工业级通信：支持RS485和CAN总线工业协议
- 灵活配置：支持CAN和RS485两种模块相互切换
- 丰富接口：集成继电器、LED控制、QWIIC扩展接口
- 工业设计：宽电压输入，4个定位孔便于安装固定

## 预览

### 实物图

<div style="width:100%; display:flex;justify-content: center;">

![T-Connect](./assets/T-Connect-2.jpg)

</div>

### 引脚图

<img src="./assets/T-Connect-zh-1.jpg" alt="summary" width=100%>

## 模块

###  MCU

* 芯片：ESP32-S3-R8
* PSRAM：8M (Octal SPI)
* FLASH：16M
* 无线：Wi-Fi 802.11 b/g/n; Bluetooth 5.0 (BLE)
* 其他说明：更多资料请访问[乐鑫官方ESP32-S3数据手册](https://www.espressif.com.cn/sites/default/files/documentation/esp32-s3_datasheet_en.pdf)

###  通信接口

* RS485：支持最多3组RS485通信（UART协议）
* CAN：支持1组CAN总线通信（TWAI协议）
* 模块切换：支持CAN和RS485模块相互切换配置

###  外设控制

* LED驱动：APA102 RGB灯带控制
* 继电器：10A输出能力
* 扩展接口：QWIIC生态接口

### 电源管理

* 输入电压：7V-12V DC
* USB供电：5V/500mA Type-C接口

### 概述
<img src="./assets/T-Connect-zh.jpg" alt="summary" width=100%>

T-Connect是一款拥有4组不同模块输出数据的板子，支持CAN和RS485两种不同模块相互切换，最大支持三组RS485和一组CAN总线输出不同数据。

| 组件 | 描述 |
| :--: | :--: |
| MCU | ESP32-S3-R8 |
| FLASH | 16MB |
| PSRAM | 8MB (Octal SPI) |
| 通信协议 | RS485 (UART) / CAN (TWAI) |
| LED驱动 | APA102 |
| 继电器 | 10A输出 |
| 无线 | 2.4 GHz Wi-Fi & Bluetooth 5 (LE) |
| USB | 1 × USB Port and OTG (TYPE-C接口) |
| 输出配置 | 最大支持三组RS485 + 一组CAN总线 |
| 扩展接口 | 1 × QWIIC接口 |
| 按键 | 1 x RESET按键 + 1 x BOOT按键 |
| 电源输入 | 7V~12V DC + 5V/500mA USB |
| 定位孔 | 4 × 2mm定位孔 |
| 尺寸 | **94×83×13mm** |

## 快速开始

### 示例支持

| Example | Support IDE And Version| Description | Picture |
| ------  | ------  | ------ | ------ | 
| [Original_Test](./examples/Original_Test) | `[Platformio IDE][espressif32-v6.5.0]`<br />`[Arduino IDE][esp32_v2.0.14]` | 出厂初始测试文件 |  |
| [APA102_Blink](./examples/APA102_Blink) | `[Platformio IDE][espressif32-v6.5.0]`<br />`[Arduino IDE][esp32_v2.0.14]` |  |  |
| [CAN](./examples/CAN) | `[Platformio IDE][espressif32-v6.5.0]`<br />`[Arduino IDE][esp32_v2.0.14]` |  |  |
| [RS485](./examples/RS485) | `[Platformio IDE][espressif32-v6.5.0]`<br />`[Arduino IDE][esp32_v2.0.14]` |  |  |

| Firmware | Description | Picture |
| ------  | ------  | ------ |
| [Original_Test](./firmware/[T-Connect_V1.0][Original_Test]_firmware_V1.0.3.bin) | 出厂初始测试文件 |  |

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

## 引脚总览

| LED引脚  | ESP32S3引脚|
| :------------------: | :------------------:|
| APA102_DATA         | IO8       |
| APA102_CLOCK         | IO3       |

| CAN和RS485共用引脚  | ESP32S3引脚|
| :------------------: | :------------------:|
| TX_1         | IO4       |
| RX_1         | IO5       |
| TX_2         | IO6       |
| RX_2         | IO7       |
| TX_3         | IO17       |
| RX_3         | IO18       |
| TX_4         | IO9       |
| RX_4         | IO10       |

## 相关测试

| Board | Program| Description | Picture |
| ------  | ------  | ------ | ------ | 
| `T-Connect_V1.0` | `CAN` | 速度：500KBITS <br/> 通信距离：35m | |
| `T-Connect_V1.0` | `RS485` | 波特率：115200 <br/>通信距离：35m | |

## 常见问题

* **Q. 看了以上教程我还是不会搭建编程环境怎么办？**  
  A. 如果看了以上教程还不懂如何搭建环境的可以参考[LilyGo-Document](https://github.com/Xinyuan-LilyGO/LilyGo-Document)文档说明来搭建。

* **Q. 为什么打开Arduino IDE时他会提醒我是否要升级库文件？我应该升级还是不升级？**  
  A. 选择不升级库文件，不同版本的库文件可能不会相互兼容所以不建议升级库文件。

* **Q. 如何配置RS485和CAN模块的切换？**  
  A. 通过板载的配置跳线或软件设置来实现RS485和CAN模块的切换，具体配置方法请参考原理图和示例代码。

* **Q. 为什么我的板子一直烧录失败呢？**  
  A. 请按住"BOOT"按键重新下载程序。

## 项目
* [T-Connect_V1.0](https://github.com/Xinyuan-LilyGO/T-Connect/blob/main/project/T-Connect_V1.0.pdf)

## 资料
* [ESP32-S3 Datasheet](https://www.espressif.com.cn/sites/default/files/documentation/esp32-s3_datasheet_en.pdf)
* [TD501MCANFD](https://github.com/Xinyuan-LilyGO/T-Connect-Pro/blob/main/information/TD501MCANFD_MORNSUN.pdf)
* [TD501D485H-A](https://github.com/Xinyuan-LilyGO/T-Connect-Pro/blob/main/information/TD501D485H-A_K-CUT.pdf)

## 依赖库
* [FastLED](https://github.com/FastLED/FastLED)
* [ESP32TWAI](https://github.com/esp32/esp-idf/tree/master/examples/protocols/twai)