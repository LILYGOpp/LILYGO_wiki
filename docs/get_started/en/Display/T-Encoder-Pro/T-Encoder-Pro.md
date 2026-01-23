---
title: LILYGO T-Encoder Pro
show_source: false
tags: ESP32-S3, Encoder, AMOLED, Rotary, HMI
---

<div style="width:100%; display:flex;justify-content: center;">

![T-Encoder Pro](./assets/T-Encoder-Pro-1.jpg)

</div>

<div style="padding: 1em 0 0 0; display: flex; justify-content: center">
    <a target="_blank" style="margin: 1em;color: white; font-size: 0.9em; border-radius: 0.3em; padding: 0.5em 2em; background-color:rgb(63, 201, 28)" href="https://lilygo.cc/products/t-encoder-plus">Official Store</a>
</div>

## Version History:
| Version | Update Date |
| :-------------------------------: | :-------------------------------: |
| T-Encoder-Pro_V1.0 | 2024-02-02 |

## Purchase Links

| Product | SOC | FLASH | PSRAM | Link |
| :------------------------: | :-----------: |:-------: | :---------: | :------------------: |
| T-Encoder-Pro_V1.0 | ESP32S3R8 | 16M | 8M (Octal SPI) | [LILYGO Mall](https://www.lilygo.cc/products/t-encoder-plus) <br /> [Banggood Mall](https://m.banggood.in/LILYGO-T-Encoder-Pro-ESP32-S3-Rotary-Encoder-CHSC5816-ESP32-S3FN4R2-Circuit-Board-1_2-inch-AMOLED-Touch-Display-Wireless-Module-p-2018774.html) |

## Table of Contents
- [Description](#description)
- [Preview](#preview)
- [Modules](#modules)
- [Quick Start](#quick-start)
- [Pin Overview](#pin-overview)
- [FAQ](#faq)
- [Projects](#projects)
- [Resources](#resources)
- [Dependent Libraries](#dependent-libraries)

## Description

The LILYGO T-Encoder-Pro is a smart control knob development board equipped with an AMOLED touchscreen. Its core is based on the high-performance ESP32-S3 R8 Wi-Fi/Bluetooth dual-mode chip, integrated with a 2.04-inch SH8601A touch AMOLED display (resolution 390×390) supporting capacitive touch interaction. It features rich hardware functionality including a rotary encoder (supporting left/right rotation and press operation), buzzer, vibration motor, 8MB PSRAM, and 16MB Flash storage, and comes with dual Qwiic 4-Pin interfaces for quick expansion of sensors or modules. Designed with a focus on high integration and interactivity, it is suitable for embedded UI development, smart home control panels, audio mixers, portable device prototypes, or IoT endpoints, balancing low power consumption with high performance requirements.

## Preview

### Physical Image

<div style="width:100%; display:flex;justify-content: center;">

![T-Encoder-Pro](./assets/T-Encoder-Pro-2.jpg)

</div>

### Pinout Diagram

<img src="./assets/T-Encoder-Pro-pin-en.jpg" alt="summary" width=100%>

## Modules

### MCU

*   Chip: ESP32-S3-R8
*   PSRAM: 8M (Octal SPI)
*   FLASH: 16M
*   Other Notes: For more information, please visit the [Espressif Official ESP32-S3 Datasheet](https://www.espressif.com.cn/sites/default/files/documentation/esp32-s3_datasheet_en.pdf)

### Display

*   Size: 2.04-inch AMOLED
*   Resolution: 390×390px
*   Display Type: AMOLED
*   Driver IC: SH8601A-W14-T06
*   Compatible Library: Arduino_GFX
*   Bus Communication Protocol: SPI/QSPI

### Touch

*   Chip: CHSC5816
*   Bus Communication Protocol: I2C

### Encoder

*   Type: Rotary Encoder
*   Function: Supports left/right rotation and press operation

### Feedback Devices

*   Buzzer: Audio feedback
*   Vibration Motor: Haptic feedback

### Overview
<img src="./assets/T-Encoder-Pro-info-en.jpg" alt="summary" width=80%>

| Component | Description |
| :--: | :--: |
| MCU | ESP32-S3R8 Dual-core LX7 microprocessor |
| FLASH | 16MB |
| PSRAM | 8MB |
| Display | 2.04-inch SH8601A AMOLED (390×390) |
| Touch | CHSC5816 Capacitive Touch Screen |
| Encoder | Rotary Encoder (with press) |
| Buzzer | Audio Feedback |
| Vibration Motor | Haptic Feedback |
| Wireless | 2.4 GHz Wi-Fi & Bluetooth 5 (LE) |
| USB | 1 × USB Port and OTG (TYPE-C Interface) |
| Expansion Interface | 2 × QWIIC 4-pin Interface |
| Buttons | 1 x RESET Button + 1 x BOOT Button |
| Mounting Holes | 3 × M2 Screw Holes |
| Dimensions | **43.5×43.5×27.5mm** |

## Quick Start

### Example Support

| Example | Support IDE And Version| Description | Picture |
| ------  | ------  | ------ | ------ |
| [GFX](./examples/GFX) | `[Arduino IDE][esp32_v3.0.7]` |  |  |
| [Lvgl_CIT](./examples/Lvgl_CIT) |`[Arduino IDE][esp32_v3.0.7]` | Product factory original testing |  |
| [CHSC5816](./examples/CHSC5816) | `[Arduino IDE][esp32_v3.0.7]` |  |  |
| [Rotary_Encoder](./examples/Rotary_Encoder) | `[Arduino IDE][esp32_v3.0.7]` |  |  |
| *(More examples please refer to the GitHub repository)* | | | |

| Firmware | Description | Picture |
| ------  | ------  | ------ |
| [Lvgl_CIT](./firmware/[T-Encoder-Pro_V1.0][Lvgl_CIT]_firmware_V1.0.0.bin) | Original |  |

### PlatformIO
1.  Install [VisualStudioCode](https://code.visualstudio.com/Download), choose the version for your system.
2.  Open the "Extensions" in the sidebar of Visual Studio Code (or use <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>X</kbd>), search for the "PlatformIO IDE" extension and install it.
3.  While the extension is installing, you can go to GitHub to download the program. You can download the main branch code by clicking the green "<> Code" button, or download the "Releases" version from the sidebar.
4.  After the extension is installed, open the sidebar's Explorer (or use <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>E</kbd>), click "Open Folder", find the project code you just downloaded (the entire folder), click "Add", and the project files will be added to your workspace.
5.  Open the "platformio.ini" file in the project folder (PlatformIO will automatically open the "platformio.ini" of the corresponding folder after adding it). Under the "[platformio]" section, uncomment to select the example program you want to upload (marked by "default_envs = xxx"). Then click the "<kbd>√</kbd>" at the bottom left to compile. If the compilation is successful, connect the microcontroller to your computer and click "<kbd>→</kbd>" at the bottom left to upload.

### Arduino
1. Install [Arduino IDE](https://www.arduino.cc/en/software), choose the version for your system.

2. Open the "example" directory in the project folder, select the example project folder, and open the file ending with ".ino" to open the Arduino IDE project workspace.

3. Open the "Tools" menu in the top bar -> Select "Board" -> "Boards Manager", find or search for "esp32", and install the board files by "Espressif Systems". Then return to the "Board" menu and select the board type under "ESP32 Arduino". The board type to select is determined by the "board = xxx" header under the [env] section in the "platformio.ini" file. If the corresponding board is not available, you need to manually add the board from the "board" directory in the project folder.

4. Open the menu bar "[File](image/6.png)" -> "[Preferences](image/6.png)", find the "[Sketchbook location](image/7.png)" field, and copy all the library files along with their folders from the "libraries" folder in the project directory to the "libraries" folder in this location.

5. Select the correct settings in the "Tools" menu as shown in the table below.

| Setting | Value |
| :-------------------------------: | :-------------------------------: |
| Board | ESP32S3 Dev Module|
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

7. Click the "<kbd>[√]</kbd>" in the top right corner to compile. If the compilation is successful, connect the microcontroller to your computer and click "<kbd>[→]</kbd>" in the top right corner to upload.

### Development Platforms
1.  [Micropython](https://micropython.org/)
2.  [Arduino IDE](https://www.arduino.cc/en/software)
3.  [Platform IO](https://platformio.org/)

## Pin Overview

| Display Pins | ESP32S3 Pins |
| :------------------: | :------------------:|
| SDIO0 | IO11 |
| SDIO1 | IO13 |
| SDIO2 | IO7 |
| SDIO3 | IO14 |
| SCLK | IO12 |
| RST | IO4 |
| VCI EN | IO3 |
| CS | IO10 |

| Touch Pins | ESP32S3 Pins |
| :------------------: | :------------------:|
| RST | IO8 |
| INT | IO9 |
| SDA | IO5 |
| SCL | IO6 |

| Rotary Encoder Pins | ESP32S3 Pins |
| :------------------: | :------------------:|
| KNOB DATA A | IO1 |
| KNOB DATA B | IO2 |
| KNOB KEY | IO0 |

| Buzzer Pins | ESP32S3 Pins |
| :------------------: | :------------------:|
| BUZZER DATA | IO17 |

>*For detailed pin definitions, please refer to the schematic diagram.*

## Related Tests

*(Encoder accuracy, touch response, power consumption test data to be added)*

## FAQ

*   **Q. What are the main application scenarios for the T-Encoder Pro?**
    A. The T-Encoder Pro is suitable for smart home control panels, audio equipment mixers, industrial HMI interfaces, multimedia controllers, and other scenarios requiring precise knob control and graphical display.

*   **Q. What operations does the encoder support?**
    A. The encoder supports left/right rotation (for value adjustment, menu selection, etc.) and press operation (for confirmation, selection, etc.).

*   **Q. How to connect external sensors?**
    A. You can quickly connect compatible sensor modules via the two onboard QWIIC 4-pin interfaces, supporting plug-and-play.

*   **Q. How is haptic feedback achieved?**
    A. Haptic feedback is provided by the vibration motor, which can offer physical feedback during rotary encoder operation or specific events, enhancing the user experience.

*   **Q. What is the display quality like?**
    A. It uses a 2.04-inch AMOLED screen with a resolution of 390×390, providing clear and vibrant display effects and supporting touch operation.

## Projects

* [SCH_T-Encoder-Pro_V1.0](https://github.com/Xinyuan-LilyGO/T-Encoder-Pro/blob/arduino-esp32-libs_V3.0.7/project/[SCH][T-Encoder-Pro_V1.0].pdf)
* [SCH_T-Encoder-Pro_V1.0_TFT_FPC](https://github.com/Xinyuan-LilyGO/T-Encoder-Pro/blob/arduino-esp32-libs_V3.0.7/project/[SCH][T-Encoder-Pro_V1.0][TFT_FPC].pdf)

## Resources
*   [ESP32-S3 Datasheet](https://www.espressif.com.cn/sites/default/files/documentation/esp32-s3_datasheet_en.pdf)
*   [CHSC5816 Datasheet](https://github.com/Xinyuan-LilyGO/T-Encoder-Pro/blob/arduino-esp32-libs_V3.0.7/information/DS_CHSC5816_V1.1.5.pdf)
*   [CHSC5816 Application Note](https://github.com/Xinyuan-LilyGO/T-Encoder-Pro/blob/arduino-esp32-libs_V3.0.7/information/CHSC5816-ApplicationDoc_US_V04.pdf)
*   [DXQ120MYB2416A Datasheet](https://github.com/Xinyuan-LilyGO/T-Encoder-Pro/blob/arduino-esp32-libs_V3.0.7/information/DXQ120MYB2416A.pdf)

## Dependent Libraries
*   [Arduino_GFX-1.3.7](https://github.com/moononournation/Arduino_GFX)
*   [lvgl-8.3.5](https://github.com/lvgl/lvgl)
*   [SensorLib-0.1.4](https://github.com/lewisxhe/SensorsLib)