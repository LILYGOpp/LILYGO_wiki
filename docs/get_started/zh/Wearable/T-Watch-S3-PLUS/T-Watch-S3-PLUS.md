---
title: LILYGO T-Watch S3 Plus
show_source: false
tags: T-Watch, ESP32-S3, 智能手表, GPS, LoRa
---

<div style="width:100%; display:flex;justify-content: center;">

![T-Watch S3 Plus](./assets/T-Watch-S3-PLUS1.jpg)

</div>

<div style="padding: 1em 0 0 0; display: flex; justify-content: center">
    <a target="_blank" style="margin: 1em;color: white; font-size: 0.9em; border-radius: 0.3em; padding: 0.5em 2em; background-color:rgb(63, 201, 28)" href="https://lilygo.cc/products/t-watch-s3-plus">官方商店</a>
</div>

## 版本迭代:
| 版本 | 更新日期 | 更新描述 |
| :-----: | :---------: | :---------------- |
| T-Watch-S3-Plus_V1.0 | 2024-01-01 | 初始版本，增加GPS功能 |

## 购买链接

| 产品 | SOC | FLASH | PSRAM | 链接 |
| :-----: | :--: | :---: | :---: | :--: |
| T-Watch S3 Plus | ESP32-S3 | 16M | 8M (Octal SPI) | [链接](https://lilygo.cc/products/t-watch-s3-plus) |

## 目录
- [描述](#描述)
- [预览](#预览)
- [模块](#模块)
- [快速开始](#快速开始)
- [常见问题](#常见问题)
- [项目](#项目)
- [资料](#资料)
- [依赖库](#依赖库)

## 描述

T-Watch S3 Plus 是基于 T-Watch S3 的增强版本，增加了GPS功能，是一款多功能智能可穿戴设备，集成了高性能硬件与无线通信技术，适用于运动健康监测、远程交互及音频场景。其核心配置包括1.54英寸240x240高清LCD显示屏，搭配BMA423轴传感器和电容式触摸模块，可精准追踪运动轨迹并提供灵敏触控操作，内置Max98357A音频放大器与PDM麦克风，支持高质量音频输出及语音指令输入。目前T-Watch S3 Plus有SX1262和SX1280两个LoRa版本，结合GPS模块，实现精确定位和远距离低功耗无线通信，适用于物联网与智能穿戴场景。

## 预览

### 实物图

<div style="width:100%; display:flex;justify-content: center;">

![T-Watch-S3-Plus](./assets/T-Watch-S3-PLUS2.jpg)

</div>

### 引脚图

<img src="./assets/T-Watch-S3-PLUS3.jpg" alt="summary" width=100%>

## 模块

### MCU

*   芯片：ESP32-S3
*   PSRAM：8M
*   FLASH：16M
*   其他说明：更多资料请访问[乐鑫官方ESP32-S3数据手册](https://www.espressif.com.cn/sites/default/files/documentation/esp32-s3_datasheet_en.pdf)

### 显示屏

*   尺寸：1.54英寸LCD
*   分辨率：240×240px
*   屏幕类型：LCD
*   总线通信协议：SPI

### 触摸

*   类型：电容触摸屏
*   总线通信协议：I2C

### 传感器

*   轴传感器：BMA423 (I2C)
*   电机驱动：DRV2605 (I2C)

### 音频

*   音频输出：Max98357A (I2S)
*   音频输入：PDM麦克风

### 通信模块

*   LoRa：SX1262/SX1280，支持433~923MHz频段
*   GPS：集成GPS模块
*   Wi-Fi：802.11 b/g/n
*   蓝牙：BLE 5.0

### 电源管理

*   芯片：AXP2101 高度集成的电源管理单元

### 概述

### ✨ 硬件特性

| 特性 | 参数 |
| --------------------- | ------------------------------------ |
| SOC | [乐鑫 ESP32-S3][1] |
| Flash | 16MB(QSPI) |
| PSRAM | 8MB (QSPI) |
| GNSS | [UBlox MIA-M10Q][2] |
| LoRa | [Semtech SX1262][3] |
| 加速度传感器 | [博世 BMA423][4] |
| 实时时钟 | [NXP PCF8563][5] |
| 电源管理 | [芯朋 AXP2101][6] |
| 触觉驱动器 | [德州仪器 DRV2605][7] |
| PDM麦克风 | [SPM1423HM4H-B][8] |
| PCM D类放大器 | [亚德诺 MAX98357A (3.2W D类)][9] |
| 电容触摸 | [FT6336U][10] |
| 红外发射器 | [IR12-21C][11] |

[1]: https://www.espressif.com.cn/en/products/socs/esp32-s3 "ESP32-S3"
[2]: https://www.u-blox.com/en/product/mia-m10-series "UBlox MIA-M10Q"
[3]: https://www.semtech.com/products/wireless-rf/lora-connect/sx1262 "Semtech SX1262"
[4]: https://www.mouser.com/datasheet/2/783/BSCH_S_A0010021471_1-2525113.pdf "BMA423"
[5]: https://www.nxp.com/products/PCF8563 "PCF8563"
[6]: http://www.x-powers.com/en.php/Info/product_detail/article_id/95 "AXP2101"
[7]: https://www.ti.com/product/DRV2605 "DRV2605"
[8]: https://media.digikey.com/pdf/Data%20Sheets/Knowles%20Acoustics%20PDFs/SPM1423HM4H-B.pdf "SPM1423HM4H-B"
[9]: https://www.analog.com/en/products/max98357a.html "MAX98357A"
[10]: https://buydisplay.com/download/ic/FT6236-FT6336-FT6436L-FT6436_Datasheet.pdf "FT6336U"
[11]: https://www.everlight-led.cn/zh/datasheet-download/item/ir12-21c-tr8-datasheet "IR12-21C"

### ✨ 显示特性

| 特性 | 参数 |
| --------------------- | -------------- |
| 分辨率 | 240 x 240 |
| 显示尺寸 | 1.3 英寸 |
| 表面亮度 | 450 cd/m² |
| 驱动IC | ST7789V3 (SPI) |
| 对比度 | 800:1 |
| 显示色彩 | 262K |
| 视角 | 全视角 (IPS) |
| 工作温度 | -20～70°C |

### 📍 [引脚映射](https://github.com/espressif/arduino-esp32/blob/master/variants/lilygo_twatch_s3/pins_arduino.h)

| 名称 | GPIO 编号 | 空闲 |
| ------------------------------------ | ------------------ | ---- |
| SDA | 10 | ❌ |
| SCL | 11 | ❌ |
| 触摸板(**FT6336U**) SDA | 39 | ❌ |
| 触摸板(**FT6336U**) SCL | 40 | ❌ |
| 触摸板(**FT6336U**) 中断 | 16 | ❌ |
| 触摸板(**FT6336U**) 复位 | 未连接 | ❌ |
| RTC(**PCF8563**) SDA | 共享I2C总线 | ❌ |
| RTC(**PCF8563**) SCL | 共享I2C总线 | ❌ |
| RTC(**PCF8563**) 中断 | 17 | ❌ |
| 传感器(**BMA423**) 中断 | 14 | ❌ |
| 传感器(**BMA423**) SDA | 共享I2C总线 | ❌ |
| 传感器(**BMA423**) SCL | 共享I2C总线 | ❌ |
| PCM放大器(**MAX98357A**) BCLK | 48 | ❌ |
| PCM放大器(**MAX98357A**) WCLK | 15 | ❌ |
| PCM放大器(**MAX98357A**) DOUT | 46 | ❌ |
| GNSS(**MIA-M10Q**) TX | 42 | ❌ |
| GNSS(**MIA-M10Q**) RX | 41 | ❌ |
| GNSS(**MIA-M10Q**) PPS | 未连接 | ❌ |
| LoRa(**SX1262 或 SX1280**) SCK | 3 | ❌ |
| LoRa(**SX1262 或 SX1280**) MISO | 4 | ❌ |
| LoRa(**SX1262 或 SX1280**) MOSI | 1 | ❌ |
| LoRa(**SX1262 或 SX1280**) 复位 | 8 | ❌ |
| LoRa(**SX1262 或 SX1280**) BUSY | 7 | ❌ |
| LoRa(**SX1262 或 SX1280**) CS | 5 | ❌ |
| LoRa(**SX1262 或 SX1280**) 中断 | 9 | ❌ |
| 显示屏 CS | 12 | ❌ |
| 显示屏 MOSI | 13 | ❌ |
| 显示屏 MISO | 未连接 | ❌ |
| 显示屏 SCK | 18 | ❌ |
| 显示屏 DC | 38 | ❌ |
| 显示屏 复位 | 未连接 | ❌ |
| 显示屏 背光 | 45 | ❌ |
| 充电器(**AXP2101**) SDA | 共享I2C总线 | ❌ |
| 充电器(**AXP2101**) SCL | 共享I2C总线 | ❌ |
| 充电器(**AXP2101**) 中断 | 21 | ❌ |
| 触觉驱动器(**DRV2605**) SDA | 共享I2C总线 | ❌ |
| 触觉驱动器(**DRV2605**) SCL | 共享I2C总线 | ❌ |
| PDM麦克风(**SPM1423HM4H**) SCK | 44 | ❌ |
| PDM麦克风(**SPM1423HM4H**) DATA | 47 | ❌ |
| 红外发射器 | 2 | ❌ |

### 🧑🏼‍🔧 I2C设备地址

| 设备 | 7位地址 | 共享总线 |
| -------------------------------- | ------------- | ----------- |
| [触摸面板 FT6336U][10] | 0x38 | ❌ 使用 Wire1 |
| [加速度传感器 BMA423][4] | 0x19 | ✅️ |
| [电源管理 AXP2101][6] | 0x34 | ✅️ |
| [实时时钟 PCF8563][5] | 0x51 | ✅️ |
| [触觉驱动器 DRV2605][7] | 0x5A | ✅️ |

### ⚡ 电源管理通道

| 通道 | 外设 |
| ---------- | ---------------------- |
| DC1 | **ESP32-S3** |
| DC2 | 未使用 |
| DC3 | 未使用 ~~**GNSS**~~ |
| DC4 | 未使用 |
| DC5 | 未使用 |
| LDO1(VRTC) | 未使用 |
| ALDO1 | 未使用 |
| ALDO2 | **显示屏背光** |
| ALDO3 | **显示屏和触摸** |
| ALDO4 | **LoRa** |
| BLDO1 | **GNSS** |
| BLDO2 | **DRV2605 使能** |
| DLDO1 | 未使用 |
| CPUSLDO | 未使用 |
| VBACKUP | **RTC 纽扣电池** |

* BLDO1 作为 GPS 电源（与后壳中的 BOOT 和 RST 按钮一起）
* DC3 最初用作 GPS 电源（后盖上没有 BOOT 和 RST 按钮）

### ⚡ 电气参数

| 特性 | 详情 |
| -------------------- | --------------------------- |
| 🔗USB-C 输入电压 | 3.9V-6V |
| ⚡充电电流 | 0-1024mA (\(可编程\)) |
| 🔋电池电压 | 3.7V |
| 🔋电池容量 | 1500mA (\(5.55Wh\)) |


> ⚠️ 建议使用低于130mA的充电电流。过大的充电电流可能损坏电池。
> 如果长时间不使用，请将电池开关拨到OFF。
>

### ⚡ 功耗参考

| 模式 | 唤醒模式 | 电流 |
| ----------- | ------------------------------------------- | ------- |
| 轻睡眠 | 电源按钮 + Boot按钮 + 触摸面板 | 2.38mA |
| 轻睡眠 | 电源按钮 + Boot按钮 | 不适用 |
| 深度睡眠 | 电源按钮 + Boot按钮 (备份电源开启) | 530uA |
| 深度睡眠 | 电源按钮 + Boot按钮 (备份电源关闭) | 460uA |
| 深度睡眠 | 触摸面板 | 1.08mA |
| 深度睡眠 | 定时器 (备份电源开启) | 510uA |
| 深度睡眠 | 定时器 (备份电源关闭) | 460uA |
| 关机 | 仅保持备份电源 | 50uA |

* T-Watch-S3-Plus 没有连接触摸复位引脚，因此如果将触摸屏设置为睡眠，触摸将无法工作。

### 资源

* [主板原理图](https://github.com/Xinyuan-LilyGO/LilyGoLib/tree/master/schematic/T_WATCH-S3%2025-03-24.pdf)
* [GPS原理图](https://github.com/Xinyuan-LilyGO/LilyGoLib/tree/master/schematic/T-Watch-S3-Plus-GPS%20V1.0%202025-04-29.pdf)

## 快速开始

### 示例支持

| 示例 | PlatformIO/Arduino | ESP-IDF | 描述 |
| :------ | :----------------: | :-----: | :---------- |
| [出厂程序](https://github.com/Xinyuan-LilyGO/LilyGoLib/blob/master/examples/factory/factory.ino) | ✓ | | 出厂示例 |
| *（更多示例请参考GitHub仓库）* | | | |

### PlatformIO
1.  安装[Visual Studio Code](https://code.visualstudio.com/Download)，根据你的系统类型选择安装。
2.  打开Visual Studio Code软件侧边栏的"扩展"（或者使用<kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>X</kbd>打开扩展），搜索"PlatformIO IDE"扩展并安装。
3.  在安装扩展期间，你可以前往GitHub下载项目代码。你可以通过点击绿色的"<> Code"下载主分支代码，也可以通过侧边栏下载"Releases"版本。
4.  扩展安装完成后，打开侧边栏的资源管理器（或者使用<kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>E</kbd>打开），点击"打开文件夹"，找到刚刚下载的项目代码文件夹（整个文件夹），点击"添加"。此时项目文件就添加到你的工作区了。
5.  打开项目文件夹中的"platformio.ini"文件（PlatformIO会自动打开对应文件夹的"platformio.ini"），在"[platformio]"目录下取消注释选择你需要烧录的示例程序（以"default_envs = xxx"为标头），然后点击左下角的"<kbd>√</kbd>"进行编译。如果编译无误，将单片机连接电脑，点击左下角"<kbd>→</kbd>"即可进行烧录。

### Arduino

1. 安装 [Arduino IDE](https://www.arduino.cc/en/software)
2. 安装 [Arduino ESP32 **V3.3.0-alpha1** 或更高版本或最新版本](https://docs.espressif.com/projects/arduino-esp32/en/latest/installing.html)
   * 提示：Arduino 管理器 URL: https://espressif.github.io/arduino-esp32/package_esp32_dev_index.json
3. [下载 LilyGoLib 库](https://github.com/Xinyuan-LilyGO/LilyGoLib/archive/refs/heads/master.zip)
4. 打开 `Arduino IDE` -> `项目` -> `加载库` -> `添加 .ZIP 库` -> `选择第3步下载的库压缩包`
5. [安装 LilyGoLib-ThirdParty](https://github.com/Xinyuan-LilyGO/LilyGoLib-ThirdParty)
   * 将 [LilyGoLib-ThirdParty](https://github.com/Xinyuan-LilyGO/LilyGoLib-ThirdParty) 中的所有目录复制到 ArduinoIDE 的 libraries 目录，如果没有 `libraries` 目录，请创建它。
   * 请注意不是复制 `LilyGoLib-ThirdParty` 目录，而是复制 `LilyGoLib-ThirdParty` 目录中的文件夹到 libraries
   * 如何查找自己电脑上库的位置，[请参见此处](https://support.arduino.cc/hc/en-us/articles/4415103213714-Find-sketches-libraries-board-cores-and-other-files-on-your-computer)
     * Windows: `C:\Users\{用户名}\Documents\Arduino`
     * macOS: `/Users/{用户名}/Documents/Arduino`
     * Linux: `/home/{用户名}/Arduino`


> 请注意，LilyGoLib-ThirdParty 中的库不一定是最新版本。在确认硬件运行正常之前，请不要升级依赖库的版本。
> ArduinoIDE 每次打开都会提示有新的库版本可以升级。
> 请确认运行正常后再尝试更新到最新版本。如果遇到问题，请回退到运行正常的依赖库版本。当前的依赖库版本列表可以查看[这里](./third_party.md#t-watch-s3-third-party)
>

6. `文件` -> `示例` -> `LilyGOLib` -> `helloworld`
7. `工具` -> `开发板` -> `esp32`，请从下表中选择

| Arduino IDE Setting                  | Value                          |
|--------------------------------------|--------------------------------|
| Board                                | LilyGo T-Watch-S3              |
| Port                                 | Your port                      |
| USB CDC On Boot                      | Enabled                        |
| CPU Frequency                        | 240MHZ(WiFi)                   |
| Core Debug Level                     | None                           |
| USB DFU On Boot                      | Disable                        |
| Erase All Flash Before Sketch Upload | Disable                        |
| Events Run On                        | Core 1                         |
| JTAG Adapter                         | Disable                        |
| Arduino Runs On                      | Core 1                         |
| USB Firmware MSC On Boot             | Disable                        |
| Partition Scheme                     | 16M Flash(3M APP/9.9MB FATFS)  |
| Board Revision                       | Radio-SX1262                   |
| Upload Mode                          | UART0/Hardware CDC             |
| Upload Speed                         | 921600                         |
| USB Mode                             | CDC and JTAG                   |
| USB Mode                             | CDC and JTAG                   |


8. **开发板版本选项**，请根据实际购买的RF类型选择。当前选项有：
   * Radio-SX1262(Sub 1G LoRa)
   * Radio-SX1280(2.4G LoRa)
   * Radio-CC1101(Sub 1G (G)MSK, 2(G)FSK, 4(G)FSK, ASK, OOK)
   * Radio-LR1121(Sub 1G + 2.4G LoRa)
   * Radio-SI4432(Sub 1G ISM)
9. 选择 `端口`
10. 点击 `上传`，等待编译和写入完成
11. 如果无法上传程序或USB设备在电脑上不断弹出，请手动将设备置于下载模式。如何进入下载模式，请参见[此处](#t-watch-s3-plus-进入下载模式)

>
> * 如果串口没有消息输出，请检查 USB CDC ON Boot 是否设置为 Enabled。
> * 开发板版本根据实际的RF模块型号变化。当前默认版本是 SX1262
> * 此库依赖于最新的 [arduino-esp32](https://github.com/espressif/arduino-esp32/releases/tag/3.3.0-alpha1) 版本。如果低于 **V3.3.0-alpha1**，将会报错。

### T-Watch-S3-Plus 进入下载模式

>
> 下载模式仅在程序不允许上传代码时才需要。正常情况下不需要此步骤。
>
> 🤖 T-Watch-S3-Plus 的 BOOT 按钮和 RST 按钮已预留在外壳边缘。请按照以下步骤将设备置于下载模式。
>
> 1. 通过 USB-C 线连接开发板
> 2. 按住 **BOOT** 按钮，同时仍然按住 **BOOT** 按钮
> 3. 释放 **RST** 按钮
> 4. 释放 **BOOT** 按钮
> 5. USB 端口应该固定，不会再次闪烁。你可以点击上传。
> 6. 按下 **RST** 按钮退出下载模式
>
> 如果新代码成功写入，但设备不亮或有其他问题，请使用我们的出厂测试代码测试外设是否能正常工作。请跳转到此处下载固件并写入进行测试。
>

### 开发平台
1.  [ESP-IDF](https://www.espressif.com/zh-hans/products/sdks/esp-idf)
2.  [Arduino IDE](https://www.arduino.cc/en/software)
3.  [Platform IO](https://platformio.org/)
4.  [Micropython](https://micropython.org/)

## 常见问题

*   **问：T-Watch S3 Plus 与 T-Watch S3 的主要区别是什么？**
    答：T-Watch S3 Plus 在 T-Watch S3 的基础上增加了GPS功能，其他硬件配置基本一致。

*   **问：如何开机和关机？**
    答：按住POWER按键两秒开机，按住六秒关机。BOOT按键为内置按键，用于进入下载模式。

*   **问：支持哪些LoRa频段？**
    答：目前有SX1262和SX1280两个版本，支持433MHz~923MHz频段，请根据您所在地区的法规选择合适的版本。

*   **问：如何开发手表应用程序？**
    答：建议使用TTGO_TWatch_Library库，该库提供了丰富的手表UI组件和传感器驱动，可以快速开发手表应用。

*   **问：电池续航时间如何？**
    答：电池续航取决于使用场景，正常使用情况下可达数天，具体时间请参考实际测试数据。

## 项目
*   [T-Watch S3 Plus](https://github.com/Xinyuan-LilyGO/TTGO_TWatch_Library/blob/t-watch-s3/schematic/T_WATCH_S3.pdf)

## 资料
*   [ESP32-S3 数据手册](https://www.espressif.com.cn/sites/default/files/documentation/esp32-s3_datasheet_en.pdf)
*   [BMA423 数据手册](https://www.bosch-sensortec.com/media/boschsensortec/downloads/datasheets/bst-bma423-ds000.pdf)
*   [AXP2101 数据手册](https://github.com/Xinyuan-LilyGO/TTGO_TWatch_Library)
*   *（更多资料请参考GitHub仓库）*

## 依赖库
*   [TTGO_TWatch_Library](https://github.com/Xinyuan-LilyGO/TTGO_TWatch_Library/tree/t-watch-s3)