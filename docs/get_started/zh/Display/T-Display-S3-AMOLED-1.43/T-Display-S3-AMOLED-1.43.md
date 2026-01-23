---
title: LILYGO T-Display S3 AMOLED 1.43
show_source: false
tags: AMOLED, Display
---

<div style="width:100%; display:flex;justify-content: center;">

![T-Display-S3-AMOLED-1.43](./assets/T-Display-S3-AMOLED-1.43-1.jpg)

</div>

<div style="padding: 1em 0 0 0; display: flex; justify-content: center">
    <a target="_blank" style="margin: 1em;color: white; font-size: 0.9em; border-radius: 0.3em; padding: 0.5em 2em; background-color:rgb(63, 201, 28)" href="https://lilygo.cc/products/t-display-s3-amoled-1-64?variant=44507650556085">官网购买</a>
</div>

## 版本迭代:
| Version | Update date | Update description |
| :-----: | :---------: | :---------------- |
| T-Display-S3-AMOLED-1.43_V1.0 | 2024-05-20 | 初始版本 |
| T-Display-S3-AMOLED-1.43-1.75_V1.0 | 2024-11-25 | 新增排线、新增H0175Y003AM屏幕适配 |
| T-Display-S3-AMOLED-1.43-1.75_V1.0 | 2025-01-13 | 新增DO0143FMST10屏幕适配 |

## 购买链接

| Product | SOC | FLASH | PSRAM | Link |
| :-----: | :--: | :---: | :---: | :--: |
| T-Display-S3-AMOLED-1.43-1.75 | ESP32S3R8 | 16M | 8M (Octal SPI) | [LILYGO Mall](https://lilygo.cc/products/t-display-s3-amoled-1-64?_pos=8&_sid=eacfa858d&_ss=r) |

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

T-Display-S3-AMOLED-1.43-1.75 是一款集成 ESP32-S3 高性能 Wi-Fi/蓝牙双模芯片的智能显示开发板，专为物联网与交互应用设计。其核心搭载 1.43 英寸 AMOLED 显示屏，提供 466×466 像素高分辨率，支持触控操作并内置 PCF8563 实时时钟（RTC），可精准管理时间任务。硬件配置包括 16MB FLASH 存储、8MB Octal SPI PSRAM 内存，支持 Micro SD 卡扩展存储，同时集成电池电量检测（ADC）功能与 Type-C 供电接口，方便移动场景使用。开发板提供丰富的扩展接口（如 SPI、I2C、GPIO 等），兼容触摸屏交互与 SD 卡数据读写，适用于智能穿戴、工业控制、嵌入式 GUI 开发等场景，兼具高性能与低功耗特性。

## 预览

### 实物图

<div style="width:100%; display:flex;justify-content: center;">

![T-Display-S3-AMOLED-1.43](./assets/T-Display-S3-AMOLED-1.43-2.jpg)

</div>

### 引脚图 

<img src="./assets/T-Display-S3-AMOLED-1.43-zh.jpg" alt="summary" width=100%>

## 模块

###  MCU

* 芯片：ESP32-S3-R8
* PSRAM：8M (Octal SPI) 
* FLASH：16M
* 其他说明：更多资料请访问[乐鑫官方ESP32-S3数据手册](https://www.espressif.com.cn/sites/default/files/documentation/esp32-s3_datasheet_en.pdf)

### 屏幕

* 尺寸：1.43英寸AMOLED圆屏幕
* 分辨率：466x466px
* 屏幕类型：AMOLED
* 驱动芯片：SH8601
* 兼容库：Arduino_GFX
* 总线通信协议：QSPI

###  触摸

* 芯片：FT3268
* 总线通信协议：IIC

###  充电芯片

* 芯片：SY6970
* 总线通信协议：IIC
* 其他：该芯片在未接电池5V供电时输出波形将非常不稳定，需要连接电池使用或者软件关闭电池通道，这样的话情况将会得到缓解

###  RTC

* 芯片：PCF8563
* 总线通信协议：IIC

### 概述
<img src="./assets/T-Display-S3-AMOLED-1.43-info-zh.jpg" alt="summary" width=80%>

| 组件 | 描述 |
| :--: | :--: |
| MCU | ESP32-S3R8 Dual-core LX7 microprocessor |
| FLASH| 16MB |
| PSRAM | 8MB|
| 屏幕 | 1.43 英寸 SH8601 AMOLED |
| 触摸 | FT3168 触摸电容屏 |
| 总线 | QSPI |
| LoRa | 1276:868,915Mhz |
| 存储 | TF 卡 |
| 充电芯片 | SY6970 |
| RTC | PCF8563 |
| 无线 | 2.4 GHz Wi-Fi & Bluetooth 5 (LE) |
| USB | 1 × USB Port and OTG(TYPE-C接口) |
| IO 接口 | 2 x 2.54mm间距 2*7 拓展IO接口 |
| 拓展接口 | 1 × QWIIC接口 + JST-GH 1.25MM 接口 +1 x 电池座子 |
| 按键 | 1 x RESET 按键 + 1 x BOOT 按键 |
| 尺寸 | **45x45x11mm** |

## 快速开始

### 示例支持

| Example | PlatformIO/Arduino | ESP-IDF | Description |
| :------ | :----------------: | :-----: | :---------- |
| [FT3168](https://github.com/Xinyuan-LilyGO/T-Display-S3-AMOLED-1.43-1.75/tree/main/examples/FT3168) | ✓ | | FT3168触摸示例 |
| [Original Test](https://github.com/Xinyuan-LilyGO/T-Display-S3-AMOLED-1.43-1.75/tree/main/examples/Original_Test) | ✓ | | DO0143FAT01(DO0143FMST02)出厂测试 |
| [GFX](https://github.com/Xinyuan-LilyGO/T-Display-S3-AMOLED-1.43-1.75/tree/main/examples/GFX) | ✓ | | GFX图形库示例 |
| [GFX FT3168 Image](https://github.com/Xinyuan-LilyGO/T-Display-S3-AMOLED-1.43-1.75/tree/main/examples/GFX_FT3168_Image) | ✓ | | GFX图像显示示例 |
| [SY6970](https://github.com/Xinyuan-LilyGO/T-Display-S3-AMOLED-1.43-1.75/tree/main/examples/SY6970) | ✓ | | SY6970电源管理示例 |
| [SY6970 OTG](https://github.com/Xinyuan-LilyGO/T-Display-S3-AMOLED-1.43-1.75/tree/main/examples/SY6970_OTG) | ✓ | | SY6970 OTG功能示例 |
| [Light Sleep Wake Up](https://github.com/Xinyuan-LilyGO/T-Display-S3-AMOLED-1.43-1.75/tree/main/examples/Light_Sleep_Wake_Up) | ✓ | | 轻睡眠唤醒示例 |
| [Deep Sleep Wake Up](https://github.com/Xinyuan-LilyGO/T-Display-S3-AMOLED-1.43-1.75/tree/main/examples/Deep_Sleep_Wake_Up) | ✓ | | 深度睡眠唤醒示例 |
| [PCF8563](https://github.com/Xinyuan-LilyGO/T-Display-S3-AMOLED-1.43-1.75/tree/main/examples/PCF8563) | ✓ | | PCF8563 RTC示例 |
| [PCF8563 Scheduled INT](https://github.com/Xinyuan-LilyGO/T-Display-S3-AMOLED-1.43-1.75/tree/main/examples/PCF8563_Scheduled_INT) | ✓ | | PCF8563定时中断示例 |
| [PCF8563 Timer INT](https://github.com/Xinyuan-LilyGO/T-Display-S3-AMOLED-1.43-1.75/tree/main/examples/PCF8563_Timer_INT) | ✓ | | PCF8563计时器中断示例 |
| [Deep Sleep PCF8563 Scheduled Wake Up](https://github.com/Xinyuan-LilyGO/T-Display-S3-AMOLED-1.43-1.75/tree/main/examples/Deep_Sleep_PCF8563_Scheduled_Wake_Up) | ✓ | | PCF8563定时唤醒深度睡眠示例 |
| [Deep Sleep PCF8563 Timer Wake Up](https://github.com/Xinyuan-LilyGO/T-Display-S3-AMOLED-1.43-1.75/tree/main/examples/Deep_Sleep_PCF8563_Timer_Wake_Up) | ✓ | | PCF8563计时器唤醒深度睡眠示例 |
| [SD](https://github.com/Xinyuan-LilyGO/T-Display-S3-AMOLED-1.43-1.75/tree/main/examples/SD) | ✓ | | SD卡读写示例 |
| [Original_Test_H0175Y003AM](https://github.com/Xinyuan-LilyGO/T-Display-S3-AMOLED-1.43-1.75/tree/main/examples/Original_Test_H0175Y003AM) | ✓ | | H0175Y003AM屏幕出厂测试 |
| [Original_Test_DO0143FMST10](https://github.com/Xinyuan-LilyGO/T-Display-S3-AMOLED-1.43-1.75/tree/main/examples/Original_Test_DO0143FMST10) | ✓ | | DO0143FMST10屏幕出厂测试 |
| [Deep_Sleep_Wake_Up_H0175Y003AM](https://github.com/Xinyuan-LilyGO/T-Display-S3-AMOLED-1.43-1.75/tree/main/examples/Deep_Sleep_Wake_Up_H0175Y003AM) | ✓ | | H0175Y003AM屏幕深度睡眠唤醒 |
| [Light_Sleep_Wake_Up_H0175Y003AM](https://github.com/Xinyuan-LilyGO/T-Display-S3-AMOLED-1.43-1.75/tree/main/examples/Light_Sleep_Wake_Up_H0175Y003AM) | ✓ | | H0175Y003AM屏幕轻睡眠唤醒 |
| [lvgl_benchmark](https://github.com/Xinyuan-LilyGO/T-Display-S3-AMOLED-1.43-1.75/tree/main/examples/lvgl_benchmark) | ✓ | | LVGL性能测试 |
| [iic_scan](https://github.com/Xinyuan-LilyGO/T-Display-S3-AMOLED-1.43-1.75/tree/main/examples/iic_scan) | | ✓ | I2C设备扫描 |
| [touch](https://github.com/Xinyuan-LilyGO/T-Display-S3-AMOLED-1.43-1.75/tree/main/examples/touch) | | ✓ | 触摸功能测试 |
| [screen_touch_lvgl_9](https://github.com/Xinyuan-LilyGO/T-Display-S3-AMOLED-1.43-1.75/tree/main/examples/screen_touch_lvgl_9) | | ✓ | 屏幕触摸与LVGL结合示例 |

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

| AMOLED屏幕引脚 | ESP32S3引脚 |
| :------------: | :---------: |
| SDIO0 | IO11 |
| SDIO1 | IO13 |
| SDIO2 | IO14 |
| SDIO3 | IO15 |
| SCLK | IO12 |
| CS | IO10 |
| RST | IO17 |
| EN | IO16 |

| 触摸芯片引脚 | ESP32S3引脚 |
| :---------: | :---------: |
| INT | IO9 |
| SDA | IO7 |
| SCL | IO6 |

| 电源芯片引脚 | ESP32S3引脚 |
| :---------: | :---------: |
| SDA | IO7 |
| SCL | IO6 |

| 电池测量引脚 | ESP32S3引脚 |
| :---------: | :---------: |
| BATTERY_VOLTAGE_ADC_DATA | IO4 |

| SD卡引脚 | ESP32S3引脚 |
| :-----: | :---------: |
| CS | IO4 |
| MOSI | IO39 |
| MISO | IO40 |
| SCLK | IO41 |

## 相关测试

### 功耗
| Firmware | Program | Description | 
| :------: | :-----: | :---------- | 
| `[T-Display-S3-AMOLED-1.43_V1.0][Light_Sleep_Wake_Up]_firmware_V1.0.0.bin` | `Light Sleep Wake Up` | 功耗: 1282.8uA |
| `[T-Display-S3-AMOLED-1.43_V1.0][Deep_Sleep_Wake_Up]_firmware_V1.0.0.bin` | `Deep Sleep Wake Up` | 功耗: 174.2uA | 

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
  A. 请按住"BOOT-0"按键重新下载程序。

## 项目
* [T-Display-S3-AMOLED-1.43-1.75_V1.0](https://github.com/Xinyuan-LilyGO/T-Display-S3-AMOLED-1.43-1.75/blob/main/project/T-Display-S3-AMOLED-1.43-1.75_V1.0.pdf)

## 资料
* [PCF8563](https://github.com/Xinyuan-LilyGO/T-Display-S3-AMOLED-1.43-1.75/blob/main/information/PCF8563.pdf)
* [SH8601](https://github.com/Xinyuan-LilyGO/T-Display-S3-AMOLED-1.43-1.75/blob/main/information/SH8601Z.pdf)
* [DO0143FAT10](https://github.com/Xinyuan-LilyGO/T-Display-S3-AMOLED-1.43-1.75/blob/main/information/DO0143FMST10-DWO.pdf)
* [AN_SY6970](https://github.com/Xinyuan-LilyGO/T-Display-S3-AMOLED-1.43-1.75/blob/main/information/AN_SY6970.pdf)
* [EVB_SY6970](https://github.com/Xinyuan-LilyGO/T-Display-S3-AMOLED-1.43-1.75/blob/main/information/EVB_SY6970.pdf)

## 依赖库
* [Arduino_GFX-1.3.7](https://github.com/moononournation/Arduino_GFX)
* [Arduino_DriveBus-1.1.16]()
* [JPEGDEC-1.2.8](https://github.com/bitbank2/JPEGDEC)
* [lvgl-8.3.5](https://lvgl.io)
* [MiniTV](https://github.com/moononournation/MiniTV)
* [SensorLib](https://github.com/lewisxhe/SensorsLib)

