---
title: LILYGO T-Deck Plus
show_source: false
---
<!-- **[English](README.MD) | 中文** -->

<div style="width:100%; display:flex;justify-content: center;">

![T-PICO-2350-03](./assets/T-Deck-Plus1.jpg)

</div>

<!-- <div style="padding: 1em 0 0 0; display: flex; justify-content: center">
    <a target="_blank" style="margin: 1em;color: white; font-size: 0.9em; border-radius: 0.3em; padding: 0.5em 2em; background-color:rgb(63, 201, 28)" href="https://item.taobao.com/item.htm?id=846226367137">淘宝</a>
    <a target="_blank" style="margin: 1em;color: white; font-size: 0.9em; border-radius: 0.3em; padding: 0.5em 2em; background-color:rgb(63, 201, 28)" href="https://www.aliexpress.com/store/911876460">速卖通</a>
</div> -->

## 简介

LILYGO T-Deck Plus 是一款功能丰富的便携式嵌入式开发套件，基于高性能的 ESP32-S3 芯片，集成了 320x240 分辨率的 ST7789 LCD 显示屏、SX1262 LoRa 远程通信模块、ES7210 音频编解码器、麦克风、喇叭及 TF 卡存储扩展功能。其硬件配置包括可选的轨迹球、机械键盘（颜色可选黑白）、1/4 英寸螺母固定接口，并支持 GPS 定位与 2000mAh 电池供电，配备电压检测以优化功耗管理。通过 SPI、I2C 等接口连接多模块（如 LoRa、LCD、触摸控制），同时提供 AUX 天线扩展接口，适用于物联网终端、远程控制、音频交互及户外移动场景的开发与应用。

## 外观及功能介绍
### 外观
<img src="./assets/T-Deck-Plus2.jpg" alt="summary" width=80%>

### 引脚图 

<img src="./assets/T-Deck-Plus-zh.jpg" alt="summary" width=100%>

## 模块资料以及参数
### 开发板参数

| 组件 | 描述 |
| ---  | --- |
|MCU	|	ESP32-S3FN16R8 Dual-core LX7 microprocessor
|Flash 	|16M 
|PSRAM  |8M
|Lora|	SX1262 433Mhz~915Mhz(可选)
|GPS	|MIA-M10Q
|无线| 2.4 GHz Wi-Fi & Bluetooth 5 (LE)
|存储 | TF 卡 |
|屏幕| ST7789 320 x 240 LCD
|电池容量 |	2000mAh
|控制方式	| 轨迹球 触摸屏 
|输入|键盘
|麦克风|    MSM381A3729H9CP
|开关	|支持电源开关
|触摸	|GT911
| 按键 | 1 x RST 按键 + 1 x BOOT 按键(轨迹球)  |
|音频	|ES7210
| USB |1 × type-C接口|
|IO 拓展	|PCA9535PW (0x20)
| 拓展接口 | GPS拓展接口 + 2 × Knockout(用于拓展天线的AUX连接器) |
| 孔位 | 2×2mm 定位孔 |
| 尺寸 | **115x72x20mm**  |
### 相关资料
Github：[T-Deck Plus](https://github.com/Xinyuan-LilyGO/T-Deck)
* [T-Deck ANT 868-915MH](https://github.com/Xinyuan-LilyGO/T-Deck/blob/master/datasheet/T-Deck%20ANT%20868-915MHZ.pdf.pdf)
* [T-Deck ANT 433MHZ](https://github.com/Xinyuan-LilyGO/T-Deck/blob/master/datasheet/T-Deck%20ANT%20433MHZ.pdf)

#### 原理图

[T-Deck Plus](https://github.com/Xinyuan-LilyGO/T-Deck/blob/master/schematic/schematic.pdf)

<!-- * [SY6970](./datasheet/AN_SY6970.pdf) -->

#### 依赖库

* [AceButton](https://github.com/bxparks/AceButton)
* [Arduino_GFX](https://github.com/moononournation/Arduino_GFX)
* [ESP32-audioI2S](https://github.com/schreibfaul1/ESP32-audioI2S)
* [RadioLib](https://github.com/jgromes/RadioLib)
* [SensorsLib](https://github.com/lewisxhe/SensorsLib)
* [TFT_eSPI](https://github.com/Bodmer/TFT_eSPI)
* [TinyGPSPlus](https://github.com/mikalhart/TinyGPSPlus)
* [TouchLib](https://github.com/mmMicky/TouchLib)
* [LVGL](https://github.com/lvgl/lvgl/tree/v8.4.0)

## 软件开发
### Arduino 设置参数

|Arduino IDE 设置	|参数   
| ----------- | -----------|                         
|Board     |	ESP32S3 Dev Module
|Port      |    Your port                        
|USB CDC On Boot	|Enable
|CPU Frequency	|240MHZ(WiFi)                      
|Core Debug Level	|None                              
|USB DFU On Boot	|Disable                          
|Erase All Flash Before Sketch Upload	|Disable                          
|Events Run On	|Core1                            
|Flash Mode	|QIO 80MHZ                        
|Flash Size	|16MB(128Mb)                  
|Arduino Runs On	|Core1                            
|USB Firmware MSC On Boot	|Disable                          
|Partition Scheme	|16M Flash(3M APP/9.9MB FATFS)
|PSRAM	|OPI PSRAM                    
|Upload Mode	|UART0/Hardware CDC            
|Upload Speed	|921600                            
|USB Mode	|CDC and JTAG      

### 开发平台
1. [VS Code](https://code.visualstudio.com/)
2. [Arduino IDE](https://www.arduino.cc/en/software)
3. [Platform IO](https://platformio.org/)
4. [Micropython](https://micropython.org/)

## 产品技术支持 


