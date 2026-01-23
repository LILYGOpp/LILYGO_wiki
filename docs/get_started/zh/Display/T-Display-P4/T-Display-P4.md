---
title: LILYGO T-Display-P4
show_source: false
tags: ESP32-P4, MIPI, AMOLED, LoRa, GPS, ESP32-C6
---

<div style="width:100%; display:flex;justify-content: center;">

![T-Display-P4](./assets/T-Display-P4-1.jpg)

</div>

<div style="padding: 1em 0 0 0; display: flex; justify-content: center">
    <a target="_blank" style="margin: 1em;color: white; font-size: 0.9em; border-radius: 0.3em; padding: 0.5em 2em; background-color:rgb(63, 201, 28)" href="https://lilygo.cc/products/t-display-p4">官网购买</a>
</div>

## 版本迭代:
| Version | Update date | Update description |
| :-----: | :---------: | :---------------- |
| T-Display-P4_V1.0 | 2025-06-13 | 初始版本 |
| T-Display-P4-Keyboard_V1.0 | 2025-09-12 | 键盘扩展板初始版本 |

## 购买链接

| Product | SOC | FLASH | PSRAM | Link |
| :-----: | :--: | :---: | :---: | :--: |
| T-Display-P4_V1.0 | ESP32-P4 | 16MB | - | [LILYGO Mall](https://lilygo.cc/products/t-display-p4) |
| T-Display-P4-Keyboard_V1.0 | - | - | - | [LILYGO Mall](https://lilygo.cc/products/t-display-p4-keyboard) |

## 目录
- [描述](#描述)
- [预览](#预览)
- [模块](#模块)
- [软件部署](#软件部署)
- [引脚总览](#引脚总览)
- [相关测试](#相关测试)
- [常见问题](#常见问题)
- [项目](#项目)

## 描述

T-Display-P4 是一款基于 **ESP32-P4** 高性能核心的多功能开发板，专为复杂图形处理、多媒体交互与物联网应用设计。主要特点包括：

1.  **高性能处理**：搭载 ESP32-P4 处理器，支持复杂图形与视频任务处理。
2.  **高清显示**：配备 4.05 英寸 MIPI 接口屏幕，分辨率达 540×1168px，支持触控。
3.  **双核协同**：板载 ESP32-C6 辅助处理器，支持 Wi-Fi 6 与蓝牙 5.3。
4.  **丰富外设**：集成扬声器、麦克风、线性振动马达、LoRa、GPS、以太网、摄像头、电池监测等模块。
5.  **扩展性强**：提供丰富 GPIO 接口，支持键盘扩展板（T-Display-P4-Keyboard）。

## 预览

### 实物图

<div style="width:100%; display:flex;justify-content: center;">

![T-Display-P4-1](./assets/T-Display-P4-2.jpg)

</div>

### 引脚图

T-Display-P4有Amoled、TFT两个版本，引脚图如下

#### Amoled版本

![alt text](assets/T-Display-P4-Amoled.jpg)

#### TFT版本

![alt text](assets/T-Display-P4-tft.jpg)


## 模块

### T-Display-P4 主板

#### 1. 核心处理器
* **芯片**：ESP32-P4
* **FLASH**：16MB
* **资料**：[Espressif 官方文档](https://www.espressif.com/en/support/documents/technical-documents)

#### 2. 辅助处理器
* **模组**：ESP32-C6-MINI-1U
* **芯片**：ESP32-C6-FH4
* **PSRAM**：4MB
* **通信协议**：SDIO
* **资料**：[ESP32-C6-MINI-1U 数据手册](https://www.espressif.com/sites/default/files/documentation/esp32-c6-mini-1_mini-1u_datasheet_en.pdf)

#### 3. 屏幕与触摸
| 型号 | H0405S002T002-V0 (TFT) | H0410S001AMT001-V0 (AMOLED) |
| :--- | :--- | :--- |
| **尺寸** | 4.05 英寸 | 4.1 英寸 |
| **类型** | α-Si TFT | AMOLED |
| **分辨率** | 540×1168px | 568×1232px |
| **接口** | MIPI + I2C | MIPI + I2C |
| **驱动芯片** | HI8561 | RM69A10 + GT9895 |
| **亮度** | 550 cd/m² | 500 cd/m² |
| **对比度** | 1200:1 | 20000:1 |
| **触控点数** | 10 点 | 10 点 |
| **资料** | [HI8561](https://github.com/Xinyuan-LilyGO/T-Display-P4/tree/main/information/HI8561_Preliminary%20_DS_V0.00_20230511.pdf) | [RM69A10](https://github.com/Xinyuan-LilyGO/T-Display-P4/tree/main/information/RM69A10_DataSheet_V0.2_20230330%20(Public%20version).pdf) <br> [GT9895](https://github.com/Xinyuan-LilyGO/T-Display-P4/tree/main/information/GT9895_Datasheet_V1.1.pdf) |

#### 4. 音频模块
* **DAC芯片**：ES8311
* **功放芯片**：NS4150B
* **麦克风**：咪头
* **通信协议**：I2S
* **资料**：[ES8311](https://github.com/Xinyuan-LilyGO/T-Display-P4/tree/main/information/ES8311.pdf) 、[NS4150B](https://github.com/Xinyuan-LilyGO/T-Display-P4/tree/main/information/NS4150B.pdf)

#### 5. 振动马达
* **驱动芯片**：AW86224AFCR
* **通信协议**：I2C
* **资料**：[AW86224](https://github.com/Xinyuan-LilyGO/T-Display-P4/tree/main/information/AW86224AFCR.pdf)

#### 6. LoRa 模块
* **模组**：HPD16A
* **芯片**：SX1262
* **通信协议**：SPI
* **资料**：[SX1261-2](https://github.com/Xinyuan-LilyGO/T-Display-P4/tree/main/information/DS_SX1261-2_V2_1.pdf)

#### 7. GPS 模块
* **模组**：L76K
* **通信协议**：UART
* **资料**：[L76K](https://github.com/Xinyuan-LilyGO/T-Display-P4/tree/main/information/L76KB-A58.pdf)

#### 8. RTC 时钟
* **芯片**：PCF8563
* **通信协议**：I2C
* **资料**：[PCF8563](https://github.com/Xinyuan-LilyGO/T-Display-P4/tree/main/information/PCF8563.pdf)

#### 9. 充电管理
* **芯片**：LGS4056H
* **说明**：支持三线电池 NTC 温度检测
* **资料**：[LGS4056H](https://github.com/Xinyuan-LilyGO/T-Display-P4/tree/main/information/LGS4056H.pdf)

#### 10. 电量监测
* **芯片**：BQ27220
* **通信协议**：I2C
* **资料**：[BQ27220](https://github.com/Xinyuan-LilyGO/T-Display-P4/tree/main/information/bq27220_en.pdf)

#### 11. 摄像头
* **型号**：OV2710（MIPI 接口）
* **资料**：[OV2710](https://github.com/Xinyuan-LilyGO/T-Display-P4/tree/main/information/OV2710_CSP3_DS_2.0_KING%20HORN%20ENTERPRISES%20Ltd..pdf)

#### 12. 惯性传感器
* **芯片**：ICM20948
* **通信协议**：I2C
* **资料**：[ICM20948](https://github.com/Xinyuan-LilyGO/T-Display-P4/tree/main/information/ICM20948.pdf)

#### 13. IO 扩展
* **芯片**：XL9535
* **通信协议**：I2C
* **资料**：[XL9535](https://github.com/Xinyuan-LilyGO/T-Display-P4/tree/main/information/XL95x5.pdf)

### T-Display-P4-Keyboard 扩展板

#### 1. 键盘驱动
* **芯片**：TCA8418
* **通信协议**：I2C
* **资料**：[TCA8418](https://github.com/Xinyuan-LilyGO/T-Display-P4/tree/main/information/tca8418.pdf)

#### 2. 背光驱动
* **芯片**：SY7200A
* **通信协议**：PWM
* **资料**：[SY7200A](https://github.com/Xinyuan-LilyGO/T-Display-P4/tree/main/information/SY7200AABC.pdf)

#### 3. IO 扩展
* **芯片**：XL9555
* **通信协议**：I2C
* **资料**：[XL9555](https://github.com/Xinyuan-LilyGO/T-Display-P4/tree/main/information/XL95x5.pdf)

#### 4. 无线模块（T-MixRF）
| 模块 | 芯片 | 协议 | 资料 |
| :--- | :--- | :--- | :--- |
| **CC1101** | CC1101 | SPI | [CC1101](https://github.com/Xinyuan-LilyGO/T-Display-P4/tree/main/information/cc1101.pdf) |
| **NRF24L01** | NRF24L01 | SPI | [NRF24L01](https://github.com/Xinyuan-LilyGO/T-Display-P4/tree/main/information/NRF24L01P-R.pdf) |
| **NFC** | ST25R3916 | SPI | [ST25R3916](https://github.com/Xinyuan-LilyGO/T-Display-P4/tree/main/information/st25r3916.pdf) |

### 概述

| 组件 | 描述 |
| :--: | :--: |
| MCU | ESP32-S3R8 Dual-core LX7 microprocessor |
| FLASH| 16MB |
| PSRAM | 8MB|
| 屏幕 | 1.91 英寸 RM67162 IPS AMOLED |
| 触摸 | 电容触摸屏 |
| LoRa | LR1121 (1276/868/915MHz) |
| 存储 | TF 卡 |
| RTC | PCF85063ATL/1 |
| 电源管理 | AXPM65611 + BQ25896 |
| 无线 | 2.4 GHz Wi-Fi & Bluetooth 5 (LE) |
| USB | 1 × USB Port and OTG (TYPE-C接口) |
| IO 接口 | 2×13 双排扩展接口 |
| 拓展接口 | FPC天线 + TF卡 + STEMMA QT/QWIIC + JST-GH 1.25MM |
| 按键 | 1 x RESET 按键 + 1 x BOOT 按键 |
| 孔位 | 4 × 2mm定位孔 |
| 尺寸 | **60×32×12mm** |

## 快速开始

### 示例支持

#### T-Display-P4 示例

| example | `[vscode][esp-idf-v5.4.0]` | description | picture |
| ------  | ------ | ------ | ------ | 
| [afe](https://github.com/Xinyuan-LilyGO/T-Display-P4/tree/main/main/examples/afe) |  <p align="center">![alt text][supported] | | |
| [aw86224](https://github.com/Xinyuan-LilyGO/T-Display-P4/tree/main/main/examples/aw86224) |  <p align="center">![alt text][supported] | | |
| [bq27220](https://github.com/Xinyuan-LilyGO/T-Display-P4/tree/main/main/examples/bq27220) |  <p align="center">![alt text][supported] | | |
| [deep_sleep](https://github.com/Xinyuan-LilyGO/T-Display-P4/tree/main/main/examples/deep_sleep) |  <p align="center">![alt text][supported] | | |
| [es8311](https://github.com/Xinyuan-LilyGO/T-Display-P4/tree/main/main/examples/es8311) |  <p align="center">![alt text][supported] | | |
| [es8311_sd_wav](https://github.com/Xinyuan-LilyGO/T-Display-P4/tree/main/main/examples/es8311_sd_wav) |  <p align="center">![alt text][supported] | | |
| [esp_hosted_mcu_sdio_wifi](https://github.com/Xinyuan-LilyGO/T-Display-P4/tree/main/main/examples/esp_hosted_mcu_sdio_wifi) |  <p align="center">![alt text][supported] | | |
| [esp32c6_at_host_sdio_uart](https://github.com/Xinyuan-LilyGO/T-Display-P4/tree/main/main/examples/esp32c6_at_host_sdio_uart) |  <p align="center">![alt text][supported] | | |
| [esp32c6_at_host_sdio_wifi](https://github.com/Xinyuan-LilyGO/T-Display-P4/tree/main/main/examples/esp32c6_at_host_sdio_wifi) |  <p align="center">![alt text][supported] | | |
| [icm20948](https://github.com/Xinyuan-LilyGO/T-Display-P4/tree/main/main/examples/icm20948) |  <p align="center">![alt text][supported] | | |
| [iic_scan](https://github.com/Xinyuan-LilyGO/T-Display-P4/tree/main/main/examples/iic_scan) |  <p align="center">![alt text][supported] | | |
| [l76k](https://github.com/Xinyuan-LilyGO/T-Display-P4/tree/main/main/examples/l76k) |  <p align="center">![alt text][supported] | | |
| [lvgl_9_ui](https://github.com/Xinyuan-LilyGO/T-Display-P4/tree/main/main/examples/lvgl_9_ui) |  <p align="center">![alt text][supported] |出厂示例 | |
| [pcf8563](https://github.com/Xinyuan-LilyGO/T-Display-P4/tree/main/main/examples/pcf8563) |  <p align="center">![alt text][supported] | | |
| [radiolib_sx1262_send_receive](https://github.com/Xinyuan-LilyGO/T-Display-P4/tree/main/main/examples/radiolib_sx1262_send_receive) |  <p align="center">![alt text][supported] | | |
| [screen_camera](https://github.com/Xinyuan-LilyGO/T-Display-P4/tree/main/main/examples/screen_camera) |  <p align="center">![alt text][supported] | | |
| [screen_lvgl](https://github.com/Xinyuan-LilyGO/T-Display-P4/tree/main/main/examples/screen_lvgl) |  <p align="center">![alt text][supported] | | |
| [screen_lvgl_touch_draw](https://github.com/Xinyuan-LilyGO/T-Display-P4/tree/main/main/examples/screen_lvgl_touch_draw) |  <p align="center">![alt text][supported] | | |
| [sgm38121](https://github.com/Xinyuan-LilyGO/T-Display-P4/tree/main/main/examples/sgm38121) |  <p align="center">![alt text][supported] | | |
| [sx1262_gfsk_send_receive](https://github.com/Xinyuan-LilyGO/T-Display-P4/tree/main/main/examples/sx1262_gfsk_send_receive) |  <p align="center">![alt text][supported] | | |
| [sx1262_lora_send_receive](https://github.com/Xinyuan-LilyGO/T-Display-P4/tree/main/main/examples/sx1262_lora_send_receive) |  <p align="center">![alt text][supported] | | |
| [sx1262_tx_continuous_wave](https://github.com/Xinyuan-LilyGO/T-Display-P4/tree/main/main/examples/sx1262_tx_continuous_wave) |  <p align="center">![alt text][supported] | | |
| [tusb_serial_device](https://github.com/Xinyuan-LilyGO/T-Display-P4/tree/main/main/examples/tusb_serial_device) |  <p align="center">![alt text][supported] | | |
| [xl9535](https://github.com/Xinyuan-LilyGO/T-Display-P4/tree/main/main/examples/Vibration_Motor) |  <p align="center">![alt text][supported] | | |
| [xiaozhi](https://github.com/78/xiaozhi-esp32) |  <p align="center">![alt text][supported] | | |
#### T-Display-P4-Keyboard 示例

| example | `[vscode][esp-idf-v5.4.0]` | description | picture |
| ------  | ------ | ------ | ------ | 
| [radiolib_cc1101_send_receive](https://github.com/Xinyuan-LilyGO/T-Display-P4/tree/main/main/keyboard_examples/radiolib_cc1101_send_receive) |  <p align="center">![alt text][supported] | | |
| [radiolib_nrf24l01_send_receive](https://github.com/Xinyuan-LilyGO/T-Display-P4/tree/main/main/keyboard_examples/radiolib_nrf24l01_send_receive) |  <p align="center">![alt text][supported] | | |
| [screen_tca8418_lvgl_touch_draw](https://github.com/Xinyuan-LilyGO/T-Display-P4/tree/main/main/keyboard_examples/screen_tca8418_lvgl_touch_draw) |  <p align="center">![alt text][supported] | | |
| [st25r3916](https://github.com/Xinyuan-LilyGO/T-Display-P4/tree/main/main/keyboard_examples/st25r3916) |  <p align="center">![alt text][supported] | | |
| [tca8418](https://github.com/Xinyuan-LilyGO/T-Display-P4/tree/main/main/keyboard_examples/tca8418) |  <p align="center">![alt text][supported] | | |
| [xl9555](https://github.com/Xinyuan-LilyGO/T-Display-P4/tree/main/main/keyboard_examples/xl9555) |  <p align="center">![alt text][supported] | | |

[supported]: https://img.shields.io/badge/-supported-green "example"

### ESP-IDF Visual Studio Code
1. 安装 [Visual Studio Code](https://code.visualstudio.com/Download) ，根据你的系统类型选择安装。

2. 打开 VisualStudioCode 软件侧边栏的“扩展”（或者使用<kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>X</kbd>打开扩展），搜索“ESP-IDF”扩展并下载。

3. 在安装扩展的期间，使用git命令克隆仓库

        git clone --recursive https://github.com/Xinyuan-LilyGO/T-Display-P4.git

    克隆时候需要同时加上“--recursive”，如果克隆时候未加上那么之后使用的时候需要初始化一下子模块

        git submodule update --init --recursive

4. 下载安装 [ESP-IDF v5.4.1](https://dl.espressif.cn/dl/esp-idf/?idf=4.4)，记录一下安装路径，打开之前安装好的“ESP-IDF”扩展打开“配置 ESP-IDF 扩展”，选择“USE EXISTING SETUP”菜单，选择“Search ESP-IDF in system”栏，正确配置之前记录的安装路径：
   - **ESP-IDF directory (IDF_PATH):** `你的安装路径xxx\Espressif\frameworks\esp-idf-v5.4`  
   - **ESP-IDF Tools directory (IDF_TOOLS_PATH):** `你的安装路径xxx\Espressif`  
    点击右下角的“install”进行框架安装。

5. 点击 Visual Studio Code 底部菜单栏的 ESP-IDF 扩展菜单“SDK 配置编辑器”，在搜索栏里搜索“Select the example to build”字段，选择你所需要编译的项目，再在搜索栏里搜索“Select the camera type”字段，选择你的板子板载的摄像头类型，点击保存。

6. 点击 Visual Studio Code 底部菜单栏的“设置乐鑫设备目标”，选择**ESP32P4**，点击底部菜单栏的“构建项目”，等待构建完成后点击底部菜单栏的“选择要使用的端口”，之后点击底部菜单栏的“烧录项目”进行烧录程序。

<p align="center" width="100%">
    <img src="./assets/1.jpg" alt="example">
</p>

### 固件下载

| firmware | description | picture |
| ------  | ------  | ------ |
| [t_display_p4_lvgl_9_ui](https://github.com/Xinyuan-LilyGO/T-Display-P4/tree/main/firmware/[T-Display-P4][lvgl_9_ui]) | 出厂程序 |  |
| [t_display_p4_keyboard_lvgl_9_ui](https://github.com/Xinyuan-LilyGO/T-Display-P4/tree/main/firmware/[T-Display-P4-Keyboard][lvgl_9_ui]) | 键盘扩展板出厂程序 |  |
| [esp32c6_at](https://github.com/Xinyuan-LilyGO/T-Display-P4/tree/main/firmware/[T-Display-P4][esp32c6_at_slave]) | esp32c6-at 出厂程序 |  |
| [esp32c6_slave_esp_hosted_mcu_network_adapter](https://github.com/Xinyuan-LilyGO/T-Display-P4/tree/main/firmware/[T-Display-P4][esp32c6_slave_esp_hosted_mcu_network_adapter]) |  |  |
| [t_display_p4_xiaozhi](https://github.com/Xinyuan-LilyGO/T-Display-P4/tree/main/firmware/[T-Display-P4][xiaozhi]) |  |  |


### 引脚总览

引脚定义请参考配置文件：
<br />

[t_display_p4_config.h](https://github.com/Xinyuan-LilyGO/T-Display-P4/tree/main/components/private_library/t_display_p4_config.h)  
[t_display_p4_keyboard_config.h](https://github.com/Xinyuan-LilyGO/T-Display-P4/tree/main/components/private_library/t_display_p4_keyboard_config.h)

### 开发平台
1.  [Micropython](https://micropython.org/)
2.  [Arduino IDE](https://www.arduino.cc/en/software)
3.  [Platform IO](https://platformio.org/)


## 相关测试

### 功耗

| firmware | program | description | picture |
| ------  | ------  | ------ | ------ | 
| [deep_sleep(single_board)](https://github.com/Xinyuan-LilyGO/T-Display-P4/tree/main/firmware/sleep/[T-Display-P4][deep_sleep][single_board]_firmware_202505301450.bin) |[deep_sleep](https://github.com/Xinyuan-LilyGO/T-Display-P4/tree/main/main/examples/deep_sleep/)| 平均电流消耗: 1.2mA 更多信息请查看 [功耗测试日志](https://github.com/Xinyuan-LilyGO/T-Display-P4/tree/main/relevant_test/PowerConsumptionTestLog_[T-Display-P4_V1.0]_20250605.pdf) | |

### 摄像头

| program | description | picture |
| ------  | ------ | ------ | 
| [uvc_sc2336](https://github.com/Xinyuan-LilyGO/T-Display-P4/tree/main/debug/examples/uvc_sc2336/)| 原图和拍摄屏幕图片截图效果 | <p align="center"> <img src="./assets/2.jpg" alt="example" width="100%"> </p> |
| [uvc_ov2710](https://github.com/Xinyuan-LilyGO/T-Display-P4/tree/main/debug/examples/uvc_ov2710/)| 原图和拍摄屏幕图片截图效果 | <p align="center"> <img src="./assets/3.jpg" alt="example" width="100%"> </p> |

## 常见问题

* Q. 看了以上教程我还是不会搭建编程环境怎么办？
* A. 如果看了以上教程还不懂如何搭建环境的可以参考[LilyGo-Document](https://github.com/Xinyuan-LilyGO/LilyGo-Document)文档说明来搭建。

<br />

* Q. 为什么我的板子一直烧录失败呢？
* A. 请按住“BOOT”按键重新下载程序。

<br />

* Q. 为什么我使用espidf框架在选择目标编译芯片或者在配置SDK的menuconfig的时候配置失败，报以下错误：

        asyncio.exceptions.LimitOverrunError: Separator is found, but chunk is longer than limit

        ValueError: Separator is found, but chunk is longer than limit

* A. 这个是espidf框架v5.4~v5.5的一个bug，需要将路径为 `esp-idf-v5.x\tools\idf_py_actions\tools.py` 文件的第351行做如下修改：

        原始代码：
        p = await asyncio.create_subprocess_exec(*cmd, env=env_copy, limit=1024 * 256, cwd=self.cwd, stdout=asyncio.subprocess.PIPE,stderr=asyncio.subprocess.PIPE)
        修改后的代码：
        p = await asyncio.create_subprocess_exec(*cmd, env=env_copy, limit=1024 * 512, cwd=self.cwd, stdout=asyncio.subprocess.PIPE,stderr=asyncio.subprocess.PIPE)


## 项目
*   [T-Display S3 AMOLED Plus](https://github.com/Xinyuan-LilyGO/LilyGo-AMOLED-Series/blob/master/schematic/T-Display-S3-AMOLED-Plus.pdf)

## 资料
*   [ESP32-S3 Datasheet](https://www.espressif.com.cn/sites/default/files/documentation/esp32-s3_datasheet_en.pdf)
*   [LR1121 Datasheet](https://www.semtech.com/products/wireless-rf/lora-connect/lr1121)
*   *（更多资料请参考GitHub仓库）*

## 依赖库
*   [lvgl 8.3.9](https://github.com/lvgl/lvgl)
*   [AceButton](https://github.com/bxparks/AceButton)
*   [TFT_eSPI](https://github.com/Bodmer/TFT_eSPI)
*   [Arduino_GFX](https://github.com/moononournation/Arduino_GFX)
*   [XPowersLib](https://github.com/lewisxhe/XPowersLib)
*   [SensorLib](https://github.com/lewisxhe/SensorsLib)
*   [TinyGPSPlus](https://github.com/mikalhart/TinyGPSPlus)
*   [Arduino_NeoPixel](https://github.com/adafruit/Adafruit_NeoPixel)
*   [OneWire](https://github.com/PaulStoffregen/OneWire)
*   [SparkFun MAX3010x Pulse and Proximity Sensor Library](https://github.com/sparkfun/SparkFun_MAX3010x_Pulse_and_Proximity_Sensor_Library)