---
title: LILYGO T-LoRa C6
show_source: false
tags: ESP32-C6, LoRa, Wi-Fi 6, Bluetooth 5, IoT
---

<div style="width:100%; display:flex;justify-content: center;">

![T-LoRa-C6](./assets/T-LoRa-C6-1.jpg)

</div>

<div style="padding: 1em 0 0 0; display: flex; justify-content: center">
    <a target="_blank" style="margin: 1em;color: white; font-size: 0.9em; border-radius: 0.3em; padding: 0.5em 2em; background-color:rgb(63, 201, 28)" href="https://lilygo.cc/products/t-lora-c6">Official Store</a>
</div>

## Version Iteration
| Version | Update date | Update description |
| :-----: | :---------: | :----------------- |
| T-LoRa-C6_V1.0 | 2024-03-15 | Initial hardware version |
| T-LoRa-C6_V1.1 | 2024-06-20 | Software optimization update |

## Purchase Links
| Product | SOC | FLASH | PSRAM | Link |
| :-----: | :-: | :---: | :---: | :--: |
| T-LoRa C6 | ESP32-C6 | 4MB | - | [LILYGO Store](https://lilygo.cc/products/t-lora-c6) |

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

LILYGO T-LoRaC6 is a compact IoT development board based on the ESP32-C6-MINI-1 module, integrating 2.4GHz Wi-Fi 6, Bluetooth 5 (LE) and LoRa® long-range communication (SX1262 module, supporting 868/915MHz frequency bands), combining high performance with low power characteristics. The board features 4MB Flash, supports C/C++, MicroPython, Lua multi-language development, and is compatible with mainstream platforms such as Arduino-IDE, VS Code and ESP-IDF. It provides BOOT/reset buttons, custom LED and Type-C power interface for quick debugging and deployment. Its compact size (33x29mm) and multi-protocol integration capability (Wi-Fi/Bluetooth/LoRa) make it suitable for smart home control, industrial sensor networks, remote environmental monitoring and other scenarios. The 5V 500mA power supply design further simplifies mobile device integration, making it an ideal choice for low-power wide-area IoT applications.

## Preview

### Physical Image

<div style="width:100%; display:flex;justify-content: center;">

![T-LoRa-C6](./assets/T-LoRa-C6-2.jpg)

</div>

### Pinout Diagram

<img src="./assets/T-LoRa-C6-3.jpg" alt="summary" width=100%>

## Modules

### MCU
* Chip: ESP32-C6-MINI-1
* FLASH: 4MB (Quad-SPI)
* Wireless: 2.4GHz Wi-Fi 6, Bluetooth 5 (LE), 802.15.4
* CPU Frequency: 160MHz (WiFi)

### Wireless Communication
* LoRa: SX1262
* Frequency Bands: 868MHz/915MHz
* Protocol: LoRa® Long-Range Communication

### Power Management
* Power Supply: 5V/500mA
* Interface: Type-C USB

### Overview
<img src="./assets/T-LoRa-C6-en.jpg" alt="summary" width=80%>

| Component | Description |
| :--: | :--: |
| MCU | ESP32-C6-MINI-1 |
| FLASH| 4MB (Quad-SPI) |
| LoRa | SX1262 (868/915MHz) |
| Wireless | 2.4GHz Wi-Fi 6, Bluetooth 5 (LE), 802.15.4 |
| USB | 1 × USB Port (TYPE-C Connector) |
| Expansion Interfaces | 2 × 10-PIN GPIO Interfaces |
| Buttons | 1 x RESET Button + 1 x BOOT Button |
| Power Input | 5V/500mA |
| Mounting Holes | 4 × M1.2 Positioning Holes |
| Dimensions | 33 × 29 × 6 mm |

## Quick Start

### Example Support

| Example | PlatformIO/Arduino | ESP-IDF | Description |
| :------ | :----------------: | :-----: | :---------- |
| [LoRa_Communication](https://github.com/Xinyuan-LilyGO/LilyGo-LoRa-Series/tree/main/examples/LoRa_Communication) | ✓ | | LoRa Communication Example |
| [WiFi6_Connection](https://github.com/Xinyuan-LilyGO/LilyGo-LoRa-Series/tree/main/examples/WiFi6_Connection) | ✓ | | Wi-Fi 6 Connection Example |
| [Bluetooth_LE](https://github.com/Xinyuan-LilyGO/LilyGo-LoRa-Series/tree/main/examples/Bluetooth_LE) | ✓ | | Bluetooth Low Energy Example |
| [Multi_Protocol](https://github.com/Xinyuan-LilyGO/LilyGo-LoRa-Series/tree/main/examples/Multi_Protocol) | ✓ | | Multi-Protocol Communication Example |
| [Sensor_Node](https://github.com/Xinyuan-LilyGO/LilyGo-LoRa-Series/tree/main/examples/Sensor_Node) | ✓ | | Sensor Node Example |

### PlatformIO

1.  Install [Visual Studio Code](https://code.visualstudio.com/) and [Python](https://www.python.org/)
2.  Search for and install the `PlatformIO` extension in `Visual Studio Code`
3.  After installation, restart `Visual Studio Code`
4.  After restarting, select `File` -> `Open Folder` -> Choose the `LilyGo-LoRa-Series` directory
5.  Wait for third-party dependency libraries to finish installing
6.  Click to open the `platformio.ini` file, under the `platformio` section
7.  Under `default_envs`, select the name of the board you want to use and uncomment it
8.  Uncomment one line `src_dir = xxxx`, ensuring only one line is active. Please note the example comments, which explain which features are available and which are not.
9.  Click the (✔) symbol at the bottom left to compile
10. Connect the board to your computer using a USB-C cable (Micro-USB interface is for module firmware upgrade)
11. Click (→) to upload the firmware
12. Click (plug symbol) to monitor the serial output
13. If unable to upload or the USB device keeps blinking, please check the **FAQ** below

### Arduino

1.  Install [Arduino IDE](https://www.arduino.cc/en/software)
2.  Install [Arduino ESP32](https://docs.espressif.com/projects/arduino-esp32/en/latest/)
3.  Copy all folders from the `lib` directory to the `Sketchbook location` directory. How to find the library file location, [please refer here](https://support.arduino.cc/hc/en-us/articles/4415103213714-Find-sketches-libraries-board-cores-and-other-files-on-your-computer)
    * Windows: `C:\Users\{Username}\Documents\Arduino`
    * macOS: `/Users\{Username}/Documents/Arduino`
    * Linux: `/home/{Username}/Arduino`
4.  Open the corresponding example
    * Open the downloaded `LilyGo-LoRa-Series` folder
    * Open the `examples` folder
    * Select the example file and open the file with `ino` extension
5.  Select the corresponding board model in the Arduino IDE Tools menu, click the corresponding option in the list below to select

| T3-C6                                | Value                                                   |
| ------------------------------------ | ------------------------------------------------------- |
| Board                                | **ESP32C6 Dev Module**                                  |
| Port                                 | Your port                                               |
| USB CDC On Boot                      | Enable                                                  |
| CPU Frequency                        | 160MHZ(WiFi)                                            |
| Core Debug Level                     | None                                                    |
| USB DFU On Boot                      | Disable                                                 |
| Erase All Flash Before Sketch Upload | Disable                                                 |
| Flash Mode                           | DIO                                                     |
| Flash Size                           | **4MB(32Mb)**                                           |
| Arduino Runs On                      | Core1                                                   |
| USB Firmware MSC On Boot             | Disable                                                 |
| Partition Scheme                     | **Default 4M Flash with spiffs(1.2M APP/1.5MB SPIFFS)** |
| Upload Speed                         | 921600                                                  |
| Programmer                           | **Esptool**                                             |


6. Please uncomment the corresponding model in the `utilities.h` file according to your board model, for example `T3_C6`, otherwise compilation will report an error
7. Upload the program

### Development Platforms
1. [Micropython](https://micropython.org/)
2. [Arduino IDE](https://www.arduino.cc/en/software)
3. [Platform IO](https://platformio.org/)
4. [VS Code](https://code.visualstudio.com/)
5. [ESP-IDF](https://github.com/espressif/esp-idf)

## Pin Overview
| Name                   | GPIO NUM | Free |
| ---------------------- | -------- | ---- |
| LoRa(**SX1276**) SCK   | 6        | ❌    |
| LoRa(**SX1276**) MISO  | 1        | ❌    |
| LoRa(**SX1276**) MOSI  | 0        | ❌    |
| LoRa(**SX1276**) RESET | 21       | ❌    |
| LoRa(**SX1276**) DIO0  | 23       | ❌    |
| LoRa(**SX1276**) BUSY  | 22       | ❌    |
| LoRa(**SX1276**) CS    | 18       | ❌    |
| On Board LED           | 7        | ❌    |

## Related Tests

*Test data to be supplemented*

## FAQ

* **Q. What are the advantages of ESP32-C6 compared to ESP32-S3?**  
  A. ESP32-C6 supports Wi-Fi 6, has better energy efficiency and network performance, while maintaining low cost.

* **Q. What is the communication distance of the LoRa module?**  
  A. Under ideal conditions, the SX1262 LoRa module can achieve communication distances of several kilometers, depending on environmental factors and antenna configuration.

* **Q. Why does my board fail to flash?**  
  A. Please hold the "BOOT" button while pressing the "RST" button, then release the "RST" button, and re-download the program after entering download mode.

* **Q. Does it support battery power?**  
  A. External batteries can be connected through the expansion interface, but additional power management circuitry is required.

* **Q. Can Wi-Fi 6 and Bluetooth work simultaneously?**  
  A. Yes, ESP32-C6 supports Wi-Fi and Bluetooth coexistence mode.

## Projects
* [T-LoRa-C6_V1.0](https://github.com/Xinyuan-LilyGO/LilyGo-LoRa-Series/blob/master/schematic/T3-C6_V1.0.pdf)

## Resources
* [ESP32-C6 Datasheet](https://www.espressif.com/sites/default/files/documentation/esp32-c6_datasheet_en.pdf)
* [SX1262 Datasheet](https://www.semtech.com/products/wireless-rf/lora-core/sx1262)
* [ESP32-C6 Technical Reference](https://www.espressif.com/sites/default/files/documentation/esp32-c6_technical_reference_manual_en.pdf)

## Dependent Libraries
* [RadioLib](https://github.com/jgromes/RadioLib)
* [LoRa](https://github.com/sandeepmistry/arduino-LoRa)
* [Arduino_GFX](https://github.com/moononournation/Arduino_GFX)
* [TFT_eSPI](https://github.com/Bodmer/TFT_eSPI)
* [U8g2](https://github.com/olikraus/u8g2)
* [AceButton](https://github.com/bxparks/AceButton)
* [Adafruit_BME280_Library](https://github.com/adafruit/Adafruit_BME280_Library)
* [Adafruit_BusIO](https://github.com/adafruit/Adafruit_BusIO)
* [Adafruit_Sensor](https://github.com/adafruit/Adafruit_Sensor)
* [ESP8266_SSD1306](https://github.com/ThingPulse/esp8266-oled-ssd1306)
* [GxEPD](https://github.com/ZinggJM/GxEPD)
* [LMIC-Arduino](https://github.com/matthijskooijman/LMIC-node)
* [TinyGPSPlus](https://github.com/mikalhart/TinyGPSPlus)
* [TinyGSM](https://github.com/vshymanskyy/TinyGSM)
* [AXP202](https://github.com/lewisxhe/AXP202X_Library)