---
title: LILYGO T3-S3 MVSR Board
show_source: false
tags: ESP32-S3, LoRa, Audio, Voice, Vibration, RTC
---

<div style="width:100%; display:flex;justify-content: center;">

![T3-S3_MVSRBoard](./assets/T3-S3_MVSRBoard01.jpg)

</div>

<div style="padding: 1em 0 0 0; display: flex; justify-content: center">
    <a target="_blank" style="margin: 1em;color: white; font-size: 0.9em; border-radius: 0.3em; padding: 0.5em 2em; background-color:rgb(63, 201, 28)" href="https://lilygo.cc/products/t3-s3-mvsr-board">Official Store</a>
</div>

## Version Iteration
| Version | Update date | Update description |
| :-----: | :---------: | :----------------- |
| T3-S3-MVSRBoard_V1.0                      | 2024-11-06                    |   Initial Version      |
| T3-S3-MVSRBoard_V1.1                      | 2025-03-18                    |   Changed Microphone Model      |

## Purchase Links
| Product | SOC | FLASH | PSRAM | Link |
| :-----: | :-: | :---: | :---: | :--: |
| T3-S3 MVSR Board | ESP32-S3 | 4MB | 2MB | [LILYGO Store](https://lilygo.cc/products/t3-s3-mvsr-board) |

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

The T3-S3 MVSR version is based on the T3-S3 main board with an extended module featuring vibration motor, microphone, speaker, and RTC functions. The main application of this version is for LoRa voice transmission and reception. This extended version currently supports both SX1262 and SX1280 models of the T3S3 motherboard. The SX1262 version uses FSK modulation, while the SX1280 version uses LoRa modulation. Corresponding test demos are available on GitHub for your development reference. Of course, this extended version can also be used for AI voice interaction functions, MP3 playback, and more.

## Preview

### Physical Image

<div style="width:100%; display:flex;justify-content: center;">

![T3-S3_MVSRBoard](./assets/T3-S3_MVSRBoard02.jpg)

</div>

### Pinout Diagram

<img src="./assets/T3-S3_MVSRBoard.jpg" alt="summary" width=100%>

## Modules

### MCU
* Chip: ESP32-S3FH4R2
* PSRAM: 2MB (OPI PSRAM)
* FLASH: 4MB
* Wireless: 2.4GHz Wi-Fi + Bluetooth 5.0

### Speaker

* Chip: MAX98357A
* Bus Communication Protocol: IIS
* Other: Default uses 9dB gain
* Related Resources:
    >[MAX98357A](https://github.com/Xinyuan-LilyGO/T3-S3-MVSRBoard/blob/main/information/MAX98357AETE+T.pdf)
* Dependent Libraries:
    >[Arduino_DriveBus-1.1.16]()

### Microphone

 #### T3-S3-MVSRBoard_V1.0 Version
 * Chip: MSM261S4030H0R
 * Bus Communication Protocol: IIS
 * Related Resources:
    >[MSM261S4030H0R](https://github.com/Xinyuan-LilyGO/T3-S3-MVSRBoard/blob/main/information/MEMSensing-MSM261S4030H0R.pdf)
 * Dependent Libraries:
     >[Arduino_DriveBus-1.1.16]()

 #### T3-S3-MVSRBoard_V1.1 Version
 * Chip: MP34DT05-A
 * Bus Communication Protocol: PDM
 * Related Resources:
    >[MP34DT05-A](https://github.com/Xinyuan-LilyGO/T3-S3-MVSRBoard/blob/main/information/mp34dt05-a.pdf)
 * Dependent Libraries:
    >[Arduino_DriveBus-1.1.16]()

### RTC

* Chip: PCF85063ATL
* Bus Communication Protocol: IIC
* Related Resources:
    >[PCF85063ATL](https://github.com/Xinyuan-LilyGO/T3-S3-MVSRBoard/blob/main/information/PCF85063ATL-1,118.pdf)
* Dependent Libraries:
    >[Arduino_DriveBus-1.1.16]()

### Wireless Communication
* LoRa Module: SX1262 / SX1280
* Frequency Bands: 868/915MHz (SX1262) / 2.4GHz (SX1280)
* Modulation: FSK (SX1262) / LoRa (SX1280)

### Function Expansion
* Vibration Motor: Haptic feedback
* Storage: TF Card Expansion

### Overview

The T3-S3-MVSRBoard is a backplane design for the T3-S3_V1.2 main board, featuring onboard speaker and microphone expansion functions with extremely low static current. Additionally, it includes vibration and RTC (Real-Time Clock) functions.

| Component | Description |
| :--: | :--: |
| MCU | ESP32-S3FH4R2 Dual-core LX7 |
| FLASH| 4MB |
| PSRAM | 2MB|
| Audio Input | MP34DT05-A PDM Microphone |
| Audio Output | MAX98357A I2S Speaker |
| LoRa | SX1262 (868/915MHz) / SX1280 (2.4GHz) |
| RTC | PCF85063ATL Real-Time Clock (I2C) |
| Vibration | Haptic Vibration Motor |
| Storage | TF Card Expansion |
| Wireless | 2.4GHz Wi-Fi + Bluetooth 5.0 |
| USB | 1 × USB Port (TYPE-C Connector) |
| GPIO Interface | 2.54mm pitch 2×20 Expansion IO Interface |
| Display | I2C OLED (Optional) |
| Buttons | 1 x RESET Button + 1 x BOOT Button |
| Power Input | 5V/500mA |
| Mounting Holes | 2 × 2mm Positioning Holes |
| Dimensions | 66 × 27 × 15 mm |

## Quick Start

### Example Support

| Example | `[Platformio IDE][espressif32-v6.5.0]`<br />`[Arduino IDE][esp32_v2.0.14]` | Description | Picture |
| ------  | ------ | ------ | ------ | 
| [DMIC_ReadData](https://github.com/Xinyuan-LilyGO/T3-S3-MVSRBoard/blob/main/examples/DMIC_ReadData) |  <p align="center">![alt text][supported] | | |
| [DMIC_SD](https://github.com/Xinyuan-LilyGO/T3-S3-MVSRBoard/blob/main/examples/DMIC_SD) |  <p align="center">![alt text][supported] | | |
| [GFX](https://github.com/Xinyuan-LilyGO/T3-S3-MVSRBoard/blob/main/examples/GFX) |  <p align="center">![alt text][supported] | | |
| [IIC_Scan_2](https://github.com/Xinyuan-LilyGO/T3-S3-MVSRBoard/blob/main/examples/IIC_Scan_2) |  <p align="center">![alt text][supported] | | |
| [Original_Test](https://github.com/Xinyuan-LilyGO/T3-S3-MVSRBoard/blob/main/examples/Original_Test) |  <p align="center">![alt text][supported] | Factory Program | |
| [PCF85063](https://github.com/Xinyuan-LilyGO/T3-S3-MVSRBoard/blob/main/examples/PCF85063) |  <p align="center">![alt text][supported] | | |
| [PCF85063_Scheduled_INT](https://github.com/Xinyuan-LilyGO/T3-S3-MVSRBoard/blob/main/examples/PCF85063_Scheduled_INT) |  <p align="center">![alt text][supported] | | |
| [PCF85063_Timer_INT](https://github.com/Xinyuan-LilyGO/T3-S3-MVSRBoard/blob/main/examples/PCF85063_Timer_INT) |  <p align="center">![alt text][supported] | | |
| [SD](https://github.com/Xinyuan-LilyGO/T3-S3-MVSRBoard/blob/main/examples/SD) |  <p align="center">![alt text][supported] | | |
| [SD_Music](https://github.com/Xinyuan-LilyGO/T3-S3-MVSRBoard/blob/main/examples/SD_Music) |  <p align="center">![alt text][supported] | | |
| [Sleep_Wake_Up](https://github.com/Xinyuan-LilyGO/T3-S3-MVSRBoard/blob/main/examples/Sleep_Wake_Up) |  <p align="center">![alt text][supported] | | |
| [SX126x_PingPong](https://github.com/Xinyuan-LilyGO/T3-S3-MVSRBoard/blob/main/examples/SX126x_PingPong) |  <p align="center">![alt text][supported] | | |
| [SX126x_PingPong](https://github.com/Xinyuan-LilyGO/T3-S3-MVSRBoard/blob/main/examples/SX126x_PingPong_2) |  <p align="center">![alt text][supported] | | |
| [SX126x_Walkie_Talkie](https://github.com/Xinyuan-LilyGO/T3-S3-MVSRBoard/blob/main/examples/SX126x_Walkie_Talkie) |  <p align="center">![alt text][supported] | | |
| [SX127x_PingPong](https://github.com/Xinyuan-LilyGO/T3-S3-MVSRBoard/blob/main/examples/SX127x_PingPong) |  <p align="center">![alt text][supported] | | |
| [SX127x_PingPong_2](https://github.com/Xinyuan-LilyGO/T3-S3-MVSRBoard/blob/main/examples/SX127x_PingPong_2) |  <p align="center">![alt text][supported] | | |
| [SX128x_PingPong_2](https://github.com/Xinyuan-LilyGO/T3-S3-MVSRBoard/blob/main/examples/SX128x_PingPong_2) |  <p align="center">![alt text][supported] | | |
| [Vibration_Motor](https://github.com/Xinyuan-LilyGO/T3-S3-MVSRBoard/blob/main/examples/Vibration_Motor) |  <p align="center">![alt text][supported] | | |
| [Voice_Codec2_Speaker](https://github.com/Xinyuan-LilyGO/T3-S3-MVSRBoard/blob/main/examples/Voice_Codec2_Speaker) |  <p align="center">![alt text][supported] | | |
| [Voice_Speaker](https://github.com/Xinyuan-LilyGO/T3-S3-MVSRBoard/blob/main/examples/Voice_Speaker) |  <p align="center">![alt text][supported] | | |
| [Wifi_Music](https://github.com/Xinyuan-LilyGO/T3-S3-MVSRBoard/blob/main/examples/Wifi_Music) |  <p align="center">![alt text][supported] | | |

[supported]: https://img.shields.io/badge/-supported-green "example"

| Firmware | Description | Picture |
| ------  | ------  | ------ |
| [Original_Test(V1.0)](https://github.com/Xinyuan-LilyGO/T3-S3-MVSRBoard/blob/main/firmware/T3-S3-MVSRBoard_V1.0/) | Factory Program |  |
| [Original_Test(V1.1)](https://github.com/Xinyuan-LilyGO/T3-S3-MVSRBoard/blob/main/firmware/T3-S3-MVSRBoard_V1.1/) | Factory Program |  |


### PlatformIO
1. Install [Visual Studio Code](https://code.visualstudio.com/Download), choose the installation according to your system type.
2. Open the "Extensions" in the Visual Studio Code sidebar (or use <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>X</kbd> to open extensions), search for the "PlatformIO IDE" extension and download it.
3. During the extension installation, you can go to GitHub to download the code. You can download the main branch code by clicking the green "<> Code" button, or download the "Releases" version from the sidebar.
4. After the extension installation is complete, open the sidebar's Explorer (or use <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>E</kbd> to open it), click "Open Folder", find the recently downloaded project code folder (the entire folder), and click "Add". Now the project files are added to your workspace.
5. Open the "platformio.ini" file in the project folder (PlatformIO will automatically open the "platformio.ini" for the corresponding folder), under the "[platformio]" section, uncomment to select the example program you want to flash (headed by "default_envs = xxx"), then click the "<kbd>√</kbd>" at the bottom left to compile. If the compilation is successful, connect the microcontroller to your computer, and click the "<kbd>→</kbd>" at the bottom left to flash.

### Arduino
1. Install [Arduino IDE](https://www.arduino.cc/en/software), choose the installation according to your system type.
2. Open the "example" directory in the project folder, select the example project folder, and open the file ending with ".ino" to open the Arduino IDE project workspace.
3. Open the "Tools" menu in the top right corner -> Select "Board" -> "Board Manager", find or search for "esp32", and download the board files by "Espressif Systems". Then return to the "Board" menu and select the "ESP32S3 Dev Module" board.
4. Open the menu "File" -> "Preferences", find the "Sketchbook location" field, and copy all library files along with their folders from the "libraries" folder in the project directory to the "libraries" folder in this location.
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
7. Click the "<kbd>√</kbd>" in the top right corner to compile. If the compilation is successful, connect the microcontroller to your computer, and click the "<kbd>→</kbd>" in the top right corner to flash.

### Development Platforms
1. [Micropython](https://micropython.org/)
2. [Arduino IDE](https://www.arduino.cc/en/software)
3. [Platform IO](https://platformio.org/)
4. [VS Code](https://code.visualstudio.com/)

## Pin Overview

| Speaker Pins  | ESP32S3 Pins|
| :------------------: | :------------------:|
| BCLK         | IO40       |
| LRCLK         | IO41       |
| DATA         | IO39       |
| SD_MODE         | IO38       |

| Vibration Motor Pins  | ESP32S3 Pins|
| :------------------: | :------------------:|
| DATA         | IO46       |

| RTC Pins  | ESP32S3 Pins|
| :------------------: | :------------------:|
| SDA         | IO42       |
| SCL         | IO45       |
| INT         | IO16       |

| SX126x Pins  | ESP32S3 Pins|
| :------------------: | :------------------:|
| CS         | IO7       |
| RST         | IO8       |
| SCLK         | IO5       |
| MOSI         | IO6       |
| MISO         | IO3       |
| DIO1         | IO33       |
| BUSY         | IO34       |

| SX127x Pins  | ESP32S3 Pins|
| :------------------: | :------------------:|
| CS         | IO7       |
| RST         | IO8       |
| SCLK         | IO5       |
| MOSI         | IO6       |
| MISO         | IO3       |
| DIO0         | IO9       |
| DIO1         | IO33       |
| DIO2         | IO34       |
| DIO3         | IO21       |
| DIO4         | IO10       |
| DIO5         | IO36       |

| SX128x Pins  | ESP32S3 Pins|
| :------------------: | :------------------:|
| CS         | IO7       |
| RST         | IO8       |
| SCLK         | IO5       |
| MOSI         | IO6       |
| MISO         | IO3       |
| DIO1         | IO9       |
| BUSY         | IO36       |
| TX         | IO10       |
| RX         | IO21       |

>T3-S3-MVSRBoard_V1.0 Version

| Microphone Pins  | ESP32S3 Pins|
| :------------------: | :------------------:|
| BCLK         | IO47        |
| WS         | IO15       |
| DATA         | IO48        |
| EN         | IO35       |

>T3-S3-MVSRBoard_V1.1 Version

| Microphone Pins  | ESP32S3 Pins|
| :------------------: | :------------------:|
| LRCLK         | IO15       |
| DATA         | IO48       |
| EN         | IO35       |


## Related Tests

### Power Consumption
| Firmware | Program| Description | Picture |
| ------  | ------  | ------ | ------ | 
| [Sleep_Wake_Up](https://github.com/Xinyuan-LilyGO/T3-S3-MVSRBoard/blob/main/firmware/[T3-S3-MVSRBoard_V1.0][Sleep_Wake_Up][SX1262]_firmware_V1.0.0_202411041104.bin) | [Sleep_Wake_Up](https://github.com/Xinyuan-LilyGO/T3-S3-MVSRBoard/blob/main/examples/Sleep_Wake_Up) | Static Current: 2.77 µA For more information, please check [Power Consumption Test Log](https://github.com/Xinyuan-LilyGO/T3-S3-MVSRBoard/blob/main/relevant_test/PowerConsumptionTestLog_[T3-S3-MVSRBoard_V1.0]_20241104.pdf) | |

### Audio Performance
| Parameter | Specification | 
| :------: | :--------: | 
| Sample Rate | 8-48 kHz | 
| Bit Depth | 16-bit | 
| Signal-to-Noise Ratio | >90 dB | 

## FAQ

* **Q. How to adjust external antenna resistance?**  
  A. Refer to the arrow in the image below to replace the resistor to adjust the external antenna resistance:
  <img src="./assets/T3-S3_MVSRBoard04.jpg" alt="Antenna Resistance Adjustment" width=60%>

* **Q. What's the difference between SX1262 and SX1280 versions?**  
  A. SX1262 supports 868/915MHz frequency bands and uses FSK modulation; SX1280 supports 2.4GHz frequency band and uses LoRa modulation.

* **Q. Which audio formats are supported?**  
  A. Supports common audio formats like WAV, MP3, etc., and can be extended with software decoding libraries.

* **Q. What is the LoRa voice communication range?**  
  A. Under ideal conditions, voice communication range can reach several kilometers, depending on environmental factors and antenna configuration.

* **Q. Does it support real-time voice transmission?**  
  A. Supports real-time voice acquisition, compression, and LoRa transmission, enabling voice intercom functionality.

## Projects
* [T3-S3-MVSRBoard_V1.0](https://github.com/Xinyuan-LilyGO/T3-S3-MVSRBoard/blob/main/project/T3-S3-MVSRBoard_V1.0.pdf)

## Resources
* [MAX98357A Datasheet](https://github.com/Xinyuan-LilyGO/T3-S3-MVSRBoard/blob/main/information/MAX98357AETE+T.pdf)
* [MP34DT05-A Datasheet](https://github.com/Xinyuan-LilyGO/T3-S3-MVSRBoard/blob/main/information/mp34dt05-a.pdf)
* [PCF85063ATL Datasheet](https://github.com/Xinyuan-LilyGO/T3-S3-MVSRBoard/blob/main/information/PCF85063ATL-1,118.pdf)
* [MSM261S4030H0R Datasheet](https://github.com/Xinyuan-LilyGO/T3-S3-MVSRBoard/blob/main/information/MEMSensing-MSM261S4030H0R.pdf)
* [ESP32-S3 Datasheet](https://www.espressif.com/sites/default/files/documentation/esp32-s3_datasheet_en.pdf)

## Dependent Libraries
* [Arduino_DriveBus](https://github.com/Xk-w/Arduino_DriveBus)
* [Audio Libraries](https://github.com/earlephilhower/ESP8266Audio)
* [LoRa Radio Libraries](https://github.com/jgromes/RadioLib)