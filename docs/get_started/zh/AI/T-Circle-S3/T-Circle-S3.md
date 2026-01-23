---
title: LILYGO T-Circle S3
show_source: false
tags: T-Circle-S3, LCD, ESP32-S3, Audio
---

<div style="width:100%; display:flex;justify-content: center;">

![T-Circle](./assets/T-Circle-S3-1.jpg)

</div>

<div style="padding: 1em 0 0 0; display: flex; justify-content: center">
    <a target="_blank" style="margin: 1em;color: white; font-size: 0.9em; border-radius: 0.3em; padding: 0.5em 2em; background-color:rgb(103, 175, 8)" href="https://lilygo.cc/products/t-circle-s3">官网购买</a>
</div>

> **注意**：T-Circle S3 为 ESP32-S3 版本，点这里切换到 ESP32 版本 [T-Circle](https://wiki.lilygo.cc/get_started/zh/LCD_OLED/T-Circle/T-Circle.html) 版本。

## 版本迭代:
| Version | Update date | Update description |
| :-----: | :---------: | :---------------- |
| T-Circle-S3_V1.0 | 2024-01-01 | 初始版本 |

## 购买链接

| Product | SOC | FLASH | PSRAM | Link |
| :-----: | :--: | :---: | :---: | :--: |
| T-Circle S3 | ESP32-S3 | 16M | 8M (Octal SPI) | [LILYGO Mall](https://lilygo.cc/products/t-circle-s3) |

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

LILYGO T-Circle S3 是一款基于ESP32-S3无线微控制器的多功能开发板，集成0.75英寸圆形LCD触摸屏（160x160像素）、MAX98357A数字音频放大器、MSM261音频采集模块（推测为麦克风）、APA102 LED控制接口及QWIIC扩展接口。其核心配置包括16MB闪存、8MB Octal SPI PSRAM，支持Wi-Fi/蓝牙通信，并搭载电容式触摸屏控制器CST816D实现交互操作。通过精密引脚映射，整合了图形显示、音频输入输出、触控交互与高速存储功能，适用于物联网终端、智能穿戴设备或嵌入式音频可视化项目的原型开发。

## 预览

### 实物图

<div style="width:100%; display:flex;justify-content: center;">

![T-Circle-S3](./assets/T-Circle-S3-2.jpg)
![T-Circle-S3](./assets/T-Circle-S3-3.jpg)

</div>

### 引脚图

<img src="./assets/T-Circle-S3.jpg" alt="summary" width=100%>

## 模块

### 1. MCU

* 芯片：ESP32-S3-R8
* PSRAM：8M (Octal SPI) 
* FLASH：16M
* 相关资料：
    >[乐鑫官方ESP32-S3数据手册](https://www.espressif.com.cn/sites/default/files/documentation/esp32-s3_datasheet_en.pdf)

### 2. 屏幕

* 尺寸：0.75英寸LCD圆屏幕
* 分辨率：160x160px
* 屏幕类型：TFT、LCD
* 驱动芯片：GC9D01N
* 总线通信协议：标准SPI
* 相关资料：
    >[GC9D01N](./information/GC9D01N.pdf) <br />
    >[TFT_eSPI-2.5.43](https://github.com/Bodmer/TFT_eSPI)
* 依赖库：
    >[Arduino_GFX-1.3.7](https://github.com/moononournation/Arduino_GFX)

### 3. 触摸

* 芯片：CST816D
* 总线通信协议：IIC
* 相关资料：
    >[GC9D01N](./information/GC9D01N.pdf)
* 依赖库：
    >[Arduino_DriveBus-1.1.16]()

### 4. 扬声器

* 驱动芯片：MAX98357A
* 使用总线通信协议：IIS
* 相关资料：
    >[MAX98357A](./information/MAX98357AETE+T.pdf)
* 依赖库：
    >[Arduino_DriveBus-1.1.16]() <br />
    >[ESP32-audioI2S-3.0.6](https://github.com/schreibfaul1/ESP32-audioI2S)

### 5. 麦克风

> #### T-Circle-S3_V1.0 版本
> * 芯片：MSM261S4030H0R
> * 总线通信协议：IIS
> * 相关资料：
>    >[MSM261S4030H0R](./information/MSM261S4030H0R.pdf)
> * 依赖库：
>     >[Arduino_DriveBus-1.1.16]()
>     >[DFRobot_MSM261](https://github.com/DFRobot/DFrobot_MSM261)

> #### T-Circle-S3_V1.1 版本
> * 芯片：MP34DT05-A
> * 总线通信协议：PDM
> * 相关资料：
>    >[MP34DT05-A](./information/mp34dt05-a.pdf)
> * 依赖库：
>    >[Arduino_DriveBus-1.1.16]()

### 6. LED灯

* 芯片：APA102
* 相关资料：
    >[APA102_2020_LED](./information/APA102_2020_LED.pdf)
* 依赖库：
    >[FastLED-3.6.0](https://github.com/FastLED/FastLED)
### 概述
<img src="./assets/T-Circle-S3-zh.jpg" alt="summary" width=100%>

| 组件 | 描述 |
| :--: | :--: |
| MCU | ESP32-S3-R8 Dual-core LX7 microprocessor |
| FLASH| 16MB |
| PSRAM | 8MB (Octal SPI)|
| 屏幕 | 0.75英寸 GC9D01N LCD (160x160) |
| 触摸 | CST816D 电容触摸屏 |
| 扬声器 | I2S驱动 MAX98357A |
| 麦克风 | PDM驱动 MP34DT05-A |
| LED | APA102 |
| 无线 | 2.4 GHz Wi-Fi & Bluetooth 5 (LE) |
| USB | 1 × USB Port and OTG (TYPE-C接口) |
| IO 接口 | 2 × 4 pin 拓展IO接口 |
| 按键 | 1 x RESET 按键 + 1 x BOOT 按键 |
| 电源 | 5V/500mA |
| 孔位 | 2 × M1.6*2 |
| 尺寸 | **32*17mm** |

## 快速开始

### 示例支持

| Example | `[Platformio IDE][espressif32-v6.5.0]`<br />`[Arduino IDE][esp32_v2.0.14]` | `[ESP-IDF][esp-idf-V4.4.8]`| `[ESP-IDF][esp-idf-V5.3.2]`| Description |
| ------  | ------  | ------ | ------ | ------ | 
| [Animated_Eyes_1](https://github.com/Xinyuan-LilyGO/T-Circle-S3/blob/arduino-esp32-libs_V2.0.14/examples/Animated_Eyes_1) |  <p align="center">![alt text][supported] | || |  
| [APA102_Blink](https://github.com/Xinyuan-LilyGO/T-Circle-S3/blob/arduino-esp32-libs_V2.0.14/examples/APA102_Blink) | <p align="center">![alt text][supported] | | ||  
| [CST816D](https://github.com/Xinyuan-LilyGO/T-Circle-S3/blob/arduino-esp32-libs_V2.0.14/examples/CST816D) | <p align="center">![alt text][supported] |  |  
| [DMIC_ReadData](https://github.com/Xinyuan-LilyGO/T-Circle-S3/blob/arduino-esp32-libs_V2.0.14/examples/DMIC_ReadData) | <p align="center">![alt text][supported] | || |  
| [DMIC_ReadData](https://github.com/Xinyuan-LilyGO/T-Circle-S3/blob/arduino-esp32-libs_V2.0.14/examples/DMIC_ReadData) | <p align="center">![alt text][supported] | || |  
| [GFX](https://github.com/Xinyuan-LilyGO/T-Circle-S3/blob/arduino-esp32-libs_V2.0.14/examples/GFX) | <p align="center">![alt text][supported] |  |  
| [GFX_CST816D_Image](https://github.com/Xinyuan-LilyGO/T-Circle-S3/blob/arduino-esp32-libs_V2.0.14/examples/GFX_CST816D_Image) | <p align="center">![alt text][supported] | | ||  
| [GFX_Wifi_AP_Contract](https://github.com/Xinyuan-LilyGO/T-Circle-S3/blob/arduino-esp32-libs_V2.0.14/examples/GFX_Wifi_AP_Contract) | <p align="center">![alt text][supported] | || |  
| [GFX_Wifi_STA_Contract](https://github.com/Xinyuan-LilyGO/T-Circle-S3/blob/arduino-esp32-libs_V2.0.14/examples/GFX_Wifi_STA_Contract) | <p align="center">![alt text][supported] | || |  
| [IIC_Scan_2](https://github.com/Xinyuan-LilyGO/T-Circle-S3/blob/arduino-esp32-libs_V2.0.14/examples/IIC_Scan_2) | <p align="center">![alt text][supported] | | ||  
| [Original_Test](https://github.com/Xinyuan-LilyGO/T-Circle-S3/blob/arduino-esp32-libs_V2.0.14/examples/Original_Test) | <p align="center">![alt text][supported] ||| 出厂初始测试文件 |  
| [TFT](https://github.com/Xinyuan-LilyGO/T-Circle-S3/blob/arduino-esp32-libs_V2.0.14/examples/TFT) | <p align="center">![alt text][supported] | || |  
| [Voice_Speaker](https://github.com/Xinyuan-LilyGO/T-Circle-S3/blob/arduino-esp32-libs_V2.0.14/examples/Voice_Speaker) | <p align="center">![alt text][supported] |  ||  |  
| [Voice_Speaker_APA102](https://github.com/Xinyuan-LilyGO/T-Circle-S3/blob/arduino-esp32-libs_V2.0.14/examples/Voice_Speaker_APA102) | <p align="center">![alt text][supported] | ||  |  
| [Wifi_Music](https://github.com/Xinyuan-LilyGO/T-Circle-S3/blob/arduino-esp32-libs_V2.0.14/examples/Wifi_Music) | <p align="center">![alt text][supported] | ||  |  
| [lilygo_s3_apps](https://githubhttps://github.com/Xinyuan-LilyGO/T-Circle-S3/blob/arduino-esp32-libs_V2.0.14com/Xinyuan-LilyGO/T-Circle-S3/tree/esp-idf-V4.4.8/examples/lilygo_s3_apps) | | <p align="center">![alt text][supported] || 该示例为语音控制示例，由Grovety提供，以下是原始链接: <br /> [Grovety lilygo_s3_apps](https://github.com/Grovety/lilygo_s3_apps)|
| [XiaoZhi_AI_Chatbot](https://github.com/78/xiaozhi-esp32?tab=readme-ov-file) | || <p align="center">![alt text][supported] | 该示例为小智AI示例，由Xiaoxia提供|

[supported]: https://img.shields.io/badge/-supported-green "example"


| Firmware | Description | Picture |
| ------  | ------  | ------ |
| [Original_Test(T-Circle-S3_V1.0)](https://github.com/Xinyuan-LilyGO/T-Circle-S3/blob/arduino-esp32-libs_V2.0.14/firmware/%5BT-Circle-S3_V1.0%5D%5BOriginal_Test%5D_firmware_V1.0.1.bin) | 出厂程序 |  |
| [Original_Test(T-Circle-S3_V1.1)](https://github.com/Xinyuan-LilyGO/T-Circle-S3/blob/arduino-esp32-libs_V2.0.14/firmware/%EF%BC%88V1.1%E7%89%88%E6%9C%AC%E4%BF%AE%E6%94%B9%E9%BA%A6%E5%85%8B%E9%A3%8E%E5%9E%8B%E5%8F%B7%EF%BC%89%5BT-Circle-S3_V1.1%5D%5BOriginal_Test%5D_firmware_202502141426.bin) | 出厂程序 |  |
| [GFX_Wifi_AP_Contract](https://github.com/Xinyuan-LilyGO/T-Circle-S3/blob/arduino-esp32-libs_V2.0.14/firmware/%5BT-Circle-S3_V1.0%5D%5BGFX_Wifi_AP_Contract%5D_firmware_V1.0.0.bin) | 初始版本 |  |
| [GFX_Wifi_STA_Contract](https://github.com/Xinyuan-LilyGO/T-Circle-S3/blob/arduino-esp32-libs_V2.0.14/firmware/%5BT-Circle-S3_V1.0%5D%5BGFX_Wifi_STA_Contract%5D_firmware_V1.0.0.bin) | 初始版本 |  |
| [lilygo_s3_apps](https://github.com/Xinyuan-LilyGO/T-Circle-S3/blob/arduino-esp32-libs_V2.0.14/firmware/%5BT-Circle-S3_V1.0%5D_%5Blilygo_s3_apps%5D_firmware_V1.0.0.bin) | 初始版本 |  |
| [xiaozhi_esp32](https://github.com/Xinyuan-LilyGO/T-Circle-S3/blob/arduino-esp32-libs_V2.0.14/firmware/%5BT-Circle-S3_V1.0%5D%5Bxiaozhi-esp32_V1.0.1%5D_firmware_202501240943.bin) | |  |
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

6.  选择正确的端口。
7.  点击右上角"<kbd>√</kbd>"进行编译，如果编译无误，将单片机连接电脑，点击右上角"<kbd>→</kbd>"即可进行烧录。

### 开发平台
1.  [Micropython](https://micropython.org/)
2.  [Arduino IDE](https://www.arduino.cc/en/software)
3.  [Platform IO](https://platformio.org/)

## 引脚总览

| LCD screen pins  | ESP32S3 pins|
| :------------------: | :------------------:|
| MOSI         | IO17       |
| DC         | IO16       |
| SCLK         | IO15       |
| CS         | IO13       |
| BL         | IO18       |

| Touch chip pins  | ESP32S3 pins|
| :------------------: | :------------------:|
| INT         | IO12       |
| SDA         | IO11       |
| SCL         | IO14       |

| Speaker pins  | ESP32S3 pins|
| :------------------: | :------------------:|
| BCLK         | IO5       |
| LRCLK         | IO4       |
| SD_MODE         | IO45       |
| DATA         | IO6       |

| LED pins  | ESP32S3 pins|
| :------------------: | :------------------:|
| CLOCK         | IO39       |
| DATA         | IO38       |

> T-Circle-S3_V1.0 version

 | Microphone pins  | ESP32S3 pins|
 | :------------------: | :------------------:|
 | BCLK         | IO7       |
 | WS         | IO9       |
 | DATA         | IO8       |

> T-Circle-S3_V1.1 version

 | Microphone pins  | ESP32S3 pins|
 | :------------------: | :------------------:|
 | LRCLK         | IO9       |
 | DATA         | IO8       |



## 相关测试

*（功耗及其他测试数据待补充）*

## 常见问题

* Q. 看了以上教程我还是不会搭建编程环境怎么办？
* A. 如果看了以上教程还不懂如何搭建环境的可以参考[LilyGo-Document](https://github.com/Xinyuan-LilyGO/LilyGo-Document)文档说明来搭建。

<br />

* Q. 为什么打开Arduino IDE时他会提醒我是否要升级库文件？我应该升级还是不升级？
* A. 选择不升级库文件，不同版本的库文件可能不会相互兼容所以不建议升级库文件。

<br />

* Q. 为什么我的板子上“Uart”接口没有输出串口数据，是不是坏了用不了啊？
* A. 因为项目文件默认配置将USB接口作为Uart0串口输出作为调试，“Uart”接口连接的是Uart0，不经配置自然是不会输出任何数据的。<br />PlatformIO用户请打开项目文件“platformio.ini”，将“build_flags = xxx”下的选项“-DARDUINO_USB_CDC_ON_BOOT=true”修改成“-DARDUINO_USB_CDC_ON_BOOT=false”即可正常使用外部“Uart”接口。<br />Arduino用户打开菜单“工具”栏，选择USB CDC On Boot: “Disabled”即可正常使用外部“Uart”接口。

<br />

* Q. 为什么我的板子一直烧录失败呢？
* A. 请按住“BOOT-0”按键重新下载程序。
## 项目
*   [T-Circle-S3_V1.0](https://github.com/Xinyuan-LilyGO/T-Circle-S3/blob/arduino-esp32-libs_V2.0.14/project/T-Circle-S3_V1.0.pdf)

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