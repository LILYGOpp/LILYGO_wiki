---
title: LILYGO T-PICO-2350
show_source: false
tags: RP2350, ESP32-C6, Raspberry Pi, Dual-Core
---

<div style="width:100%; display:flex;justify-content: center;">

![T-PICO-2350](./assets/T-PICO-2350-03.jpg)

</div>

<div style="padding: 1em 0 0 0; display: flex; justify-content: center">
    <a target="_blank" style="margin: 1em;color: white; font-size: 0.9em; border-radius: 0.3em; padding: 0.5em 2em; background-color:rgb(63, 201, 28)" href="https://lilygo.cc/products/t-pico?variant=45197490585781">Official Store</a>
</div>

## Version History:
| Version | Update Date | Update Description |
| :-----: | :---------: | :---------------- |
| T-PICO-2350_V1.2 | 2024-01-01 | Initial version |

## Purchase Links

| Product | Main SOC | Wireless SOC | Flash | Link |
| :-----: | :--: | :---: | :---: | :--: |
| T-PICO-2350 | RP2350 | ESP32-C6 | 16MB + 4MB | [LILYGO Mall](https://lilygo.cc/products/t-pico?variant=45197490585781) |

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

The T-PICO-2350 is another version in the T-Pico series based on the Raspberry Pi RP2350 chip, manufactured with the external expansion version shell design of T-Display S3 Pro. This shell design features multiple external function expansion interfaces, supporting both pin header expansion mode and 13-pin 0.3mm pitch FPC expansion interface mode, while the bottom has multiple M1.4 embedded copper nuts for bottom expansion fixation. It integrates RP2350 + ESP32-C6 + 2.33-inch capacitive touch screen + TF card + HDMI interface + 2 QWIIC interfaces + PMU, supports battery power and USB power, and continues the T-Pico series design with reversible USB connection for programming both chips.

## Preview

### Physical Image

<div style="width:100%; display:flex;justify-content: center;">

![T-PICO-2350](./assets/T-PICO-2350-04.jpg)

</div>

### Pinout Diagram

<img src="./assets/T-PICO-2350-01.jpg" alt="summary" width=100%>

## Modules

### Main Processor (RP2350)

*   Chip: Raspberry Pi RP2350
*   Flash: 16MB
*   SRAM: 520kB
*   Other Notes: For more information, please visit [Raspberry Pi RP2350 Documentation](https://www.raspberrypi.com/documentation/microcontrollers/silicon.html#rp2350)

### Wireless Co-processor (ESP32-C6)

*   Chip: ESP32-C6-MINI-1U-N4
*   Flash: 4MB
*   Wireless Protocol: 2.4G WiFi 6 + Bluetooth (BLE)
*   Wireless Standard: 802.11b/g/n

### Display

*   Size: 2.33-inch IPS LCD
*   Driver IC: ST7796S
*   Bus Communication Protocol: SPI

### Touch

*   Chip: XL9535
*   Bus Communication Protocol: I2C

### Expansion Interfaces

*   HDMI: 19-pin HDMI interface
*   QWIIC: 2 × QWIIC interfaces
*   IO Interface: 2×13 expansion IO interface
*   FPC Interface: 13-pin 0.3mm pitch FPC expansion interface

### Overview

| Component | Description |
| :--: | :--: |
| Main Processor | RP2350 |
| Wireless Co-processor | ESP32-C6-MINI-1U-N4 |
| Flash | 16MB (RP2350) + 4MB (ESP32-C6) |
| SRAM | 520kB (RP2350) |
| Display | 2.33-inch IPS LCD |
| Touch | XL9535 I2C Capacitive Touch |
| Storage | TF card |
| Video Output | HDMI interface |
| Wireless | WiFi 6 + BLE (ESP32-C6) |
| Expansion Interface | 2×13 IO + 2×QWIIC + FPC |
| Power Management | Integrated PMU |
| Power Supply | Battery power + USB power |
| Mounting Holes | 4 × M1.4mm |
| Programming Interface | Reversible USB for programming both chips |

## Quick Start

### Example Support

| Example | PlatformIO/Arduino | C/C++ | Description |
| :------ | :----------------: | :-----: | :---------- |
| [Factory](https://github.com/Xinyuan-LilyGO/Lilygo-T-Pico2/tree/master/examples/Factory) | ✓ | ✓ | Factory example |
| *(More examples please refer to the GitHub repository)* | | | |

* For more **RP2040 or RP2350** chip function examples, please refer to [arduino-pico-libraries](https://github.com/earlephilhower/arduino-pico/tree/master/libraries)
* For more **ESP32-C6** chip function examples, please refer to [arduino-esp32-libraries](https://github.com/espressif/arduino-esp32/tree/master/libraries)
* **ESP32-C6** [AT Command Set](https://docs.espressif.com/projects/esp-at/en/latest/esp32c6/Get_Started/index.html)

### New User Guide

* For first-time use, you need to use [Zadig](https://zadig.akeo.ie/) to replace the driver for correct port recognition.
* `T-PicoPro` uses a reversible Type-C design, corresponding to the **RP2350** port and **ESP32-C6** USB port respectively.
* How to identify the RP2350 port?
   - Hold the **BOOT** button on the side of `T-PicoPro`, then plug in the **USB-C**. If the computer recognizes it as a disk, then this is the **RP2350** port.
* Besides being used as UART, the `QWIIC` UART port of T-PicoPro can also be used as general IO.
* The `QWIIC` I2C port cannot be used for other purposes and can only be configured as an I2C interface, as it is connected to the screen touch and PMU.
* **ESP32C6** uses modified AT firmware with `TX and RX swapped`. You can find the custom compilation method for AT firmware [here](https://docs.espressif.com/projects/esp-at/en/latest/esp32c6/AT_Command_Set/index.html).
* **ESP32-C6** default AT firmware is compiled at `V3.3.0-dev`. This firmware has been simply modified (added GPIO control function), source code can be found [here](https://github.com/lewisxhe/esp-at), specific changes please see [commit](https://github.com/lewisxhe/esp-at/commit/66f9f164584fbf6e01158b5fb5578f0fd495b498).
* **T-PicoPro** charging indicator can be turned off via software. If no battery is connected, the indicator will flash.

### PlatformIO Quick Start (Recommended)

1. Install [Visual Studio Code](https://code.visualstudio.com/) and [Python](https://www.python.org/)
2. Search for the `PlatformIO` plugin in `VisualStudioCode` extensions and install it
3. After installation, you need to restart `VisualStudioCode`
4. After restarting `VisualStudioCode`, select `File` -> `Open Folder` -> select the `T-PicoPro` directory
5. Wait for third-party dependency libraries to install
6. Click on the `platformio.ini` file, in the `platformio` section
7. Uncomment one of the `src_dir = xxxx` lines, ensuring only one line is active
8. Click the (✔) symbol at the bottom left to compile
9. Connect the development board to computer USB
10. Click (→) to upload firmware
11. Click (plug symbol) to monitor serial output
12. If unable to write, or USB device keeps flashing, please check the **FAQ** below

### Arduino IDE Quick Start

* PlatformIO is recommended to avoid cumbersome steps

1. Install [Arduino IDE](https://www.arduino.cc/en/software)
2. Install [Arduino Pico](https://arduino-pico.readthedocs.io/en/latest/install.html)
3. Download or clone `T-PicoPro` to any location
4. Copy all folders from the [lib folder](./lib/) to the Arduino library folder (e.g., C:\Users\YourUsername\Documents\Arduino\libraries)
5. Open ArduinoIDE, `Tools`, select as shown in the image
   ![Settings](assets/image.png)
6. `T-PicoPro` folder -> `examples` -> `Any example`
7. Select `Port`
8. Click `Upload`, wait for compilation and writing to complete
9. If unable to write, or USB device keeps flashing, please check the [FAQ](#faq) below

## Pin Overview
`XL9535` is the external expansion IO port for `RP2350A`.

| RP2350A         | XL9535 |     | ESP32-C6      | TFT           | SD      | BUTTON | HDMI       | QWIIC | UART1 | FLASH | DRAM |
| --------------- | ------ | --- | ------------- | ------------- | ------- | ------ | ---------- | ----- | ----- | ----- | ---- |
| IO0(SDA)        |        | ↔   |               | PIN47(TP_SDA) |
| IO1(SLC)        |        | ↔   |               | PIN48(TP_SCL) |
| IO2             |        | ↔   |               |               |         |        |            | SDA1  |
| IO3             |        | ↔   |               |               |         |        |            | SCL1  |
|                 | IO2    | ↔   |               | PIN50(TP_RST) |
|                 | IO4    | ↔   |               | PIN49(TP_INT) |
|                 | IO0    | ↔   |               | PIN35(TF_RST) |
|                 | IO1    | ↔   |               | PIN35(TF_BL)  |
| IO4(MISO)       |        | ↔   |               | PIN11         | SD_MISO |
| IO6(SCK)        |        | ↔   |               | PIN8          | SD_SCK  |
| IO7(MOSI)       |        | ↔   |               | PIN10         | SD_MOSI |
| IO8(TFT_CS)     |        | ↔   |               | PIN6          |
| IO9(TFT_DC)     |        | ↔   |               | PIN7          |
| IO5(SD_CS )     |        | ↔   |               |               | SD_CS   |
| IO12            |        | ↔   |               |               |         |        | CK_N       |
| IO13            |        | ↔   |               |               |         |        | CK_P       |
| IO14            |        | ↔   |               |               |         |        | D0_N       |
| IO15            |        | ↔   |               |               |         |        | D0_P       |
| IO16            |        | ↔   |               |               |         |        | D1_N       |
| IO17            |        | ↔   |               |               |         |        | D1_P       |
| IO18            |        | ↔   |               |               |         |        | D2_N       |
| IO19            |        | ↔   |               |               |         |        | D2_P       |
|                 | IO6    | ↔   |               |               |         |        | HOTPLUGDET |
| IO20(TX)        |        | ↔   |               |               |         |        |            |       | RX    |
| IO21(RX)        |        | ↔   |               |               |         |        |            |       | TX    |
| IO23            |        | ↔   |               |               |         | BTN1   |
| IO22(RESERVE)   |        | ↔   | IO10(RESERVE) |
|                 | IO3    | ↔   | IO8(EN)       |
| IO26(CTS)       |        | ↔   | IO5(CTS)      |
| IO27(RTS)       |        | ↔   | IO4(RTS)      |
| IO28(TX)        |        | ↔   | IO6(RX)       |
| IO29(RX)        |        | ↔   | IO7(TX)       |
| PIN55(SD3)      |        | ↔   |               |               |         |        |            |       |       | IO3   | SIO3 |
| PIN58(SD2)      |        | ↔   |               |               |         |        |            |       |       | IO2   | SIO2 |
| PIN59(SD1)      |        | ↔   |               |               |         |        |            |       |       | IO1   | SIO1 |
| PIN57(SD0)      |        | ↔   |               |               |         |        |            |       |       | IO0   | SIO0 |
| PIN56(SCLK)     |        | ↔   |               |               |         |        |            |       |       | SCLK  | SCLK |
| PIN60(FLASH_CS) |        | ↔   |               |               |         |        |            |       |       | IO3   |      |
| IO25(RAM_CS)    |        | ↔   |               |               |         |        |            |       |       |       | CS   |
| *(For detailed pin definitions, please refer to the schematic diagram)* | |

## Related Tests

*(Dual-core communication, power consumption, display performance test data to be added)*

## FAQ

1. If writing fails but shows success:
   1. Connect the development board via USB cable
   2. Press and hold the (side) BOOT button while pressing the (same side) RST button
   3. Release the (side) RST button
   4. Release the (side) BOOT button
   5. Upload the program

2. How to write to ESP32-C6?
   1. Since the `ESP32-C6` reset pin is controlled by `RP2350`, when updating `ESP32-C6` firmware, do not include operations controlling the `ESP32-C6` reset pin in the `RP2350` program.
   2. Hold the esp32 BOOT button on the ESP32-C6 module side and plug in USB-C. Make sure to plug into the "ESP32-C6" USB port side. The computer should be able to write to "ESP32-C6" normally.

3. How to check if hardware is normal?
   1. Please follow step 1 in **FAQ**, drag the `firmware.uf2` from the firmware directory into the disk. The program includes hardware self-test to determine if the hardware is normal.

4. Why is there no serial output?
   1. In arduino IDE, select `Debug Port: "Serial"` in the toolbar.
   2. Please open the `DTR` option in the serial assistant tool.

## Projects
*   [T-PICO-2350_V1.2](https://github.com/Xinyuan-LilyGO/Lilygo-T-Pico2/blob/master/hardware/T_Pico2350_V1.2.pdf)

## Resources

* [Light Sensor Datasheet](https://github.com/lewisxhe/SensorLib/blob/master/datasheet/LTR-553ALS-01.pdf)
* [RP2040](https://www.raspberrypi.com/documentation/microcontrollers/rp2040.html)
* [ST7796S](http://www.lcdwiki.com/res/MSP4021/ST7796S-Sitronix.pdf)
* [CST226SE](https://github.com/lewisxhe/SensorLib/blob/master/datasheet/%E6%B5%B7%E6%A0%8E%E5%88%9B%E8%A7%A6%E6%91%B8%E8%8A%AF%E7%89%87%E7%A7%BB%E6%A4%8D%E6%89%8B%E5%86%8C-v3.5-20220701(1).pdf)
* [SY6970](./datasheet/AN_SY6970.pdf)

## Dependent Libraries
* [lvgl 8.3.9](https://github.com/lvgl/lvgl)
* [AceButton](https://github.com/bxparks/AceButton)
* [TFT_eSPI](https://github.com/Bodmer/TFT_eSPI)
* [Arduino_GFX](https://github.com/moononournation/Arduino_GFX)
* [WiFiEspAT](https://github.com/jandrassy/WiFiEspAT)
* [XPowersLib](https://github.com/lewisxhe/XPowersLib)
* [SensorLib](https://github.com/lewisxhe/SensorsLib)
* [MPU9250](https://github.com/bolderflight/MPU9250)
* [Adafruit_BME280_Library](https://github.com/adafruit/Adafruit_BME280_Library)
* [TinyGPSPlus](https://github.com/mikalhart/TinyGPSPlus)