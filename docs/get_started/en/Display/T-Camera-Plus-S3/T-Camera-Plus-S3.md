---
title: LILYGO T-Camera Plus S3
show_source: false
tags: ESP32-S3, Camera, TFT, Audio, Vision
---

<div style="width:100%; display:flex;justify-content: center;">

![T-CameraPlus-S3](./assets/T-CameraPlus-S3-1.jpg)

</div>

<div style="padding: 1em 0 0 0; display: flex; justify-content: center">
    <a target="_blank" style="margin: 1em;color: white; font-size: 0.9em; border-radius: 0.3em; padding: 0.5em 2em; background-color:rgb(103, 175, 8)" href="https://lilygo.cc/products/t-camera-plus-s3">Official Store</a>
</div>

## Version History:
| Version | Update Date | Update Description |
| :------: | :---------: | :----------------: |
| T-CameraPlus-S3_V1.0-V1.1 | 2023-10-23 | Initial Version |
| T-CameraPlus-S3_V1.2 | 2025-04-17 | Improved WiFi performance, updated microphone model, modified pin numbers, optimized PCB routing |

## Purchase Link

| Product | SOC | FLASH | PSRAM | Link |
| :-----: | :-: | :---: | :---: | :--: |
| T-CameraPlus-S3_V1.2 | ESP32S3 | 16M | 8M | [LILYGO Mall](https://www.lilygo.cc/products/t-camera-plus-s3?_pos=2&_sid=aa4cbdb34&_ss=r) |

## Table of Contents
- [Description](#description)
- [Preview](#preview)
- [Modules](#modules)
- [Quick Start](#quick-start)
- [Pin Overview](#pin-overview)
- [Related Tests](#related-tests)
- [FAQ](#faq)
- [Projects](#projects)

## Description

The T-CameraPlus-S3 is a versatile smart hardware development board based on the ESP32-S3 main control chip. It integrates a high-performance camera module (OV2640/OV5640 optional), an LCD display (with touch), and a MAX98357A audio chip. Equipped with 16MB Flash and 8MB PSRAM, it can efficiently process image, video, and audio data. It supports dual-mode audio input and output (microphone and digital audio interface), features TF card expansion storage, QWIIC interface (compatible with I²C device expansion), and a battery management module. The hardware design is compatible with various sensors and peripherals, enabling collaborative work between the camera, display, and audio modules through protocols like SPI and I²C, meeting developers' flexible needs in AIoT, edge computing, and other fields. It comes pre-installed with an LVGL-based UI system supporting file management, music playback, recording, camera projection, and other functions.

## Preview

### Physical Images

<div style="width:100%; display:flex;justify-content: center;">

![T-CameraPlus-S3](./assets/T-CameraPlus-S3-2.jpg)

</div>

### Pinout Diagram

<img src="./assets/T-CameraPlus-S3-pin-en.jpg" alt="summary" width=100%>

## Modules

### MCU

* Chip: ESP32-S3
* PSRAM: 8M
* FLASH: 16M
* Related Information:
    >[Espressif](https://www.espressif.com/en/support/documents/technical-documents)

### Screen

* Model: fp-133h01d
* Size: 1.3-inch
* Resolution: 240x240px
* Type: TFT
* Driver IC: ST7789V
* Bus Protocol: Standard SPI
* Dependent Libraries:
    >[Arduino_GFX-1.3.7](https://github.com/moononournation/Arduino_GFX) <br />
    >[lvgl-8.3.5](https://github.com/lvgl/lvgl) <br />
    >[JPEGDEC-1.2.8](https://github.com/bitbank2/JPEGDEC) <br />
    >[MiniTV](https://github.com/moononournation/MiniTV) <br />
    >[TFT_eSPI](https://github.com/Bodmer/TFT_eSPI)

### Touch

* Chip: CST816S
* Bus Protocol: I2C
* Dependent Libraries:
    >[cst816t-1.5.0](https://github.com/koendv/cst816t) <br />
    >[Arduino_DriveBus-1.1.16]()

### Speaker

* Chip: MAX98357A
* Bus Protocol: I2S
* Other Notes: Default configuration is Left/2 + Right/2 channels, 9dB gain. To change configuration, modify resistors according to instructions on the T-CameraPlus-S3 schematic. Recommended speaker specs: max rated power 3.2W, impedance around 4 ohms, below 8 ohms.
* Related Information:
    >[MAX98357A](./information/MAX98357AETE+T.pdf)
* Dependent Libraries:
    >[arduino-libhelix-0.8.1](https://github.com/pschatzmann/arduino-libhelix) <br />
    >[ESP32-audioI2S-3.0.6](https://github.com/schreibfaul1/ESP32-audioI2S)

### Microphone

> #### T-CameraPlus-S3_V1.0-V1.1 Version
> * Chip: MSM261S4030H0R
> * Bus Protocol: I2S
> * Other Notes: Default configuration is right channel. To change configuration, modify resistors according to instructions on the T-CameraPlus-S3 schematic.
> * Related Information:
>     >[MSM261S4030H0R](information/MSM261S4030H0R.pdf)
> * Dependent Libraries:
>     >[DFRobot_MSM261](https://github.com/DFRobot/DFrobot_MSM261) <br />
>     >[Arduino_DriveBus-1.1.16]()

> #### T-CameraPlus-S3_V1.2 Version
> * Chip: MP34DT05-A
> * Bus Protocol: PDM
> * Other Notes: Default configuration is right channel. To change configuration, modify resistors according to instructions on the T-CameraPlus-S3 schematic.
> * Related Information:
>    >[MP34DT05-A](./information/mp34dt05-a.pdf)
> * Dependent Libraries:
>    >[Arduino_DriveBus-1.1.16]()

### Camera
* Camera Model: OV2640
* IR Filter Driver: AP1511B
* Related Information:
    >[OV2640_Hardware_Application_V1.04](information/OV2640_Hardware_Application_V1.04.pdf) <br />
    >[OV2640_Software_Application_V1.03](information/OV2640_Software_Application_V1.03.pdf)

### Power Management IC
* Chip: SY6970
* Related Information:
    >[AN_SY6970 ](information/AN_SY6970.pdf) <br />
    >[EVB_SY6970](information/EVB_SY6970.pdf)
* Dependent Libraries:
    >[XPowersLib-0.2.1](https://github.com/lewisxhe/XPowersLib) <br />
    >[Arduino_DriveBus-1.1.16]()

### Overview
<img src="./assets/T-CameraPlus-S3-info-en.jpg" alt="summary" width=100%>

| Component | Description |
| :-------: | :---------: |
| MCU | ESP32-S3R8 Dual-core Xtensa LX7 CPU |
| FLASH| 16MB |
| PSRAM | 8MB|
| Screen | 1.3-inch ST7789V TFT LCD (240×240) |
| Touch | CST816S Capacitive Touch Screen |
| Camera | OV2640/OV5640 (Optional) |
| Storage | TF Card |
| Audio Output | MAX98357A Speaker |
| Audio Input | MP34DT05-A Microphone |
| Power Management | AXPM65611 + BQ25896 + SY6970 |
| Wireless | 2.4 GHz Wi-Fi & Bluetooth 5 (LE) |
| USB | 1 × USB Port and OTG (TYPE-C Interface) |
| IO Interface | 2×13 Dual-row Expansion Interface |
| Expansion Interfaces | TF Card + 2×STEMMA QT/QWIIC + JST-GH 1.25MM |
| Buttons | RESET + BOOT + IO17 Function Button |
| Mounting Holes | 4 × 2mm Positioning Holes |
| Dimensions | **60×32×12mm** |

## Quick Start

### Example Support

| Example | `[Platformio IDE][espressif32-v6.5.0]`<br />`[Arduino IDE][esp32_v2.0.14]`| `[vscode][esp-idf-v5.4.0]`| Description | Picture |
| :-----: | :-----------------------------------------------------------------------: | :----------------------: | :----------: | :-----: |
| [Wifi_Scan](./examples/Wifi_Scan) | <p align="center">![alt text][supported] |  |  |  |
| [Lvgl_UI](./examples/Lvgl_UI) | <p align="center">![alt text][supported] |  | Factory Firmware |  |
| [Wifi_Music](./examples/Wifi_Music) | <p align="center">![alt text][supported] |  |  |  |
| [SD_Music](./examples/SD_Music) | <p align="center">![alt text][supported] |  |  |  |
| [DMIC_ReadData](./examples/DMIC_ReadData) | <p align="center">![alt text][supported] |  |  |  |
| [SD_DMIC](./examples/SD_DMIC) | <p align="center">![alt text][supported] |  |  |  |
| [TFT](./examples/TFT) | <p align="center">![alt text][supported] |  |  |  |
| [IIC_Scan_2](./examples/IIC_Scan_2) | <p align="center">![alt text][supported] |  |  |  |
| [Camera_WebServer](./examples/Camera_WebServer) | <p align="center">![alt text][supported] |  |  |  |
| [CST816D](./examples/CST816D) | <p align="center">![alt text][supported] |  |  |  |
| [GFX_Test](./examples/GFX_Test) | <p align="center">![alt text][supported] |  |  |  |
| [SY6970](./examples/SY6970) | <p align="center">![alt text][supported] |  |  |  |
| [SD_MJPEG](./examples/SD_MJPEG) | <p align="center">![alt text][supported] |  |  |  |
| [Camera_Screen](./examples/Camera_Screen) | <p align="center">![alt text][supported] |  |  |  |
| [Camera_Screen_OV5640_Auto_Focus](./examples/Camera_Screen_OV5640_Auto_Focus) | <p align="center">![alt text][supported] |  |  |  |
| [Camera_WebServer_OV5640_Auto_Focus](./examples/Camera_WebServer_OV5640_Auto_Focus) | <p align="center">![alt text][supported] |  |  |  |
| [Voice_Speaker](./examples/Voice_Speaker) | <p align="center">![alt text][supported] |  |  |  |
| [iic_scan](./main/examples/iic_scan) |  | <p align="center">![alt text][supported] |  |  |
| [afe](./main/examples/afe) |  | <p align="center">![alt text][supported] |  |  |

[supported]: https://img.shields.io/badge/-supported-green "example"

| Firmware | Description | Picture |
| :------: | :---------: | :-----: |
| [Lvgl_UI(V1.0-V1.1)](./firmware/[T-CameraPlus-S3_V1.0-V1.1][Lvgl_UI]_firmware_202406142310.bin) |  |  |
| [Lvgl_UI(V1.2)](./firmware/[T-CameraPlus-S3_V1.2][Lvgl_UI]_firmware_202504081446.bin) |  |  |

### PlatformIO
1.  Install [Visual Studio Code](https://code.visualstudio.com/Download) according to your system.
2.  Open the "Extensions" sidebar in Visual Studio Code (or press <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>X</kbd>), search for the "PlatformIO IDE" extension and install it.
3.  While the extension is installing, download the project from GitHub. You can click the green "<> Code" button to download the main branch, or download a "Releases" version from the sidebar.
4.  After the extension installation is complete, open the Explorer sidebar (or press <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>E</kbd>), click "Open Folder", find the project code you just downloaded (the entire folder), click "Add", and the project files will be added to your workspace.
5.  Open the "platformio.ini" file in the project folder (PlatformIO should automatically open it after adding the folder). Under the "[platformio]" section, uncomment the line selecting the example program you want to upload (starting with "default_envs = xxx"). Then click the "<kbd>√</kbd>" at the bottom left to compile. If the compilation is successful, connect the board to your computer and click the "<kbd>→</kbd>" at the bottom left to upload.

### Arduino
1.  Install [Arduino IDE](https://www.arduino.cc/en/software) according to your system.

2.  Open the "example" directory in the project folder, select the example project folder, and open the file ending with ".ino" to open the Arduino IDE project workspace.

3.  Open the "Tools" menu -> "Board" -> "Boards Manager", find or search for "esp32", and install the board files by "Espressif Systems". Then return to the "Board" menu and select the board type under "ESP32 Arduino". The board type to choose is determined by the "board = xxx" header in the "[env]" section of the "platformio.ini" file. If the corresponding board is not available, you need to manually add the board from the "board" directory in the project folder.

4.  Open the "[File]" -> "[Preferences]" menu, find the "[Sketchbook location]" field. Copy and paste all library files and folders from the "libraries" directory in the project folder into the "libraries" folder at this location.

5.  Select the correct settings in the "Tools" menu as shown in the table below.

| Setting | Value |
| :-------------------------------: | :-------------------------------: |
| Board | ESP32S3 Dev Module|
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
| PSRAM | QSPI PSRAM |
| Arduino Runs On | Core 1 |
| Events Run On | Core 1 |

6.  Select the correct port.

7.  Click the "<kbd>√</kbd>" in the top right corner to compile. If the compilation is successful, connect the board to your computer and click the "<kbd>→</kbd>" to upload.

### ESP-IDF Visual Studio Code
1.  Install [Visual Studio Code](https://code.visualstudio.com/Download) according to your system.
2.  Open the "Extensions" sidebar in Visual Studio Code (or press <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>X</kbd>), search for the "ESP-IDF" extension and install it.
3.  While the extension is installing, clone the repository using the git command:

        git clone --recursive https://github.com/Xinyuan-LilyGO/T-CameraPlus-S3.git

    Use "--recursive" during cloning. If you forgot to add it, you need to initialize the submodules later:

        git submodule update --init --recursive

4.  Download and install [ESP-IDF v5.4.1](https://dl.espressif.cn/dl/esp-idf/?idf=4.4), note the installation path. Open the previously installed "ESP-IDF" extension and open "Configure ESP-IDF extension", select the "USE EXISTING SETUP" menu, choose the "Search ESP-IDF in system" option, and correctly configure the previously noted installation paths:
   - **ESP-IDF directory (IDF_PATH):** `Your installation path\Espressif\frameworks\esp-idf-v5.4`
   - **ESP-IDF Tools directory (IDF_TOOLS_PATH):** `Your installation path\Espressif`
     Click "Install" at the bottom right to install the framework.

5.  Click the ESP-IDF extension menu "SDK Configuration Editor" in the Visual Studio Code bottom menu bar. Search for the "Select the example to build" field and select the project you want to compile. Then search for the "Select the camera type" field and select the camera type on your board. Click Save.

6.  Click "Set Espressif device target" in the Visual Studio Code bottom menu bar and select **ESP32S3**. Click "Build Project" in the bottom menu bar and wait for the build to complete. Then click "Select port to use" in the bottom menu bar, followed by "Flash Project" in the bottom menu bar to upload the program.

### Development Platforms
1.  [Micropython](https://micropython.org/)
2.  [Arduino IDE](https://www.arduino.cc/en/software)
3.  [Platform IO](https://platformio.org/)

## Pin Overview

### T-CameraPlus-S3_V1.0-V1.1 Version
  | LCD Pin | ESP32S3 Pin |
  | :----: | :---------: |
  | MOSI | IO35 |
  | SCLK | IO36 |
  | RST | IO33 |
  | BL | IO46 |
  | CS | IO34 |
  | DC | IO45 |

   | I2S Microphone MSM261S4030H0R Pin | ESP32S3 Pin |
   | :-------------------------------: | :---------: |
   | BCLK | IO18 |
   | WS | IO39 |
   | DATA | IO40 |
 
   | Amplifier MAX98357A Pin | ESP32S3 Pin |
   | :------------------------: | :---------: |
   | BCLK | IO41 |
   | LRCLK | IO42 |
   | DATA | IO38 |
 
   | SD Card Pin | ESP32S3 Pin |
   | :---------: | :---------: |
   | CS | IO21 |
   | SCLK | IO36 |
   | MOSI | IO35 |
   | MISO | IO37 |
 
   | Power Chip SY6970 Pin | ESP32S3 Pin |
   | :-------------------: | :---------: |
   | SDA | IO1 |
   | SCL | IO2 |
   | INT | IO47 |
 
   | Camera OV2640 Pin | ESP32S3 Pin |
   | :---------------: | :---------: |
   | RESET | IO3 |
   | XCLK | IO7 |
   | SIDO | IO1 |
   | SIOC | IO2 |
   | D7 | IO6 |
   | D6 | IO8 |
   | D5 | IO9 |
   | D4 | IO11 |
   | D3 | IO13 |
   | D2 | IO15 |
   | D1 | IO14 |
   | D0 | IO12 |
   | VSYNC | IO4 |
   | HREF | IO5 |
   | PCLK | IO10 |
 
   | Touch Chip Pin | ESP32S3 Pin |
   | :------------: | :---------: |
   | SDA | IO1 |
   | SCL | IO2 |
   | RST | IO48 |
   | INT | IO47 |


### T-CameraPlus-S3_V1.2 Version
   | LCD Pin | ESP32S3 Pin |
   | :-----: | :---------: |
   | MOSI | IO34 |
   | SCLK | IO35 |
   | BL | IO46 |
   | CS | IO36 |
   | DC | IO45 |
 
   | PDM Microphone MP34DT05TR Pin | ESP32S3 Pin |
   | :---------------------------: | :---------: |
   | LRCLK | IO40 |
   | DATA | IO38 |
 
   | Amplifier MAX98357A Pin | ESP32S3 Pin |
   | :------------------------: | :---------: |
   | BCLK | IO41 |
   | LRCLK | IO42 |
   | DATA | IO39 |
 
   | SD Card Pin | ESP32S3 Pin |
   | :---------: | :---------: |
   | CS | IO21 |
   | SCLK | IO35 |
   | MOSI | IO34 |
   | MISO | IO48 |
 
   | Power Chip SY6970 Pin | ESP32S3 Pin |
   | :-------------------: | :---------: |
   | SDA | IO33 |
   | SCL | IO37 |
 
   | Camera OV2640 Pin | ESP32S3 Pin |
   | :---------------: | :---------: |
   | XCLK | IO7 |
   | SIDO | IO1 |
   | SIOC | IO2 |
   | D7 | IO6 |
   | D6 | IO8 |
   | D5 | IO9 |
   | D4 | IO11 |
   | D3 | IO13 |
   | D2 | IO15 |
   | D1 | IO14 |
   | D0 | IO12 |
   | VSYNC | IO3 |
   | HREF | IO5 |
   | PCLK | IO10 |
   | PWDN | IO4 |
 
   | Touch Chip Pin | ESP32S3 Pin |
   | :------------: | :---------: |
   | SDA | IO33 |
   | SCL | IO37 |
  | INT | IO47 |

 ---------------
 
| OV2640 IR Filter Control Pin | ESP32S3 Pin |
| :--------------------------: | :---------: |
| AP1511B_FBC | IO16 |

| KEY1 Button Pin | ESP32S3 Pin |
| :-------------: | :---------: |
| KEY1 | IO17 |

## Related Tests

| Firmware | Program | Description | Picture |
| :------: | :-----: | :---------: | :-----: |
| [Deep_Sleep_Wake_Up]() |[Deep_Sleep_Wake_Up](https://github.com/Xinyuan-LilyGO/T-CameraPlus-S3/blob/arduino-esp32-libs_V2.0.14/examples/Deep_Sleep_Wake_Up/)| Average Current Consumption: 1.7mA. For more information, see [Power Consumption Test Log](https://github.com/Xinyuan-LilyGO/T-CameraPlus-S3/blob/arduino-esp32-libs_V2.0.14/relevant_test/PowerConsumptionTestLog_[T-CameraPlus-S3_V1.2]_20250408.pdf) | |

## FAQ

*   **Q. What are the main application scenarios for the T-Camera Plus S3?**
    A. Suitable for smart surveillance, video doorbells, IoT visual interaction, multimedia terminals, AI image recognition, and other scenarios requiring camera and display functions.

*   **Q. Does it come pre-installed with a program?**
    A. It comes pre-installed with an LVGL-based UI program supporting file management, music playback, recording, camera projection, etc. If not pre-installed, you need to manually flash the "Lvgl_UI" example program.

*   **Q. Which camera modules are supported?**
    A. Supports OV2640 and OV5640 camera modules. Users can choose different resolution cameras according to their needs.

*   **Q. How is the audio functionality?**
    A. Integrates a MAX98357A audio amplifier to drive the speaker, and an MP34DT05-A digital microphone, supporting high-quality audio playback and recording.

*   **Q. How to expand external devices?**
    A. You can quickly connect compatible sensors via the 2 STEMMA QT/QWIIC interfaces, or connect other peripherals via the 2×13 dual-row expansion interface.

## Projects

* [T-CameraPlus-S3_V1.0-V1.1](project/T-CameraPlus-S3_V1.0-V1.1_20241109.pdf)
* [T-CameraPlus-S3_V1.2](project/T-CameraPlus-S3_V1.2_20240417.pdf)

## Resources
*   [ESP32-S3 Datasheet](https://www.espressif.com.cn/sites/default/files/documentation/esp32-s3_datasheet_en.pdf)
*   [MAX98357A Datasheet](https://github.com/Xinyuan-LilyGO/T-CameraPlus-S3/blob/arduino-esp32-libs_V2.0.14/information/MAX98357AETE+T.pdf)
*   [MP34DT05-A Datasheet](https://github.com/Xinyuan-LilyGO/T-CameraPlus-S3/blob/arduino-esp32-libs_V2.0.14/information/mp34dt05-a.pdf)
*   [SY6970 Datasheet](information/EVB_SY6970.pdf)
*   [SY6970 Application Note](information/AN_SY6970.pdf)

## Dependent Libraries
*   [Arduino_GFX-1.3.7](https://github.com/moononournation/Arduino_GFX)
*   [lvgl-8.3.5](https://github.com/lvgl/lvgl)
*   [JPEGDEC-1.2.8](https://github.com/bitbank2/JPEGDEC)
*   [MiniTV](https://github.com/moononournation/MiniTV)
*   [TFT_eSPI](https://github.com/Bodmer/TFT_eSPI)
*   [XPowersLib-0.2.1](https://github.com/lewisxhe/XPowersLib)
*   [Arduino_DriveBus-1.1.16](https://github.com/Xk-w/Arduino_DriveBus)
*   [cst816t-1.5.0](https://github.com/koendv/cst816t)
*   [arduino-libhelix-0.8.1](https://github.com/pschatzmann/arduino-libhelix)
*   [ESP32-audioI2S-3.0.6](https://github.com/schreibfaul1/ESP32-audioI2S)
*   [DFRobot_MSM261](https://github.com/DFRobot/DFrobot_MSM261)