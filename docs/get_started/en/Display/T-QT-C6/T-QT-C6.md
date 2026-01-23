---
title: LILYGO T-QT C6
show_source: false
tags: ESP32-C6, Wearable, TFT, IMU, QWIIC
---

<div style="width:100%; display:flex;justify-content: center;">

![T-QT C6](./assets/T-QT-C6-1.jpg)

</div>

<div style="padding: 1em 0 0 0; display: flex; justify-content: center">
    <a target="_blank" style="margin: 1em;color: white; font-size: 0.9em; border-radius: 0.3em; padding: 0.5em 2em; background-color:rgb(63, 201, 28)" href="https://lilygo.cc/products/t-qt-c6">Official Store</a>
</div>

## Version History:
| Version | Update Date | Update Description |
| :----------------: | :--------------: | :--------------: |
| T-QT-C6_MCU_V1.0 | 2023-12-20 | Initial version |
| T-QT-C6_MCU_V1.1 | 2024-03-27 | Added support for battery backplane |
| T-QT-C6_MCU_V1.2 | 2024-06-13 | Changed power management chip to SGM41562 |
| T-QT-C6_Battery_V1.2 | 2025-08-11 | Modified backplane pins, using 2-pin, 1.25mm pitch pin headers for battery connection, improving system stability |

## Purchase Links

| Product | SOC | FLASH | PSRAM | Link |
| :-----: | :--: | :---: | :---: | :--: |
| T-QT C6 | ESP32-C6 | 4M | 4M | [LILYGO Mall](https://lilygo.cc/products/t-qt-c6) |

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

The LILYGO T-QT-C6 is an intelligent wearable development kit based on the ESP32-C6-MINI-1U microcontroller, integrating a 0.85-inch 128×128 resolution TFT LCD display, 6-axis sensor (LSM6DSL, supporting accelerometer and gyroscope functions), and SGM41562 power management unit (PMU). Its core features include: built-in battery power supply, touch interaction, breathing light status indication, 4MB Flash storage, and hardware expansion via QWIIC 4-PIN interface and I2C/SPI pins. Supports Wi-Fi 6/Bluetooth wireless communication, suitable for motion monitoring, embedded development, or portable interactive device scenarios. The product features a compact design, balancing low power consumption with high integration, ideal for developers in IoT, wearable devices, and other fields for prototyping and functional verification.

## Preview

### Physical Image

<div style="width:100%; display:flex;justify-content: center;">

![T-QT-C6](./assets/T-QT-C6-2.jpg)

</div>

### Pinout Diagram

<img src="./assets/T-QT-C6-pin-en.jpg" alt="summary" width=100%>

## Modules

### MCU

* Module: ESP32-C6-MINI-1U
* Chip: ESP32-C6-FH4
* PSRAM: 4M
* FLASH: -
* Other Notes: For more information, please visit [Espressif Official ESP32-C6-MINI-1U Datasheet](https://www.espressif.com/sites/default/files/documentation/esp32-c6-mini-1_mini-1u_datasheet_en.pdf)

### Display

* Screen Model: N085-1212TBWIG06-C08
* Size: 0.85-inch
* Resolution: 128x128px
* Display Type: TFT
* Driver IC: GC9107
* Bus Communication Protocol: Standard SPI

### Touch Chip

* Chip: CST816T
* Bus Communication Protocol: I2C
* Other Notes: Supports swipe up, swipe down, swipe left, swipe right, double-click, single-click, long-press gesture triggering, with multiple interrupt trigger modes integrated. Automatically enters sleep power-saving mode after no touch for several seconds by default.

### Power Management Chip

> #### T-QT-C6_V1.0-V1.1
> * Chip: ETA4662
> * Bus Communication Protocol: I2C
> * Other Notes: Chip with power path management, automatically recognizes battery power and USB power, automatically switches to USB power when no battery is inserted, and automatically switches to battery power when no USB power is available.

> #### T-QT-C6_V1.2
> * Chip: SGM41562
> * Bus Communication Protocol: I2C
> * Other Notes: Chip with power path management, automatically recognizes battery power and USB power, automatically switches to USB power when no battery is inserted, and automatically switches to battery power when no USB power is available.

### Battery Backplane Inertial Sensor

> #### T-QT-C6_V1.1-V1.2
> * Chip: LSM6DSLTR
> * Bus Communication Protocol: I2C
> * Other Notes: 6-axis sensor, supports step counting, posture detection, etc.

### Overview
<img src="./assets/T-QT-C6-info-en.jpg" alt="summary" width=80%>

| Component | Description |
| :--: | :--: |
| MCU | ESP32-C6-MINI-1U |
| Flash | 4MB |
| PSRAM | 4MB |
| Display | 0.85-inch GC9107 TFT (128×128) |
| Touch | CST816T Capacitive Touch Screen |
| Sensor | LSM6DSLTR 6-axis IMU |
| Power Management | SGM41562 PMU |
| Wireless | Wi-Fi 6 + Bluetooth 5 (LE) |
| USB | 1 × USB Port and OTG (TYPE-C Interface) |
| IO Interface | 2 × 2×7 Expansion IO Interface |
| Expansion Interface | QWIIC 4-pin + Battery Interface + Power Interface |
| LED | WS2812B/C Breathing Light |
| Buttons | 1 x RESET Button + 1 x BOOT Button |
| Dimensions | **33×24×44.5mm** |

## Quick Start

### Example Support

| Example | Support IDE And Version | Description | Picture |
| ------  | ------  | ------ | ------ | 
| [Battery_Voltage](./examples/Battery_Voltage) | `[Arduino IDE][arduino-esp32-libs_v3.0.2]` |  |  |
| [Breathing_Light](./examples/BREATHING_LIGHT) | `[Arduino IDE][arduino-esp32-libs_v3.0.2]` |  |  |
| [ChipScan](./examples/ChipScan) | `[Arduino IDE][arduino-esp32-libs_v3.0.2]` |  |  |
| [CST816T](./examples/CST816T) | `[Arduino IDE][arduino-esp32-libs_v3.0.2]` |  |  |
| [Deep_Sleep](./examples/Deep_Sleep) | `[Arduino IDE][arduino-esp32-libs_v3.0.2]` |  |  |
| [Light_Sleep](./examples/Light_Sleep) | `[Arduino IDE][arduino-esp32-libs_v3.0.2]` |  |  |
| [ETA4662](./examples/ETA4662) | `[Arduino IDE][arduino-esp32-libs_v3.0.2]` |  |  |
| [GFX](./examples/GFX) | `[Arduino IDE][arduino-esp32-libs_v3.0.2]` |  |  |
| [IMU](./examples/IMU) | `[Arduino IDE][arduino-esp32-libs_v3.0.2]` |  |  |
| [IMU_Level](./examples/IMU_Level) | `[Arduino IDE][arduino-esp32-libs_v3.0.2]` |  |  |
| [SGM41562](./examples/SGM41562) | `[Arduino IDE][arduino-esp32-libs_v3.0.2]` |  |  |
| [Lvgl_CIT_ETA4662](./examples/Lvgl_CIT_ETA4662) | `[Arduino IDE][arduino-esp32-libs_v3.0.2]` | Factory original test file |  |
| [Lvgl_CIT_SGM41562](./examples/Lvgl_CIT_SGM41562) | `[Arduino IDE][arduino-esp32-libs_v3.0.2]` | Factory original test file |  |
| [Light_Sleep_Wakeup](./examples/Light_Sleep_Wakeup) | `[Arduino IDE][arduino-esp32-libs_v3.0.2]` |  |  |
| *(More examples please refer to the GitHub repository)* | | | |

| Firmware | Description | Picture |
| ------  | ------  | ------ |
| [Lvgl_CIT_ETA4662](./firmware/[TQT-C6_V1.0-V1.1][Lvgl_CIT_ETA4662]_firmware_V1.0.0.bin) | Factory original test file |  |
| [Lvgl_CIT_SGM41562](./firmware/[TQT-C6_V1.2][Lvgl_CIT_SGM41562]_firmware_V1.0.1.bin) | Factory original test file |  |

### PlatformIO

1. Install [VisualStudioCode](https://code.visualstudio.com/Download), choose the version for your system.

2. Open the "Extensions" in the sidebar of Visual Studio Code (or use <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>X</kbd>), search for the "PlatformIO IDE" extension and install it.

3. While the extension is installing, you can go to GitHub to download the program. You can download the main branch code by clicking the green "<> Code" button, or download the "Releases" version from the sidebar.

4. After the extension is installed, open the sidebar's Explorer (or use <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>E</kbd>), click "Open Folder", find the project code you just downloaded (the entire folder), click "Add", and the project files will be added to your workspace.

5. Open the "platformio.ini" file in the project folder (PlatformIO will automatically open the "platformio.ini" of the corresponding folder after adding it). Under the "[platformio]" section, uncomment to select the example program you want to upload (marked by "default_envs = xxx"). Then click the "<kbd>[√]</kbd>" at the bottom left to compile. If the compilation is successful, connect the microcontroller to your computer and click "<kbd>[→]</kbd>" at the bottom left to upload.

### Arduino

1. Install [Arduino IDE](https://www.arduino.cc/en/software), choose the version for your system.

2. Open the "example" directory in the project folder, select the example project folder, and open the file ending with ".ino" to open the Arduino IDE project workspace.

3. Open the "Tools" menu in the top bar -> Select "Board" -> "Boards Manager", find or search for "esp32", and install the board files by "Espressif Systems". Then return to the "Board" menu and select the board type under "ESP32 Arduino". The board type to select is determined by the "board = xxx" header under the [env] section in the "platformio.ini" file. If the corresponding board is not available, you need to manually add the board from the "board" directory in the project folder.

4. Open the menu bar "[File](image/6.png)" -> "[Preferences](image/6.png)", find the "[Sketchbook location](image/7.png)" field, and copy all the library files along with their folders from the "libraries" folder in the project directory to the "libraries" folder in this location.

5. Select the correct settings in the "Tools" menu as shown in the table below.

| Setting | Value |
| :-------------------------------: | :-------------------------------: |
| Board | ESP32C6 Dev Module |
| Upload Speed | 921600 |
| CPU Frequency | 160MHz |
| Flash Mode | QIO |
| Flash Size | 4MB (32Mb) |
| Core Debug Level | None |
| Partition Scheme | Huge APP (3MB No OTA/1MB SPIFFS) |

6. Select the correct port.

7. Click the "<kbd>[√](image/8.png)</kbd>" in the top right corner to compile. If the compilation is successful, connect the microcontroller to your computer and click "<kbd>[→](image/9.png)</kbd>" in the top right corner to upload.

### Development Platforms
1.  [Micropython](https://micropython.org/)
2.  [Arduino IDE](https://www.arduino.cc/en/software)
3.  [Platform IO](https://platformio.org/)

## Pin Overview

| Display Pins | ESP32C6 Pins |
| :------------------: | :------------------:|
| MOSI | IO15 |
| SCLK | IO18 |
| RST | IO20 |
| BL | IO2 |
| CS | IO14 |
| DC | IO19 |

| Battery Related Pins | ESP32C6 Pins |
| :------------------: | :------------------:|
| BATTERY_MEASUREMENT_CONTROL | IO8 |
| BATTERY_ADC_DATA | IO6 |

| Breathing Light Pins | ESP32C6 Pins |
| :------------------: | :------------------:|
| BREATHING_LIGHT | IO9 |

| Touch Chip Pins | ESP32C6 Pins |
| :------------------: | :------------------:|
| RST | IO23 |
| INT | IO7 |
| SDA | IO21 |
| SCL | IO22 |

| Sleep Wake-up Pins | ESP32C6 Pins |
| :------------------: | :------------------:|
| SLEEP_WAKE_UP_INT | IO7 |

| Power Management Chip Pins | ESP32C6 Pins |
| :------------------: | :------------------:|
| SDA | IO21 |
| SCL | IO22 |

#### T-QT-C6_V1.1-V1.2
  | Inertial Sensor Pins | ESP32C6 Pins |
  | :------------------: | :------------------:|
  | SDA | IO21 |
  | SCL | IO22 |
  | LSM6DSL_IIC_ADDRESS_MODE | IO3 |
  | INT1 | IO0 |
  | INT2 | IO1 |

#### T-QT-C6_V1.2
  | Power Management Chip Pins | ESP32C6 Pins |
  | :------------------: | :------------------:|
  | INT | IO4 |

>*(For detailed pin definitions, please refer to the schematic diagram)*

## Related Tests

| Firmware | Program | Description |
| :------------------: | :------------------: | :------------------: |
| [TQT-C6_V1.0-V1.2][Light_Sleep]_firmware_V1.0.0.bin | Light_Sleep | Power Consumption: 516.81uA |
| [TQT-C6_V1.0-V1.2][Deep_Sleep]_firmware_V1.0.0.bin | Deep_Sleep | Power Consumption: 172.61uA |
| *(More examples please refer to the GitHub repository)* | | 

## FAQ

*   **Q. What are the main application scenarios for T-QT C6?**
    A. T-QT C6 is specifically designed for smart wearable devices, suitable for motion monitoring, health tracking, smart rings, portable interactive devices, and other scenarios.

*   **Q. How to connect external sensors?**
    A. You can quickly connect compatible sensor modules via the onboard QWIIC 4-pin interface, or connect other peripherals through the 2×7 expansion IO interface.

*   **Q. What are the features of ESP32-C6?**
    A. ESP32-C6 supports Wi-Fi 6 and Bluetooth 5, offering better wireless performance and power efficiency compared to previous ESP32 series.

*   **Q. How to achieve low power operation?**
    A. Through the SGM41562 power management chip and ESP32-C6's low-power modes, combined with software optimization, long-term battery power supply can be achieved.

*   **Q. Which development frameworks are supported?**
    A. Supports multiple development frameworks including Arduino, PlatformIO, ESP-IDF, and MicroPython, meeting the needs of different developers.

## Projects

* [T-QT-C6_V1.0](https://github.com/Xinyuan-LilyGO/T-QT-C6/blob/arduino-esp32-libs_V3.0.2/project/T-QT-C6_V1.0)
* [T-QT-C6_V1.1](https://github.com/Xinyuan-LilyGO/T-QT-C6/blob/arduino-esp32-libs_V3.0.2/project/T-QT-C6_V1.1)
* [T-QT-C6_V1.2](https://github.com/Xinyuan-LilyGO/T-QT-C6/blob/arduino-esp32-libs_V3.0.2/project/T-QT-C6_V1.2)

## Resources
* [Espressif](https://www.espressif.com/en/support/documents/technical-documents)
* [ETA4662_V1.8](./information/ETA4662_V1.8.pdf)
* [AN-CST816T-v1](./information/AN-CST816T-v1.pdf)
* [WS2812B-2020](./information/WS2812B-2020.pdf)
* [WS2812C-2020](./information/WS2812C-2020.pdf)
* [SGMICRO-SGM41562XGTR](./information/SGMICRO-SGM41562XGTR.pdf)
* [lsm6dsl](./information/lsm6dsl.pdf)
* [lsm6dsl-stmicroelectronics_en](./information/lsm6dsl-stmicroelectronics_en.pdf)

## Dependent Libraries
* [Arduino_DriveBus-1.1.16]()
* [Arduino_GFX-1.3.7](https://github.com/moononournation/Arduino_GFX)
* [lvgl-8.3.5](https://github.com/lvgl/lvgl)