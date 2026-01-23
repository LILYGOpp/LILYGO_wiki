---
title: LILYGO T-Display-S3-Long
show_source: false
tags: ESP32-S3, Long Display, AMOLED, IoT, Touch Screen
---

<div style="width:100%; display:flex;justify-content: center;">

![T-Display-S3-Long](./assets/T-Display-S3-Long-1.jpg)

</div>

<div style="padding: 1em 0 0 0; display: flex; justify-content: center">
    <a target="_blank" style="margin: 1em;color: white; font-size: 0.9em; border-radius: 0.3em; padding: 0.5em 2em; background-color:rgb(63, 201, 28)" href="https://lilygo.cc/products/t-display-s3-long">官网购买</a>
</div>

## 版本迭代:
| Version | Update date | Update description |
| :-----: | :---------: | :---------------- |
| T-Display-S3-Long_V1.0 | 最新版本 | 长条形显示屏开发板初始版本 |

## 购买链接

| Product | SOC | FLASH | PSRAM | Resolution | Screen Type | Link |
| :-----: | :--: | :---: | :---: | :--: | :--: | :--: |
| T-Display-S3-Long | ESP32-S3R8 | 16M | 8M (OPI) | 180×640 | AMOLED | [LILYGO Mall](https://www.lilygo.cc/products/t-display-s3-long) |

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

T-Display-S3-Long 是一款基于 ESP32-S3 的长条形显示屏开发板，采用 180×640 分辨率的 AMOLED 屏幕，提供独特的纵向显示体验。开发板搭载 ESP32-S3R8 双核处理器，配备 16MB Flash 存储和 8MB OPI PSRAM 内存，性能强劲。

板载电容触摸屏、QWIIC 传感器接口、电源管理芯片和 Type-C USB 接口，支持 Wi-Fi 和蓝牙 5.0 无线通信。紧凑的长条形设计适合智能家居控制面板、工业仪表显示、信息展示终端等应用场景。

## 预览

### 实物图

<div style="width:100%; display:flex;justify-content: center;">

![T-Display-S3-Long](./assets/T-Display-S3-Long-2.jpg)
</div>

## 模块

### MCU

* 芯片：ESP32-S3R8
* PSRAM：8MB (Octal SPI)
* FLASH：16MB
* 架构：双核 Xtensa LX7
* 无线：Wi-Fi 802.11b/g/n + Bluetooth 5.0

### 屏幕

* 尺寸：长条形 AMOLED
* 分辨率：180x640px
* 屏幕类型：AMOLED
* 驱动芯片：AXS15231B
* 接口：SPI/QSPI

### 触摸

* 类型：电容触摸屏
* 接口：I2C

### 电源管理

* 芯片：内置 PMU
* 功能：支持电池充放电管理
* OTG：支持外部设备供电

### 概述
<div style="width:100%; display:flex;justify-content: center;">

![alt text](assets/T-Display-S3-Long-info-zh.jpg)

</div>


| 组件 | 描述 |
| :--: | :--: |
| MCU | ESP32-S3R8 双核处理器 |
| FLASH | 16MB |
| PSRAM | 8MB (OPI) |
| 屏幕 | 180×640 AMOLED |
| 触摸 | 电容触摸屏 |
| 无线 | Wi-Fi 802.11b/g/n + Bluetooth 5.0 |
| USB | 1 × USB Port (TYPE-C接口) |
| 接口 | QWIIC 传感器接口 |
| 按键 | BOOT + RST |
| 功耗 | 工作: 90-350mA, 睡眠: 1.1mA |
| GPIO唤醒 | 支持 |

## 快速开始

### 示例程序

| 示例目录 | 描述 |
| :------ | :--- |
| [Factory](https://github.com/Xinyuan-LilyGO/T-Display-S3-Long/tree/master/examples/Factory) | 出厂测试程序 |
| [tft](https://github.com/Xinyuan-LilyGO/T-Display-S3-Long/tree/master/examples/tft) | 屏幕显示测试 |
| [touch](https://github.com/Xinyuan-LilyGO/T-Display-S3-Long/tree/master/examples/touch) | 触摸功能测试 |
| [QWIIC_Sensor](https://github.com/Xinyuan-LilyGO/T-Display-S3-Long/tree/master/examples/QWIIC_Sensor) | QWIIC 传感器示例 |
| [GFX_AXS15231B_Image](https://github.com/Xinyuan-LilyGO/T-Display-S3-Long/tree/master/examples/GFX_AXS15231B_Image) | 图形图像显示 |
| [lvgl_demo](https://github.com/Xinyuan-LilyGO/T-Display-S3-Long/tree/master/examples/lvgl_demo) | LVGL 图形界面演示 |

### PlatformIO 开发（推荐）

1. 安装 [Visual Studio Code](https://code.visualstudio.com/) 和 [Python](https://www.python.org/)
2. 在 VS Code 扩展中搜索并安装 "PlatformIO IDE"
3. 重启 VS Code 完成安装
4. 打开项目文件夹：`文件` → `打开文件夹` → 选择 `T-Display-S3-Long` 目录
5. 等待第三方库自动安装完成
6. 编辑 `platformio.ini` 文件，在 `[platformio]` 部分取消注释所需的示例路径
7. 点击左下角的 `✔` 编译项目
8. 连接开发板到电脑 USB 端口
9. 点击 `→` 上传固件
10. 点击 `🔌` 图标查看串口输出

### Arduino IDE 开发

1. 安装 [Arduino IDE](https://www.arduino.cc/en/software)
2. 下载或克隆 T-Display-S3-Long 项目
3. 复制 `T-Display-S3-Long/lib` 中的所有文件到 Arduino 库文件夹
4. 通过 `文件` → `打开` 打开项目示例
5. 配置开发板参数：

![Arduino设置](./assets/ArduinoIDE.jpg)

6. 选择正确的端口
7. 点击上传按钮，等待编译和烧录完成

### ESP32 基础示例

* [BLE 示例](https://github.com/espressif/arduino-esp32/tree/master/libraries/BLE)
* [WiFi 示例](https://github.com/espressif/arduino-esp32/tree/master/libraries/WiFi)
* [SPIFFS 示例](https://github.com/espressif/arduino-esp32/tree/master/libraries/SPIFFS)
* [FFat 示例](https://github.com/espressif/arduino-esp32/tree/master/libraries/FFat)
* 更多 ESP32 功能示例参考 [arduino-esp32-libraries](https://github.com/espressif/arduino-esp32/tree/master/libraries)

### 开发平台
1. [Platform IO](https://platformio.org/) - 推荐使用
2. [Arduino IDE](https://www.arduino.cc/en/software)
3. [ESP-IDF](https://www.espressif.com/zh-hans/products/sdks/esp-idf)

## 引脚总览

<div style="width:100%; display:flex;justify-content: center;">

![1](assets/T-Display-S3-Long-pin-zh.jpg)

</div>

```c
#define TFT_QSPI_CS           12
#define TFT_QSPI_SCK          17
#define TFT_QSPI_D0           13
#define TFT_QSPI_D1           18
#define TFT_QSPI_D2           21
#define TFT_QSPI_D3           14
#define TFT_QSPI_RST          16
#define TFT_BL                1


#define PIN_BAT_VOLT          2

#define PIN_BUTTON_1          0
#define PIN_BUTTON_2          21

#define SPI_SD_CS            38
#define SPI_SD_MOSI           39
#define SPI_SD_MISO           41
#define SPI_SD_SCLK           40


#define TOUCH_IICSCL 10
#define TOUCH_IICSDA 15
#define TOUCH_INT    11
#define TOUCH_RES    16

```
## 相关测试

### 功耗测试
| 工作模式 | 电流消耗 | 说明 |
| :------: | :------: | :--- |
| 正常工作 | 90-350mA | Wi-Fi 开启，240MHz 频率 |
| 睡眠模式 | 1.1mA | 低功耗待机 |
| GPIO唤醒 | 待测试 | 外部中断唤醒 |

## 常见问题

* **Q. 开发板无法烧录程序怎么办？**  
  A. 手动进入下载模式：
  1. 通过 USB 连接开发板
  2. 按住 BOOT 按键
  3. 在按住 BOOT 的同时按下 RST 按键
  4. 先释放 RST，再释放 BOOT
  5. 此时可以正常上传程序

* **Q. USB 设备频繁断开连接？**  
  A. 检查 USB 线缆质量，尝试更换其他 USB 端口，确保电源供应稳定。

* **Q. OTG 功能如何使用？**  
  A. 需要软件启用 PMU 的 OTG 功能：
  ```cpp
  PMU.enableOTG();   // 启用 OTG 电源输出
  PMU.disableOTG();  // 禁用 OTG 电源输出
  ```

* **Q. 电池充电指示灯闪烁？**  
  A. 当未连接电池只连接 USB 时，状态指示灯会闪烁。可以使用 `PMU.disableStatLed()` 关闭指示灯，但也会禁用充电状态指示。如需启用，调用 `PMU.enableStatLed()`。

* **Q. 物理开关的作用？**  
  A. 将物理开关切换到 OFF 会完全断开电池与主板的连接。需要充电时，将开关切换到 ON。

* **Q. 固件验证方法？**  
  A. 如果遇到问题，可以烧录 [预编译固件](./firmware/README.MD) 来验证硬件是否正常。

## 项目

* [T-Display-S3-Long 项目代码](https://github.com/Xinyuan-LilyGO/T-Display-S3-Long)
* [原理图]()
* [硬件设计文件]()

## 资料

* [ESP32-S3 数据手册](https://www.espressif.com.cn/sites/default/files/documentation/esp32-s3_datasheet_en.pdf)
* [AXS15231B 屏幕驱动](https://github.com/Xinyuan-LilyGO/T-Display-S3-Long)
* [预编译固件](./firmware/README.MD)

## 依赖库

* [LVGL 8.3.0](https://github.com/lvgl/lvgl) - 嵌入式图形库（注意：不要升级版本，已强制开启软件旋转）
* [XPowersLib](https://github.com/lewisxhe/XPowersLib) - 电源管理库
* [Arduino_GFX](https://github.com/moononournation/Arduino_GFX) - 图形显示库
* [Adafruit_BusIO](https://github.com/adafruit/Adafruit_BusIO) - 总线通信库
* [TFT_eSPI](https://github.com/Bodmer/TFT_eSPI) - TFT 显示驱动库
```

