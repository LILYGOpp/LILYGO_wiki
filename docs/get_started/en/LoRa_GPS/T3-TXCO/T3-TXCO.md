---
title: LILYGO T3-TXCO
show_source: false
tags: ESP32-Pico-D4, LoRa, TCXO, OLED, IoT
---

<div style="width:100%; display:flex;justify-content: center;">

![T3-TXCO](./assets/T3-TXCO-1.jpg)

</div>

<div style="padding: 1em 0 0 0; display: flex; justify-content: center">
    <a target="_blank" style="margin: 1em;color: white; font-size: 0.9em; border-radius: 0.3em; padding: 0.5em 2em; background-color:rgb(63, 201, 28)" href="https://lilygo.cc/products/t3-txco">Official Store</a>
</div>

## Version History


## Purchase Links
| Product | SOC | FLASH | PSRAM | Link |
| :-----: | :-: | :---: | :---: | :--: |
| T3-TXCO | ESP32-Pico-D4 | 4MB | 2MB | [LILYGO Store](https://lilygo.cc/products/t3-txco) |

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

LILYGO LORA32 TCXO is a wireless communication module based on LoRa technology, supporting 868/915MHz dual-band, suitable for IoT applications in different regions worldwide. The module is equipped with a Temperature Compensated Crystal Oscillator (TCXO), significantly improving frequency stability, making it suitable for high-precision communication in environments with large temperature variations. Its design integrates LoRa modulation technology with a 32-bit microcontroller, combining long-distance, low-power data transmission with local processing capabilities. It can be widely used in smart agriculture, remote sensors, industrial monitoring, and other scenarios.

## Preview

### Physical Image

<div style="width:100%; display:flex;justify-content: center;">

![T3-TXCO](./assets/T3-TXCO-2.jpg)

</div>

### Pin Diagram

<img src="./assets/T3-TXCO-3.jpg" alt="summary" width=100%>

## Modules

### MCU
* Chip: ESP32-Pico-D4
* PSRAM: 2MB
* FLASH: 4MB
* Wireless: Wi-Fi + Bluetooth 4.2 + BLE

### Display
* Type: SSD1306 I2C OLED
* Interface: I2C
* Driver Chip: SSD1306

### Wireless Communication
* LoRa: SX1276
* Frequency Band: 868MHz/915MHz
* Feature: Temperature Compensated Crystal Oscillator (TCXO)

### Power Management
* Power Supply: USB Type-C / 3.7V Lithium Battery
* Solar Input: Supported
* Battery Switch: Supports power switching

### Overview

| Component | Description |
| :--: | :--: |
| MCU | ESP32-Pico-D4 |
| FLASH| 4MB |
| PSRAM | 2MB|
| Display | SSD1306 I2C OLED |
| LoRa | SX1276 (868/915MHz) |
| TCXO | Temperature Compensated Crystal Oscillator |
| Storage | TF Card Expansion |
| Wireless | Wi-Fi + Bluetooth 4.2 + BLE |
| USB | 1 × USB Port (TYPE-C) |
| Expansion Interface | 2 × QWIIC Interface |
| GPIO Interface | 2.54mm Pitch 2×13 Expansion IO Interface |
| Antenna Interface | Antenna Socket Interface + SMA Antenna Interface |
| Power Options | USB/3.7V Lithium Battery/Solar Input |
| Buttons | 1 x RESET Button + 1 x BOOT Button |
| Mounting Holes | 2 × 2mm Positioning Holes |
| Dimensions | 66 × 27 × 13 mm |

## Quick Start

### Example Support

| Example | PlatformIO/Arduino | ESP-IDF | Description |
| :------ | :----------------: | :-----: | :---------- |
| [LoRa_Communication](https://github.com/Xinyuan-LilyGO/LilyGo-LoRa-Series/tree/main/examples/LoRa_Communication) | ✓ | | LoRa Communication Example |
| [OLED_Display](https://github.com/Xinyuan-LilyGO/LilyGo-LoRa-Series/tree/main/examples/OLED_Display) | ✓ | | OLED Display Example |
| [TCXO_Stability](https://github.com/Xinyuan-LilyGO/LilyGo-LoRa-Series/tree/main/examples/TCXO_Stability) | ✓ | | TCXO Stability Test Example |
| [Battery_Power](https://github.com/Xinyuan-LilyGO/LilyGo-LoRa-Series/tree/main/examples/Battery_Power) | ✓ | | Battery Power Example |
| [Solar_Power](https://github.com/Xinyuan-LilyGO/LilyGo-LoRa-Series/tree/main/examples/Solar_Power) | ✓ | | Solar Power Example |

### PlatformIO
1. Install [Visual Studio Code](https://code.visualstudio.com/Download), choose the installation according to your system type.
2. Open the "Extensions" in the sidebar of Visual Studio Code (or use <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>X</kbd> to open extensions), search for the "PlatformIO IDE" extension and install it.
3. While the extension is installing, you can go to GitHub to download the program. You can download the main branch program by clicking the green "<> Code" button, or download the "Releases" version from the sidebar.
4. After the extension is installed, open the sidebar's Explorer (or use <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>E</kbd> to open it), click "Open Folder", find the project code you just downloaded (the entire folder), click "Add", and the project files will be added to your workspace.
5. Open the "platformio.ini" file in the project folder (PlatformIO will automatically open the "platformio.ini" of the corresponding folder after successfully adding the folder). Under the "[platformio]" section, uncomment and select the example program you want to upload (marked with "default_envs = xxx"). Then click the "<kbd>√</kbd>" at the bottom left to compile. If the compilation is successful, connect the microcontroller to the computer and click the "<kbd>→</kbd>" at the bottom left to upload.

### Arduino

1.  Install [Arduino IDE](https://www.arduino.cc/en/software)
2.  Install [Arduino ESP32](https://docs.espressif.com/projects/arduino-esp32/en/latest/)
3.  Copy all folders in the `lib` directory to the `Sketchbook location` directory. To find the library location, [refer here](https://support.arduino.cc/hc/en-us/articles/4415103213714-Find-sketches-libraries-board-cores-and-other-files-on-your-computer)
    * Windows: `C:\Users\{username}\Documents\Arduino`
    * macOS: `/Users/{username}/Documents/Arduino`
    * Linux: `/home/{username}/Arduino`
4.  Open the corresponding example
    * Open the downloaded `LilyGo-LoRa-Series` folder
    * Open the `examples` folder
    * Select the example file and open the file with the `ino` extension
5.  Select the corresponding development board model in the Arduino IDE Tools menu, click the corresponding option in the list below to select

| Name                                 | Value                                |
| ------------------------------------ | ------------------------------------ |
| Board                                | **ESP32 Dev Module**                 |
| Port                                 | Your port                            |
| CPU Frequency                        | 240MHZ(WiFi/BT)                      |
| Core Debug Level                     | None                                 |
| Erase All Flash Before Sketch Upload | Disable                              |
| Events Run On                        | Core1                                |
| Flash Frequency                      | 80MHZ                                |
| Flash Mode                           | QIO                                  |
| Flash Size                           | **4MB(32Mb)**                        |
| JTAG Adapter                         | Disabled                             |
| Arduino Runs On                      | Core1                                |
| Partition Scheme                     | **Huge APP (3MB No OTA/1MB SPIFFS)** |
| PSRAM                                | **Enable**                           |
| Upload Speed                         | 921600                               |
| Programmer                           | **Esptool**                          |

6. Please uncomment the corresponding model in the `utilities.h` file according to your development board model, for example `T3_V3_0_SX1276_TCXO`, otherwise compilation will report an error
7. Upload the program

### Development Platforms

1. [Micropython](https://micropython.org/)
2. [Arduino IDE](https://www.arduino.cc/en/software)
3. [Platform IO](https://platformio.org/)
4. [VS Code](https://code.visualstudio.com/)

## Pin Overview
| Name                     | GPIO NUM | Free |
| ------------------------ | -------- | ---- |
| OLED(**SSD1306**) SDA    | 21       | ❌    |
| OLED(**SSD1306**) SCL    | 22       | ❌    |
| SD CS                    | 13       | ❌    |
| SD MOSI                  | 15       | ❌    |
| SD MISO                  | 2        | ❌    |
| SD SCK                   | 14       | ❌    |
| LoRa(**SX1276**) SCK     | 5        | ❌    |
| LoRa(**SX1276**) MISO    | 19       | ❌    |
| LoRa(**SX1276**) MOSI    | 27       | ❌    |
| LoRa(**SX1276**) RESET   | 23       | ❌    |
| LoRa(**SX1276**) DIO0    | 26       | ❌    |
| LoRa(**SX1276**) DIO1    | 32       | ❌    |
| LoRa(**SX1276**) CS      | 7        | ❌    |
| LoRa(**SX1276**) TCXO EN | 12       | ❌    |
| Battery ADC              | 35       | ❌    |
| On Board LED             | 25       | ❌    |

## Related Tests

### Power Consumption
| Firmware | Program | Description | 
| :------: | :-----: | :---------- | 
| `[T3-TXCO_V3.0][LoRa_Transmit]_firmware_V1.0.0.bin` | `LoRa Transmission` | Power Consumption: To be completed | 
| `[T3-TXCO_V3.0][WiFi_Active]_firmware_V1.0.0.bin` | `WiFi Active` | Power Consumption: To be completed | 
| `[T3-TXCO_V3.0][Deep_Sleep]_firmware_V1.0.0.bin` | `Deep Sleep` | Power Consumption: To be completed | 

### TCXO Performance

| Temperature Range | Frequency Stability | Description |
| :------: | :--------: | :--: |
| -40°C ~ +85°C | ±0.5ppm | TCXO Temperature Compensation Performance |
| 25°C | ±0.2ppm | Frequency Accuracy at Room Temperature |

| Features            | Details                         |
| ------------------- | ------------------------------- |
| RF  Module          | SX1276                          |
| Frequency range     | 840～945MHz                     |
| Transfer rate(LoRa) | 0.018K～37.5Kbps                |
| Transfer rate(FSK)  | 1.2K～300Kbps                   |
| Modulation          | FSK, GFSK, MSK, GMSK, LoRa，OOK |

## FAQ

* **Q. How to adjust the external antenna resistor?**  
  A. Refer to the image below to adjust the resistor direction for the external antenna:
  <img src="./assets/T3-TXCO-4.jpg" alt="Antenna Resistor Adjustment" width=60%>

* **Q. What advantages does TCXO have over ordinary crystal oscillators?**  
  A. TCXO (Temperature Compensated Crystal Oscillator) can maintain higher frequency stability when temperature changes, suitable for applications with large environmental temperature variations.

* **Q. What power supply methods are supported?**  
  A. Supports USB Type-C power supply, 3.7V lithium battery power supply, and solar input, switchable via battery switch.

* **Q. What is the LoRa communication distance?**  
  A. Under ideal conditions, the communication distance can reach several kilometers, depending on environmental factors and antenna configuration.

* **Q. Why does my board fail to upload programs?**  
  A. Please hold down the "BOOT" button and press the "RST" button simultaneously, then release the "RST" button to enter download mode, and try uploading the program again.

## Projects
* [T3-TXCO_V3.0](https://github.com/Xinyuan-LilyGO/LilyGo-LoRa-Series/blob/master/schematic/T3_V3.0.pdf)

## Resources
* [ESP32-Pico-D4 Datasheet](https://www.espressif.com/sites/default/files/documentation/esp32-pico-d4_datasheet_en.pdf)
* [SX1276 Datasheet](https://www.semtech.com/products/wireless-rf/lora-transceivers/sx1276)
* [SSD1306 Datasheet](https://cdn-shop.adafruit.com/datasheets/SSD1306.pdf)

## Dependent Libraries
* [u8g2](https://github.com/olikraus/u8g2)
* [XPowersLib](https://github.com/lewisxhe/XPowersLib)
* [LoRa](https://github.com/sandeepmistry/arduino-LoRa)
* [RadioLib](https://github.com/jgromes/RadioLib)