---
title: LILYGO T-Display S3 AMOLED 1.43
show_source: false
tags: AMOLED, Display
---
<!-- **[English](README.MD) | Chinese** -->

<div style="width:100%; display:flex;justify-content: center;">

![T-Display-S3-AMOLED-1.64](./assets/T-Display-S3-AMOLED-1.64-1.jpg)

</div>

<div style="padding: 1em 0 0 0; display: flex; justify-content: center">
    <a target="_blank" style="margin: 1em;color: white; font-size: 0.9em; border-radius: 0.3em; padding: 0.5em 2em; background-color:rgb(63, 201, 28)" href="https://lilygo.cc/products/t-display-s3-amoled-1-64?variant=44437365031093">Official Store</a>
    <!-- <a target="_blank" style="margin: 1em;color: white; font-size: 0.9em; border-radius: 0.3em; padding: 0.5em 2em; background-color:rgb(63, 201, 28)" href="https://www.aliexpress.com/store/911876460">AliExpress</a> -->
</div>

## Version History:
| Version | Update Date | Update Description |
| :-----: | :---------: | :---------------- |
| T-Display-S3-AMOLED-1.43_V1.0 | 2024-05-20 | Initial Version |
| T-Display-S3-AMOLED-1.43-1.75_V1.0 | 2024-11-25 | Added FPC cable, added H0175Y003AM screen support |
| T-Display-S3-AMOLED-1.43-1.75_V1.0 | 2025-01-13 | Added DO0143FMST10 screen support |

## Purchase Link

| Product | SOC | FLASH | PSRAM | Link |
| :-----: | :--: | :---: | :---: | :--: |
| T-Display-S3-AMOLED-1.43-1.75 | ESP32S3R8 | 16M | 8M (Octal SPI) | [LILYGO Mall](https://lilygo.cc/products/t-display-s3-amoled-1-64?_pos=8&_sid=eacfa858d&_ss=r) |

## Description

T-Display-S3 AMOLED 1.64 is a high-performance IoT development board based on the ESP32-S3R8 dual-core LX7 microprocessor, integrating 2.4 GHz Wi-Fi and Bluetooth 5 (LE) wireless communication functions, supporting multi-platform development (Arduino, PlatformIO-IDE, ESP-IDF). Its core highlight is the 1.64-inch ICMA3311 AMOLED display with a resolution of 280×456 pixels, using QSPI bus interface and compatible with Arduino_GFX graphics library, enabling rapid development of rich graphical interfaces. The board comes with 16MB Flash and 8MB PSRAM, providing ample storage and memory resources, while supporting battery voltage detection (ADC pin IO4) and 5V/500mA USB charging, balancing low power consumption with mobile scenario requirements. Other features include capacitive touch interaction, external flow control, STEMMA OT/Qwlic expansion interfaces, and RF SH 1.0mm + 4W RF design, suitable for applications such as smart wearables, embedded GUI, industrial control, achieving a balance of high performance and multi-functionality in a compact size (28×42mm).

## Preview

### Physical Images

<div style="width:100%; display:flex;justify-content: center;">

<img src="./assets/T-Display-S3-AMOLED-1.64-2.jpg" alt="summary" width=80%>

</div>

### Pinout Diagram

<img src="./assets/T-Display-S3-AMOLED-1.64-en.jpg" alt="summary" width=100%>

## Modules

### MCU

* Chip: ESP32-S3-R8
* PSRAM: 8M (Octal SPI)
* FLASH: 16M
* Other Notes: For more information, please visit [Espressif Official ESP32-S3 Datasheet](https://www.espressif.com.cn/sites/default/files/documentation/esp32-s3_datasheet_en.pdf)

### Screen

* Size: 1.64-inch AMOLED
* Resolution: 280×456px
* Type: AMOLED
* Driver IC: ICMA3311
* Compatible Libraries: Arduino_GFX
* Bus Protocol: QSPI

### Overview
<img src="./assets/T-Display-S3-AMOLED-1.64-info-en.jpg" alt="summary" width=80%>

| Component | Description |
| :--: | :--: |
| MCU | ESP32-S3R8 Dual-core LX7 microprocessor |
| FLASH| 16MB |
| PSRAM | 8MB|
| Screen | 1.64-inch ICMA3311 AMOLED (280×456) |
| Touch | FT3168 Capacitive Touch Screen |
| Bus | QSPI |
| LoRa | 1276/868/915MHz |
| Storage | TF Card |
| Charging Chip | SY6970 |
| RTC | PCF8563 |
| Wireless | 2.4 GHz Wi-Fi & Bluetooth 5 (LE) |
| USB | 1 × USB Port and OTG (TYPE-C Interface) |
| IO Interface | 2 × 2×7 extended IO interface |
| Expansion Interfaces | 2 × STEMMA QT/Qwlic + JST-GH battery connector + antenna connector |
| Buttons | 1 x RESET button + 1 x BOOT button |
| Dimensions | **28×42×11mm** |

> The output waveform of this chip will be very unstable when powered by 5V without battery. It is necessary to connect a battery for use or use software to close the battery channel, in which case the situation will be alleviated.

## Quick Start

### Example Support

| Example | PlatformIO/Arduino | ESP-IDF | Description |
| :------ | :----------------: | :-----: | :---------- |
| [FT3168](https://github.com/Xinyuan-LilyGO/T-Display-S3-AMOLED-1.43-1.75/tree/main/examples/FT3168) | ✓ | | FT3168 Touch Example |
| [Original Test](https://github.com/Xinyuan-LilyGO/T-Display-S3-AMOLED-1.43-1.75/tree/main/examples/Original_Test) | ✓ | | DO0143FAT01(DO0143FMST02) Factory Test |
| [GFX](https://github.com/Xinyuan-LilyGO/T-Display-S3-AMOLED-1.43-1.75/tree/main/examples/GFX) | ✓ | | GFX Graphics Library Example |
| [GFX FT3168 Image](https://github.com/Xinyuan-LilyGO/T-Display-S3-AMOLED-1.43-1.75/tree/main/examples/GFX_FT3168_Image) | ✓ | | GFX Image Display Example |
| [SY6970](https://github.com/Xinyuan-LilyGO/T-Display-S3-AMOLED-1.43-1.75/tree/main/examples/SY6970) | ✓ | | SY6970 Power Management Example |
| [SY6970 OTG](https://github.com/Xinyuan-LilyGO/T-Display-S3-AMOLED-1.43-1.75/tree/main/examples/SY6970_OTG) | ✓ | | SY6970 OTG Function Example |
| [Light Sleep Wake Up](https://github.com/Xinyuan-LilyGO/T-Display-S3-AMOLED-1.43-1.75/tree/main/examples/Light_Sleep_Wake_Up) | ✓ | | Light Sleep Wake Up Example |
| [Deep Sleep Wake Up](https://github.com/Xinyuan-LilyGO/T-Display-S3-AMOLED-1.43-1.75/tree/main/examples/Deep_Sleep_Wake_Up) | ✓ | | Deep Sleep Wake Up Example |
| [PCF8563](https://github.com/Xinyuan-LilyGO/T-Display-S3-AMOLED-1.43-1.75/tree/main/examples/PCF8563) | ✓ | | PCF8563 RTC Example |
| [PCF8563 Scheduled INT](https://github.com/Xinyuan-LilyGO/T-Display-S3-AMOLED-1.43-1.75/tree/main/examples/PCF8563_Scheduled_INT) | ✓ | | PCF8563 Scheduled Interrupt Example |
| [PCF8563 Timer INT](https://github.com/Xinyuan-LilyGO/T-Display-S3-AMOLED-1.43-1.75/tree/main/examples/PCF8563_Timer_INT) | ✓ | | PCF8563 Timer Interrupt Example |
| [Deep Sleep PCF8563 Scheduled Wake Up](https://github.com/Xinyuan-LilyGO/T-Display-S3-AMOLED-1.43-1.75/tree/main/examples/Deep_Sleep_PCF8563_Scheduled_Wake_Up) | ✓ | | PCF8563 Scheduled Wake Up Deep Sleep Example |
| [Deep Sleep PCF8563 Timer Wake Up](https://github.com/Xinyuan-LilyGO/T-Display-S3-AMOLED-1.43-1.75/tree/main/examples/Deep_Sleep_PCF8563_Timer_Wake_Up) | ✓ | | PCF8563 Timer Wake Up Deep Sleep Example |
| [SD](https://github.com/Xinyuan-LilyGO/T-Display-S3-AMOLED-1.43-1.75/tree/main/examples/SD) | ✓ | | SD Card Read/Write Example |
| [Original_Test_H0175Y003AM](https://github.com/Xinyuan-LilyGO/T-Display-S3-AMOLED-1.43-1.75/tree/main/examples/Original_Test_H0175Y003AM) | ✓ | | H0175Y003AM Screen Factory Test |
| [Original_Test_DO0143FMST10](https://github.com/Xinyuan-LilyGO/T-Display-S3-AMOLED-1.43-1.75/tree/main/examples/Original_Test_DO0143FMST10) | ✓ | | DO0143FMST10 Screen Factory Test |
| [Deep_Sleep_Wake_Up_H0175Y003AM](https://github.com/Xinyuan-LilyGO/T-Display-S3-AMOLED-1.43-1.75/tree/main/examples/Deep_Sleep_Wake_Up_H0175Y003AM) | ✓ | | H0175Y003AM Screen Deep Sleep Wake Up |
| [Light_Sleep_Wake_Up_H0175Y003AM](https://github.com/Xinyuan-LilyGO/T-Display-S3-AMOLED-1.43-1.75/tree/main/examples/Light_Sleep_Wake_Up_H0175Y003AM) | ✓ | | H0175Y003AM Screen Light Sleep Wake Up |
| [lvgl_benchmark](https://github.com/Xinyuan-LilyGO/T-Display-S3-AMOLED-1.43-1.75/tree/main/examples/lvgl_benchmark) | ✓ | | LVGL Performance Test |
| [iic_scan](https://github.com/Xinyuan-LilyGO/T-Display-S3-AMOLED-1.43-1.75/tree/main/examples/iic_scan) | | ✓ | I2C Device Scan |
| [touch](https://github.com/Xinyuan-LilyGO/T-Display-S3-AMOLED-1.43-1.75/tree/main/examples/touch) | | ✓ | Touch Function Test |
| [screen_touch_lvgl_9](https://github.com/Xinyuan-LilyGO/T-Display-S3-AMOLED-1.43-1.75/tree/main/examples/screen_touch_lvgl_9) | | ✓ | Screen Touch and LVGL Integration Example |

Github：[T-Display-S3-AMOLED-1.64](https://github.com/Xinyuan-LilyGO/T-Display-S3-AMOLED-1.64-1.75/tree/main)

* [CO5300](https://github.com/Xinyuan-LilyGO/T-Display-S3-AMOLED-1.64/blob/arduino-esp32-libs_V2.0.14/information/CO5300_V0.01.pdf)
* [FT3168](https://github.com/Xinyuan-LilyGO/T-Display-S3-AMOLED-1.64/blob/arduino-esp32-libs_V2.0.14/information/FT3168.pdf)
* [DO0164FMST02](https://github.com/Xinyuan-LilyGO/T-Display-S3-AMOLED-1.64/blob/arduino-esp32-libs_V2.0.14/information/SPEC-DO0164FMST02-20240126.pdf)
* [AN_SY6970](https://github.com/Xinyuan-LilyGO/T-Display-S3-AMOLED-1.64/blob/arduino-esp32-libs_V2.0.14/information/AN_SY6970.pdf)
* [EVB_SY6970](https://github.com/Xinyuan-LilyGO/T-Display-S3-AMOLED-1.64/blob/arduino-esp32-libs_V2.0.14/information/EVB_SY6970.pdf)

### PlatformIO
1. Install [Visual Studio Code](https://code.visualstudio.com/Download) according to your system.
2. Open the "Extensions" sidebar in Visual Studio Code (or press <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>X</kbd>), search for the "PlatformIO IDE" extension and install it.
3. While the extension is installing, download the project from GitHub. You can click the green "<> Code" button to download the main branch, or download a "Releases" version from the sidebar.
4. After the extension installation is complete, open the Explorer sidebar (or press <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>E</kbd>), click "Open Folder", find the project code you just downloaded (the entire folder), click "Add", and the project files will be added to your workspace.
5. Open the "platformio.ini" file in the project folder (PlatformIO should automatically open it after adding the folder). Under the "[platformio]" section, uncomment the line selecting the example program you want to upload (starting with "default_envs = xxx"). Then click the "<kbd>√</kbd>" at the bottom left to compile. If the compilation is successful, connect the board to your computer and click the "<kbd>→</kbd>" at the bottom left to upload.

### Arduino
1. Install [Arduino IDE](https://www.arduino.cc/en/software) according to your system.
2. Open the "example" directory in the project folder, select the example project folder, and open the file ending with ".ino" to open the Arduino IDE project workspace.
3. Open the "Tools" menu -> "Board" -> "Boards Manager", find or search for "esp32", and install the board files by "Espressif Systems". Then return to the "Board" menu and select the board type under "ESP32 Arduino". The board type to choose is determined by the "board = xxx" header in the "[env]" section of the "platformio.ini" file. If the corresponding board is not available, you need to manually add the board from the "board" directory in the project folder.
4. Open the "[File]" -> "[Preferences]" menu, find the "[Sketchbook location]" field. Copy and paste all library files and folders from the "libraries" directory in the project folder into the "libraries" folder at this location.
5. Select the correct settings in the "Tools" menu as shown in the table below.

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

6. Select the correct port.
7. Click the "<kbd>√</kbd>" in the top right corner to compile. If the compilation is successful, connect the board to your computer and click the "<kbd>→</kbd>" to upload.

## Projects
* [T-Display-S3-AMOLED-1.64_V1.0](https://github.com/Xinyuan-LilyGO/T-Display-S3-AMOLED-1.64/blob/arduino-esp32-libs_V2.0.14/project/T-Display-AMOLED-1.64_V1.0.pdf)

## Resources
* [PCF8563](https://github.com/Xinyuan-LilyGO/T-Display-S3-AMOLED-1.43-1.75/blob/main/information/PCF8563.pdf)
* [SH8601](https://github.com/Xinyuan-LilyGO/T-Display-S3-AMOLED-1.43-1.75/blob/main/information/SH8601Z.pdf)
* [DO0143FAT10](https://github.com/Xinyuan-LilyGO/T-Display-S3-AMOLED-1.43-1.75/blob/main/information/DO0143FMST10-DWO.pdf)
* [AN_SY6970](https://github.com/Xinyuan-LilyGO/T-Display-S3-AMOLED-1.43-1.75/blob/main/information/AN_SY6970.pdf)
* [EVB_SY6970](https://github.com/Xinyuan-LilyGO/T-Display-S3-AMOLED-1.43-1.75/blob/main/information/EVB_SY6970.pdf)

## Dependent Libraries
* [Arduino_GFX-1.3.7](https://github.com/moononournation/Arduino_GFX)
* [Arduino_DriveBus-1.1.16]()
* [JPEGDEC-1.2.8](https://github.com/bitbank2/JPEGDEC)
* [lvgl-8.3.5](https://lvgl.io)
* [MiniTV](https://github.com/moononournation/MiniTV)
* [SensorLib](https://github.com/lewisxhe/SensorsLib)