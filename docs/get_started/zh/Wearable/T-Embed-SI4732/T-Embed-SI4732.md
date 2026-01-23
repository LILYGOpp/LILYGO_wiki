---
title: LILYGO T-Embed SI4732
show_source: false
tags: ESP32-S3, SI4732, Radio, TFT, AM/FM
---

<div style="width:100%; display:flex;justify-content: center;">

![T-Embed-SI4732](./assets/T-Embed-SI4732-1.jpg)

</div>

<div style="padding: 1em 0 0 0; display: flex; justify-content: center">
    <a target="_blank" style="margin: 1em;color: white; font-size: 0.9em; border-radius: 0.3em; padding: 0.5em 2em; background-color:rgb(63, 201, 28)" href="https://item.taobao.com/item.htm?id=846226367137">淘宝购买</a>
    <a target="_blank" style="margin: 1em;color: white; font-size: 0.9em; border-radius: 0.3em; padding: 0.5em 2em; background-color:rgb(63, 201, 28)" href="https://www.aliexpress.com/store/911876460">速卖通购买</a>
</div>

> 点这里切换到 [T-Embed-CC1101](https://wiki.lilygo.cc/get_started/zh/LCD_OLED/T-Embed-CC1101/T-Embed-CC1101.html) 版本

## 版本迭代
| Version | Update date | Update description |
| :-----: | :---------: | :----------------- |
| T-Embed-SI4732_V1.0 | 2024-07-29 | 初始硬件版本 |
| T-Embed-SI4732_V1.1 | 2025-01-09 | 软件更新 |

## 购买链接
| Product | SOC | FLASH | PSRAM | Link |
| :-----: | :-: | :---: | :---: | :--: |
| T-Embed SI4732 | ESP32-S3 | 16MB | 8MB | [LILYGO Store](https://lilygo.cc/products/t-embed) |

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

LILYGO T-Embed SI4732 这是基于基础款T-Embed 增加SI4732扩展模块的版本，SI4732一款高性能数字调谐收音机芯片，专为 AM/FM/SW/LW 等广播频段接收设计。它集成了数字信号处理（DSP）技术，具备高灵敏度、低功耗和高度集成化特性，适用于多种收音机及音频设备。T-Embed是一款圆角矩形外观设计，集成灯环编码器和1.9寸 IPS TFT，同时带有Mesh MIC和扬声器，内部TF卡槽和电源管理电路，支持3.7V 锂电池供电，扩展接口有GROVE和2.54间距GPIO扩展口。

## 预览

### 实物图

<div style="width:100%; display:flex;justify-content: center;">

![T-Embed-SI4732](./assets/T-Embed-SI4732-2.jpg)

</div>

### 引脚图

<img src="./assets/T-Embed-SI4732.jpg" alt="summary" width=100%>

## 模块

### MCU
* 芯片：ESP32-S3 Dual-core LX7
* PSRAM：8MB (Octal SPI) 
* FLASH：16MB
* 无线：2.4 GHz Wi-Fi & Bluetooth 5 (LE)

### 屏幕
* 尺寸：1.9英寸IPS TFT屏幕
* 分辨率：320×170px
* 屏幕类型：IPS
* 驱动芯片：ST7789V
* 兼容库：TFT_eSPI, LVGL
* 总线通信协议：SPI

### 收音机模块
* 芯片：SI4732-A10
* 功能：AM/FM/SW/LW/RDS广播接收
* 特性：数字信号处理（DSP）技术

### 音频系统
* 音频芯片：ES7210
* 功能：麦克风输入与扬声器输出

### 电源管理
* 充电芯片：BQ25896
* 电量监测：BQ27220
* 电池：3.7V 900mAh 锂聚合物电池

### 概述
<img src="./assets/T-Embed-SI4732-3.jpg" alt="summary" width=80%>

| 组件 | 描述 |
| :--: | :--: |
| MCU | ESP32-S3 Dual-core LX7 microprocessor |
| FLASH| 16MB |
| PSRAM | 8MB|
| 屏幕 | 1.9英寸 ST7789V IPS TFT |
| 收音机 | SI4732-A10 AM/FM/SW/LW/RDS |
| 音频 | ES7210 麦克风与扬声器 |
| 充电芯片 | BQ25896 |
| 电量监测 | BQ27220 |
| RGB LED | APA102 可编程LED |
| GPS | MIA-M10Q（可选） |
| 存储 | TF 卡 |
| 无线 | 2.4 GHz Wi-Fi & Bluetooth 5 (LE) |
| USB | 1 × USB Port (TYPE-C接口) |
| 控制 | 旋转编码器 |
| 按键 | 1 x RST 按键 + 1 x BOOT 按键 |
| 尺寸 | 98 × 39 × 39 mm |

## 快速开始

严格按照 Lilygo GitHub 上指示的所有步骤操作是极其重要的：

[Lilygo T-Display S3](https://github.com/Xinyuan-LilyGO/T-Display-S3#quick-start)

[Lilygo T-Embed](https://github.com/Xinyuan-LilyGO/T-Embed#quick-start)

### 示例支持

| Example | PlatformIO/Arduino | ESP-IDF | Description |
| :------ | :----------------: | :-----: | :---------- |
| [SI4732_Radio](https://github.com/Xinyuan-LilyGO/T-Embed/tree/main/examples/SI4732_Radio) | ✓ | | SI4732收音机示例 |
| [TFT_Display](https://github.com/Xinyuan-LilyGO/T-Embed/tree/main/examples/TFT_Display) | ✓ | | TFT屏幕显示示例 |
| [Audio_Record_Playback](https://github.com/Xinyuan-LilyGO/T-Embed/tree/main/examples/Audio_Record_Playback) | ✓ | | 音频录制与播放示例 |
| [RGB_LED_Control](https://github.com/Xinyuan-LilyGO/T-Embed/tree/main/examples/RGB_LED_Control) | ✓ | | RGB LED控制示例 |
| [Power_Management](https://github.com/Xinyuan-LilyGO/T-Embed/tree/main/examples/Power_Management) | ✓ | | 电源管理示例 |

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
1. [Micropython](https://micropython.org/)
2. [Arduino IDE](https://www.arduino.cc/en/software)
3. [Platform IO](https://platformio.org/)

## 引脚总览

## 相关测试


## 常见问题

* **Q. 看了以上教程我还是不会搭建编程环境怎么办？**  
  A. 如果看了以上教程还不懂如何搭建环境的可以参考[LilyGo-Document](https://github.com/Xinyuan-LilyGO/LilyGo-Document)文档说明来搭建。

* **Q. 为什么打开Arduino IDE时他会提醒我是否要升级库文件？我应该升级还是不升级？**  
  A. 选择不升级库文件，不同版本的库文件可能不会相互兼容所以不建议升级库文件。

* **Q. 为什么我的板子一直烧录失败呢？**  
  A. 请按住"BOOT"按键同时按"RST"按键，然后释放"RST"按键，进入下载模式后重新下载程序。

* **Q. SI4732收音机模块支持哪些频段？**  
  A. SI4732支持AM/FM/SW/LW等多个广播频段，并具备RDS功能。

## 项目
* [T-Embed-SI4732_V1.0](https://github.com/Xinyuan-LilyGO/T-Embed-CC1101/blob/master/hardware/T-Embed-CC1101%20V1.0%2024-07-29.pdf)

## 资料
* [SI4732](https://github.com/Xinyuan-LilyGO/T-Embed/blob/main/hardware/SI4732.pdf)
* [PN532](https://github.com/Xinyuan-LilyGO/T-Embed-CC1101/blob/master/hardware/PN532_C1.pdf)
* [BQ25896](https://github.com/Xinyuan-LilyGO/T-Embed-CC1101/blob/master/hardware/bq25896.pdf)
* [BQ27220](https://github.com/Xinyuan-LilyGO/T-Embed-CC1101/blob/master/hardware/bq27220_datasheet.pdf)
* [ST7789V](https://github.com/Xinyuan-LilyGO/T-Embed-CC1101/blob/master/hardware/ST7789V.pdf)

## 依赖库
* [PU2CLR SI4735](https://github.com/pu2clr/SI4735)
* [RadioLib](https://github.com/jgromes/RadioLib)
* [PN532](https://github.com/Seeed-Studio/PN532.git)
* [XPowersLib](https://github.com/lewisxhe/XPowersLib)
* [TFT_eSPI](https://github.com/Bodmer/TFT_eSPI)
* [RotaryEncoder](http://www.mathertel.de/Arduino/RotaryEncoderLibrary.aspx)
* [FastLED](https://github.com/FastLED/FastLED)
* [IRremoteESP8266](https://github.com/crankyoldgit/IRremoteESP8266)
* [ESP32-audioI2S](https://github.com/schreibfaul1/ESP32-audioI2S)
* [LVGL](https://github.com/lvgl/lvgl/tree/v8.4.0)