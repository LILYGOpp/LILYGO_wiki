---
title: LILYGO T-Camera Plus S3
show_source: false
tags: ESP32-S3, Camera, TFT, Audio, Vision
---

<div style="width:100%; display:flex;justify-content: center;">

![T-CameraPlus-S3](./assets/T-CameraPlus-S3-1.jpg)

</div>

<div style="padding: 1em 0 0 0; display: flex; justify-content: center">
    <a target="_blank" style="margin: 1em;color: white; font-size: 0.9em; border-radius: 0.3em; padding: 0.5em 2em; background-color:rgb(103, 175, 8)" href="https://lilygo.cc/products/t-camera-plus-s3">官网购买</a>
</div>

## 版本迭代:
| Version                               | Update date                       |Update description|
| :-------------------------------: | :-------------------------------: |:--------------: |
| T-CameraPlus-S3_V1.0-V1.1            | 2023-10-23                         |  初始版本  |
| T-CameraPlus-S3_V1.2            | 2025-04-17                         |提升wifi性能，修改麦克风型号，修改引脚号优化走线    |

## 购买链接

| Product                     | SOC           |  FLASH  |  PSRAM   | Link                   |
| :------------------------: | :-----------: |:-------: | :---------: | :------------------: |
| T-CameraPlus-S3_V1.2   | ESP32S3 |   16M   | 8M|  [LILYGO Mall](https://www.lilygo.cc/products/t-camera-plus-s3?_pos=2&_sid=aa4cbdb34&_ss=r)  |

## 目录
- [描述](#描述)
- [预览](#预览)
- [模块](#模块)
- [快速开始](#快速开始)
- [引脚总览](#引脚总览)
- [相关测试](#相关测试)
- [常见问题](#常见问题)
- [项目](#项目)

## 描述

T-CameraPlus-S3是一款基于ESP32-S3主控芯片的多功能智能硬件开发板，集成高性能摄像头模块（支持OV2640/OV5640可选）、LCD显示屏（含触摸功能）和MAX98357A音频芯片，具备16MB Flash与8MB PSRAM，可高效处理图像、视频及音频数据。支持双模音频输入输出（麦克风与数字音频接口），配备TF卡扩展存储、QWIIC接口（兼容I²C设备扩展）以及电池管理模块。硬件设计兼容多种传感器与外围设备，通过SPI、I²C等协议实现摄像头、显示屏、音频模块的协同工作，满足开发者在AIoT、边缘计算等领域的灵活开发需求。出厂自带基于LVGL的UI系统，支持文件管理、音乐播放、录音、摄像头投影等功能。

## 预览

### 实物图

<div style="width:100%; display:flex;justify-content: center;">

![T-CameraPlus-S3](./assets/T-CameraPlus-S3-2.jpg)

</div>

### 引脚图

<img src="./assets/T-CameraPlus-S3-pin-zh.jpg" alt="summary" width=100%>

## 模块

### MCU

* 芯片：ESP32-S3
* PSRAM：8M 
* FLASH：16M
* 相关资料：
    >[Espressif](https://www.espressif.com/en/support/documents/technical-documents)

### 屏幕

* 屏幕型号：fp-133h01d
* 尺寸：1.3英寸
* 分辨率：240x240px
* 屏幕类型：TFT
* 驱动芯片：ST7789V
* 总线通信协议：标准SPI
* 依赖库：
    >[Arduino_GFX-1.3.7](https://github.com/moononournation/Arduino_GFX)  <br /> 
    >[lvgl-8.3.5](https://github.com/lvgl/lvgl)  <br /> 
    >[JPEGDEC-1.2.8](https://github.com/bitbank2/JPEGDEC)  <br /> 
    >[MiniTV](https://github.com/moononournation/MiniTV)  <br /> 
    >[TFT_eSPI](https://github.com/Bodmer/TFT_eSPI)

### 触摸

* 芯片：CST816S
* 总线通信协议：IIC
* 依赖库：
    >[cst816t-1.5.0](https://github.com/koendv/cst816t)  <br /> 
    >[Arduino_DriveBus-1.1.16]()

### 扬声器

* 芯片：MAX98357A
* 使用总线通信协议：IIS
* 其他说明：默认配置为Left/2 + Right/2通道，增益9dB，如需更改配置请根据T-CameraPlus-S3设计原理图上的说明更改电阻即可，选取的扬声器建议额定功率最大为3.2W，阻抗4欧左右8欧以下
* 相关资料：
    >[MAX98357A](./information/MAX98357AETE+T.pdf)
* 依赖库：
    >[arduino-libhelix-0.8.1](https://github.com/pschatzmann/arduino-libhelix)  <br /> 
    >[ESP32-audioI2S-3.0.6](https://github.com/schreibfaul1/ESP32-audioI2S)

### 麦克风

> #### T-CameraPlus-S3_V1.0-V1.1 版本
> * 芯片：MSM261S4030H0R
> * 总线通信协议：IIS
> * 其他说明：默认配置为右声道通道，如需更改配置请根据T-CameraPlus-S3设计原理图上的说明更改电阻即可
> * 相关资料：
>     >[MSM261S4030H0R](information/MSM261S4030H0R.pdf)
> * 依赖库：
>     >[DFRobot_MSM261](https://github.com/DFRobot/DFrobot_MSM261)  <br /> 
>     >[Arduino_DriveBus-1.1.16]()

> #### T-CameraPlus-S3_V1.2 版本
> * 芯片：MP34DT05-A
> * 总线通信协议：PDM
> * 其他说明：默认配置为右声道通道，如需更改配置请根据T-CameraPlus-S3设计原理图上的说明更改电阻即可
> * 相关资料：
>    >[MP34DT05-A](./information/mp34dt05-a.pdf)
> * 依赖库：
>    >[Arduino_DriveBus-1.1.16]()

### 摄像头
* 摄像头型号：OV2640
* 红外滤镜驱动：AP1511B
* 相关资料：
    >[OV2640_Hardware_Application_V1.04](information/OV2640_Hardware_Application_V1.04.pdf)  <br /> 
    >[OV2640_Software_Application_V1.03](information/OV2640_Software_Application_V1.03.pdf)

### 电源管理芯片
* 芯片：SY6970
* 相关资料：
    >[AN_SY6970 ](information/AN_SY6970.pdf)  <br /> 
    >[EVB_SY6970](information/EVB_SY6970.pdf)
* 依赖库：
    >[XPowersLib-0.2.1](https://github.com/lewisxhe/XPowersLib)  <br /> 
    >[Arduino_DriveBus-1.1.16]()

### 概述
<img src="./assets/T-CameraPlus-S3-info-zh.jpg" alt="summary" width=100%>

| 组件 | 描述 |
| :--: | :--: |
| MCU | ESP32-S3R8 Dual-core Xtensa LX7 CPU |
| FLASH| 16MB |
| PSRAM | 8MB|
| 屏幕 | 1.3英寸 ST7789V TFT LCD (240×240) |
| 触摸 | CST816S 触摸电容屏 |
| 摄像头 | OV2640/OV5640 (可选) |
| 存储 | TF 卡 |
| 音频输出 | MAX98357A 扬声器 |
| 音频输入 | MP34DT05-A 麦克风 |
| 电源管理 | AXPM65611 + BQ25896 + SY6970 |
| 无线 | 2.4 GHz Wi-Fi & Bluetooth 5 (LE) |
| USB | 1 × USB Port and OTG (TYPE-C接口) |
| IO 接口 | 2×13 双排扩展接口 |
| 拓展接口 | TF卡 + 2×STEMMA QT/QWIIC + JST-GH 1.25MM |
| 按键 | RESET + BOOT + IO17功能按键 |
| 孔位 | 4 × 2mm定位孔 |
| 尺寸 | **60×32×12mm** |

## 快速开始

### 示例支持

| Example | `[Platformio IDE][espressif32-v6.5.0]`<br />`[Arduino IDE][esp32_v2.0.14]`| `[vscode][esp-idf-v5.4.0]`| Description | Picture |
| ------  | ------  | ------ | ------ | ------ | 
| [Wifi_Scan](./examples/Wifi_Scan) | <p align="center">![alt text][supported] | | |  |
| [Lvgl_UI](./examples/Lvgl_UI) | <p align="center">![alt text][supported] || 出厂固件 |  |
| [Wifi_Music](./examples/Wifi_Music) | <p align="center">![alt text][supported] ||  |  |
| [SD_Music](./examples/SD_Music) | <p align="center">![alt text][supported] | | |  |
| [DMIC_ReadData](./examples/DMIC_ReadData) | <p align="center">![alt text][supported] | | |  |
| [SD_DMIC](./examples/SD_DMIC) | <p align="center">![alt text][supported] ||  |  |
| [TFT](./examples/TFT) | <p align="center">![alt text][supported] ||  |  |
| [IIC_Scan_2](./examples/IIC_Scan_2) | <p align="center">![alt text][supported] | ||  |
| [Camera_WebServer](./examples/Camera_WebServer) | <p align="center">![alt text][supported] ||  |  |
| [CST816D](./examples/CST816D) | <p align="center">![alt text][supported] | | |  |
| [GFX_Test](./examples/GFX_Test) | <p align="center">![alt text][supported] | | |  |
| [SY6970](./examples/SY6970) | <p align="center">![alt text][supported] |  | | |
| [SD_MJPEG](./examples/SD_MJPEG) | <p align="center">![alt text][supported] |  |  |
| [Camera_Screen](./examples/Camera_Screen) | <p align="center">![alt text][supported] ||  |  |
| [Camera_Screen_OV5640_Auto_Focus](./examples/Camera_Screen_OV5640_Auto_Focus) | <p align="center">![alt text][supported] | | |  |
| [Camera_WebServer_OV5640_Auto_Focus](./examples/Camera_WebServer_OV5640_Auto_Focus) | <p align="center">![alt text][supported] |  ||  |
| [Voice_Speaker](./examples/Voice_Speaker) | <p align="center">![alt text][supported] | | |  |
| [iic_scan](./main/examples/iic_scan) |  | <p align="center">![alt text][supported]| |  |
| [afe](./main/examples/afe) |  | <p align="center">![alt text][supported]| |  |

[supported]: https://img.shields.io/badge/-supported-green "example"

| Firmware | Description | Picture |
| ------  | ------  | ------ |
| [Lvgl_UI(V1.0-V1.1)](./firmware/[T-CameraPlus-S3_V1.0-V1.1][Lvgl_UI]_firmware_202406142310.bin) |  |  |
| [Lvgl_UI(V1.2)](./firmware/[T-CameraPlus-S3_V1.2][Lvgl_UI]_firmware_202504081446.bin) |  |  |

### PlatformIO
1.  安装[VisualStudioCode](https://code.visualstudio.com/Download)，根据你的系统类型选择安装。
2.  打开VisualStudioCode软件侧边栏的"扩展"（或者使用<kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>X</kbd>打开扩展），搜索"PlatformIO IDE"扩展并下载。
3.  在安装扩展的期间，你可以前往GitHub下载程序，你可以通过点击带绿色字样的"<> Code"下载主分支程序，也通过侧边栏下载"Releases"版本程序。
4.  扩展安装完成后，打开侧边栏的资源管理器（或者使用<kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>E</kbd>打开），点击"打开文件夹"，找到刚刚你下载的项目代码（整个文件夹），点击"添加"，此时项目文件就添加到你的工作区了。
5.  打开项目文件中的"platformio.ini"（添加文件夹成功后PlatformIO会自动打开对应文件夹的"platformio.ini"）,在"[platformio]"目录下取消注释选择你需要烧录的示例程序（以"default_envs = xxx"为标头），然后点击左下角的"<kbd>√</kbd>"进行编译，如果编译无误，将单片机连接电脑，点击左下角"<kbd>→</kbd>"即可进行烧录。

### Arduino
1. 安装[Arduino](https://www.arduino.cc/en/software)，根据你的系统类型选择安装。

2. 打开项目文件夹的“example”目录，选择示例项目文件夹，打开以“.ino”结尾的文件即可打开Arduino IDE项目工作区。

3. 打开右上角“工具”菜单栏->选择“开发板”->“开发板管理器”，找到或者搜索“esp32”，下载作者名为“Espressif Systems”的开发板文件。接着返回“开发板”菜单栏，选择“ESP32 Arduino”开发板下的开发板类型，选择的开发板类型由“platformio.ini”文件中以[env]目录下的“board = xxx”标头为准，如果没有对应的开发板，则需要自己手动添加项目文件夹下“board”目录下的开发板。

4. 打开菜单栏“[文件]”->“[首选项]”，找到“[项目文件夹位置]”这一栏，将项目目录下的“libraries”文件夹里的所有库文件连带文件夹复制粘贴到这个目录下的“libraries”里边。

5. 在 "工具 "菜单中选择正确的设置，如下表所示。

| Setting                               | Value                                 |
| :-------------------------------: | :-------------------------------: |
| Board                                | ESP32S3 Dev Module|
| Upload Speed                     | 921600                               |
| USB Mode                           | Hardware CDC and JTAG     |
| USB CDC On Boot                | Enabled                             |
| USB Firmware MSC On Boot | Disabled                             |
| USB DFU On Boot                | Disabled                             |
| CPU Frequency                   | 240MHz (WiFi)                    |
| Flash Mode                         | QIO 80MHz                         |
| Flash Size                           | 16MB (128Mb)                     |
| Core Debug Level                | None                                 |
| Partition Scheme                | 16M Flash (3MB APP/9.9MB FATFS) |
| PSRAM                                | QSPI PSRAM                         |
| Arduino Runs On                  | Core 1                               |
| Events Run On                     | Core 1                               |

6. 选择正确的端口。

7. 点击右上角“<kbd>[√](image/8.png)</kbd>”进行编译，如果编译无误，将单片机连接电脑，点击右上角“<kbd>[→](image/9.png)</kbd>”即可进行烧录。
### ESP-IDF Visual Studio Code
1. 安装 [Visual Studio Code](https://code.visualstudio.com/Download) ，根据你的系统类型选择安装。

2. 打开 VisualStudioCode 软件侧边栏的“扩展”（或者使用<kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>X</kbd>打开扩展），搜索“ESP-IDF”扩展并下载。

3. 在安装扩展的期间，使用git命令克隆仓库

        git clone --recursive https://github.com/Xinyuan-LilyGO/T-CameraPlus-S3.git

    克隆时候需要同时加上“--recursive”，如果克隆时候未加上那么之后使用的时候需要初始化一下子模块

        git submodule update --init --recursive

4. 下载安装 [ESP-IDF v5.4.1](https://dl.espressif.cn/dl/esp-idf/?idf=4.4)，记录一下安装路径，打开之前安装好的“ESP-IDF”扩展打开“配置 ESP-IDF 扩展”，选择“USE EXISTING SETUP”菜单，选择“Search ESP-IDF in system”栏，正确配置之前记录的安装路径：
   - **ESP-IDF directory (IDF_PATH):** `你的安装路径xxx\Espressif\frameworks\esp-idf-v5.4`  
   - **ESP-IDF Tools directory (IDF_TOOLS_PATH):** `你的安装路径xxx\Espressif`  
    点击右下角的“install”进行框架安装。

5. 点击 Visual Studio Code 底部菜单栏的 ESP-IDF 扩展菜单“SDK 配置编辑器”，在搜索栏里搜索“Select the example to build”字段，选择你所需要编译的项目，再在搜索栏里搜索“Select the camera type”字段，选择你的板子板载的摄像头类型，点击保存。

6. 点击 Visual Studio Code 底部菜单栏的“设置乐鑫设备目标”，选择**ESP32S3**，点击底部菜单栏的“构建项目”，等待构建完成后点击底部菜单栏的“选择要使用的端口”，之后点击底部菜单栏的“烧录项目”进行烧录程序。

### 开发平台
1.  [Micropython](https://micropython.org/)
2.  [Arduino IDE](https://www.arduino.cc/en/software)
3.  [Platform IO](https://platformio.org/)

## 引脚总览


### T-CameraPlus-S3_V1.0-V1.1 版本
   | LCD引脚       | ESP32S3引脚      |
   | :------------------: | :------------------:|
   | MOSI                     | IO35                  |
   | SCLK                  | IO36                  |
   | RST                    | IO33                  |
   | BL                      | IO46                  |
   | CS                    | IO34                  |
   | DC                    | IO45                  |
 
   | IIS麦克风MSM261S4030H0R引脚 | ESP32S3引脚      |
   | :------------------: | :------------------:|
   | BCLK                  | IO18                  |
   | WS                  | IO39                    |
   | DATA                  | IO40                  |
 
   | 功放MAX98357A引脚          | ESP32S3引脚      |
   | :------------------: | :------------------:|
   | BCLK                  | IO41                  |
   | LRCLK                  | IO42                    |
   | DATA                  | IO38                  |
 
   | SD卡引脚          | ESP32S3引脚      |
   | :------------------: | :------------------:|
   | CS                  | IO21                  |
   | SCLK                  | IO36                    |
   | MOSI                  | IO35                  |
   | MISO                  | IO37                  |
 
   | 电源芯片SY6970引脚          | ESP32S3引脚      |
   | :------------------: | :------------------:|
   | SDA                  | IO1                  |
   | SCL                  | IO2                    |
   | INT                  | IO47                  |
 
   | 摄像头OV2640引脚          | ESP32S3引脚      |
   | :------------------: | :------------------:|
   | RESET                  | IO3                  |
   | XCLK                  | IO7                    |
   | SIDO                  | IO1                  |
   | SIOC                  | IO2                    |
   | D7                  | IO6                  |
   | D6                  | IO8                    |
   | D5                  | IO9                  |
   | D4                  | IO11                    |
   | D3                  | IO13                  |
   | D2                  | IO15                    |
   | D1                  | IO14                  |
   | D0                  | IO12                  |
   | VSYNC             | IO4                  |
   | HREF                  | IO5                  |
   | PCLK                  | IO10                  |
 
   | 触摸芯片引脚          | ESP32S3引脚      |
   | :------------------: | :------------------:|
   | SDA                  | IO1                  |
   | SCL                  | IO2                    |
   | RST                  | IO48                  |
   | INT                  | IO47                  |


### T-CameraPlus-S3_V1.2 版本
   | LCD引脚       | ESP32S3引脚      |
   | :------------------: | :------------------:|
   | MOSI                     | IO34                  |
   | SCLK                  | IO35                  |
   | BL                      | IO46                  |
   | CS                    | IO36                  |
   | DC                    | IO45                  |
 
   | PDM麦克风MP34DT05TR引脚 | ESP32S3引脚      |
   | :------------------: | :------------------:|
   | LRCLK                  | IO40                  |
   | DATA                  | IO38                  |
 
   | 功放MAX98357A引脚          | ESP32S3引脚      |
   | :------------------: | :------------------:|
   | BCLK                  | IO41                  |
   | LRCLK                  | IO42                    |
   | DATA                  | IO39                  |
 
   | SD卡引脚          | ESP32S3引脚      |
   | :------------------: | :------------------:|
   | CS                  | IO21                  |
   | SCLK                  | IO35                    |
   | MOSI                  | IO34                  |
   | MISO                  | IO48                  |
 
   | 电源芯片SY6970引脚          | ESP32S3引脚      |
   | :------------------: | :------------------:|
   | SDA                  | IO33                  |
   | SCL                  | IO37                    |
 
   | 摄像头OV2640引脚          | ESP32S3引脚      |
   | :------------------: | :------------------:|
   | XCLK                  | IO7                    |
   | SIDO                  | IO1                  |
   | SIOC                  | IO2                    |
   | D7                  | IO6                  |
   | D6                  | IO8                    |
   | D5                  | IO9                  |
   | D4                  | IO11                    |
   | D3                  | IO13                  |
   | D2                  | IO15                    |
   | D1                  | IO14                  |
   | D0                  | IO12                  |
   | VSYNC             | IO3                  |
   | HREF                  | IO5                  |
   | PCLK                  | IO10                  |
   | PWDN                  | IO4                  |
 
   | 触摸芯片引脚          | ESP32S3引脚      |
   | :------------------: | :------------------:|
   | SDA                  | IO33                  |
   | SCL                  | IO37                    |
   | INT                  | IO47                  |

------------------------

| 控制摄像头OV2640红外滤镜开关引脚     | ESP32S3引脚      |
| :------------------: | :------------------:|
| AP1511B_FBC                  | IO16                  |

| 按键KEY1引脚     | ESP32S3引脚      |
| :------------------: | :------------------:|
| KEY1                  | IO17                  |

## 相关测试

| firmware | program | description | picture |
| ------  | ------  | ------ | ------ | 
| [Deep_Sleep_Wake_Up]() |[Deep_Sleep_Wake_Up](https://github.com/Xinyuan-LilyGO/T-CameraPlus-S3/blob/arduino-esp32-libs_V2.0.14/examples/Deep_Sleep_Wake_Up/)| 平均电流消耗: 1.7mA 更多信息请查看 [功耗测试日志](https://github.com/Xinyuan-LilyGO/T-CameraPlus-S3/blob/arduino-esp32-libs_V2.0.14/relevant_test/PowerConsumptionTestLog_[T-CameraPlus-S3_V1.2]_20250408.pdf) | |


## 常见问题

*   **Q. T-Camera Plus S3的主要应用场景是什么？**
    A. 适用于智能监控、视频门铃、物联网视觉交互、多媒体终端、AI图像识别等需要摄像头和显示功能的场景。

*   **Q. 出厂是否预装程序？**
    A. 出厂自带基于LVGL的UI程序，支持文件管理、音乐播放、录音、摄像头投影等功能。如果未预装，需要手动烧写"Lvgl_UI"示例程序。

*   **Q. 支持哪些摄像头模块？**
    A. 支持OV2640和OV5640两种摄像头模块，用户可以根据需求选择不同分辨率的摄像头。

*   **Q. 音频功能如何？**
    A. 集成了MAX98357A音频放大器驱动扬声器，以及MP34DT05-A数字麦克风，支持高质量的音频播放和录音。

*   **Q. 如何扩展外部设备？**
    A. 可以通过2个STEMMA QT/QWIIC接口快速连接兼容的传感器，也可以通过2×13的双排扩展接口连接其他外设。

## 项目

* [T-CameraPlus-S3_V1.0-V1.1](project/T-CameraPlus-S3_V1.0-V1.1_20241109.pdf)
* [T-CameraPlus-S3_V1.2](project/T-CameraPlus-S3_V1.2_20240417.pdf)

## 资料
*   [ESP32-S3 Datasheet](https://www.espressif.com.cn/sites/default/files/documentation/esp32-s3_datasheet_en.pdf)
*   [MAX98357A Datasheet](https://github.com/Xinyuan-LilyGO/T-CameraPlus-S3/blob/arduino-esp32-libs_V2.0.14/information/MAX98357AETE+T.pdf)
*   [MP34DT05-A Datasheet](https://github.com/Xinyuan-LilyGO/T-CameraPlus-S3/blob/arduino-esp32-libs_V2.0.14/information/mp34dt05-a.pdf)
*   [SY6970 Datasheet](information/EVB_SY6970.pdf)
*   [SY6970 Application Note](information/AN_SY6970.pdf)

## 依赖库
*   [Arduino_GFX-1.3.7](https://github.com/moononournation/Arduino_GFX)
*   [lvgl-8.3.5](https://github.com/lvgl/lvgl)
*   [JPEGDEC-1.2.8](https://github.com/bitbank2/JPEGDEC)
*   [MiniTV](https://github.com/moononournation/MiniTV)
*   [TFT_eSPI](https://github.com/Bodmer/TFT_eSPI)
*   [XPowersLib-0.2.1](https://github.com/lewisxhe/XPowersLib)
*   [Arduino_DriveBus-1.1.16](https://github.com/Xk-w/Arduino_DriveBus)
*   [cst816t-1.5.0](https://github.com/koendv/cst816t)
*   [arduino-libhelix-0.8.1](https://github.com/pschatzmann/arduino-libhelix)
*   [ESP32-audioI2S-3.0.6](https://github.com/schreibfaul1/ESP32-audioI2S)
*   [DFRobot_MSM261](https://github.com/DFRobot/DFrobot_MSM261)