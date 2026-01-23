---
title: LILYGO T-Display S3 AMOLED 1.43
show_source: false
tags: AMOLED, Display
---

<div style="width:100%; display:flex;justify-content: center;">

![T-Display-S3-AMOLED-1.43](./assets/T-Display-S3-AMOLED-1.43-1.jpg)

</div>

<div style="padding: 1em 0 0 0; display: flex; justify-content: center">
    <a target="_blank" style="margin: 1em;color: white; font-size: 0.9em; border-radius: 0.3em; padding: 0.5em 2em; background-color:rgb(63, 201, 28)" href="https://lilygo.cc/products/t-display-s3-amoled-1-64?variant=44507650556085">Official Store</a>
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

## Table of Contents
- [Description](#description)
- [Preview](#preview)
- [Modules](#modules)
- [Quick Start](#quick-start)
- [Pin Overview](#pin-overview)
- [Related Tests](#related-tests)
- [FAQ](#faq)
- [Projects](#projects)
- [Resources](#resources)
- [Dependent Libraries](#dependent-libraries)

## Description

T-Display-S3-AMOLED-1.43-1.75 is an intelligent display development board integrating the high-performance ESP32-S3 Wi-Fi/Bluetooth dual-mode chip, specifically designed for IoT and interactive applications. At its core is a 1.43-inch AMOLED display providing 466×466 pixel high resolution, supporting touch operation and featuring a built-in PCF8563 real-time clock (RTC) for precise time management. Hardware configuration includes 16MB FLASH storage, 8MB Octal SPI PSRAM memory, supports Micro SD card expansion storage, while integrating battery level detection (ADC) function and Type-C power supply interface, convenient for mobile scenarios. The development board provides rich expansion interfaces (such as SPI, I2C, GPIO, etc.), compatible with touchscreen interaction and SD card data read/write, suitable for applications such as smart wearables, industrial control, embedded GUI development, combining high performance with low power consumption characteristics.

## Preview

### Physical Images

<div style="width:100%; display:flex;justify-content: center;">

![T-Display-S3-AMOLED-1.43](./assets/T-Display-S3-AMOLED-1.43-2.jpg)

</div>

### Pinout Diagram

<img src="./assets/T-Display-S3-AMOLED-1.43-en.jpg" alt="summary" width=100%>

## Modules

### MCU

* Chip: ESP32-S3-R8
* PSRAM: 8M (Octal SPI)
* FLASH: 16M
* Other Notes: For more information, please visit [Espressif Official ESP32-S3 Datasheet](https://www.espressif.com.cn/sites/default/files/documentation/esp32-s3_datasheet_en.pdf)

### Screen

* Size: 1.43-inch AMOLED circular screen
* Resolution: 466x466px
* Type: AMOLED
* Driver IC: SH8601
* Compatible Libraries: Arduino_GFX
* Bus Protocol: QSPI

### Touch

* Chip: FT3268
* Bus Protocol: I2C

### Charging Chip

* Chip: SY6970
* Bus Protocol: I2C
* Other: The output waveform of this chip will be very unstable when powered by 5V without battery. It is necessary to connect a battery for use or use software to close the battery channel, in which case the situation will be alleviated.

### RTC

* Chip: PCF8563
* Bus Protocol: I2C

### Overview
<img src="./assets/T-Display-S3-AMOLED-1.43-info-en.jpg" alt="summary" width=80%>

| Component | Description |
| :--: | :--: |
| MCU | ESP32-S3R8 Dual-core LX7 microprocessor |
| FLASH| 16MB |
| PSRAM | 8MB|
| Screen | 1.43-inch SH8601 AMOLED |
| Touch | FT3168 Capacitive Touch Screen |
| Bus | QSPI |
| LoRa | 1276:868,915Mhz |
| Storage | TF Card |
| Charging Chip | SY6970 |
| RTC | PCF8563 |
| Wireless | 2.4 GHz Wi-Fi & Bluetooth 5 (LE) |
| USB | 1 × USB Port and OTG (TYPE-C Interface) |
| IO Interface | 2 x 2.54mm pitch 2*7 extended IO interface |
| Expansion Interfaces | 1 × QWIIC interface + JST-GH 1.25MM interface + 1 x battery connector |
| Buttons | 1 x RESET button + 1 x BOOT button |
| Dimensions | **45x45x11mm** |

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

### Development Platforms
1. [Micropython](https://micropython.org/)
2. [Arduino IDE](https://www.arduino.cc/en/software)
3. [Platform IO](https://platformio.org/)

## Pin Overview

| AMOLED Screen Pins | ESP32S3 Pins |
| :---------------: | :----------: |
| SDIO0 | IO11 |
| SDIO1 | IO13 |
| SDIO2 | IO14 |
| SDIO3 | IO15 |
| SCLK | IO12 |
| CS | IO10 |
| RST | IO17 |
| EN | IO16 |

| Touch Chip Pins | ESP32S3 Pins |
| :-------------: | :----------: |
| INT | IO9 |
| SDA | IO7 |
| SCL | IO6 |

| Power Chip Pins | ESP32S3 Pins |
| :-------------: | :----------: |
| SDA | IO7 |
| SCL | IO6 |

| Battery Measurement Pins | ESP32S3 Pins |
| :---------------------: | :----------: |
| BATTERY_VOLTAGE_ADC_DATA | IO4 |

| SD Card Pins | ESP32S3 Pins |
| :----------: | :----------: |
| CS | IO4 |
| MOSI | IO39 |
| MISO | IO40 |
| SCLK | IO41 |

## Related Tests

### Power Consumption
| Firmware | Program | Description |
| :------: | :-----: | :---------- |
| `[T-Display-S3-AMOLED-1.43_V1.0][Light_Sleep_Wake_Up]_firmware_V1.0.0.bin` | `Light Sleep Wake Up` | Power Consumption: 1282.8uA |
| `[T-Display-S3-AMOLED-1.43_V1.0][Deep_Sleep_Wake_Up]_firmware_V1.0.0.bin` | `Deep Sleep Wake Up` | Power Consumption: 174.2uA |

## FAQ

* **Q. I still don't know how to set up the programming environment after reading the above tutorial. What should I do?**  
  A. If you still don't understand how to set up the environment after reading the above tutorial, you can refer to the [LilyGo-Document](https://github.com/Xinyuan-LilyGO/LilyGo-Document) documentation for setup instructions.

* **Q. Why does Arduino IDE prompt me to upgrade library files when I open it? Should I upgrade or not?**  
  A. Choose not to upgrade library files. Different versions of library files may not be compatible with each other, so upgrading is not recommended.

* **Q. Why is there no serial data output from the "Uart" interface on my board? Is it broken?**  
  A. Because the project file is configured by default to use the USB interface as Uart0 serial output for debugging, and the "Uart" interface is connected to Uart0, it won't output any data without configuration.  
  PlatformIO users: Open the project file "platformio.ini", change the option "-DARDUINO_USB_CDC_ON_BOOT=true" under "build_flags = xxx" to "-DARDUINO_USB_CDC_ON_BOOT=false" to use the external "Uart" interface normally.  
  Arduino users: Open the "Tools" menu, select USB CDC On Boot: "Disabled" to use the external "Uart" interface normally.

* **Q. Why does my board keep failing to upload programs?**  
  A. Please hold down the "BOOT-0" button and try uploading again.

## Projects
* [T-Display-S3-AMOLED-1.43-1.75_V1.0](https://github.com/Xinyuan-LilyGO/T-Display-S3-AMOLED-1.43-1.75/blob/main/project/T-Display-S3-AMOLED-1.43-1.75_V1.0.pdf)

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