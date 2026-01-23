---
title: LILYGO T5 E-Paper S3 Pro
show_source: false
tags: E-Paper, ESP32-S3, LoRa, GPS, Magsafe
---

<div style="width:100%; display:flex;justify-content: center;">

![T5 E-Paper S3 Pro](./assets/T5-E-Paper-S3-Pro1.jpg)

</div>

<div style="padding: 1em 0 0 0; display: flex; justify-content: center">
    <a target="_blank" style="margin: 1em;color: white; font-size: 0.9em; border-radius: 0.3em; padding: 0.5em 2em; background-color:rgb(63, 201, 28)" href="https://lilygo.cc/products/t5-e-paper-s3-pro">官网购买</a>
</div>

## 版本迭代:
|                                       ID                                       |  Hardware   |  Software   | Remark |
| :----------------------------------------------------------------------------: | :---------: | :---------: | :----: |
| [H752-01](https://github.com/Xinyuan-LilyGO/T5S3-4.7-e-paper-PRO/tree/H752-01) | v1.0-241224 | v1.2_250118 | latest |
| [H752](https://github.com/Xinyuan-LilyGO/T5S3-4.7-e-paper-PRO/tree/H752)    | v1.0-240810 | v1.0-241203 |   -    |

H752-01 新版本：
- 新增墨水屏电源管理芯片 TPS65185；
- 支持局部刷新，可调节 Vcom 电压以控制显示色彩深度；
- 支持 [epdiy](https://github.com/vroland/epdiy) v7 直接驱动。
- 新增 GPS 模块；

## 购买链接

| Product | SOC | FLASH | PSRAM | Link |
| :-----: | :--: | :---: | :---: | :--: |
| T5-4.7-S3 Epaper PRO | ESP32-S3-WROOM-1 | 16MB | 8MB | [LILYGO Mall](https://lilygo.cc/products/t5-e-paper-s3-pro) |

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

T5-4.7-S3 Epaper PRO 是一款多功能物联网设备，基于 ESP32-S3-WROOM-1 主控芯片（8MB PSRAM + 16MB FLASH）设计，集成 LoRa SX1262 远距离通信模块、4.7英寸电子墨水屏（低功耗持久显示）及电容式触摸屏（支持两点触控），可扩展 L76K GPS 模块（定位数据通过 TX/RX 引脚传输）与实时时钟（RTC）（SDA/SCL 引脚同步时间）。设备支持 MagSafe 磁吸充电便捷供电，内置 TF 卡扩展槽与 M4 螺孔（固定或外接配件），并通过丰富接口（SPI、UART 等）兼容传感器与外部设备，适用于电子标签、远程监测、户外导航等场景，兼具低功耗、高兼容性与交互灵活性。

## 预览

### 实物图

<div style="width:100%; display:flex;justify-content: center;">

![T5 E-Paper S3 Pro](./assets/T5-E-Paper-S3-Pro2.jpg)

</div>

### 引脚图

<img src="./assets/T5-E-Paper-S3-Pro-zh.jpg" alt="summary" width=100%>

## 模块

### MCU

* 芯片：ESP32-S3-WROOM-1
* PSRAM：8MB
* FLASH：16MB
* 无线：Wi-Fi 802.11 b/g/n; Bluetooth 5.0 (BLE)
* 其他说明：更多资料请访问[乐鑫官方ESP32-S3数据手册](https://www.espressif.com.cn/sites/default/files/documentation/esp32-s3_datasheet_en.pdf)

### 电子墨水屏

* 驱动IC：ED047TC1
* 尺寸：4.7英寸
* 分辨率：960×540像素
* 灰度：16级灰度
* 电源驱动：TPS65185

### 通信模块

* LoRa：SX1262芯片，支持433MHz~915MHz频段（可选）
* GPS：MIA-M10Q GNSS模块
* 无线：2.4GHz Wi-Fi & Bluetooth 5.0 (BLE)

### 触摸屏

* 芯片：GT911
* 类型：电容式触摸屏
* 支持：两点触控
* 地址：0x5D

### 电源管理

* 电池：3.7V 1500mAh锂聚合物电池
* 充电芯片：BQ25896 (0x6B), BQ27220 (0x55)
* 充电方式：MagSafe磁吸充电 + USB充电
* 电子墨水屏电源驱动：TPS65185 (0x68)

### 外设与扩展

* 实时时钟：PCF85063 (0x51)
* IO扩展：PCA9535PW (0x20)
* 存储：TF卡扩展
* 扩展接口：2 × QWIIC接口

### 概述

| 组件 | 描述 |
| :--: | :--: |
| MCU | ESP32-S3-WROOM-1 |
| FLASH | 16MB |
| PSRAM | 8MB |
| LoRa | SX1262 (433MHz~915MHz可选) |
| GPS | MIA-M10Q GNSS模块 |
| 屏幕 | ED047TC1 4.7英寸电子墨水屏 (960×540, 16级灰度) |
| 触摸 | GT911电容触摸屏（两点触控） |
| 电源驱动 | TPS65185电子墨水屏电源管理 |
| 电池管理 | BQ25896, BQ27220充电芯片 |
| 电池 | 3.7V 1500mAh锂聚合物电池 |
| 充电方式 | MagSafe磁吸充电 + USB充电 |
| 时钟 | PCF85063实时时钟 |
| IO扩展 | PCA9535PW IO扩展芯片 |
| 存储 | TF卡扩展 |
| 无线 | 2.4 GHz Wi-Fi & Bluetooth 5 (LE) |
| USB | Type-C接口 |
| 扩展接口 | 2 × QWIIC接口 |
| 按键 | 1 x RST按键 + 1 x BOOT按键 + 1 x IO48按键 + 1 x PWR按键 |
| 安装孔 | 2 × M4mm螺孔 |
| 尺寸 | **129×69×11mm** |

## 快速开始

### 示例支持

~~~
 -✅ bq25896：bq25896 test
 -✅ bq27220：bq27220 test
 -✅ display_test：Ink screen display test.
 -✅ factory：Factory firmware program.
 -✅ GPS：The GPS test needs to be done outdoors.
 -✅ io_extend：IO expansion chip test.
 -✅ lora_recv：SX1262 LoRa send test.
 -✅ lora_send：SX1262 LoRa recv test.
 -✅ lvgl_test：Test using LVGL as image engine.
 -✅ rtc_pcf8563：Real-time clock chip test.
 -✅ sd_card：SD card read test.
 -✅ touch：GT911 test.
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

~~~c
// BOARD PIN DEFINE
#define BOARD_GPS_RXD       44
#define BOARD_GPS_TXD       43
#define SerialMon           Serial
#define SerialGPS           Serial2

#define BOARD_I2C_PORT      (0)
#define BOARD_SCL           (40)
#define BOARD_SDA           (39)

#define BOARD_SPI_MISO      (21)
#define BOARD_SPI_MOSI      (13)
#define BOARD_SPI_SCLK      (14)

#define BOARD_TOUCH_SCL     (BOARD_SCL)
#define BOARD_TOUCH_SDA     (BOARD_SDA)
#define BOARD_TOUCH_INT     (3)
#define BOARD_TOUCH_RST     (9)

#define BOARD_RTC_SCL       (BOARD_SCL)
#define BOARD_RTC_SDA       (BOARD_SDA)
#define BOARD_RTC_IRQ       (2)

#define BOARD_SD_MISO       (BOARD_SPI_MISO)
#define BOARD_SD_MOSI       (BOARD_SPI_MOSI)
#define BOARD_SD_SCLK       (BOARD_SPI_SCLK)
#define BOARD_SD_CS         (12)

#define BOARD_LORA_MISO     (BOARD_SPI_MISO)
#define BOARD_LORA_MOSI     (BOARD_SPI_MOSI)
#define BOARD_LORA_SCLK     (BOARD_SPI_SCLK)
#define BOARD_LORA_CS       (46)
#define BOARD_LORA_IRQ      (10)
#define BOARD_LORA_RST      (1)
#define BOARD_LORA_BUSY     (47)

#define BOARD_BL_EN         (11)
#define BOARD_PCA9535_INT   (38)
#define BOARD_BOOT_BTN      (0)

// ED047TC1 --- e-ink paper
#define EP_SCL             (40)
#define EP_SDA             (39)
#define EP_INTR            (38)
#define EP_I2C_PORT      I2C_NUM_0

#define EP_D7              (8)
#define EP_D6              (18)
#define EP_D5              (17)
#define EP_D4              (16)
#define EP_D3              (15)
#define EP_D2              (7)
#define EP_D1              (6)
#define EP_D0              (5)
#define EP_CKV             (48) /* Control Lines */
#define EP_STH             (41)
#define EP_LEH             (42)
#define EP_STV             (45)
#define EP_CKH             (4)   /* Edges */

// PCA9535
// Extend the interface and set the read/write ports via I2C.
// IO1X
#define PCA9535_IO10_EP_OE          // EP Output enable source driver
#define PCA9535_IO11_EP_MODE        // EP Output mode selection gate driver
#define PCA9535_IO12_BUTTON
#define PCA9535_IO13_TPS_PWRUP
#define PCA9535_IO14_VCOM_CTRL
#define PCA9535_IO15_TPS_WAKEUP
#define PCA9535_IO16_TPS_PWR_GOOD
#define PCA9535_IO17_TPS_INT
// IO0X
#define PCA9535_IO00
#define PCA9535_IO01
#define PCA9535_IO02
#define PCA9535_IO03
#define PCA9535_IO04
#define PCA9535_IO05
#define PCA9535_IO06
#define PCA9535_IO07

~~~


## 相关测试

## 常见问题

* **Q. 看了以上教程我还是不会搭建编程环境怎么办？**  
  A. 如果看了以上教程还不懂如何搭建环境的可以参考[LilyGo-Document](https://github.com/Xinyuan-LilyGO/LilyGo-Document)文档说明来搭建。

* **Q. 为什么打开Arduino IDE时他会提醒我是否要升级库文件？我应该升级还是不升级？**  
  A. 选择不升级库文件，不同版本的库文件可能不会相互兼容所以不建议升级库文件。

* **Q. MagSafe充电和USB充电有什么区别？**  
  A. MagSafe提供便捷的磁吸充电体验，USB充电是传统有线充电方式，两者可同时使用。

* **Q. 为什么我的板子一直烧录失败呢？**  
  A. 请按住"BOOT"按键重新下载程序。

## 项目
* [T5 E-paper S3 Pro V1.0](https://github.com/Xinyuan-LilyGO/T5S3-4.7-e-paper-PRO/blob/H752-01/hardware/T5%20E-paper%20S3%20Pro%20V1.0%2024-12-24.pdf)

## 资料
* [ESP32-S3 Datasheet](https://www.espressif.com.cn/sites/default/files/documentation/esp32-s3_datasheet_en.pdf)
* [ED047TC1 Screen Datasheet](https://github.com/Xinyuan-LilyGO/T5S3-4.7-e-paper-PRO/blob/H752-01/hardware/ED047TC1.pdf)
* [MIA-M10Q GPS Datasheet](https://github.com/Xinyuan-LilyGO/T5S3-4.7-e-paper-PRO/blob/H752-01/hardware/MIA-M10Q_DataSheet_UBX-22015849.pdf)
* [TPS65185 Power Driver](https://github.com/Xinyuan-LilyGO/T5S3-4.7-e-paper-PRO/blob/H752-01/hardware/tps65185.pdf)
* [CST226SE Touch Controller](https://github.com/lewisxhe/SensorLib/blob/master/datasheet/%E6%B5%B7%E6%A0%8E%E5%88%9B%E8%A7%A6%E6%91%B8%E8%8A%AF%E7%89%87%E7%A7%BB%E6%A4%8D%E6%89%8B%E5%86%8C-v3.5-20220701(1).pdf)

## 依赖库
* [epdiy](https://github.com/vroland/epdiy)
* [RadioLib@6.5.0](https://github.com/jgromes/RadioLib)
* [XPowersLib@^0.2.3](https://github.com/lewisxhe/XPowersLib)
* [TinyGPSPlus@^1.1.0](https://github.com/mikalhart/TinyGPSPlus)
* [SensorLib@0.2.2](https://github.com/lewisxhe/SensorsLib)
* [lvgl@^8.3.11](https://github.com/lvgl/lvgl/tree/v8.3.11)