---
title: LILYGO T-Embed SI4732
show_source: false
tags: ESP32-S3, SI4732, Radio, TFT, AM/FM
---

<div style="width:100%; display:flex;justify-content: center;">

![T-Embed-SI4732](./assets/T-Embed-SI4732-1.jpg)

</div>

<div style="padding: 1em 0 0 0; display: flex; justify-content: center">
    <a target="_blank" style="margin: 1em;color: white; font-size: 0.9em; border-radius: 0.3em; padding: 0.5em 2em; background-color:rgb(63, 201, 28)" href="https://item.taobao.com/item.htm?id=846226367137">Taobao Store</a>
    <a target="_blank" style="margin: 1em;color: white; font-size: 0.9em; border-radius: 0.3em; padding: 0.5em 2em; background-color:rgb(63, 201, 28)" href="https://www.aliexpress.com/store/911876460">AliExpress Store</a>
</div>

> Switch to [T-Embed-CC1101](https://wiki.lilygo.cc/get_started/zh/LCD_OLED/T-Embed-CC1101/T-Embed-CC1101.html) version here

## Version History
| Version | Update Date | Update Description |
| :-----: | :---------: | :----------------- |
| T-Embed-SI4732_V1.0 | 2024-07-29 | Initial hardware version |
| T-Embed-SI4732_V1.1 | 2025-01-09 | Software update |

## Purchase Links
| Product | SOC | FLASH | PSRAM | Link |
| :-----: | :-: | :---: | :---: | :--: |
| T-Embed SI4732 | ESP32-S3 | 16MB | 8MB | [LILYGO Store](https://lilygo.cc/products/t-embed) |

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

LILYGO T-Embed SI4732 is a version based on the basic T-Embed with added SI4732 expansion module. The SI4732 is a high-performance digital tuning radio chip specifically designed for AM/FM/SW/LW and other broadcast band reception. It integrates digital signal processing (DSP) technology with high sensitivity, low power consumption, and high integration characteristics, suitable for various radio and audio devices. T-Embed features a rounded rectangular design, integrated ring encoder and 1.9-inch IPS TFT, along with Mesh MIC and speaker, internal TF card slot and power management circuit, supporting 3.7V lithium battery power supply, with expansion interfaces including GROVE and 2.54mm pitch GPIO expansion port.

## Preview

### Physical Image

<div style="width:100%; display:flex;justify-content: center;">

![T-Embed-SI4732](./assets/T-Embed-SI4732-2.jpg)

</div>

### Pinout Diagram

<img src="./assets/T-Embed-SI4732.jpg" alt="summary" width=100%>

## Modules

### MCU
* Chip: ESP32-S3 Dual-core LX7
* PSRAM: 8MB (Octal SPI) 
* FLASH: 16MB
* Wireless: 2.4 GHz Wi-Fi & Bluetooth 5 (LE)

### Display
* Size: 1.9-inch IPS TFT screen
* Resolution: 320×170px
* Display Type: IPS
* Driver IC: ST7789V
* Compatible Libraries: TFT_eSPI, LVGL
* Bus Communication Protocol: SPI

### Radio Module
* Chip: SI4732-A10
* Function: AM/FM/SW/LW/RDS broadcast reception
* Features: Digital Signal Processing (DSP) technology

### Audio System
* Audio Chip: ES7210
* Function: Microphone input and speaker output

### Power Management
* Charging Chip: BQ25896
* Battery Monitoring: BQ27220
* Battery: 3.7V 900mAh lithium polymer battery

### Overview
<img src="./assets/T-Embed-SI4732-3.jpg" alt="summary" width=80%>

| Component | Description |
| :--: | :--: |
| MCU | ESP32-S3 Dual-core LX7 microprocessor |
| FLASH| 16MB |
| PSRAM | 8MB|
| Display | 1.9-inch ST7789V IPS TFT |
| Radio | SI4732-A10 AM/FM/SW/LW/RDS |
| Audio | ES7210 Microphone and Speaker |
| Charging Chip | BQ25896 |
| Battery Monitoring | BQ27220 |
| RGB LED | APA102 Programmable LEDs |
| GPS | MIA-M10Q (Optional) |
| Storage | TF Card |
| Wireless | 2.4 GHz Wi-Fi & Bluetooth 5 (LE) |
| USB | 1 × USB Port (TYPE-C Interface) |
| Control | Rotary Encoder |
| Buttons | 1 x RST Button + 1 x BOOT Button |
| Dimensions | 98 × 39 × 39 mm |

## Quick Start

It is extremely important to strictly follow all steps indicated on Lilygo GitHub:

[Lilygo T-Display S3](https://github.com/Xinyuan-LilyGO/T-Display-S3#quick-start)

[Lilygo T-Embed](https://github.com/Xinyuan-LilyGO/T-Embed#quick-start)

### Example Support

| Example | PlatformIO/Arduino | ESP-IDF | Description |
| :------ | :----------------: | :-----: | :---------- |
| [SI4732_Radio](https://github.com/Xinyuan-LilyGO/T-Embed/tree/main/examples/SI4732_Radio) | ✓ | | SI4732 radio example |
| [TFT_Display](https://github.com/Xinyuan-LilyGO/T-Embed/tree/main/examples/TFT_Display) | ✓ | | TFT display example |
| [Audio_Record_Playback](https://github.com/Xinyuan-LilyGO/T-Embed/tree/main/examples/Audio_Record_Playback) | ✓ | | Audio recording and playback example |
| [RGB_LED_Control](https://github.com/Xinyuan-LilyGO/T-Embed/tree/main/examples/RGB_LED_Control) | ✓ | | RGB LED control example |
| [Power_Management](https://github.com/Xinyuan-LilyGO/T-Embed/tree/main/examples/Power_Management) | ✓ | | Power management example |

### PlatformIO
1. Install [VisualStudioCode](https://code.visualstudio.com/Download), choose the version for your system.
2. Open the "Extensions" in the sidebar of Visual Studio Code (or use <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>X</kbd>), search for the "PlatformIO IDE" extension and install it.
3. While the extension is installing, you can go to GitHub to download the program. You can download the main branch code by clicking the green "<> Code" button, or download the "Releases" version from the sidebar.
4. After the extension is installed, open the sidebar's Explorer (or use <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>E</kbd>), click "Open Folder", find the project code you just downloaded (the entire folder), click "Add", and the project files will be added to your workspace.
5. Open the "platformio.ini" file in the project folder (PlatformIO will automatically open the "platformio.ini" of the corresponding folder after adding it). Under the "[platformio]" section, uncomment to select the example program you want to upload (marked by "default_envs = xxx"). Then click the "<kbd>√</kbd>" at the bottom left to compile. If the compilation is successful, connect the microcontroller to your computer and click "<kbd>→</kbd>" at the bottom left to upload.

### Arduino
1. Install [Arduino IDE](https://www.arduino.cc/en/software), choose the version for your system.
2. Open the "example" directory in the project folder, select the example project folder, and open the file ending with ".ino" to open the Arduino IDE project workspace.
3. Open the "Tools" menu in the top bar -> Select "Board" -> "Boards Manager", find or search for "esp32", and install the board files by "Espressif Systems". Then return to the "Board" menu and select the board type under "ESP32 Arduino". The board type to select is determined by the "board = xxx" header under the [env] section in the "platformio.ini" file. If the corresponding board is not available, you need to manually add the board from the "board" directory in the project folder.
4. Open the menu bar "File" -> "Preferences", find the "Sketchbook location" field, and copy all the library files along with their folders from the "libraries" folder in the project directory to the "libraries" folder in this location.
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
7. Click the "<kbd>√</kbd>" in the top right corner to compile. If the compilation is successful, connect the microcontroller to your computer and click "<kbd>→</kbd>" in the top right corner to upload.

### Development Platforms
1. [Micropython](https://micropython.org/)
2. [Arduino IDE](https://www.arduino.cc/en/software)
3. [Platform IO](https://platformio.org/)

## Pin Overview

## Related Tests


## FAQ

* **Q. I still don't know how to set up the programming environment after reading the above tutorial. What should I do?**  
  A. If you still don't understand how to set up the environment after reading the above tutorial, you can refer to the [LilyGo-Document](https://github.com/Xinyuan-LilyGO/LilyGo-Document) documentation for setup instructions.

* **Q. Why does Arduino IDE prompt me to upgrade library files when I open it? Should I upgrade or not?**  
  A. Choose not to upgrade library files, as different versions of library files may not be compatible with each other, so upgrading is not recommended.

* **Q. Why does my board keep failing to program?**  
  A. Please hold the "BOOT" button while pressing the "RST" button, then release the "RST" button to enter download mode and try downloading the program again.

* **Q. Which frequency bands does the SI4732 radio module support?**  
  A. SI4732 supports multiple broadcast frequency bands including AM/FM/SW/LW, and has RDS functionality.

## Projects
* [T-Embed-SI4732_V1.0](https://github.com/Xinyuan-LilyGO/T-Embed-CC1101/blob/master/hardware/T-Embed-CC1101%20V1.0%2024-07-29.pdf)

## Resources
* [SI4732](https://github.com/Xinyuan-LilyGO/T-Embed/blob/main/hardware/SI4732.pdf)
* [PN532](https://github.com/Xinyuan-LilyGO/T-Embed-CC1101/blob/master/hardware/PN532_C1.pdf)
* [BQ25896](https://github.com/Xinyuan-LilyGO/T-Embed-CC1101/blob/master/hardware/bq25896.pdf)
* [BQ27220](https://github.com/Xinyuan-LilyGO/T-Embed-CC1101/blob/master/hardware/bq27220_datasheet.pdf)
* [ST7789V](https://github.com/Xinyuan-LilyGO/T-Embed-CC1101/blob/master/hardware/ST7789V.pdf)

## Dependent Libraries
* [PU2CLR SI4735](https://github.com/pu2clr/SI4735)
* [RadioLib](https://github.com/jgromes/RadioLib)
* [PN532](https://github.com/Seeed-Studio/PN532.git)
* [XPowersLib](https://github.com/lewisxhe/XPowersLib)
* [TFT_eSPI](https://github.com/Bodmer/TFT_eSPI)
* [RotaryEncoder](http://www.mathertel.de/Arduino/RotaryEncoderLibrary.aspx)
* [FastLED](https://github.com/FastLED/FastLED)
* [IRremoteESP8266](https://github.com/crankyoldgit/IRremoteESP8266)
* [ESP32-audioI2S](https://github.com/schreibfaul1/ESP32-audioI2S)
* [LVGL](https://github.com/lvgl/lvgl/tree/v8.4.0)