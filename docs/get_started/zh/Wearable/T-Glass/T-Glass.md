---
title: LILYGO T-Glass
show_source: false
tags: ESP32-S3, AMOLED, Wearable, BHI260AP, Smart Glasses
---

<div style="width:100%; display:flex;justify-content: center;">

![T-Glass](./assets/T-Glass-1.jpg)

</div>

<div style="padding: 1em 0 0 0; display: flex; justify-content: center">
    <a target="_blank" style="margin: 1em;color: white; font-size: 0.9em; border-radius: 0.3em; padding: 0.5em 2em; background-color:rgb(63, 201, 28)" href="https://lilygo.cc/products/t-glass">官网购买</a>
</div>

## 版本迭代
| Product(PinMap)  | SOC            | Flash | PSRAM     | Resolution | Visible Area |
| ---------------- | -------------- | ----- | --------- | ---------- | ------------ |
| [T-Glass/V2][1]  | ESP32-S3 FN4R2 | 4MB   | 2MB(QSPI) | 294x126    | 126x126      |
| [T-Wristband][2] | ESP32-S3 FN4R2 | 4MB   | 2MB(QSPI) | 294x126    | 126x250      |

| Current consumption | Working current             | sleep current | sleep mode          |
| ------------------- | --------------------------- | ------------- | ------------------- |
| [T-Glass/V2][1]     | (240MHz) WiFi On 90~230+ mA | about 300uA   | touch button wakeup |
| [T-Wristband][2]    | (240MHz) WiFi On 90~230+ mA | about 300uA   | touch button wakeup |

[1]: https://www.lilygo.cc/products/t-glass
[2]: https://www.lilygo.cc/products/t-wristband-s3
## 购买链接
| Product | SOC | FLASH | PSRAM | Link |
| :-----: | :-: | :---: | :---: | :--: |
| T-Glass | ESP32-S3 | 4MB | 2MB | [LILYGO Store](https://lilygo.cc/products/t-glass) |
| T-Wristband | ESP32-S3 | 4MB | 2MB | [LILYGO Store](https://www.lilygo.cc/products/t-wristband-s3) |

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

LILYGO T-Glass 是一款基于ESP32-S3主控芯片的智能可穿戴设备，集成BHI260AP运动传感器和JD96013A型号的AMOLED显示屏，具备126×126像素的可见显示区域，支持触控交互与高对比度视觉效果。内置4MB Flash和2MB OSPI PSRAM，确保流畅运行与数据存储能力。功能模块丰富，包含实时时钟（RTC）、麦克风（支持MIC_CLOCK/MIC_DATA音频输入）、振动反馈（Vibration_Pin）、电池电量监测（BAT_ADC）以及触摸按键（Touch_Button），适用于运动追踪、智能提醒等场景。通过LILYGOT-GlassPINMAP接口方案，整合了SPI、I²C等通信协议，优化了硬件布局，适合轻量化设计需求，如智能眼镜或便携式穿戴设备，兼具低功耗与高性能特性。

## 预览

### 实物图

<div style="width:100%; display:flex;justify-content: center;">

![T-Glass](./assets/T-Glass-2.jpg)

</div>

### 引脚图

<img src="./assets/T-Glass-pin-zh.jpg" alt="summary" width=100%>

## 模块

### MCU
* 芯片：ESP32-S3 FN4R2
* PSRAM：2MB (QSPI PSRAM) 
* FLASH：4MB
* 无线：2.4 GHz Wi-Fi & Bluetooth 5 (LE)

### 屏幕
* 尺寸：1.1英寸LTPS AMOLED屏幕
* 分辨率：294×126px
* 屏幕类型：LTPS AMOLED
* 驱动芯片：JD9613
* 兼容库：LVGL
* 总线通信协议：SPI

### 运动传感器
* 芯片：BHI260AP
* 功能：AI智能运动传感

### 音频系统
* 功能：麦克风输入
* 接口：MIC_CLOCK/MIC_DATA

### 电源管理
* 电池：锂聚合物电池
* 监测：电池电量监测(ADC)

### 概述
<img src="./assets/T-Glass-point-zh.jpg" alt="summary" width=80%>

| 组件 | 描述 |
| :--: | :--: |
| MCU | ESP32-S3 FN4R2 |
| FLASH| 4MB |
| PSRAM | 2MB|
| 屏幕 | 1.1英寸 JD9613 LTPS AMOLED |
| 运动传感器 | BHI260AP AI智能传感器 |
| 触摸 | 侧面触摸按钮 |
| RTC | PCF85063A 实时时钟 |
| 音频 | 麦克风输入 |
| 振动 | 振动反馈电机 |
| 无线 | 2.4 GHz Wi-Fi & Bluetooth 5 (LE) |
| USB | 1 × USB Port (TYPE-C接口) |
| 扩展接口 | 2 × QWIIC 4 pin接口 |
| 按键 | 1 x RESET 按键 + 1 x BOOT 按键 |
| 开关 | 侧面电源开关 |
| 尺寸 | 140 × 67 × 111 mm |

## 快速开始

### 示例支持
```txt
./examples/
├── Glass                  # Initial version
│   ├── Glass6DoF 
│   ├── GlassBatteryVoltage
│   ├── GlassDeepSleep
│   ├── GlassDisplayRotation
│   ├── GlassFactory
│   │   └── src
│   ├── GlassHelloWorld
│   ├── GlassRtcAlarm
│   ├── GlassRtcDateTime
│   ├── GlassTouchButton
│   ├── GlassTouchButtonEvent
│   └── GlassVoiceActivityDetection
├── GlassV2                # Modify the reflective prism version         
│   ├── Glass6DoF
│   ├── GlassBatteryVoltage
│   ├── GlassDeepSleep
│   ├── GlassFactory
│   │   └── src
│   ├── GlassHelloWorld
│   ├── GlassRtcAlarm
│   ├── GlassRtcDateTime
│   ├── GlassTouchButton
│   ├── GlassTouchButtonEvent
│   └── GlassVoiceActivityDetection
└── Wristband
    ├── Wristband6DoF
    ├── WristbandBatteryVoltage
    ├── WristbandDeepSleep
    ├── WristbandDisplayRotation
    ├── WristbandDisplayVisualWindow1
    ├── WristbandFactory
    │   └── src
    ├── WristbandHelloWorld
    ├── WristbandLightSleep
    ├── WristbandRtcAlarm
    ├── WristbandRtcDateTime
    ├── WristbandTouchButton
    └── WristbandTouchButtonEvent
```

### PlatformIO
1. 安装 [Visual Studio Code](https://code.visualstudio.com/) 和 [Python](https://www.python.org/)（推荐Python 3.8+版本）
2. 在 Visual Studio Code 的扩展商店中搜索 `PlatformIO` 插件并安装
3. 安装完成后，需重启 Visual Studio Code
4. 重启 Visual Studio Code 后，点击软件左上角的 `文件（File）` → `打开文件夹（Open Folder）` → 选择 `LilyGO T-Wristband and T-Glass` 项目目录
5. 等待第三方依赖库自动安装完成（首次打开可能需要几分钟）
6. 点击打开项目中的 `platformio.ini` 配置文件，找到 `platformio` 配置段
7. 解除其中一行 `src_dir = xxxx` 的注释（删除行首的 `;`），确保仅保留一条生效配置（根据目标开发板选择对应目录）
8. 点击软件左下角的（✔）图标开始编译项目
9. 将开发板通过USB线连接至电脑
10. 点击（→）图标上传固件至开发板
11. 点击（插头图标）打开串口监视器，查看设备输出日志
12. 若出现无法写入固件或USB设备持续闪烁的情况，请查看下方的 **常见问题解答（FAQ）**

### Arduino
以下是纯中文版本（可直接复制），适配技术文档的准确性和操作指引清晰度：

1. 安装 [Arduino IDE](https://www.arduino.cc/en/software)
2. 安装 [Arduino ESP32 2.0.5 版本及以上、3.0 版本以下](https://docs.espressif.com/projects/arduino-esp32/en/latest/getting_started.html)（基于稳定版库），请确保开发板管理器中的链接为：
   ```
   https://espressif.github.io/arduino-esp32/package_esp32_index.json
   ```
3. 点击 `项目（Sketch）` → `包含库（Include Library）` → `管理库（Manage Libraries）`
4. 在库搜索框中输入 `LilyGO T-Wristband and T-Glass` → 点击 `安装（Install）` → 选择 `安装全部（Install ALL）`
5. 在库搜索框中输入 `lvgl` → 选择 `v8.4.0` 版本 → 点击 `安装（Install）`
6. 在库搜索框中输入 `SensorLib` → 选择 `v0.1.8` 版本 → 点击 `安装（Install）`
7. 点击 `文件（File）` → `示例（Examples）` → `LilyGO T-Wristband and T-Glass` → `选择对应的示例程序`
8. 点击 `工具（Tools）`，根据下表进行配置选择：

| Arduino IDE Setting                  | Value                                             |
| ------------------------------------ | ------------------------------------------------- |
| Board                                | **ESP32S3 Dev Module**                            |
| Port                                 | Your port                                         |
| USB CDC On Boot                      | Enable                                            |
| CPU Frequency                        | 240MHZ(WiFi)                                      |
| Core Debug Level                     | None                                              |
| USB DFU On Boot                      | Disable                                           |
| Erase All Flash Before Sketch Upload | Disable                                           |
| Events Run On                        | Core1                                             |
| Flash Mode                           | QIO 80MHZ                                         |
| Flash Size                           | **4MB(32Mb)**                                     |
| Arduino Runs On                      | Core1                                             |
| USB Firmware MSC On Boot             | Disable                                           |
| Partition Scheme                     | **Default 4M with spiffs(1.2M APP/1.5MB SPIFFS)** |
| PSRAM                                | **QSPI PSRAM**                                    |
| Upload Mode                          | **UART0/Hardware CDC**                            |
| Upload Speed                         | 921600                                            |
| USB Mode                             | **CDC and JTAG**                                  |
   - 加粗项为必填配置，其他项根据实际情况选择。

9. 选择对应的 `端口（Port）`（需先连接开发板）
10. 点击 `上传（upload）`，等待编译和写入完成
11. 若出现无法写入固件或USB设备持续闪烁的情况，请查看下方的 **常见问题解答（FAQ）**


### 开发平台
1. [Micropython](https://micropython.org/)
2. [Arduino IDE](https://www.arduino.cc/en/software)
3. [Platform IO](https://platformio.org/)


## 相关测试


## 常见问题

1. 该开发板使用USB作为**JTAG**上传端口。若需通过USB打印串口信息，需开启**USB_CDC_ON_BOOT**配置。
   若上传程序时找不到端口，或USB被用于其他功能导致端口不显示，请手动进入上传模式：
   1. 通过USB线连接开发板
   2. 长按**BOOT按键**，保持长按的同时按下**RST按键**
   3. 先松开**RST按键**
   4. 再松开**BOOT按键**
   5. 上传程序

2. 若上述方法无效，请烧录[二进制文件](./firmware/README.MD)以检查硬件是否正常

3. 若使用外部电源而非USB-C供电，请关闭**USB_CDC_ON_BOOT**选项。这是因为开发板启动时会等待USB接入。
   - 对于Arduino IDE用户，可在选项中关闭该功能。请注意，关闭**USB_CDC_ON_BOOT**会关闭USB-C的串口重定向，此时通过USB-C打开端口将无法看到任何串口信息，信息会从GPIO43和GPIO44输出：
     ```c
     工具（Tools）-> USB CDC On Boot -> 禁用（Disable）
     ```
   - 对于Platformio用户，可在ini文件中添加以下编译标志：
     ```c
     build_flags =
         ; 启用-DARDUINO_USB_CDC_ON_BOOT会在启动时开始打印并等待终端接入
         ; -DARDUINO_USB_CDC_ON_BOOT=1

         ; 启用-UARDUINO_USB_CDC_ON_BOOT会关闭打印，使用电池供电时不会阻塞
         -UARDUINO_USB_CDC_ON_BOOT
     ```

4. JD9613显示屏的RAM仅为屏幕尺寸的1/2，不支持旋转。方向0和1可调整垂直方向，水平方向1和3为同一方向：
   ```c
   // 设置屏幕为竖屏，0和2是两个相反的垂直方向
    amoled.setRotation(0);
    amoled.setRotation(2);

   // 设置屏幕为横屏，1和3方向相同且无法改变
    amoled.setRotation(1);
    amoled.setRotation(3);
   ```

## 项目

| Product(PinMap)  | schematic                                                   |
| ---------------- | ----------------------------------------------------------- |
| [T-Glass][1]     | [schematic](https://github.com/Xinyuan-LilyGO/LilyGO-T-Wristband-and-T-Glass/blob/master/schematic/LilyGO-T-Wristband-and-T-Glass.pdf) |
| [T-Wristband][2] | [schematic](https://github.com/Xinyuan-LilyGO/LilyGO-T-Wristband-and-T-Glass/blob/master/schematic/LilyGO-T-Wristband-and-T-Glass.pdf) |



## 资料
* [JD9613 Datasheet](https://github.com/Xinyuan-LilyGO/LilyGO-T-Wristband-and-T-Glass/blob/master/datasheet/JD9613_DS_Preliminary_V0.02_20210325.pdf)
* [ESP32-S3-FN4R2](https://www.espressif.com.cn/en/support/documents/technical-documents?keys=&field_type_tid%5B%5D=842)
* [BHI260AP](https://www.bosch-sensortec.com/products/smart-sensor-systems/bhi260ap/)
* [PCF85063A](https://www.nxp.com/products/analog-and-mixed-signal/real-time-clocks/rtcs-with-ic-bus/tiny-real-time-clock-calendar-with-alarm-function-and-ic-bus:PCF85063A)

## 依赖库
* [SensorLib 0.1.8](https://github.com/lewisxhe/SensorsLib)
* [lvgl 8.4.0](https://github.com/lvgl/lvgl/tree/release/v8.4)
* [MadgwickAHRS](https://github.com/arduino-libraries/MadgwickAHRS)