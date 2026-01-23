---
title: LILYGO T-Halow
show_source: false
tags: ESP32-S3, WiFi-HaLow, 802.11ah, Camera, IoT, LongRange
---

<div align="center">
  <img src="./assets/T-Halow-1.jpg" alt="T-Halow 产品主图" width="80%">
</div>

<div style="padding: 1em 0; display: flex; justify-content: center">
  <a target="_blank" style="margin: 1em; color: white; font-size: 0.9em; border-radius: 0.3em; padding: 0.5em 2em; background-color: rgb(103, 175, 8)" href="https://lilygo.cc/products/t-halow">官网购买</a>
</div>

## 📦 项目版本

T-Halow 有两个不同版本，主要在配对方式上有所区别。请根据您手中的硬件版本选择相应的文档：

| 版本 | 发布时间 | 文档链接 | 视频教程 |
| :---: | :---: | :---: | :---: |
| VER1 | 2023-08-23 | [版本1文档](https://github.com/Xinyuan-LilyGO/T-Halow/blob/master/docs/ver1/readme.md) | |
| VER2 | 2024-04-16 | [版本2文档](https://github.com/Xinyuan-LilyGO/T-Halow/blob/master/docs/ver2/readme.md) | [观看视频](https://www.youtube.com/watch?v=nM2GE8Imshc) |

> **注意**：两个版本的 T-Halow 使用相同的 [AT 指令集](https://github.com/Xinyuan-LilyGO/T-Halow/blob/master/docs/AT_cmd.md)。

关于 TX-AH 模块的 SDK，泰芯暂不提供详细的 API 说明。如需自行编译，可参考此项目：[hgSDK](https://github.com/Xinyuan-LilyGO/T-Halow/blob/master/SDK/hgSDK-v1.6.4.3-29063-wnb)


## 🚀 产品概述

<div align="center">
  <img src="./assets/T-Halow-2.jpg" alt="T-Halow 产品主图" width="80%">
</div>

**LILYGO T-Halow** 是一款集成 **ESP32-S3** 主控、**Wi-Fi HaLow (802.11ah)** 远距离通信、**200万/500万像素摄像头** 及 **RJ45 以太网口** 的多功能物联网开发板。专为需要远距离、低功耗、高可靠性的图像传输与无线通信场景设计，适用于安防监控、远程巡检、环境监测等应用。

### 核心特性


- ✅ **双频远距通信**：支持 2.4GHz Wi-Fi + 蓝牙 5 (LE) 与 Wi-Fi HaLow (730-928MHz)
- ✅ **高清摄像能力**：支持 OV2640 / OV5640 摄像头，最高 500万像素
- ✅ **有线网络备用**：内置 RJ45 以太网口，支持可替换固件启用网络功能
- ✅ **大容量存储**：16MB Flash + 8MB PSRAM，支持 TF 卡扩展
- ✅ **户外供电方案**：支持 18650 电池供电，集成电池 ADC 监测


## 📊 硬件规格

| 项目 | 参数 |
|------|------|
| 主控芯片 | ESP32-S3 (双核，240MHz) |
| Flash 存储 | 16MB |
| PSRAM | 8MB |
| 摄像头接口 | 支持 OV2640 (2MP) / OV5640 (5MP) |
| 无线协议 | 2.4GHz Wi-Fi + 蓝牙 5 (LE) |
| Wi-Fi HaLow 频段 | 模式1：902–928MHz (915M Saw)<br>模式2：859–894MHz (875M Saw) |
| 有线网络 | RJ45 以太网口（需刷入对应固件） |
| 供电方式 | USB-C (5V/500mA) / 18650 锂电池 |
| 电池监测 | ADC 引脚 (I003) |
| 编程平台 | Arduino IDE, VS Code, ESP-IDF |
| 尺寸 | 113mm × 33mm |

### 引脚图 (PINMAP)

![T-Halow 引脚图](./assets/T-Halow-pin.jpg)

**摄像头引脚对应表：**

| 摄像头信号 | GPIO 引脚 |
|------------|-----------|
| SIOC       | I004      |
| SIOD       | I005      |
| HREF       | I017      |
| PCLK       | I012      |
| MCLK       | I008      |
| VSYNC      | I016      |
| RESET      | I018      |
| Data0–Data9 | I009–I021, I047–I048 |

**SPI 引脚 (用于以太网或外设)：**
- SPI_CS: I039
- SPI_SCK: I041
- SPI_MOSI: I040
- SPI_MISO: I042



## 📡 Wi-Fi HaLow 介绍

Wi-Fi HaLow (802.11ah) 是专为物联网优化的远距离、低功耗 Wi-Fi 标准。在相同发射功率下，比传统 2.4GHz/5GHz Wi-Fi 拥有更远的传输距离与更强的穿墙能力。

**T-Halow 搭载泰芯 TX-AH 模组，支持：**
- 工作频段：730–950MHz
- 信道带宽：1/2/4/8MHz 可调
- 物理吞吐量：150Kbps – 32.5Mbps
- 传输距离：可达数公里（视环境）


## 🔄 固件下载

如需下载 TX-AH 固件，可使用以下两种方法：

| 下载方式 | 说明文档 |
| :--- | :--- |
| 通过下载器下载固件 | [查看文档](./docs/Firmware_burn_1.md) |
| 通过 ESP32 flash_download_tool 下载固件 | [查看文档](./docs/Firmware_burn_2.md) |


## 📚 官方文档（英文）

更多 TX-AH 模块信息请访问泰芯官方网站：[资料下载](https://en.taixin-semi.com/Product?prouctSubClass=33)

| 文档名称 | 链接 |
| :--- | :--- |
| 频率设置说明 | [下载](https://github.com/Xinyuan-LilyGO/T-Halow/blob/master/hardware/TX_AH/泰芯802.11AH%20Frequency%20setting%20description_20231130110312.pdf) |
| TX-AH-Rx00P 系列模块技术规格书 | [下载](https://github.com/Xinyuan-LilyGO/T-Halow/blob/master/hardware/TX_AH/泰芯802.11ahTX-AH-Rx00P%20Series%20module%20technical%20specification_20231116174457.pdf) |
| TX-AH-Rx00P 桥接说明 | [下载](https://github.com/Xinyuan-LilyGO/T-Halow/blob/master/hardware/TX_AH/泰芯AH%20Bridge%20instructions_20230908122753.pdf) |
| AH 模块 AT 指令开发指南 | [下载](https://github.com/Xinyuan-LilyGO/T-Halow/blob/master/hardware/TX_AH/泰芯AH%20Module%20AT%20instruction%20development%20guide_20230524100503.pdf) |
| AH 模块开发板说明 | [下载](https://github.com/Xinyuan-LilyGO/T-Halow/blob/master/hardware/TX_AH/泰芯AH%20Module%20development%20board%20instructions_20230621205234.pdf) |
| AH 模块硬件设计指南 | [下载](https://github.com/Xinyuan-LilyGO/T-Halow/blob/master/hardware/TX_AH/泰芯AH%20Module%20hardware%20Design%20Guide_20230621170639.pdf) |
| AH 性能测试方法 | [下载](https://github.com/Xinyuan-LilyGO/T-Halow/blob/master/hardware/TX_AH/泰芯AH%20Performance%20test%20method_20230908122816.pdf) |
| AH-RF EMC 认证指南 | [下载](https://github.com/Xinyuan-LilyGO/T-Halow/blob/master/hardware/TX_AH/泰芯AH-RF%20EMC%20Certification%20guide_20230720140052.pdf) |


## 📊 TX-AH 型号对比

| 模组名称 | 正面丝印区分 | 认证情况 | 支持频段 | 备注 |
| :---: | :---: | :---: | :---: | :--- |
| TX-AH-R900P | 左下角 P9，右下角 P9 | 可通过 FCC/CE 认证 | 860MHz ~ 928MHz | 标准版本 |
| TX-AH-R900PNR | 左下角 P9，右下角 NR | 可通过 FCC 认证 | 902MHz ~ 928MHz | 带 915M Saw，改善接收性能 |
| TX-AH-R900PNR-860M | 左下角 86，右下角 NR | 可通过 CE 认证 | 859MHz ~ 894MHz | 带 875M Saw，改善接收性能 |

**备注：**
1. P 系列模组与早期 A 系列模组的区别：
   - (1) P 系列左下角丝印以 P 开头，A 系列以 R 开头
   - (2) P 系列的 PIN4/5 需要供电，A 系列不需要
2. 模组默认不带屏蔽罩，带屏蔽罩的版本在模组名称后加 **-S** 后缀（S 表示 Shield）


## 🚀 快速开始

🟢 **推荐使用 PlatformIO**，因为这些示例是在 PlatformIO 上开发的。🟢

### PlatformIO 开发环境

1. 安装 [Visual Studio Code](https://code.visualstudio.com/) 和 [Python](https://www.python.org/)，克隆或下载本项目；
2. 在 VSCode 扩展中搜索并安装 `PlatformIO` 插件；
3. 安装完成后重启 VSCode；
4. 打开本项目，PlatformIO 会自动下载所需的三方库和依赖，首次过程较长，请耐心等待；
5. 所有依赖安装完成后，打开 `platformio.ini` 配置文件，在 `example` 中取消注释选择示例程序，然后按 `Ctrl+S` 保存；
6. 点击 VSCode 下方的 ☑️ 编译项目，插入 USB 并在 VSCode 中选择 COM 口；
7. 最后点击 ➡️ 按钮将程序下载到 Flash；

### Arduino IDE 开发环境

1. 安装 [Arduino IDE](https://www.arduino.cc/en/software)

2. 将 `本项目/lib/` 下的所有文件复制并粘贴到 Arduino 库路径（一般为 `C:\Users\用户名\Documents\Arduino\libraries`）；

3. 打开 Arduino IDE，点击左上角 `文件 -> 打开`，打开 `本项目/example/xxx/xxx.ino` 下的示例；

4. 按以下方式配置 Arduino，完成后可点击 Arduino 左上角按钮编译和下载；


| Arduino IDE Setting                  | Value                             |
| ------------------------------------ | --------------------------------- |
| Board                                | **ESP32S3 Dev Module**            |
| Port                                 | Your port                         |
| USB CDC On Boot                      | Enable                            |
| CPU Frequency                        | 240MHZ(WiFi)                      |
| Core Debug Level                     | None                              |
| USB DFU On Boot                      | Disable                           |
| Erase All Flash Before Sketch Upload | Disable                           |
| Events Run On                        | Core1                             |
| Flash Mode                           | QIO 80MHZ                         |
| Flash Size                           | **16MB(128Mb)**                   |
| Arduino Runs On                      | Core1                             |
| USB Firmware MSC On Boot             | Disable                           |
| Partition Scheme                     | **16M Flash(3M APP/9.9MB FATFS)** |
| PSRAM                                | **OPI PSRAM**                     |
| Upload Mode                          | **UART0/Hardware CDC**            |
| Upload Speed                         | 921600                            |
| USB Mode                             | **CDC and JTAG**                  |


## 🧭 应用场景

- 🏙️ **远程安防监控**：利用 HaLow 远距离回传摄像头画面
- 🌾 **农业环境监测**：大范围农田传感器数据收集
- 🏗️ **工地巡检**：远距离视频巡检与设备状态监控
- 🔬 **科研野外数据采集**：长距离可靠数据传输
- 📡 **物联网网关**：连接大量低功耗传感器节点

## ⚠️ 重要提示

❗ **更多 TX-AH 模块资料请参考泰芯官网**：[资料下载地址](https://www.taixin-semi.com/Product?prouctSubClass=33)


## 📚 资源下载

- [GitHub](https://github.com/Xinyuan-LilyGO/T-Halow/tree/master)



