---
title: LILYGO T-Circle
show_source: false
tags: T-Circle, LCD, ESP32
---

<div style="width:100%; display:flex;justify-content: center;">

![T-Circle](./assets/T-Circle-1.jpg)

</div>

<div style="padding: 1em 0 0 0; display: flex; justify-content: center">
    <a target="_blank" style="margin: 1em;color: white; font-size: 0.9em; border-radius: 0.3em; padding: 0.5em 2em; background-color:rgb(103, 175, 8)" href="https://lilygo.cc/products/t-circle-s3?variant=44912874062005">Official Store</a>
</div>

> **Note**: T-Circle is the ESP32 version. Click here to switch to the ESP32-S3 version [T-Circle S3](https://wiki.lilygo.cc/get_started/zh/LCD_OLED/T-Circle-S3/T-Circle-S3.html).

## Version History:
| Version | Update Date | Update Description |
| :-----: | :---------: | :---------------- |
| T-Circle_V1.0 | 2021-03-14 | Initial Version |

## Purchase Link

| Product | SOC | FLASH | PSRAM | Link |
| :-----: | :--: | :---: | :---: | :--: |
| T-Circle | ESP32 | 16M | 8M (Octal SPI) | [LILYGO Mall](https://lilygo.cc/products/t-circle-s3?variant=44912874062005) |

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

LILYGO T-Circle is a circular screen development board based on ESP32. It features a 0.75-inch TFT LCD circular display with 160x160 resolution and 262K color support, equipped with CST816D capacitive touch chip for precise touch interaction. The hardware uses GCPD01N driver chip and connects to external devices through 12 pins (including 3V3 power supply, SPI interface MOSI/SCK/CS, I2C communication SDA/SCL, BLE enable pin BLEEN, etc.), compatible with development frameworks like Arduino. Its compact design integrates high-precision display, touch control, and low-power communication functions, suitable for smart watches, IoT device interfaces, or prototype development of micro embedded systems.

## Preview

### Physical Images

<div style="width:100%; display:flex;justify-content: center;">

![T-Circle](./assets/T-Circle-2.jpg)

</div>

### Pinout Diagram

<img src="./assets/T-Circle-en.jpg" alt="summary" width=100%>

## Modules

### 1. MCU

* Chip: ESP32
* PSRAM: 8M (Octal SPI)
* FLASH: 16M
* Other Notes: For more information, please visit [Espressif Official ESP32 Datasheet](https://www.espressif.com/sites/default/files/documentation/esp32_datasheet_en.pdf)

### 2. Screen

* Size: 0.75-inch LCD circular screen
* Resolution: 160x160px
* Type: TFT LCD
* Driver IC: GC9D01N
* Compatible Libraries: TFT_eSPI, Arduino_GFX
* Bus Protocol: SPI

### 3. Touch

* Chip: CST816D
* Bus Protocol: I2C

### Overview
<img src="./assets/T-Circle-en.jpg" alt="summary" width=80%>

| Component | Description |
| :--: | :--: |
| MCU | ESP32 |
| FLASH| 16MB |
| PSRAM | 8MB (Octal SPI)|
| Screen | 0.75-inch GC9D01N LCD (160x160) |
| Touch | CST816D Capacitive Touch Screen |
| Bus | SPI |
| Wireless | 2.4 GHz Wi-Fi & Bluetooth |
| Expansion Interface | 12pin expansion interface |
| Buttons | 1 x RESET button + 1 x BOOT button |
| Power | 5V/500mA |
| Mounting Holes | 2 × M1.6*2 |
| Dimensions | **32*17mm** |

## Quick Start

### Example Support

| Example | PlatformIO/Arduino | ESP-IDF | Description |
| :------ | :----------------: | :-----: | :---------- |
| [Basic Display](https://github.com/Xinyuan-LilyGO/T-Circle) | ✓ | | Basic Display Example |
| [Touch Test](https://github.com/Xinyuan-LilyGO/T-Circle) | ✓ | | Touch Test Example |
| *(More examples available in GitHub repository)* | | | |

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

#### ESP32
| Setting | Value |
| :-----: | :---: |
| Board | ESP32 Dev Module |
| Upload Speed | 921600 |
| CPU Frequency | 240MHz (WiFi) |
| Flash Mode | QIO 80MHz |
| Flash Size | 16MB (128Mb) |
| Core Debug Level | None |
| Partition Scheme | Default Configuration |
| PSRAM | Enabled |

6. Select the correct port.
7. Click the "<kbd>√</kbd>" in the top right corner to compile. If the compilation is successful, connect the board to your computer and click the "<kbd>→</kbd>" to upload.

### Development Platforms
1. [Micropython](https://micropython.org/)
2. [Arduino IDE](https://www.arduino.cc/en/software)
3. [Platform IO](https://platformio.org/)

## Related Tests

*(Power consumption and other test data to be added)*

## FAQ

* **Q. I still don't know how to set up the programming environment after reading the above tutorial. What should I do?**
  A. If you still don't understand how to set up the environment after reading the above tutorial, you can refer to the [LilyGo-Document](https://github.com/Xinyuan-LilyGO/LilyGo-Document) documentation for setup instructions.

* **Q. Why does my board keep failing to upload programs?**
  A. Please hold down the "BOOT" button, then press the "RST" button once, and then click upload to enter download mode.

* **Q. What's the difference between T-Circle and T-Circle S3?**
  A. T-Circle uses ESP32 as the main controller, while T-Circle S3 uses the more powerful ESP32-S3. Please choose the appropriate version according to your project requirements.

## Projects
* [T-Circle-S3](https://github.com/Xinyuan-LilyGO/T-Circle-S3/blob/arduino-esp32-libs_V2.0.14/project/T-Circle-S3_V1.0.pdf) *(Please note, this schematic is for the S3 version. For ESP32 version schematic, please refer to the GitHub repository)*

## Resources
* [GC9D01N](https://github.com/Xinyuan-LilyGO/T-Circle-S3/blob/arduino-esp32-libs_V2.0.14/information/GC9D01N.pdf)
* [MAX98357A](https://github.com/Xinyuan-LilyGO/T-Circle-S3/blob/arduino-esp32-libs_V2.0.14/information/MAX98357AETE+T.pdf)
* [MSM261S4030H0R](https://github.com/Xinyuan-LilyGO/T-Circle-S3/blob/arduino-esp32-libs_V2.0.14/information/MSM261S4030H0R.pdf)
* [MP34DT05-A](https://github.com/Xinyuan-LilyGO/T-Circle-S3/blob/arduino-esp32-libs_V2.0.14/information/mp34dt05-a.pdf)

## Dependent Libraries
* [TFT_eSPI-2.5.43](https://github.com/Bodmer/TFT_eSPI)
* [Arduino_DriveBus-1.1.16](https://github.com/Xk-w/Arduino_DriveBus)
* [Arduino_GFX-1.3.7](https://github.com/moononournation/Arduino_GFX)
* [ESP32-audioI2S-3.0.6](https://github.com/schreibfaul1/ESP32-audioI2S)
* [DFRobot_MSM261](https://github.com/DFRobot/DFrobot_MSM261)
* [FastLED-3.6.0](https://github.com/FastLED/FastLED)