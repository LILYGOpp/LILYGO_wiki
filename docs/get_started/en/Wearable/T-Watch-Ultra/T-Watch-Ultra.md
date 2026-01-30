---
title: LILYGO T-Watch Ultra
show_source: false
tags: Smart Watch, ESP32-S3, LoRa, GNSS, AMOLED, AI Sensor, NFC
---

<div style="width:100%; display:flex;justify-content: center;">

![T-Watch Ultra](./assets/T-Watch-Ultra-1.jpg)

</div>

<div style="padding: 1em 0 0 0; display: flex; justify-content: center">
    <a target="_blank" style="margin: 1em;color: white; font-size: 0.9em; border-radius: 0.3em; padding: 0.5em 2em; background-color:rgb(63, 201, 28)" href="https://lilygo.cc/products/t-watch-ultra">Official Store</a>
</div>

## Version Iteration:
| Version | Update date | Update description |
| :-----: | :---------: | :---------------- |
| T-Watch-Ultra_V1.0 | Latest Version | Initial version of high-performance smart watch development module |

## Purchase Links

| Product | SOC | FLASH | PSRAM | Screen | LoRa | GNSS | Link |
| :-----: | :--: | :---: | :---: | :--: | :--: | :--: | :--: |
| T-Watch Ultra | ESP32-S3 | 16M | 8M | 2.06" AMOLED | SX1262/SX1280 | MIA-M10Q | [LILYGO Mall](https://lilygo.cc/products/t-watch-ultra) |

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

LILYGO T-Watch Ultra is a high-performance smart watch development module based on the ESP32-S3 dual-core processor, equipped with 16MB flash memory and 8MB PSRAM, supporting Arduino/ESP-IDF/MicroPython development environments. Core features are highly integrated:

- **Display Interaction**: Features a 2.06-inch AMOLED screen (410×502 resolution, 16 million colors), supports capacitive touch and QSPI high-speed rendering
- **Quadruple Wireless Communication**: Integrates Wi-Fi/BLE 5.0, LoRa (SX1262/SX1280, covering 433/868/915MHz bands), GNSS positioning (MIA-M10Q module) and NFC (ST25R3916)
- **Intelligent Sensing & Feedback**: Built-in BHI260AP AI motion sensor, DRV2605 haptic vibration motor and MAX98357A audio amplifier, enabling motion recognition and multimodal interaction
- **Expansion & Battery Life**: Supports MicroSD card expansion (32GB FAT32), dynamically optimized energy consumption by AXP2101 power management chip, paired with 1100mAh battery (4.07Wh)
- **Industrial-grade Design**: Compact size (49×63.5×22mm), wide temperature range operation (-40℃~85℃), suitable for outdoor sports equipment, industrial IoT gateways and other scenarios

## Preview

### Physical Image

<div style="width:100%; display:flex;justify-content: center;">

![T-Watch Ultra](./assets/T-Watch-Ultra-2.jpg)

</div>

### Pinout Diagram

<img src="./assets/T-Watch-Ultra-pin.jpg" alt="summary" width=100%>

## Modules

### MCU

* Chip: ESP32-S3
* PSRAM: 8MB (Octal SPI)
* FLASH: 16MB
* Architecture: Dual-core Xtensa LX7
* Wireless: Wi-Fi 802.11 b/g/n + Bluetooth 5.0

### Display

* Size: 2.06-inch AMOLED
* Resolution: 410x502px
* Display Type: AMOLED
* Colors: 16 million colors
* Interface: QSPI

### LoRa

* Chip: SX1262 / SX1280 (selectable)
* Frequency: 433-923MHz (SX1262) / 2.4GHz (SX1280)

### GNSS Positioning

* Chip: MIA-M10Q
* Features: Multi-constellation GNSS receiver

### AI Sensor

* Chip: BHI260AP
* Type: AI Motion Sensor
* Features: Supports complex motion recognition

### NFC

* Chip: ST25R3916
* Function: Near Field Communication

### Audio

* Amplifier: MAX98357A
* Interface: I2S

### Power Management

* Chip: AXP2101
* Battery: 1100mAh Lithium Battery
* Charging: USB Type-C 5V

### Expansion Interfaces

* IO Expansion: XL9555 (16 expansion IO interfaces)
* Storage: MicroSD card (max 32GB)

### Communication Module

* Chip: T3902
* Function: Voice call support

### Overview

| Component | Description |
| :--: | :--: |
| MCU | ESP32-S3 Dual-core Processor |
| FLASH | 16MB |
| PSRAM | 8MB (Octal SPI) |
| Display | 2.06-inch AMOLED (410×502) |
| Touch | CST9217 Capacitive Touchscreen |
| LoRa | SX1262 (433-923MHz) / SX1280 (2.4GHz) |
| GNSS | MIA-M10Q Multi-constellation Positioning |
| NFC | ST25R3916 |
| AI Sensor | BHI260AP Motion Sensor |
| Audio | MAX98357A Audio Amplifier |
| Vibration Motor | DRV2605 Haptic Feedback |
| Power Management | AXP2101 PMU |
| RTC | PCF85063A Real-Time Clock |
| IO Expansion | XL9555 (16 IOs) |
| Communication Module | T3902 |
| Storage | MicroSD Card Expansion |
| Battery | 1100mAh Lithium Battery |
| Wireless | Wi-Fi 802.11b/g/n + Bluetooth 5.0 |
| USB | 1 × USB OTG (Type-C Connector) |
| Buttons | POWER + BOOT (built-in) |
| Dimensions | **63.5×49×22mm** (without strap) |

## Quick Start

### Example Support

| Example | PlatformIO/Arduino | ESP-IDF | Description |
| :------ | :----------------: | :-----: | :---------- |
| [Watch UI](https://github.com/Xinyuan-LilyGO/LilyGoLib) | ✓ | | Watch Interface Example |
| [GNSS Tracking](https://github.com/Xinyuan-LilyGO/LilyGoLib) | ✓ | | Satellite Positioning Function |
| [LoRa Communication](https://github.com/Xinyuan-LilyGO/LilyGoLib) | ✓ | | LoRa Communication Test |
| [AI Sensor](https://github.com/Xinyuan-LilyGO/LilyGoLib) | ✓ | | Motion Recognition Example |
| [NFC Reader](https://github.com/Xinyuan-LilyGO/LilyGoLib) | ✓ | | NFC Function Demo |

### Arduino
1. Install [Arduino IDE](https://www.arduino.cc/en/software)
2. Install [Arduino ESP32 version 3.3.0-alpha1 or higher (latest version)](https://docs.espressif.com/projects/arduino-esp32/en/latest/installing.html)
* Tip: Arduino Manager URL: https://espressif.github.io/arduino-esp32/package_esp32_dev_index.json

3. [Download LilyGoLib library](https://github.com/Xinyuan-LilyGO/LilyGoLib/archive/refs/heads/master.zip)

4. Open `Arduino IDE` -> `Sketch` -> `Include Library` -> `Add .ZIP Library` -> `Select the library compressed package downloaded in step 3`

5. [Install LilyGoLib-ThirdParty](https://github.com/Xinyuan-LilyGO/LilyGoLib-ThirdParty)
* Copy all directories from [LilyGoLib-ThirdParty](https://github.com/Xinyuan-LilyGO/LilyGoLib-ThirdParty) to the ArduinoIDE libraries directory. If there is no "libraries" directory, please create it.
* Please note: do not copy the "LilyGoLib-ThirdParty" directory itself, but copy the folders inside the "LilyGoLib-ThirdParty" directory to the libraries directory.
* How to find the library location on your computer, [please refer here](https://support.arduino.cc/hc/en-us/articles/4415103213714-Find-sketches-libraries-board-cores-and-other-files-on-your-computer)
* Windows: `C:\Users\{Username}\Documents\Arduino`
* macOS: `/Users/{Username}/Documents/Arduino`
* Linux: `/home/{Username}/Arduino`

> Please note that the libraries in LilyGoLib-ThirdParty are not necessarily the latest versions. Before confirming the hardware is working properly, please do not upgrade the dependent library versions.
> ArduinoIDE will prompt that new library versions are available for upgrade every time it opens.
> Please confirm normal operation before attempting to update to the latest versions. If you encounter issues, please revert to the dependent library versions that worked properly. The current dependent library version list can be viewed [here](./third_party.md#t-watch-ultra-third-party)

6. `File` -> `Examples` -> `LilyGOLib` -> `helloworld`
7. `Tools` -> `Board` -> `esp32`, please select from the table below:

| Arduino IDE Setting                  | Value                             |
| ------------------------------------ | --------------------------------- |
| Board                                | **LilyGo T-Watch-Ultra**          |
| Port                                 | Your port                         |
| USB CDC On Boot                      | Enabled                           |
| CPU Frequency                        | 240MHZ(WiFi)                      |
| Core Debug Level                     | None                              |
| USB DFU On Boot                      | Disable                           |
| Erase All Flash Before Sketch Upload | Disable                           |
| Events Run On                        | Core 1                            |
| JTAG Adapter                         | Disable                           |
| Arduino Runs On                      | Core 1                            |
| USB Firmware MSC On Boot             | Disable                           |
| Partition Scheme                     | **16M Flash(3M APP/9.9MB FATFS)** |
| Board Revision                       | **Radio-SX1262**                  |
| Upload Mode                          | **UART0/Hardware CDC**            |
| Upload Speed                         | 921600                            |
| USB Mode                             | **CDC and JTAG**                  |

8. **Board Revision Option**, please select according to the actual purchased RF type. Current options include:
* Radio-SX1262 (Sub 1G LoRa)
* Radio-SX1280 (2.4G LoRa)
* Radio-CC1101 (Sub 1G (G)MSK, 2(G)FSK, 4(G)FSK, ASK, OOK)
* Radio-LR1121 (Sub 1G + 2.4G LoRa)
* Radio-SI4432 (Sub 1G ISM)
9. Select `Port`
10. Click `Upload`, wait for compilation and writing to complete
11. If you cannot upload the sketch or the USB device keeps appearing on the computer, please manually switch the device to download mode.

>
> * If there is no serial output, please check if "USB CDC On Boot" is set to "Enabled".
> * The board version changes according to the actual RF module model. The current default version is SX1262.
> * This library depends on the latest [arduino-esp32](https://github.com/espressif/arduino-esp32/releases/tag/3.3.0-alpha1) version. If it is lower than **V3.3.0-alpha1**, it will report an error.

### T-Watch-Ultra Enter Download Mode
> 
> 🤖 Is the USB port always frequently plugged and unplugged?
> If you have installed third-party firmware (such as meshtastic), please be sure to follow the steps below to update the firmware, whether it is meshtastic firmware or lilygo factory firmware.
> Download mode is only needed when the program does not allow code upload. Under normal circumstances, this step is not required.
> Follow the steps below to switch your device to download mode.
> 1. Connect the board via USB-C cable
> 2. Press and hold the **BOOT** button, while simultaneously pressing the **RST** button
> 3. Release the **RST** button
> 4. Release the **BOOT** button
> 5. The USB port should be fixed and will not blink again. You can click upload.
> 6. Press the **RST** button to exit download mode

> If the new code is written successfully but the device does not light up or has other issues, please use our factory test code to test whether the peripherals can work normally. Please click here to download the firmware and write it for testing.

### Development Platforms
1. [Arduino IDE](https://www.arduino.cc/en/software)
2. [Platform IO](https://platformio.org/)
3. [ESP-IDF](https://www.espressif.com/en/products/sdks/esp-idf)
4. [VS Code](https://code.visualstudio.com/)
5. [Micropython](https://micropython.org/)

## Pin Overview

| Name                                 | GPIO NUM                    | Free |
| ------------------------------------ | --------------------------- | ---- |
| SDA                                  | 3                           | ❌    |
| SCL                                  | 2                           | ❌    |
| SPI MOSI                             | 34                          | ❌    |
| SPI MISO                             | 33                          | ❌    |
| SPI SCK                              | 35                          | ❌    |
| SD CS                                | 21                          | ❌    |
| SD MOSI                              | Share with SPI bus          | ❌    |
| SD MISO                              | Share with SPI bus          | ❌    |
| SD SCK                               | Share with SPI bus          | ❌    |
| RTC(**PCF85063A**) SDA               | Share with I2C bus          | ❌    |
| RTC(**PCF85063A**) SCL               | Share with I2C bus          | ❌    |
| RTC(**PCF85063A**) Interrupt         | 1                           | ❌    |
| NFC(**ST25R3916**) CS                | 4                           | ❌    |
| NFC(**ST25R3916**) Interrupt         | 5                           | ❌    |
| NFC(**ST25R3916**) MOSI              | Share with SPI bus          | ❌    |
| NFC(**ST25R3916**) MISO              | Share with SPI bus          | ❌    |
| NFC(**ST25R3916**) SCK               | Share with SPI bus          | ❌    |
| Sensor(**BHI260**) Interrupt         | 8                           | ❌    |
| Sensor(**BHI260**) SDA               | Share with I2C bus          | ❌    |
| Sensor(**BHI260**) SCL               | Share with I2C bus          | ❌    |
| PCM Amplifier(**MAX98357A**) BCLK    | 9                           | ❌    |
| PCM Amplifier(**MAX98357A**) WCLK    | 10                          | ❌    |
| PCM Amplifier(**MAX98357A**) DOUT    | 11                          | ❌    |
| GNSS(**MIA-M10Q**) TX                | 43                          | ❌    |
| GNSS(**MIA-M10Q**) RX                | 44                          | ❌    |
| GNSS(**MIA-M10Q**) PPS               | 13                          | ❌    |
| LoRa(**SX1262 or SX1280**) SCK       | Share with SPI bus          | ❌    |
| LoRa(**SX1262 or SX1280**) MISO      | Share with SPI bus          | ❌    |
| LoRa(**SX1262 or SX1280**) MOSI      | Share with SPI bus          | ❌    |
| LoRa(**SX1262 or SX1280**) RESET     | 47                          | ❌    |
| LoRa(**SX1262 or SX1280**) BUSY      | 48                          | ❌    |
| LoRa(**SX1262 or SX1280**) CS        | 36                          | ❌    |
| LoRa(**SX1262 or SX1280**) Interrupt | 14                          | ❌    |
| Display CS                           | 41                          | ❌    |
| Display DATA0                        | 38                          | ❌    |
| Display DATA1                        | 39                          | ❌    |
| Display DATA2                        | 42                          | ❌    |
| Display DATA3                        | 45                          | ❌    |
| Display SCK                          | 40                          | ❌    |
| Display TE                           | 6                           | ❌    |
| Display RESET                        | 37                          | ❌    |
| Charger(**AXP2101**) SDA             | Share with I2C bus          | ❌    |
| Charger(**AXP2101**) SCL             | Share with I2C bus          | ❌    |
| Charger(**AXP2101**) Interrupt       | 7                           | ❌    |
| Haptic Driver(**DRV2605**) SDA       | Share with I2C bus          | ❌    |
| Haptic Driver(**DRV2605**) SCL       | Share with I2C bus          | ❌    |
| Expand(**XL9555**) SDA               | Share with I2C bus          | ❌    |
| Expand(**XL9555**) SCL               | Share with I2C bus          | ❌    |
| Expand(**XL9555**) GPIO6             | Haptic Driver Enable        | ❌    |
| Expand(**XL9555**) GPIO7             | Display Power supply enable | ❌    |
| Expand(**XL9555**) GPIO10            | Touchpad Reset              | ❌    |
| Expand(**XL9555**) GPIO12            | SD Insert Detect            | ❌    |

## Related Tests

| Mode        | Wake-Up Mode                                | Current |
| ----------- | ------------------------------------------- | ------- |
| Light-Sleep | PowerButton + BootButton + TouchPanel       | 4.6mA   |
| Light-Sleep | PowerButton + BootButton                    | 2.1mA   |
| DeepSleep   | PowerButton + BootButton (Backup power on)  | 1.1mA   |
| DeepSleep   | PowerButton + BootButton (Backup power off) | 840uA   |
| DeepSleep   | TouchPanel                                  | 3.34mA  |
| DeepSleep   | Timer (Backup power on)                     | 850uA   |
| DeepSleep   | Timer (Backup power off)                    | 1.1mA   |
| Power OFF   | Only keep the backup power                  | 77uA    |

## FAQ

* **Q. What advantages does T-Watch Ultra have over other versions?**  
  A. The Ultra version features a larger AMOLED screen, AI motion sensor, GNSS multi-constellation positioning, NFC functionality, and larger battery capacity, making it more comprehensive in features.

* **Q. How to power on and off?**  
  A. Press and hold the POWER button for 2 seconds to power on, hold for 6 seconds to power off. The BOOT button is a built-in button used for program uploading.

* **Q. Which GNSS constellations are supported?**  
  A. The MIA-M10Q module supports multiple satellite systems including GPS, GLONASS, Galileo, BeiDou, etc.

* **Q. What special features does the AI sensor have?**  
  A. The BHI260AP can recognize complex motion patterns, such as gesture recognition, activity classification, etc., suitable for motion monitoring applications.

* **Q. What's the battery life like?**  
  A. The 1100mAh battery can provide several days of battery life under normal use, depending on feature usage.

## Projects

* [T-Watch Ultra Schematic](https://github.com/Xinyuan-LilyGO/LilyGoLib/tree/master/docs/hardware/)
* [Example Code](https://github.com/Xinyuan-LilyGO/LilyGoLib)

## Resources

* [Schematic](https://github.com/Xinyuan-LilyGO/LilyGoLib/tree/master/docs/hardware/)
* [ESP32-S3 Datasheet](https://www.espressif.com/sites/default/files/documentation/esp32-s3_datasheet_en.pdf)
* [SX1262 Datasheet](https://www.semtech.com/products/wireless-rf/lora-transceivers/sx1262)
* [MIA-M10Q GNSS Datasheet](https://www.u-blox.com/en/product/mia-m10-series)
* [BHI260AP Sensor Datasheet](https://www.bosch-sensortec.com/products/motion-sensors/imu-with-integrated-ai/bhi260ap/)
* [AXP2101 Power Management](https://www.x-powers.com/en.php/Product/detail/id/145)

## Dependent Libraries

* [TTGO_TWatch_Library](https://github.com/Xinyuan-LilyGO/TTGO_TWatch_Library/tree/t-watch-s3) - T-Watch Series Development Library
* [LilyGoLib](https://github.com/Xinyuan-LilyGO/LilyGoLib) - LILYGO Device Universal Library
* [Arduino_GFX](https://github.com/moononournation/Arduino_GFX) - Graphics Display Library
* [LVGL](https://lvgl.io/) - Embedded Graphics Library
* [RadioLib](https://github.com/jgromes/RadioLib) - LoRa Communication Library
* [TinyGPSPlus](https://github.com/mikalhart/TinyGPSPlus) - GPS Parsing Library