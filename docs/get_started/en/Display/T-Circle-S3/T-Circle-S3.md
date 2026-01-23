---
title: LILYGO T-Circle S3
show_source: false
tags: T-Circle-S3, LCD, ESP32-S3, Audio
---

<div style="width:100%; display:flex;justify-content: center;">

![T-Circle](./assets/T-Circle-S3-1.jpg)

</div>

<div style="padding: 1em 0 0 0; display: flex; justify-content: center">
    <a target="_blank" style="margin: 1em;color: white; font-size: 0.9em; border-radius: 0.3em; padding: 0.5em 2em; background-color:rgb(103, 175, 8)" href="https://lilygo.cc/products/t-circle-s3">Official Store</a>
</div>

> **Note**: T-Circle S3 is the ESP32-S3 version. Click here to switch to the ESP32 version [T-Circle](https://wiki.lilygo.cc/get_started/zh/LCD_OLED/T-Circle/T-Circle.html).

## Version History:
| Version | Update Date | Update Description |
| :-----: | :---------: | :---------------- |
| T-Circle-S3_V1.0 | 2024-01-01 | Initial Version |

## Purchase Link

| Product | SOC | FLASH | PSRAM | Link |
| :-----: | :--: | :---: | :---: | :--: |
| T-Circle S3 | ESP32-S3 | 16M | 8M (Octal SPI) | [LILYGO Mall](https://lilygo.cc/products/t-circle-s3) |

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

LILYGO T-Circle S3 is a versatile development board based on the ESP32-S3 wireless microcontroller, integrating a 0.75-inch circular LCD touch screen (160x160 pixels), MAX98357A digital audio amplifier, MSM261 audio acquisition module (presumably microphone), APA102 LED control interface, and QWIIC expansion interface. Its core configuration includes 16MB flash memory, 8MB Octal SPI PSRAM, supports Wi-Fi/Bluetooth communication, and features a capacitive touch screen controller CST816D for interactive operation. Through precise pin mapping, it integrates graphic display, audio input/output, touch interaction, and high-speed storage functions, suitable for IoT terminals, smart wearable devices, or prototype development of embedded audio visualization projects.

## Preview

### Physical Images

<div style="width:100%; display:flex;justify-content: center;">

![T-Circle-S3](./assets/T-Circle-S3-2.jpg)
![T-Circle-S3](./assets/T-Circle-S3-3.jpg)

</div>

### Pinout Diagram

<img src="./assets/T-Circle-S3-en.jpg" alt="summary" width=100%>

## Modules

### 1. MCU

* Chip: ESP32-S3-R8
* PSRAM: 8M (Octal SPI)
* FLASH: 16M
* Related Information:
    >[Espressif Official ESP32-S3 Datasheet](https://www.espressif.com.cn/sites/default/files/documentation/esp32-s3_datasheet_en.pdf)

### 2. Screen

* Size: 0.75-inch LCD circular screen
* Resolution: 160x160px
* Type: TFT, LCD
* Driver IC: GC9D01N
* Bus Protocol: Standard SPI
* Related Information:
    >[GC9D01N](./information/GC9D01N.pdf) <br />
    >[TFT_eSPI-2.5.43](https://github.com/Bodmer/TFT_eSPI)
* Dependent Libraries:
    >[Arduino_GFX-1.3.7](https://github.com/moononournation/Arduino_GFX)

### 3. Touch

* Chip: CST816D
* Bus Protocol: I2C
* Related Information:
    >[GC9D01N](./information/GC9D01N.pdf)
* Dependent Libraries:
    >[Arduino_DriveBus-1.1.16]()

### 4. Speaker

* Driver IC: MAX98357A
* Bus Protocol: I2S
* Related Information:
    >[MAX98357A](./information/MAX98357AETE+T.pdf)
* Dependent Libraries:
    >[Arduino_DriveBus-1.1.16]() <br />
    >[ESP32-audioI2S-3.0.6](https://github.com/schreibfaul1/ESP32-audioI2S)

### 5. Microphone

> #### T-Circle-S3_V1.0 Version
> * Chip: MSM261S4030H0R
> * Bus Protocol: I2S
> * Related Information:
>    >[MSM261S4030H0R](./information/MSM261S4030H0R.pdf)
> * Dependent Libraries:
>     >[Arduino_DriveBus-1.1.16]()
>     >[DFRobot_MSM261](https://github.com/DFRobot/DFrobot_MSM261)

> #### T-Circle-S3_V1.1 Version
> * Chip: MP34DT05-A
> * Bus Protocol: PDM
> * Related Information:
>    >[MP34DT05-A](./information/mp34dt05-a.pdf)
> * Dependent Libraries:
>    >[Arduino_DriveBus-1.1.16]()

### 6. LED Lights

* Chip: APA102
* Related Information:
    >[APA102_2020_LED](./information/APA102_2020_LED.pdf)
* Dependent Libraries:
    >[FastLED-3.6.0](https://github.com/FastLED/FastLED)

### Overview
<img src="./assets/T-Circle-S3-en.jpg" alt="summary" width=100%>

| Component | Description |
| :--: | :--: |
| MCU | ESP32-S3-R8 Dual-core LX7 microprocessor |
| FLASH| 16MB |
| PSRAM | 8MB (Octal SPI)|
| Screen | 0.75-inch GC9D01N LCD (160x160) |
| Touch | CST816D Capacitive Touch Screen |
| Speaker | I2S driven MAX98357A |
| Microphone | PDM driven MP34DT05-A |
| LED | APA102 |
| Wireless | 2.4 GHz Wi-Fi & Bluetooth 5 (LE) |
| USB | 1 × USB Port and OTG (TYPE-C Interface) |
| IO Interface | 2 × 4 pin expansion IO interface |
| Buttons | 1 x RESET button + 1 x BOOT button |
| Power | 5V/500mA |
| Mounting Holes | 2 × M1.6*2 |
| Dimensions | **32*17mm** |

## Quick Start

### Example Support

| Example | `[Platformio IDE][espressif32-v6.5.0]`<br />`[Arduino IDE][esp32_v2.0.14]` | `[ESP-IDF][esp-idf-V4.4.8]`| `[ESP-IDF][esp-idf-V5.3.2]`| Description |
| :-----: | :-----------------------------------------------------------------------: | :----------------------: | :----------------------: | :---------- |
| [Animated_Eyes_1](https://github.com/Xinyuan-LilyGO/T-Circle-S3/blob/arduino-esp32-libs_V2.0.14/examples/Animated_Eyes_1) | <p align="center">![alt text][supported] |  |  |  |
| [APA102_Blink](https://github.com/Xinyuan-LilyGO/T-Circle-S3/blob/arduino-esp32-libs_V2.0.14/examples/APA102_Blink) | <p align="center">![alt text][supported] |  |  |  |
| [CST816D](https://github.com/Xinyuan-LilyGO/T-Circle-S3/blob/arduino-esp32-libs_V2.0.14/examples/CST816D) | <p align="center">![alt text][supported] |  |  |  |
| [DMIC_ReadData](https://github.com/Xinyuan-LilyGO/T-Circle-S3/blob/arduino-esp32-libs_V2.0.14/examples/DMIC_ReadData) | <p align="center">![alt text][supported] |  |  |  |
| [GFX](https://github.com/Xinyuan-LilyGO/T-Circle-S3/blob/arduino-esp32-libs_V2.0.14/examples/GFX) | <p align="center">![alt text][supported] |  |  |  |
| [GFX_CST816D_Image](https://github.com/Xinyuan-LilyGO/T-Circle-S3/blob/arduino-esp32-libs_V2.0.14/examples/GFX_CST816D_Image) | <p align="center">![alt text][supported] |  |  |  |
| [GFX_Wifi_AP_Contract](https://github.com/Xinyuan-LilyGO/T-Circle-S3/blob/arduino-esp32-libs_V2.0.14/examples/GFX_Wifi_AP_Contract) | <p align="center">![alt text][supported] |  |  |  |
| [GFX_Wifi_STA_Contract](https://github.com/Xinyuan-LilyGO/T-Circle-S3/blob/arduino-esp32-libs_V2.0.14/examples/GFX_Wifi_STA_Contract) | <p align="center">![alt text][supported] |  |  |  |
| [IIC_Scan_2](https://github.com/Xinyuan-LilyGO/T-Circle-S3/blob/arduino-esp32-libs_V2.0.14/examples/IIC_Scan_2) | <p align="center">![alt text][supported] |  |  |  |
| [Original_Test](https://github.com/Xinyuan-LilyGO/T-Circle-S3/blob/arduino-esp32-libs_V2.0.14/examples/Original_Test) | <p align="center">![alt text][supported] |  |  | Factory initial test file |
| [TFT](https://github.com/Xinyuan-LilyGO/T-Circle-S3/blob/arduino-esp32-libs_V2.0.14/examples/TFT) | <p align="center">![alt text][supported] |  |  |  |
| [Voice_Speaker](https://github.com/Xinyuan-LilyGO/T-Circle-S3/blob/arduino-esp32-libs_V2.0.14/examples/Voice_Speaker) | <p align="center">![alt text][supported] |  |  |  |
| [Voice_Speaker_APA102](https://github.com/Xinyuan-LilyGO/T-Circle-S3/blob/arduino-esp32-libs_V2.0.14/examples/Voice_Speaker_APA102) | <p align="center">![alt text][supported] |  |  |  |
| [Wifi_Music](https://github.com/Xinyuan-LilyGO/T-Circle-S3/blob/arduino-esp32-libs_V2.0.14/examples/Wifi_Music) | <p align="center">![alt text][supported] |  |  |  |
| [lilygo_s3_apps](https://github.com/Xinyuan-LilyGO/T-Circle-S3/blob/arduino-esp32-libs_V2.0.14/examples/lilygo_s3_apps) |  | <p align="center">![alt text][supported] |  | This example is a voice control example provided by Grovety. Original link: <br /> [Grovety lilygo_s3_apps](https://github.com/Grovety/lilygo_s3_apps)|
| [XiaoZhi_AI_Chatbot](https://github.com/78/xiaozhi-esp32?tab=readme-ov-file) |  |  | <p align="center">![alt text][supported] | This example is XiaoZhi AI example provided by Xiaoxia |

[supported]: https://img.shields.io/badge/-supported-green "example"

| Firmware | Description | Picture |
| :------: | :---------: | :-----: |
| [Original_Test(T-Circle-S3_V1.0)](https://github.com/Xinyuan-LilyGO/T-Circle-S3/blob/arduino-esp32-libs_V2.0.14/firmware/%5BT-Circle-S3_V1.0%5D%5BOriginal_Test%5D_firmware_V1.0.1.bin) | Factory Program |  |
| [Original_Test(T-Circle-S3_V1.1)](https://github.com/Xinyuan-LilyGO/T-Circle-S3/blob/arduino-esp32-libs_V2.0.14/firmware/%EF%BC%88V1.1%E7%89%88%E6%9C%AC%E4%BF%AE%E6%94%B9%E9%BA%A6%E5%85%8B%E9%A3%8E%E5%9E%8B%E5%8F%B7%EF%BC%89%5BT-Circle-S3_V1.1%5D%5BOriginal_Test%5D_firmware_202502141426.bin) | Factory Program |  |
| [GFX_Wifi_AP_Contract](https://github.com/Xinyuan-LilyGO/T-Circle-S3/blob/arduino-esp32-libs_V2.0.14/firmware/%5BT-Circle-S3_V1.0%5D%5BGFX_Wifi_AP_Contract%5D_firmware_V1.0.0.bin) | Initial Version |  |
| [GFX_Wifi_STA_Contract](https://github.com/Xinyuan-LilyGO/T-Circle-S3/blob/arduino-esp32-libs_V2.0.14/firmware/%5BT-Circle-S3_V1.0%5D%5BGFX_Wifi_STA_Contract%5D_firmware_V1.0.0.bin) | Initial Version |  |
| [lilygo_s3_apps](https://github.com/Xinyuan-LilyGO/T-Circle-S3/blob/arduino-esp32-libs_V2.0.14/firmware/%5BT-Circle-S3_V1.0%5D_%5Blilygo_s3_apps%5D_firmware_V1.0.0.bin) | Initial Version |  |
| [xiaozhi_esp32](https://github.com/Xinyuan-LilyGO/T-Circle-S3/blob/arduino-esp32-libs_V2.0.14/firmware/%5BT-Circle-S3_V1.0%5D%5Bxiaozhi-esp32_V1.0.1%5D_firmware_202501240943.bin) |  |  |

### PlatformIO
1. Install [Visual Studio Code](https://code.visualstudio.com/Download) according to your system.
2. Open the "Extensions" sidebar in Visual Studio Code (or press <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>X</kbd>), search for the "PlatformIO IDE" extension and install it.
3. While the extension is installing, download the project from GitHub. You can click the green "<> Code" button to download the main branch, or download a "Releases" version from the sidebar.
4. After the extension installation is complete, open the Explorer sidebar (or press <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>E</kbd>), click "Open Folder", find the project code you just downloaded (the entire folder), click "Add", and the project files will be added to your workspace.
5. Open the "platformio.ini" file in the project folder (PlatformIO should automatically open it after adding the folder). Under the "[platformio]" section, uncomment the line selecting the example program you want to upload (starting with "default_envs = xxx"). Then click the "<kbd>√</kbd>" at the bottom left to compile. If the compilation is successful, connect the board to your computer and click the "<kbd>→</kbd>" at the bottom left to upload.

### Arduino
1. Install [Arduino IDE](https://www.arduino.cc/en/software) according to your system.
2. Open the "example" directory in the project folder, select the example project folder, and open the file ending with ".ino" to open the Arduino IDE project workspace.
3. Open the "Tools" menu -> "Board" -> "Boards Manager", find or search for "esp32", and install the board files by "Espressif Systems". Then return to the "Board" menu and select the board type under "ESP32 Arduino". The board type to choose is determined by the "board = xxx" header in the "[env]" section of the "platformio.ini" file. If the corresponding board is not available, you need to manually add the board from the "board" directory in the project folder.
4. Open the "[File]" -> "[Preferences]" menu, find the "[Sketchbook location]" field. Copy and paste all library files and folders from the "libraries" directory in the project folder into the "libraries" folder at this location.
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
7. Click the "<kbd>√</kbd>" in the top right corner to compile. If the compilation is successful, connect the board to your computer and click the "<kbd>→</kbd>" to upload.

### Development Platforms
1. [Micropython](https://micropython.org/)
2. [Arduino IDE](https://www.arduino.cc/en/software)
3. [Platform IO](https://platformio.org/)

## Pin Overview

| LCD Screen Pins | ESP32S3 Pins |
| :-------------: | :----------: |
| MOSI | IO17 |
| DC | IO16 |
| SCLK | IO15 |
| CS | IO13 |
| BL | IO18 |

| Touch Chip Pins | ESP32S3 Pins |
| :-------------: | :----------: |
| INT | IO12 |
| SDA | IO11 |
| SCL | IO14 |

| Speaker Pins | ESP32S3 Pins |
| :----------: | :----------: |
| BCLK | IO5 |
| LRCLK | IO4 |
| SD_MODE | IO45 |
| DATA | IO6 |

| LED Pins | ESP32S3 Pins |
| :------: | :----------: |
| CLOCK | IO39 |
| DATA | IO38 |

> T-Circle-S3_V1.0 Version

| Microphone Pins | ESP32S3 Pins |
| :-------------: | :----------: |
| BCLK | IO7 |
| WS | IO9 |
| DATA | IO8 |

> T-Circle-S3_V1.1 Version

| Microphone Pins | ESP32S3 Pins |
| :-------------: | :----------: |
| LRCLK | IO9 |
| DATA | IO8 |

## Related Tests

*(Power consumption and other test data to be added)*

## FAQ

* **Q. I still don't know how to set up the programming environment after reading the above tutorial. What should I do?**
  A. If you still don't understand how to set up the environment after reading the above tutorial, you can refer to the [LilyGo-Document](https://github.com/Xinyuan-LilyGO/LilyGo-Document) documentation for setup instructions.

<br />

* **Q. Why does Arduino IDE prompt me to upgrade library files when I open it? Should I upgrade or not?**
  A. Choose not to upgrade library files. Different versions of library files may not be compatible with each other, so upgrading is not recommended.

<br />

* **Q. Why is there no serial data output from the "Uart" interface on my board? Is it broken?**
  A. Because the project file is configured by default to use the USB interface as Uart0 serial output for debugging, and the "Uart" interface is connected to Uart0, it won't output any data without configuration.<br />PlatformIO users: Open the project file "platformio.ini", change the option "-DARDUINO_USB_CDC_ON_BOOT=true" under "build_flags = xxx" to "-DARDUINO_USB_CDC_ON_BOOT=false" to use the external "Uart" interface normally.<br />Arduino users: Open the "Tools" menu, select USB CDC On Boot: "Disabled" to use the external "Uart" interface normally.

<br />

* **Q. Why does my board keep failing to upload programs?**
  A. Please hold down the "BOOT-0" button and try uploading again.

## Projects
* [T-Circle-S3_V1.0](https://github.com/Xinyuan-LilyGO/T-Circle-S3/blob/arduino-esp32-libs_V2.0.14/project/T-Circle-S3_V1.0.pdf)

## Resources
* [GC9D01N](https://github.com/Xinyuan-LilyGO/T-Circle-S3/blob/arduino-esp32-libs_V2.0.14/information/GC9D01N.pdf)
* [MAX98357A](https://github.com/Xinyuan-LilyGO/T-Circle-S3/blob/arduino-esp32-libs_V2.0.14/information/MAX98357AETE+T.pdf)
* [MSM261S4030H0R](https://github.com/Xinyuan-LilyGO/T-Circle-S3/blob/arduino-esp32-libs_V2.0.14/information/MSM261S4030H0R.pdf)
* [MP34DT05-A](https://github.com/Xinyuan-LilyGO/T-Circle-S3/blob/arduino-esp32-libs_V2.0.14/information/mp34dt05-a.pdf)

## Dependent Libraries
* [TFT_eSPI-2.5.43](https://github.com/Bodmer/TFT_eSPI)
* [Arduino_DriveBus-1.1.16](https://github.com/Xk-w/Arduino_DriveBus)
* [Arduino_GFX-1.3.7](https://github.com/moononournation/Arduino_GFX)
* [ESP32-audioI2S-3.0.6](https://github.com/schreibfaul1/ESP32-audioI2S)
* [DFRobot_MSM261](https://github.com/DFRobot/DFrobot_MSM261)
* [FastLED-3.6.0](https://github.com/FastLED/FastLED)