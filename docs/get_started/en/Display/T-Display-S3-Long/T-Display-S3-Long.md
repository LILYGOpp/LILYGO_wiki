---
title: LILYGO T-Display-S3-Long
show_source: false
tags: ESP32-S3, Long Display, AMOLED, IoT, Touch Screen
---

<div style="width:100%; display:flex;justify-content: center;">

![T-Display-S3-Long](./assets/T-Display-S3-Long-1.jpg)

</div>

<div style="padding: 1em 0 0 0; display: flex; justify-content: center">
    <a target="_blank" style="margin: 1em;color: white; font-size: 0.9em; border-radius: 0.3em; padding: 0.5em 2em; background-color:rgb(63, 201, 28)" href="https://lilygo.cc/products/t-display-s3-long">Official Store</a>
</div>

## Version History:
| Version | Update date | Update description |
| :-----: | :---------: | :---------------- |
| T-Display-S3-Long_V1.0 | Latest Version | Initial version of long strip display development board |

## Purchase Links

| Product | SOC | FLASH | PSRAM | Resolution | Screen Type | Link |
| :-----: | :--: | :---: | :---: | :--: | :--: | :--: |
| T-Display-S3-Long | ESP32-S3R8 | 16M | 8M (OPI) | 180×640 | AMOLED | [LILYGO Mall](https://www.lilygo.cc/products/t-display-s3-long) |

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

T-Display-S3-Long is a long strip display development board based on ESP32-S3, using a 180×640 resolution AMOLED screen, providing a unique vertical display experience. The development board is equipped with ESP32-S3R8 dual-core processor, 16MB Flash storage, and 8MB OPI PSRAM memory, delivering strong performance.

It features a capacitive touch screen, QWIIC sensor interface, power management chip, and Type-C USB interface, supporting Wi-Fi and Bluetooth 5.0 wireless communication. The compact long strip design is suitable for smart home control panels, industrial instrument displays, information display terminals, and other application scenarios.

## Preview

### Physical Image

<div style="width:100%; display:flex;justify-content: center;">

![T-Display-S3-Long](./assets/T-Display-S3-Long-2.jpg)
</div>

## Modules

### MCU

* Chip: ESP32-S3R8
* PSRAM: 8MB (Octal SPI)
* FLASH: 16MB
* Architecture: Dual-core Xtensa LX7
* Wireless: Wi-Fi 802.11b/g/n + Bluetooth 5.0

### Display

* Size: Long strip AMOLED
* Resolution: 180x640px
* Display Type: AMOLED
* Driver Chip: AXS15231B
* Interface: SPI/QSPI

### Touch

* Type: Capacitive touch screen
* Interface: I2C

### Power Management

* Chip: Built-in PMU
* Function: Supports battery charge and discharge management
* OTG: Supports power supply for external devices

### Overview
<div style="width:100%; display:flex;justify-content: center;">

![alt text](assets/T-Display-S3-Long-info-en.jpg)

</div>


| Component | Description |
| :--: | :--: |
| MCU | ESP32-S3R8 Dual-core Processor |
| FLASH | 16MB |
| PSRAM | 8MB (OPI) |
| Display | 180×640 AMOLED |
| Touch | Capacitive Touch Screen |
| Wireless | Wi-Fi 802.11b/g/n + Bluetooth 5.0 |
| USB | 1 × USB Port (TYPE-C) |
| Interface | QWIIC Sensor Interface |
| Buttons | BOOT + RST |
| Power Consumption | Working: 90-350mA, Sleep: 1.1mA |
| GPIO Wakeup | Supported |

## Quick Start

### Example Programs

| Example Directory | Description |
| :------ | :--- |
| [Factory](https://github.com/Xinyuan-LilyGO/T-Display-S3-Long/tree/master/examples/Factory) | Factory Test Program |
| [tft](https://github.com/Xinyuan-LilyGO/T-Display-S3-Long/tree/master/examples/tft) | Screen Display Test |
| [touch](https://github.com/Xinyuan-LilyGO/T-Display-S3-Long/tree/master/examples/touch) | Touch Function Test |
| [QWIIC_Sensor](https://github.com/Xinyuan-LilyGO/T-Display-S3-Long/tree/master/examples/QWIIC_Sensor) | QWIIC Sensor Example |
| [GFX_AXS15231B_Image](https://github.com/Xinyuan-LilyGO/T-Display-S3-Long/tree/master/examples/GFX_AXS15231B_Image) | Graphics Image Display |
| [lvgl_demo](https://github.com/Xinyuan-LilyGO/T-Display-S3-Long/tree/master/examples/lvgl_demo) | LVGL Graphical Interface Demo |

### PlatformIO Development (Recommended)

1. Install [Visual Studio Code](https://code.visualstudio.com/) and [Python](https://www.python.org/)
2. Search for and install "PlatformIO IDE" in VS Code extensions
3. Restart VS Code to complete installation
4. Open project folder: `File` → `Open Folder` → select `T-Display-S3-Long` directory
5. Wait for third-party libraries to be automatically installed
6. Edit the `platformio.ini` file, uncomment the required example path in the `[platformio]` section
7. Click `✔` at the bottom left to compile the project
8. Connect the development board to the computer USB port
9. Click `→` to upload firmware
10. Click `🔌` icon to view serial output

### Arduino IDE Development

1. Install [Arduino IDE](https://www.arduino.cc/en/software)
2. Download or clone the T-Display-S3-Long project
3. Copy all files in `T-Display-S3-Long/lib` to the Arduino library folder
4. Open the project example via `File` → `Open`
5. Configure development board parameters:

![Arduino Setting](./assets/ArduinoIDE.jpg)

6. Select the correct port
7. Click the upload button, wait for compilation and flashing to complete

### ESP32 Basic Examples

* [BLE Examples](https://github.com/espressif/arduino-esp32/tree/master/libraries/BLE)
* [WiFi Examples](https://github.com/espressif/arduino-esp32/tree/master/libraries/WiFi)
* [SPIFFS Examples](https://github.com/espressif/arduino-esp32/tree/master/libraries/SPIFFS)
* [FFat Examples](https://github.com/espressif/arduino-esp32/tree/master/libraries/FFat)
* For more ESP32 function examples, refer to [arduino-esp32-libraries](https://github.com/espressif/arduino-esp32/tree/master/libraries)

### Development Platforms
1. [Platform IO](https://platformio.org/) - Recommended
2. [Arduino IDE](https://www.arduino.cc/en/software)
3. [ESP-IDF](https://www.espressif.com/en/products/sdks/esp-idf)

## Pin Overview

<div style="width:100%; display:flex;justify-content: center;">

![1](assets/T-Display-S3-Long-pin-en.jpg)

</div>

```c
#define TFT_QSPI_CS           12
#define TFT_QSPI_SCK          17
#define TFT_QSPI_D0           13
#define TFT_QSPI_D1           18
#define TFT_QSPI_D2           21
#define TFT_QSPI_D3           14
#define TFT_QSPI_RST          16
#define TFT_BL                1


#define PIN_BAT_VOLT          2

#define PIN_BUTTON_1          0
#define PIN_BUTTON_2          21

#define SPI_SD_CS            38
#define SPI_SD_MOSI           39
#define SPI_SD_MISO           41
#define SPI_SD_SCLK           40


#define TOUCH_IICSCL 10
#define TOUCH_IICSDA 15
#define TOUCH_INT    11
#define TOUCH_RES    16

```
## Related Tests

### Power Consumption Test
| Working Mode | Current Consumption | Description |
| :------: | :------: | :--- |
| Normal Operation | 90-350mA | Wi-Fi on, 240MHz frequency |
| Sleep Mode | 1.1mA | Low power standby |
| GPIO Wakeup | To be tested | External interrupt wakeup |

## FAQ

* **Q. What to do if the development board cannot flash programs?**  
  A. Manually enter download mode:
  1. Connect the development board via USB
  2. Hold down the BOOT button
  3. Press the RST button while holding BOOT
  4. Release RST first, then release BOOT
  5. Now you can upload the program normally

* **Q. USB device frequently disconnects?**  
  A. Check USB cable quality, try other USB ports, ensure stable power supply.

* **Q. How to use OTG function?**  
  A. Need to enable PMU OTG function via software:
  ```cpp
  PMU.enableOTG();   // Enable OTG power output
  PMU.disableOTG();  // Disable OTG power output
  ```

* **Q. Battery charging indicator flashing?**  
  A. When no battery is connected and only USB is connected, the status indicator will flash. You can use `PMU.disableStatLed()` to turn off the indicator, but this will also disable the charging status indication. To enable, call `PMU.enableStatLed()`.

* **Q. Purpose of the physical switch?**  
  A. Switching the physical switch to OFF will completely disconnect the battery from the main board. When charging is required, switch to ON.

* **Q. Firmware verification method?**  
  A. If you encounter problems, you can flash the [pre-compiled firmware](./firmware/README.MD) to verify if the hardware is normal.

## Projects

* [T-Display-S3-Long Project Code](https://github.com/Xinyuan-LilyGO/T-Display-S3-Long)
* [Schematic]()
* [Hardware Design Files]()

## Resources

* [ESP32-S3 Datasheet](https://www.espressif.com/sites/default/files/documentation/esp32-s3_datasheet_en.pdf)
* [AXS15231B Screen Driver](https://github.com/Xinyuan-LilyGO/T-Display-S3-Long)
* [Pre-compiled Firmware](./firmware/README.MD)

## Dependent Libraries

* [LVGL 8.3.0](https://github.com/lvgl/lvgl) - Embedded graphics library (Note: do not upgrade version, software rotation has been forced open)
* [XPowersLib](https://github.com/lewisxhe/XPowersLib) - Power management library
* [Arduino_GFX](https://github.com/moononournation/Arduino_GFX) - Graphics display library
* [Adafruit_BusIO](https://github.com/adafruit/Adafruit_BusIO) - Bus communication library
* [TFT_eSPI](https://github.com/Bodmer/TFT_eSPI) - TFT display driver library
