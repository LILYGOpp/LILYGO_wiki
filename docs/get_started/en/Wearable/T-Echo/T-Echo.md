---
title: LILYGO T-Echo
show_source: false
tags: nRF52840, LoRa, E-Paper, GPS, NFC, Low Power
---

<div style="width:100%; display:flex;justify-content: center;">

![T-ECHO](./assets/T-ECHO1.jpg)

</div>

<div style="padding: 1em 0 0 0; display: flex; justify-content: center">
    <a target="_blank" style="margin: 1em;color: white; font-size: 0.9em; border-radius: 0.3em; padding: 0.5em 2em; background-color:rgb(63, 201, 28)" href="https://lilygo.cc/products/t-echo-lilygo">AliExpress Purchase</a>
</div>

## Version History:
| Version | Update date | Update description |
| :-----: | :---------: | :---------------- |
| T-Echo_V1.0 | Latest Version | Initial version of multi-functional LoRa communication device |

## Purchase Links

| Product | MCU | LoRa | Screen | GPS | NFC | Link |
| :-----: | :--: | :---: | :---: | :--: | :--: | :--: |
| T-Echo | nRF52840 | SX1262 | E-Paper | Supported | Supported | [AliExpress](https://lilygo.cc/products/t-echo-lilygo) |

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

T-Echo is a multi-functional LoRa communication device based on the nRF52840 chip, integrating an E-Paper screen, GPS positioning, NFC functionality, and multiple sensors. The device supports Arduino and nRF5-SDK development environments, making it an ideal platform for developing LoRa communication, IoT nodes, and low-power applications.

T-Echo is compatible with multiple open-source firmware projects, including SoftRF and Meshtastic, and can be used to build decentralized communication networks. The device features low-power design and supports various power-saving modes, making it suitable for outdoor communication, environmental monitoring, and other application scenarios.

## Preview

### Physical Image

<div style="width:100%; display:flex;justify-content: center;">

![T-Echo](./assets/T-ECHO2.jpg)

</div>

### Application Examples


- [T-Echo SoftRF](https://github.com/lyusupov/SoftRF/wiki/Badge-Edition)

![alt text](./assets/T-ECHO-SoftRF-en.jpg)

- [T-Echo Meshtastic](https://github.com/meshtastic/Meshtastic-device/tree/v1.2.42.2759c8d)

![alt text](./assets/T-ECHO-Mesh-en.jpg)


## Modules

![alt text](./assets/T-ECHO-info-en.jpg)

### MCU

* Chip: nRF52840
* Architecture: ARM Cortex-M4
* Wireless: Bluetooth 5.0
* FLASH: MX25R1635FZUIL0 or ZD25WQ16B selected based on supply conditions

### LoRa

* Chip: SX1262
* Frequency: Supports multiple frequency bands
* Output Power: -17 to 22 dBm

### Display

* Type: E-Paper
* Feature: Low power display

### GPS

* Function: Global Positioning System

### NFC

* Function: Near Field Communication

### Sensors

* Type: Onboard multiple sensors

### Overview

| Component | Description |
| :--: | :--: |
| MCU | nRF52840 |
| LoRa | SX1262 Chip |
| Display | E-Paper Display |
| GPS | Supports positioning function |
| NFC | Supports near field communication |
| Development Environment | Arduino, nRF5-SDK |
| Open-source Firmware | SoftRF, Meshtastic compatible |

## Quick Start

### Example Support
Visit the [GitHub](https://github.com/Xinyuan-LilyGO/T-Echo/tree/main/examples) repository to view example programs

![alt text](./assets/image.png)

### Arduino IDE Development

1. Download [Arduino IDE](https://www.arduino.cc/en/software)
2. Open Preferences, add `https://www.adafruit.com/package_adafruit_index.json` to the Board Manager URL list
3. Open the Board Manager, wait for the index to update, select 'Adafruit nRF52 by Adafruit' and click Install
4. After installation is complete, select 'Nordic nRF52840 (PCA10056)' from the board list
5. Copy all folders in the lib directory to the Arduino library folder
6. Open the sketch, select the correct port, then click Upload

### PlatformIO Development

1. Install [VS Code](https://code.visualstudio.com/) and [Python](https://www.python.org/)
2. Search for and install the PlatformIO extension in VS Code extensions
3. After restarting VS Code, the PlatformIO icon will appear at the bottom left
4. Click File -> Open Folder -> select the LilyGO-T-ECHO folder
5. Click the √ at the bottom left to compile, → to upload

> **Note**: When using USB to download firmware, double-click the reset button to enter DFU mode

### nRF5-SDK Development

1. Download [nRF5-SDK](https://www.nordicsemi.com/Software-and-Tools/Software/nRF5-SDK/Download)
2. Use nRF5-SDK for programming, supporting advanced features like NFC

### Development Platforms
1. [Arduino IDE](https://www.arduino.cc/en/software) - Supports Adafruit nRF52
2. [Platform IO](https://platformio.org/) - Cross-platform development
3. [nRF5-SDK](https://www.nordicsemi.com/Software-and-Tools/Software/nRF5-SDK/Download) - Nordic official SDK

## Pin Overview

For pin definitions, please refer to the [utilities.h](examples/Integration/utilities.h) file.

## Important Notes
1. Need to use files in the **lib** directory, which includes:
   - [`arduino-lmic`](https://github.com/mcci-catena/arduino-lmic)
   - `AceButton` 
   - `Adafruit_BME280_Library`   
   - `Adafruit_BusIO`        
   - `Adafruit_EPD`          
   - `AceButton` 
   - `Adafruit-GFX-Library`   
   - `Button2`        
   - `GxEPD`            
   - `PCF8563_Library `               
   - `RadioLib`     
   - `SerialFlash_ID539 `               
   - `SoftSPI`   
   - `TinyGPSPlus`   

2. Default uses [Adafruit_nRF52_Arduino](https://github.com/adafruit/Adafruit_nRF52_Arduino), all factory boards have already flashed [Adafruit_nRF52_Bootloader](https://github.com/adafruit/Adafruit_nRF52_Bootloader). If using **nRF5-SDK** to program the board, the original Bootloader will be lost.

3. If you need to use **nRF5-SDK** for programming, please click the link to download [**nRF5-SDK**](https://www.nordicsemi.com/Software-and-Tools/Software/nRF5-SDK/Download)

4. **NFC** functionality is not supported in **Adafruit_nRF52_Arduino**, please use [**nRF5-SDK**](https://www.nordicsemi.com/Software-and-Tools/Software/nRF5-SDK/Download) for programming.

5. FLASH will be selected as MX25R1635FZUIL0 or ZD25WQ16B based on supply conditions. Pay attention to the distinction during use.

6. After setting LoRa output power, current limit configuration is required:

```cpp
// Set output power to 22 dBm (acceptable range -17 to 22 dBm)
if (radio.setOutputPower(22) == RADIOLIB_ERR_INVALID_OUTPUT_POWER) {
    Serial.println(F("Selected output power is invalid for this module!"));
    while (true);
}

// Set over-current protection limit to 80 mA (acceptable range 45 - 240 mA)
// Note: Setting to 0 disables over-current protection
if (radio.setCurrentLimit(80) == RADIOLIB_ERR_INVALID_CURRENT_LIMIT) {
    Serial.println(F("Selected current limit is invalid for this module!"));
    while (true);
}