---
title: LILYGO T-Beam 1W
show_source: false
tags: LoRa, GPS, ESP32-S3, OLED, AXP2101
---

<div style="width:100%; display:flex;justify-content: center;">

![T-Beam-1W](./assets/T-BEAM-1W-1.jpg)

</div>

<div style="padding: 1em 0 0 0; display: flex; justify-content: center">
    <a target="_blank" style="margin: 1em;color: white; font-size: 0.9em; border-radius: 0.3em; padding: 0.5em 2em; background-color:rgb(63, 201, 28)" href="https://lilygo.cc/products/t-beam-1w">官网购买</a>
</div>

## 版本迭代:
| Version | Update date | Update description |
| :-----: | :---------: | :---------------- |
| T-Beam-1W_V1.0 | 2024-06-15 | 初始版本 |
| T-Beam-1W_V1.1 | 2024-08-22 | 优化电源电路，增加风扇控制 |

## 购买链接

| Product | SOC | FLASH | PSRAM | PMU | Link |
| :-----: | :--: | :---: | :---: | :--: | :--: |
| T-Beam-1W | ESP32-S3FN8 | 16MB | 8MB (OPI PSRAM) | AXP2101 | [LILYGO Mall](https://lilygo.cc/products/t-beam-1w) |

## 目录
- [概述](#概述)
- [功能框图](#功能框图)
- [规格参数](#规格参数)
- [快速开始](#快速开始)
- [引脚映射](#引脚映射)
- [电气参数](#电气参数)
- [按钮与LED说明](#按钮与led说明)
- [RF参数与注意事项](#rf参数与注意事项)
- [常见问题](#常见问题)
- [资源下载](#资源下载)

## 概述

T-Beam-1W 是一款集成了 **ESP32-S3** 双核处理器、**LoRa SX1262** 模块、**GPS L76K** 定位模块、**SH1106 OLED 屏幕**和 **AXP2101 电源管理芯片**的高性能物联网开发板。板载 TF 卡槽、QWIIC 接口、外部天线接口，支持 Wi-Fi、蓝牙 5.0 和 LoRa 通信，适用于远距离通信、定位追踪、环境监测等应用场景。

> **使用须知：**
> 1. 本板不对外接 7.4V 电池充电，仅由电池供电。
> 2. 发射前务必连接天线，否则易损坏 RF 模块。
> 3. 引脚表中标有 * 的 GPIO 已连接内部模块，无法复用。
> 4. 本板上 RF 模块最大输出功率为 32dBm。

### 实物图

<div style="width:100%; display:flex;justify-content: center;">

![T-Beam-1W](./assets/T-BEAM-1W-2.jpg)

</div>

## 规格参数

![T-BEAM-1W](./assets/T-BEAM-1W-info-zh.jpg)

| 组件 | 规格 |
| :--: | :--: |
| MCU | ESP32-S3FN8，双核 LX7，240MHz |
| 无线 | Wi-Fi 2.4GHz + 蓝牙 5.0 LE |
| LoRa 模块 | SX1262，支持 830~945MHz |
| GPS 模块 | L76K，支持多星座定位 |
| 屏幕 | 1.3 英寸 SH1106 OLED，128×64 分辨率 |
| 存储 | 16MB Flash + 8MB PSRAM，支持 TF 卡扩展 |
| 电源管理 | AXP2101，支持 USB-C 供电，7.4V 电池输入 |
| 接口 | QWIIC、UART、SPI、I2C、TF 卡槽 |
| 按键 | BOOT、RESET、自定义按键 |
| 尺寸 | 133 × 43 × 27 mm |
| USB 供电 | 5V / 500mA |

## 快速开始

### PlatformIO 环境搭建

1.  安装 [Visual Studio Code](https://code.visualstudio.com/) 和 [Python](https://www.python.org/)
2.  在 `Visual Studio Code` 的扩展中搜索 `PlatformIO` 插件并安装
3.  安装完成后，需要重启 `Visual Studio Code`
4.  重启后，在左上角选择 `文件` -> `打开文件夹` -> 选择 `LilyGo-LoRa-Series` 目录
5.  等待第三方依赖库安装完成
6.  点击打开 `platformio.ini` 文件，在 `platformio` 栏目中
7.  在 `default_envs` 下选择您要使用的开发板名称，并取消其注释
8.  取消其中一行 `src_dir = xxxx` 的注释，确保只有一行生效。请注意示例注释，其中说明了哪些功能可用、哪些不可用。
9.  点击左下角的 (✔) 符号进行编译
10. 使用 USB-C 数据线将开发板连接至电脑（Micro-USB 接口用于模块固件升级）
11. 点击 (→) 上传固件
12. 点击 (插头符号) 监视串行输出
13. 若无法烧录或 USB 设备持续闪烁，请查看下方的**常见问题解答**

### Arduino IDE 环境搭建

1. 安装  [Arduino IDE](https://www.arduino.cc/en/software)
2. 安装 [Arduino ESP32] [Arduino ESP32](https://docs.espressif.com/projects/arduino-esp32/en/latest/)
3. 将 `lib` 目录中的所有文件夹复制到 `Sketchbook 位置` 目录。如何找到您自己的库的位置，请参阅此处：[https://support.arduino.cc/hc/en-us/articles/4415103213714-Find-sketches-libraries-board-cores-and-other-files-on-your-computer](https://support.arduino.cc/hc/en-us/articles/4415103213714-Find-sketches-libraries-board-cores-and-other-files-on-your-computer)

* Windows：`C:\Users\{用户名}\Documents\Arduino`
* macOS：`/Users/{用户名}/Documents/Arduino`
* Linux：`/home/{用户名}/Arduino`

4. 打开相应的示例
* 打开下载的 `LilyGo-LoRa-Series`
* 打开 `examples`
* 选择示例文件并打开以 `ino` 结尾的文件

5. 在 Arduino IDE 工具项目中选择对应的开发板，并点击下方列表中的相应选项进行选择。

| Name                                 | Value                               |
| :------------------------------------ | :----------------------------------- |
| Board                                | **ESP32S3 Dev Module**              |
| Port                                 | Your port                           |
| USB CDC On Boot                      | Enable                              |
| CPU Frequency                        | 240MHZ(WiFi)                        |
| Core Debug Level                     | None                                |
| USB DFU On Boot                      | Disable                             |
| Erase All Flash Before Sketch Upload | Disable                             |
| Flash Mode                           | QIO 80Mhz                           |
| Flash Size                           | **16MB(128Mb)**                     |
| Arduino Runs On                      | Core1                               |
| USB Firmware MSC On Boot             | Disable                             |
| Partition Scheme                     | **16M Flash (3MB APP/9.9MB FATFS)** |
| PSRAM                                | **OPI PSRAM**                       |
| Upload Speed                         | 921600                              |
| Programmer                           | **Esptool**                         |

6. 请根据您的板型号（例如 `T_BEAM_1W`）取消每个草图的 `utilities.h` 文件的注释，否则编译时会报错
7. 上传示例

## 引脚映射
![T-BEAM-1W](./assets/T-BEAM-1W-pin.jpg)


| 引脚名称 | GPIO | 是否可用 |
| :--- | :---: | :---: |
| Uart1 TX | 43 | ✅ |
| Uart1 RX | 44 | ✅ |
| I2C SDA | 8 | ❌ |
| I2C SCL | 9 | ❌ |
| SPI MOSI | 11 | ❌ |
| SPI MISO | 12 | ❌ |
| SPI SCK | 13 | ❌ |
| SD CS | 10 | ❌ |
| GPS TX | 6 | ❌ |
| GPS RX | 5 | ❌ |
| GPS PPS | 7 | ❌ |
| GPS Wake-up | 16 | ❌ |
| LoRa RESET | 3 | ❌ |
| LoRa DIO1 | 1 | ❌ |
| LoRa CS | 15 | ❌ |
| LoRa LDO EN | 40 | ❌ |
| LoRa Ctrl | 21 | ❌ |
| LoRa BUSY | 38 | ❌ |
| BOOT 按键 | 0 | ❌ |
| 自定义按键 | 17 | ❌ |
| 板载 LED | 18 | ❌ |
| NTC ADC | 14 | ❌ |
| 电池 ADC | 4 | ❌ |
| 风扇控制 | 41 | ❌ |

> **注意：**
> - LDO EN 为模块内部使能引脚，高电平打开 Radio。
> - LoRa Ctrl 为内部 LNA 控制引脚，接收时高电平，发送/休眠时低电平。

## 电气参数

| 项目 | 说明 |
| :--- | :--- |
| USB-C 输入电压 | 3.9V ~ 6V |
| 充电功能 | 不支持 |
| 电池电压 | 7.4V |

> **提示：** 建议电池放电能力 ≥ 2A，否则高功率发射时可能触发保护。

## 按钮与LED说明

| 按钮 | 功能 |
| :--- | :--- |
| IO17 | 自定义按键 |
| BOOT | 下载模式/自定义 |
| RST | 复位 |
| PWR（电源键） | 长按 6 秒关机 |

| LED | 说明 |
| :--- | :--- |
| IO18 LED | 受 GPIO18 控制 |
| PPS LED | 随 GPS 脉冲闪烁 |
| USB LED | USB 连接时亮起 |

## 相关测试

| 频段 | 模块型号 | 频率范围 | 输出功率 | 调制方式 |
| :--- | :--- | :--- | :--- | :--- |
| 868MHz | SX1262 (XY16P35) | 830~950MHz | 最大 32dBm | LoRa/FSK/GMSK |
| 433MHz | SX1262 (XY16P354) | 400~520MHz | 最大 32dBm | LoRa/FSK/GMSK |

**重要提醒：**
1. 发射前务必连接天线。
2. 建议 PA 稳定时间 > 800us。
3. 发射前需提前切换 RF Switch 至 TX 通道，否则可能损坏 PA。

![RampTime](./assets/RampTime.jpg)

### RF Block Diagram

![RF Block Diagram](./assets/XY16P35.jpg)

### VCC=+5V, 400M~520MHz module output power dBm and current

![currnetA](./assets/currnetA.jpg)

### VCC=+5V, 830M~950MHz module output power dBm and current

![currnetB](./assets/currnetB.jpg)

## 常见问题

* **Q. 为什么烧录时 USB 设备不停闪烁？**  
  A. 请检查是否选择了正确的开发板型号，并确保 `utilities.h` 中宏定义已打开。

* **Q. 为什么 LoRa 发送距离很近？**  
  A. 请确认天线已连接，且 RF Switch 切换正确，输出功率设置合理。

* **Q. 电池供电时为何无法开机？**  
  A. 请检查电池电压是否在 7.4V 左右，电池放电能力是否足够。

* **Q. GPS 定位慢或无信号？**  
  A. 请确保在室外空旷环境使用，并检查天线连接。

* RF Block Diagram

## 资源下载

* [原理图 PDF](https://github.com/Xinyuan-LilyGO/LilyGo-LoRa-Series/blob/13db0dd8bd4fdc8c080ef1337d56255529870630/schematic/T-Beam_1W_V1.0.pdf)
* [SX1262 数据手册](https://www.semtech.com/products/wireless-rf/lora-transceivers/sx1262)
* [AXP2101 数据手册](https://www.x-powers.com/en/product/axp2101)
* [示例代码库](https://github.com/Xinyuan-LilyGO/LilyGo-LoRa-Series)