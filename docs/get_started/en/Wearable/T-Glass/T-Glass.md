---
title: LILYGO T-Glass
show_source: false
tags: ESP32-S3, AMOLED, Wearable, BHI260AP, Smart Glasses
---

<div style="width:100%; display:flex;justify-content: center;">

![T-Glass](./assets/T-Glass-1.jpg)

</div>

<div style="padding: 1em 0 0 0; display: flex; justify-content: center">
    <a target="_blank" style="margin: 1em;color: white; font-size: 0.9em; border-radius: 0.3em; padding: 0.5em 2em; background-color:rgb(63, 201, 28)" href="https://lilygo.cc/products/t-glass">Official Store</a>
</div>

## Version History
| Product(PinMap) | SOC | Flash | PSRAM | Resolution | Visible Area |
| ---------------- | -------------- | ----- | --------- | ---------- | ------------ |
| [T-Glass/V2][1] | ESP32-S3 FN4R2 | 4MB | 2MB(QSPI) | 294x126 | 126x126 |
| [T-Wristband][2] | ESP32-S3 FN4R2 | 4MB | 2MB(QSPI) | 294x126 | 126x250 |

| Current consumption | Working current | Sleep current | Sleep mode |
| ------------------- | --------------------------- | ------------- | ------------------- |
| [T-Glass/V2][1] | (240MHz) WiFi On 90~230+ mA | about 300uA | touch button wakeup |
| [T-Wristband][2] | (240MHz) WiFi On 90~230+ mA | about 300uA | touch button wakeup |

[1]: https://www.lilygo.cc/products/t-glass
[2]: https://www.lilygo.cc/products/t-wristband-s3

## Purchase Links
| Product | SOC | FLASH | PSRAM | Link |
| :-----: | :-: | :---: | :---: | :--: |
| T-Glass | ESP32-S3 | 4MB | 2MB | [LILYGO Store](https://lilygo.cc/products/t-glass) |
| T-Wristband | ESP32-S3 | 4MB | 2MB | [LILYGO Store](https://www.lilygo.cc/products/t-wristband-s3) |

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

LILYGO T-Glass is a smart wearable device based on the ESP32-S3 main control chip, integrating BHI260AP motion sensor and JD96013A model AMOLED display with a 126×126 pixel visible display area, supporting touch interaction and high contrast visual effects. Built-in 4MB Flash and 2MB OSPI PSRAM ensure smooth operation and data storage capabilities. Rich functional modules include real-time clock (RTC), microphone (supporting MIC_CLOCK/MIC_DATA audio input), vibration feedback (Vibration_Pin), battery level monitoring (BAT_ADC), and touch buttons (Touch_Button), suitable for motion tracking, smart notifications, and other scenarios. Through the LILYGOT-GlassPINMAP interface solution, it integrates communication protocols such as SPI, I²C, optimizes hardware layout, suitable for lightweight design requirements like smart glasses or portable wearable devices, combining low power consumption with high performance characteristics.

## Preview

### Physical Image

<div style="width:100%; display:flex;justify-content: center;">

![T-Glass](./assets/T-Glass-2.jpg)

</div>

### Pinout Diagram

<img src="./assets/T-Glass-pin-en.jpg" alt="summary" width=100%>

## Modules

### MCU
* Chip: ESP32-S3 FN4R2
* PSRAM: 2MB (QSPI PSRAM) 
* FLASH: 4MB
* Wireless: 2.4 GHz Wi-Fi & Bluetooth 5 (LE)

### Display
* Size: 1.1-inch LTPS AMOLED screen
* Resolution: 294×126px
* Display Type: LTPS AMOLED
* Driver IC: JD9613
* Compatible Libraries: LVGL
* Bus Communication Protocol: SPI

### Motion Sensor
* Chip: BHI260AP
* Function: AI smart motion sensing

### Audio System
* Function: Microphone input
* Interface: MIC_CLOCK/MIC_DATA

### Power Management
* Battery: Lithium polymer battery
* Monitoring: Battery level monitoring (ADC)

### Overview
<img src="./assets/T-Glass-point-en.jpg" alt="summary" width=80%>

| Component | Description |
| :--: | :--: |
| MCU | ESP32-S3 FN4R2 |
| FLASH| 4MB |
| PSRAM | 2MB|
| Display | 1.1-inch JD9613 LTPS AMOLED |
| Motion Sensor | BHI260AP AI Smart Sensor |
| Touch | Side touch button |
| RTC | PCF85063A Real-time Clock |
| Audio | Microphone input |
| Vibration | Vibration feedback motor |
| Wireless | 2.4 GHz Wi-Fi & Bluetooth 5 (LE) |
| USB | 1 × USB Port (TYPE-C Interface) |
| Expansion Interface | 2 × QWIIC 4 pin interface |
| Buttons | 1 x RESET Button + 1 x BOOT Button |
| Switch | Side power switch |
| Dimensions | 140 × 67 × 111 mm |

## Quick Start

### Example Support
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
1. Install [Visual Studio Code](https://code.visualstudio.com/) and [Python](https://www.python.org/) (Python 3.8+ is recommended)
2. Search for the `PlatformIO` plugin in the Visual Studio Code extension store and install it
3. After installation, restart Visual Studio Code
4. After restarting Visual Studio Code, click the upper left corner of the software's "File" → "Open Folder" → select the project directory of "LilyGO T-Wristband and T-Glass"
5. Wait for the automatic installation of third-party dependency libraries to complete (it may take a few minutes on the first opening)
6. Click on the configuration file `platformio.ini` in the project opened, find the `platformio` configuration section
7. Remove the comment of one line `src_dir = xxxx` (delete the line's leading `;`), ensure only one effective configuration is retained (select the corresponding directory according to the target development board)
8. Click the (✔) icon at the lower left corner of the software to start compiling the project
9. Connect the development board to the computer via USB cable
10. Click the (→) icon to upload the firmware to the development board
11. Click the (plug icon) to open the serial port monitor to view the device's output logs
12. If there are issues such as inability to write the firmware or the USB device constantly flashing, please refer to the **Frequently Asked Questions (FAQ)** below

### Arduino


1. Install [Arduino IDE](https://www.arduino.cc/en/software)
2. Install [Arduino ESP32 V 2.0.5 or above and below V3.0](https://docs.espressif.com/projects/arduino-esp32/en/latest/getting_started.html), Library based on the Stable version, Please make sure the link in Boards Manager is
   ```
   https://espressif.github.io/arduino-esp32/package_esp32_index.json
   ```
3. `Sketch` -> `Include Library` -> `Manage Libraries`
4. `Library Search` -> `LilyGO T-Wristband and T-Glass` -> `Install` -> `Install ALL`
5. `Library Search` -> `lvgl` -> `v8.4.0` -> `Install`
6. `Library Search` -> `SensorLib` -> `v0.1.8` -> `Install`
7. `File` -> `Examples` -> `LilyGO T-Wristband and T-Glass` -> `Select the corresponding example`
8. `Tools` -> , Make your selection according to the table below
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

   - The options in bold are required, others are selected according to actual conditions.

9. Select `Port`
10. Click `upload` , Wait for compilation and writing to complete
11. If it cannot be written, or the USB device keeps flashing, please check the **FAQ** below

### Development Platforms
1. [Micropython](https://micropython.org/)
2. [Arduino IDE](https://www.arduino.cc/en/software)
3. [Platform IO](https://platformio.org/)

## Related Tests

## Q&A

1. This development board uses USB as the JTAG upload port. If you need to print serial port information via USB, you must enable the "USB_CDC_ON_BOOT" configuration.
    If you cannot find the port when uploading the program, or the USB is used for other functions causing the port not to be displayed, please manually enter the upload mode:
    1. Connect the development board via a USB cable
    2. Press and hold the "BOOT button" and simultaneously press the "RST button"
    3. Release the "RST button" first
    4. Then release the "BOOT button"
    5. Upload the program 

2. If the above methods do not work, please burn the [binary file](https://github.com/Xinyuan-LilyGO/LilyGO-T-Wristband-and-T-Glass/tree/master/firmware/README.MD)to check if the hardware is functioning properly. 

3. If an external power supply is used instead of USB-C power supply, please disable the **USB_CDC_ON_BOOT** option. This is because the development board waits for USB connection upon startup.
- For Arduino IDE users, you can disable this function in the options. Please note that disabling **USB_CDC_ON_BOOT** will disable the USB-C serial port redirection. At this point, opening the port via USB-C will not display any serial port information. The information will be output from GPIO43 and GPIO44: 
```c
     Tools -> USB CDC On Boot -> Disable 
```
- For Platformio users, you can add the following compilation flags in the ini file: 
```c
    build_flags =
    ; Enabling -DARDUINO_USB_CDC_ON_BOOT will start printing and wait for the terminal to connect during startup. ; -DARDUINO_USB_CDC_ON_BOOT=1

    ; Enabling -UARDUINO_USB_CDC_ON_BOOT will disable the printing function and will not cause any blocking when powered by a battery. -UARDUINO_USB_CDC_ON_BOOT
```

4. The RAM of the JD9613 display is only half the size of the screen, and it does not support rotation. Direction 0 and 1 can adjust the vertical direction, while directions 1 and 3 are in the same direction:
 ```c
// Set the screen to landscape mode. 0 and 2 represent two opposite vertical directions. amoled.setRotation(0);
amoled.setRotation(2);

// Set the screen to landscape mode, with directions 1 and 3 being the same and unable to be changed. amoled.setRotation(1);
amoled.setRotation(3);
```

## project

| Product(PinMap)  | schematic                                                   |
| ---------------- | ----------------------------------------------------------- |
| [T-Glass][1]     | [schematic](https://github.com/Xinyuan-LilyGO/LilyGO-T-Wristband-and-T-Glass/blob/master/schematic/LilyGO-T-Wristband-and-T-Glass.pdf) |
| [T-Wristband][2] | [schematic](https://github.com/Xinyuan-LilyGO/LilyGO-T-Wristband-and-T-Glass/blob/master/schematic/LilyGO-T-Wristband-and-T-Glass.pdf) |

## Dependent Libraries
* [SensorLib 0.1.8](https://github.com/lewisxhe/SensorsLib)
* [lvgl 8.4.0](https://github.com/lvgl/lvgl/tree/release/v8.4)
* [MadgwickAHRS](https://github.com/arduino-libraries/MadgwickAHRS)