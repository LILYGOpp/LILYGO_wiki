---
title: LILYGO T-Embed CC1101
show_source: false
tags: ESP32-S3, CC1101, LoRa, NFC, TFT, Sub-GHz
---

<div style="width:100%; display:flex;justify-content: center;">

![T-Embed-CC1101](./assets/T-Embed-CC1101-1.jpg)

</div>

<div style="padding: 1em 0 0 0; display: flex; justify-content: center">
    <a target="_blank" style="margin: 1em;color: white; font-size: 0.9em; border-radius: 0.3em; padding: 0.5em 2em; background-color:rgb(63, 201, 28)" href="https://item.taobao.com/item.htm?id=846226367137">淘宝购买</a>
    <a target="_blank" style="margin: 1em;color: white; font-size: 0.9em; border-radius: 0.3em; padding: 0.5em 2em; background-color:rgb(63, 201, 28)" href="https://www.aliexpress.com/store/911876460">速卖通购买</a>
</div>

> 点这里切换到 [T-Embed-SI4732](https://wiki.lilygo.cc/get_started/zh/LCD_OLED/T-Embed-SI4732/T-Embed-SI4732.html) 版本

## 版本迭代
| Version | Update date | Update description |
| :-----: | :---------: | :----------------- |
| T-Embed-CC1101_V1.0 | 2024-07-29 | Hardware |
| T-Embed-CC1101_V1.1 | 2025-01-09 | Software |

## 购买链接
| Product | SOC | FLASH | PSRAM | Link |
| :-----: | :-: | :---: | :---: | :--: |
| T-Embed CC1101 | ESP32-S3 | 16MB | 8MB | [LILYGO Store](https://lilygo.cc/products/t-embed) |

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

LILYGO T-Embed CC1101 是一款基于 ESP32-S3 双核 LX7 处理器的高集成物联网开发板，专为多协议通信与智能硬件开发设计。板载 CC1101 Sub-GHz 模块、LoRa、PN532 NFC、红外遥控、Wi-Fi 6 与蓝牙 5.0，支持远程传感、智能家居控制与工业监控等复杂场景。配备 1.9 英寸 TFT 屏幕、旋转编码器、8 个可编程 RGB LED、麦克风与扬声器模块，并支持 TF 卡扩展存储，为开发者提供开箱即用、多场景适配的高效硬件平台。

## 预览

### 实物图

<div style="width:100%; display:flex;justify-content: center;">

![T-Embed-CC1101](./assets/T-Embed-CC1101-2.jpg)

</div>

### 引脚图

<img src="./assets/T-Embed-CC1101-zh.jpg" alt="summary" width=100%>

## 模块

###  MCU
* 芯片：ESP32-S3FN16R8
* PSRAM：8MB (Octal SPI) 
* FLASH：16MB
* 无线：2.4 GHz Wi-Fi & Bluetooth 5 (LE)

###  屏幕
* 尺寸：1.9英寸IPS TFT屏幕
* 分辨率：320×170px
* 屏幕类型：IPS
* 驱动芯片：ST7789V
* 兼容库：TFT_eSPI, LVGL
* 总线通信协议：SPI

###  通信模块
* Sub-GHz：CC1101
* NFC：PN532
* GPS：MIA-M10Q（可选）

###  音频系统
* 音频芯片：ES7210
* 功能：麦克风输入与扬声器输出

###  电源管理
* 充电芯片：BQ25896
* 电量监测：BQ27220
* 电池：3.7V 1300mAh 锂聚合物电池

### 概述

| 组件 | 描述 |
| :--: | :--: |
| MCU | ESP32-S3FN16R8 Dual-core LX7 microprocessor |
| FLASH| 16MB |
| PSRAM | 8MB|
| 屏幕 | 1.9英寸 ST7789V IPS TFT |
| Sub-GHz | CC1101 |
| NFC | PN532 |
| 音频 | ES7210 麦克风与扬声器 |
| 充电芯片 | BQ25896 |
| 电量监测 | BQ27220 |
| RGB LED | 8 × WS2812 可编程LED |
| 存储 | TF 卡 |
| 无线 | 2.4 GHz Wi-Fi & Bluetooth 5 (LE) |
| USB | 1 × USB Port (TYPE-C接口) |
| 控制 | 旋转编码器 |
| 按键 | 1 x RESET 按键 + 1 x BOOT 按键 |
| 尺寸 | 97.5 × 39 × 31 mm |

## 快速开始

### 使用指南

在YouTube上有相关视频教程，请点击下面的链接观看：
[T-Embed-CC1101 使用指南](https://www.youtube.com/watch?v=U06XI1wtp4U)

### 示例支持

~~~
- ✅ bq25896_test : 电池管理测试，在串口中打印电池状态。
- ✅ cc1101_recv_irq ：无线接收测试，在串口中显示接收到的消息。
- ✅ cc1101_send_irq ：无线发送测试，在串口中显示发送的消息。
- ✅ display_test ：屏幕显示测试；
- ✅ encode_test ：编码器测试。
- ✅ infrared_recv_test: 红外接收
- ✅ infrared_send_test: 红外发送
- ✅ lvgl_test ：lvgl benchmark 和压力测试；
- ✅ pn532_test ：NFC测试，在串口中显示 IC 卡的信息。
- ✅ tf_card_test ：SD 卡测试，在串口中显示读取到的的文件名。
- ✅ record_test : 录制 15 秒钟的音频，并保存到 SD 卡中。
- ✅ voice_test : 扬声器测试，从SD卡读取音频。
- ✅ ws2812_test ：LED 灯测试；
~~~

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

~~~c
#define BOARD_USER_KEY 6
#define BOARD_PWR_EN   15

// WS2812
#define WS2812_NUM_LEDS 8
#define WS2812_DATA_PIN 14

// IR
#define BOARD_IR_EN 2
#define BOARD_IR_RX 1

// MIC
#define BOARD_MIC_DATA 42
#define BOARD_MIC_CLK  39

// VOICE
#define BOARD_VOICE_BCLK  46
#define BOARD_VOICE_LRCLK 40
#define BOARD_VOICE_DIN   7

// --------- DISPLAY ---------
// About LCD definition in the file: lib/TFT_eSPI/User_Setups/Setup214_LilyGo_T_Embed_PN532.h
#define DISPLAY_WIDTH  170
#define DISPLAY_HEIGHT 320

#define DISPLAY_BL   21 
#define DISPLAY_CS   41
#define DISPLAY_MISO -1
#define DISPLAY_MOSI  9
#define DISPLAY_SCLK 11
#define DISPLAY_DC   16
#define DISPLAY_RST  40

// --------- ENCODER ---------
#define ENCODER_INA 4
#define ENCODER_INB 5
#define ENCODER_KEY 0

// --------- IIC ---------
#define BOARD_I2C_SDA  8
#define BOARD_I2C_SCL  18

// IIC addr
#define BOARD_I2C_ADDR_1 0x24  // PN532
#define BOARD_I2C_ADDR_2 0x55  // BQ27220
#define BOARD_I2C_ADDR_3 0x6b  // BQ25896

// NFC
#define BOARD_PN532_SCL     BOARD_I2C_SCL
#define BOARD_PN532_SDA     BOARD_I2C_SDA
#define BOARD_PN532_RF_REST 45
#define BOARD_PN532_IRQ     17

// --------- SPI ---------
#define BOARD_SPI_SCK  11
#define BOARD_SPI_MOSI 9
#define BOARD_SPI_MISO 10

// TF card
#define BOARD_SD_CS   13
#define BOARD_SD_SCK  BOARD_SPI_SCK
#define BOARD_SD_MOSI BOARD_SPI_MOSI
#define BOARD_SD_MISO BOARD_SPI_MISO

// LORA
#define BOARD_LORA_CS   12
#define BOARD_LORA_SCK  BOARD_SPI_SCK
#define BOARD_LORA_MOSI BOARD_SPI_MOSI
#define BOARD_LORA_MISO BOARD_SPI_MISO
#define BOARD_LORA_IO2  38
#define BOARD_LORA_IO0  3
#define BOARD_LORA_SW1  47
#define BOARD_LORA_SW0  48
~~~

## 相关测试


## 常见问题

### 看了以上教程我还是不会搭建编程环境怎么办？

如果看了以上教程还不懂如何搭建环境的可以参考[LilyGo-Document](https://github.com/Xinyuan-LilyGO/LilyGo-Document)文档说明来搭建。

### 设备出现故障时，如何排查故障原因？

如果出现设备故障(无法开机\屏幕黑屏)，请按照以下步骤排查故障原因:
- 首先检查设备`电源`是否正常，电池是否充足；
- 然后检查设备是否连接至电脑，是否可被`识别`；
- 再检查设备是否正常烧录了`固件`；
- 最后检查设备是否正常开机，屏幕是否正常显示。
- 下载出厂固件操作步骤可以参考[下载说明](https://github.com/Xinyuan-LilyGO/T-Embed-CC1101/blob/master/docs/flash_download_tool.md)

[Download Tool](https://espressif.github.io/esp-launchpad/)

![alt text](assets/Download.gif)

> 如以上步骤无法解决问题，请将下载出厂固件的过程录制为视频，并且将对应串口打印的信息也提供给我们。

### 不能检测到SD卡？ 

我们用SanDisk成功测试了不超过32GB的SD；但其他一些卡片没有，原因尚不清楚，因此，在未检测到SD卡的情况下，建议更换不大于32G的 SanDisk 卡；
![alt text](assets/image-sd.png)

### 为什么我的板子一直烧录失败呢？

请按住"BOOT"按键同时按"RST"按键，然后释放"RST"按键，进入下载模式后重新下载程序。

### CC1101模块的通信距离是多少？

CC1101的通信距离受多种因素影响，包括天线设计、环境干扰、数据速率等，在理想条件下可达数百米。

### NFC无法工作

烧录出厂固件之后，打开NFC界面和我们配送的NFC标签作为检测对象，如果无法识别，请检查以下事项:
- 标签是否正确贴好；
- 标签是否与设备正确连接；
- 设备是否正确烧录了正确的固件；
- 设备是否正确开启了NFC功能；

| 问题  |                                  Link      |
| :---------------------------------- | :-------------------------------------|
|            如何进入下载模式？            |   [文档](https://github.com/Xinyuan-LilyGO/T-Embed-CC1101/blob/master/docs/download_mode.md)                     |
|            如何下载程序？             |   [操作说明](https://github.com/Xinyuan-LilyGO/T-Embed-CC1101/blob/master/docs/flash_download_tool.md)                  |
|  关机后如何开启设备？  | [Issues #5](https://github.com/Xinyuan-LilyGO/T-Embed-CC1101/issues/5) |
|      如何使用 EspTouch 配置 Wi-Fi？         | [Issues #4](https://github.com/Xinyuan-LilyGO/T-Embed-CC1101/issues/4) |
|            电池为何无法充电？            | [Issues #9](https://github.com/Xinyuan-LilyGO/T-Embed-CC1101/issues/9) |

## 项目
* [T-Embed-CC1101_V1.0](https://github.com/Xinyuan-LilyGO/T-Embed-CC1101/blob/master/hardware/T-Embed-CC1101%20V1.0%2024-07-29.pdf)

## 资料
* [CC1101](https://github.com/Xinyuan-LilyGO/T-Embed-CC1101/blob/master/hardware/cc1101.pdf)
* [PN532](https://github.com/Xinyuan-LilyGO/T-Embed-CC1101/blob/master/hardware/PN532_C1.pdf)
* [BQ25896](https://github.com/Xinyuan-LilyGO/T-Embed-CC1101/blob/master/hardware/bq25896.pdf)
* [BQ27220](https://github.com/Xinyuan-LilyGO/T-Embed-CC1101/blob/master/hardware/bq27220_datasheet.pdf)
* [ST7789V](https://github.com/Xinyuan-LilyGO/T-Embed-CC1101/blob/master/hardware/ST7789V.pdf)

## 依赖库
* [RadioLib](https://github.com/jgromes/RadioLib)
* [PN532](https://github.com/Seeed-Studio/PN532.git)
* [XPowersLib](https://github.com/lewisxhe/XPowersLib)
* [TFT_eSPI](https://github.com/Bodmer/TFT_eSPI)
* [RotaryEncoder](http://www.mathertel.de/Arduino/RotaryEncoderLibrary.aspx)
* [FastLED](https://github.com/FastLED/FastLED)
* [IRremoteESP8266](https://github.com/crankyoldgit/IRremoteESP8266)
* [ESP32-audioI2S](https://github.com/schreibfaul1/ESP32-audioI2S)
* [LVGL](https://github.com/lvgl/lvgl/tree/v8.4.0)