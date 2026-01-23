---
title: LILYGO T-Connect Pro
show_source: false
tags: ESP32-S3, LoRa, CAN, Ethernet, Industrial
---

<div style="width:100%; display:flex;justify-content: center;">

![T-Connect Pro](./assets/T-Connect-Pro1.jpg)

</div>

<div style="padding: 1em 0 0 0; display: flex; justify-content: center">
    <a target="_blank" style="margin: 1em;color: white; font-size: 0.9em; border-radius: 0.3em; padding: 0.5em 2em; background-color:rgb(63, 201, 28)" href="#">Official Store</a>
</div>

## Version History:
| Version | Update date | Update description |
| :-----: | :---------: | :---------------- |
| T-Connect-Pro_V1.0 |  | Initial Version |

## Purchase Links

| Product | SOC | FLASH | PSRAM | Link |
| :-----: | :--: | :---: | :---: | :--: |
| T-Connect Pro | ESP32-S3-R8 | 16MB | 8MB | [LILYGO Mall](#) |

## Table of Contents
- [Description](#description)
- [Preview](#preview)
- [Modules](#modules)
- [Software Deployment](#software-deployment)
- [Pin Overview](#pin-overview)
- [Related Tests](#related-tests)
- [FAQ](#faq)
- [Projects](#projects)

## Description

T-Connect-Pro is a multi-functional industrial-grade control and communication module based on ESP32-S3, integrating LoRa (SX1262 chip), ST7796 LCD display, CAN bus, Ethernet interface, and dual serial ports (RS232/RS485), supporting 12~24V wide voltage input and 10A relay output, suitable for complex industrial automation and IoT scenarios.

**Core Features**
- Multi-protocol Communication: Integrates LoRa long-distance transmission, CAN bus control, Ethernet, RS232/RS485 serial ports
- Industrial-grade Design: Supports 12~24V wide voltage input, 10A relay output
- Rich Interfaces: 3-layer board stacking design, integrated touch screen, sensors, QWIIC expansion interface
- Real-time Display: ST7796 TFT screen provides intuitive data display and operation interface
- Power Management: AXP2101 highly integrated power management unit

## Preview

### Physical Image

<div style="width:100%; display:flex;justify-content: center;">

![T-Connect Pro](./assets/T-Connect-Pro2.jpg)

</div>

### Pin Diagram

<img src="./assets/T-Connect-Pro-en.jpg" alt="summary" width=100%>

## Modules

### MCU

* Chip: ESP32-S3-R8
* PSRAM: 8M (Octal SPI) 
* FLASH: 16M
* Related Information:
    >[Espressif ESP32-S3 Datasheet](https://www.espressif.com/sites/default/files/documentation/esp32-s3_datasheet_en.pdf)

### Display

<!-- * Size: inch LCD Screen -->
* Resolution: 222x480px
* Display Type: TFT, LCD
* Driver Chip: ST7796
* Bus Communication Protocol: Standard SPI
* Dependent Library:
    >[Arduino_GFX-1.4.6](https://github.com/moononournation/Arduino_GFX)

### Touch

* Chip: CST226SE
* Bus Communication Protocol: I2C
* Dependent Library:
    >[Arduino_DriveBus-1.1.16]()

### LoRa

* Module: HPD16A
* Chip: SX1262
* Bus Communication Protocol: Standard SPI
* Related Information:
    >[HPD16A_V1.1](./information/HPDTEK_HPD16A_TCXO_V1.1.pdf)  <br /> 
    >[SX1262_V2.1](./information/DS_SX1261-2_V2_1.pdf)
* Dependent Library:
    >[RadioLib-6.6.0](https://github.com/jgromes/RadioLib)

### CAN

* Module: TD501MCANFD
* Bus Communication Protocol: TWAI
* Related Information:
    >[TD501MCANFD](./information/TD501MCANFD_MORNSUN.pdf)

### RS485

* Module: TD501D485H-A
* Bus Communication Protocol: UART
* Related Information:
    >[TD501D485H-A](./information/TD501D485H-A_K-CUT.pdf)

### RS232

* Module: TD501D232H
* Bus Communication Protocol: UART
* Related Information:
    >[TD501D232H](./information/TD501D232H_WJ146289.pdf)

### Ethernet

* Chip: W5500
* Bus Communication Protocol: Standard SPI
* Dependent Library:
    >[Ethernet_V2.0.0](http://www.arduino.cc/en/Reference/Ethernet)

### Overview

T-Connect-Pro is based on the main control chip ESP32S3, consisting of 3-layer boards stacked together to form a product with rich and diverse functions. It features 3 different communication modules: CAN, RS485, RS232 for long-distance transmission, has an Ethernet interface, a relay interface, a LoRa module (SX1262), and is equipped with an LCD screen for more convenient operation.

| Component | Description |
| :--: | :--: |
| MCU | ESP32-S3-R8 |
| FLASH | 16MB |
| PSRAM | 8MB |
| Axis Sensor | BMA423 (I²C) |
| Ethernet | W5500 (SPI) |
| LoRa | HPD16A Module SX1262 Chip, 433~920MHz (selectable) |
| CAN | TD501MCANFD (TWAI) |
| RS485 | TD501D485H-A (UART) |
| RS232 | TD501D232H (UART) |
| Relay | 10A Output |
| Power Management | AXP2101 PMU |
| Display | ST7796 TFT LCD, 222×480px (SPI) |
| Touch | CST226SE (I²C) |
| Wireless | 2.4 GHz Wi-Fi & Bluetooth 5 (LE) |
| USB | 1 × USB Port and OTG (TYPE-C) |
| Expansion Interface | 1 × QWIIC Interface |
| Buttons | 1 x RESET Button + 1 x BOOT Button (built-in) |
| Power Input | 12~24V DC + 5V/500mA USB |
| Mounting Holes | 4 × M3mm Screw Holes |
| Dimensions | **With base 88×72×60mm** |

## Quick Start

### Example Support

| Example | `[Platformio IDE][espressif32-v6.5.0]`<br />`[Arduino IDE][esp32_v2.0.14]` | Description | Picture |
| ------  | ------ | ------ | ------ | 
| [CAN](https://github.com/Xinyuan-LilyGO/T-Connect-Pro/tree/main/examples/CAN) |  <p align="center">![alt text][supported] | | |
| [CST226SE](https://github.com/Xinyuan-LilyGO/T-Connect-Pro/tree/main/examples/CST226SE) |  <p align="center">![alt text][supported] | | |
| [Ethernet_HTTP](https://github.com/Xinyuan-LilyGO/T-Connect-Pro/tree/main/examples/Ethernet_HTTP) |  <p align="center">![alt text][supported] | | |
| [Ethernet_Relay](https://github.com/Xinyuan-LilyGO/T-Connect-Pro/tree/main/examples/Ethernet_Relay) |  <p align="center">![alt text][supported] | | |
| [Ethernet_Scan](https://github.com/Xinyuan-LilyGO/T-Connect-Pro/tree/main/examples/Ethernet_Scan) |  <p align="center">![alt text][supported] | | |
| [GFX](https://github.com/Xinyuan-LilyGO/T-Connect-Pro/tree/main/examples/GFX) |  <p align="center">![alt text][supported] | | |
| [GFX_SX1262](https://github.com/Xinyuan-LilyGO/T-Connect-Pro/tree/main/examples/GFX_SX1262) |  <p align="center">![alt text][supported] | | |
| [Original_Test](https://github.com/Xinyuan-LilyGO/T-Connect-Pro/tree/main/examples/Original_Test) |  <p align="center">![alt text][supported] | Factory Program | |
| [Relay](https://github.com/Xinyuan-LilyGO/T-Connect-Pro/tree/main/examples/Relay) |  <p align="center">![alt text][supported] | | |
| [RS485](https://github.com/Xinyuan-LilyGO/T-Connect-Pro/tree/main/examples/RS485) |  <p align="center">![alt text][supported] | | |
| [RS485_2](https://github.com/Xinyuan-LilyGO/T-Connect-Pro/tree/main/examples/RS485_2) |  <p align="center">![alt text][supported] | | |
| [SX126x_Channel_Activity_Detection_Blocking](https://github.com/Xinyuan-LilyGO/T-Connect-Pro/tree/main/examples/SX126x_Channel_Activity_Detection_Blocking) |  <p align="center">![alt text][supported] | | |
| [SX126x_Channel_Activity_Detection_Interrupt](https://github.com/Xinyuan-LilyGO/T-Connect-Pro/tree/main/examples/SX126x_Channel_Activity_Detection_Interrupt) |  <p align="center">![alt text][supported] | | |
| [SX126x_PingPong](https://github.com/Xinyuan-LilyGO/T-Connect-Pro/tree/main/examples/SX126x_PingPong) |  <p align="center">![alt text][supported] | | |
| [SX1262_Receive_Interrupt](https://github.com/Xinyuan-LilyGO/T-Connect-Pro/tree/main/examples/SX1262_Receive_Interrupt) |  <p align="center">![alt text][supported] | | |
| [raw](https://github.com/Xinyuan-LilyGO/T-Connect-Pro/tree/main/examples/raw) |  <p align="center">![alt text][supported] | | |
| [ttn_abp](https://github.com/Xinyuan-LilyGO/T-Connect-Pro/tree/main/examples/ttn_abp) |  <p align="center">![alt text][supported] | | |
| [ttn_otaa](https://github.com/Xinyuan-LilyGO/T-Connect-Pro/tree/main/examples/ttn_otaa) |  <p align="center">![alt text][supported] | | |

[supported]: https://img.shields.io/badge/-supported-green "example"

| Firmware | Description | Picture |
| ------  | ------  | ------ |
| [Original_Test](https://github.com/Xinyuan-LilyGO/T-Connect-Pro/tree/main/firmware/(屏幕色彩测试项增加黑色背景测试)[T-Connect-Pro_V1.0][Original_Test]_firmware_202502191117.bin) | Factory Program |  |


### PlatformIO
1. Install [Visual Studio Code](https://code.visualstudio.com/Download), choose the installation according to your system type.
2. Open the "Extensions" in the sidebar of Visual Studio Code (or use <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>X</kbd> to open extensions), search for the "PlatformIO IDE" extension and install it.
3. While the extension is installing, you can go to GitHub to download the program. You can download the main branch program by clicking the green "<> Code" button, or download the "Releases" version from the sidebar.
4. After the extension is installed, open the sidebar's Explorer (or use <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>E</kbd> to open it), click "Open Folder", find the project code you just downloaded (the entire folder), click "Add", and the project files will be added to your workspace.
5. Open the "platformio.ini" file in the project folder (PlatformIO will automatically open the "platformio.ini" of the corresponding folder after successfully adding the folder). Under the "[platformio]" section, uncomment and select the example program you want to upload (marked with "default_envs = xxx"). Then click the "<kbd>√</kbd>" at the bottom left to compile. If the compilation is successful, connect the microcontroller to the computer and click the "<kbd>→</kbd>" at the bottom left to upload.

### Arduino
1. Install [Arduino IDE](https://www.arduino.cc/en/software), choose the installation according to your system type.
2. Open the "example" directory in the project folder, select the example project folder, and open the file ending with ".ino" to open the Arduino IDE project workspace.
3. Open the "Tools" menu in the upper right corner -> Select "Board" -> "Board Manager", find or search for "esp32", and download the board files by the author "Espressif Systems". Then return to the "Board" menu and select the development board type under "ESP32 Arduino".
4. Open the "File" -> "Preferences" menu, find the "Sketchbook location" field, and copy all the library files along with their folders from the "libraries" folder in the project directory to the "libraries" folder in this directory.
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
7. Click the "<kbd>√</kbd>" in the upper right corner to compile. If the compilation is successful, connect the microcontroller to the computer and click the "<kbd>→</kbd>" in the upper right corner to upload.

### Development Platforms
1. [VS Code](https://code.visualstudio.com/)
2. [Arduino IDE](https://www.arduino.cc/en/software)
3. [Platform IO](https://platformio.org/)

## Pin Overview

| Display Pins  | ESP32S3 Pins|
| :------------------: | :------------------:|
| MOSI         | IO11       |
| MISO         | IO13       |
| DC         | IO41       |
| SCLK         | IO12       |
| CS         | IO21       |
| BL         | IO46       |

| Touch Pins  | ESP32S3 Pins|
| :------------------: | :------------------:|
| SDA         | IO39      |
| SCL         | IO40       |
| RST         | IO47      |
| INT         | IO3       |

| Ethernet Pins  | ESP32S3 Pins|
| :------------------: | :------------------:|
| MOSI         | IO11       |
| MISO         | IO13       |
| RST         | IO48       |
| SCLK         | IO12       |
| CS         | IO10       |
| INT         | IO9       |

| LoRa Pins  | ESP32S3 Pins|
| :------------------: | :------------------:|
| MOSI         | IO11       |
| MISO         | IO13       |
| RST         | IO42       |
| SCLK         | IO12       |
| CS         | IO14       |
| INT/DIO1         | IO45       |
| BUSY         | IO38       |

| RS485 Pins  | ESP32S3 Pins|
| :------------------: | :------------------:|
| UART_TX         | IO17       |
| UART_RX         | IO18       |

| RS232 Pins  | ESP32S3 Pins|
| :------------------: | :------------------:|
| UART_TX         | IO4       |
| UART_RX         | IO5       |

| CAN Pins  | ESP32S3 Pins|
| :------------------: | :------------------:|
| TWAI_TX         | IO6      |
| TWAI_RX         | IO7       |

## Related Tests


## FAQ

### What should I do if I still don't know how to set up the programming environment after reading the above tutorial?
If you still don't understand how to set up the environment after reading the above tutorial, you can refer to the [LilyGo-Document](https://github.com/Xinyuan-LilyGO/LilyGo-Document) for setup instructions.

### Why does Arduino IDE prompt me to update library files when I open it? Should I update or not?
Do **not** update the library files. Different versions of library files may not be compatible with each other, so updating is not recommended.

### What frequency bands does the LoRa module support?
The LoRa module supports the 433~920MHz frequency bands. Specific frequency band versions can be selected based on requirements.

### Why does my board keep failing to upload the program?
Please hold the "BOOT" button and try uploading the program again.

### Are there any GPIO ports on the T-Connect Pro that are internally reserved or should not be used for external I/O modules?
All GPIO ports on the T-Connect Pro are already used. There are other ports available for external use.

### What is the recommended method for expanding external input/output?
Use an I²C I/O expander.

### Are there any known limitations or pin conflict issues when using LoRa (SX1262) together with Wi-Fi or Bluetooth?
No, Wi-Fi is a built-in function of the chip.

### Is it safe to power external low-power I/O modules from the main board, or is it recommended to use an external power supply?
It is safe, and the main board can directly power sensors or low-current expansion devices. However, using an external power supply is recommended.

### Are there any reference designs or examples for connecting external I/O or control modules to this board?
No, only the [examples](https://github.com/Xinyuan-LilyGO/T-Connect-Pro?tab=readme-ov-file#examples-support) provided are supported.

## Projects
* [T-Connect-Pro_V1.0](https://github.com/Xinyuan-LilyGO/T-Connect-Pro/blob/main/project/T-Connect-Pro_V1.0.pdf)

## Resources
* [ESP32-S3 Datasheet](https://www.espressif.com/sites/default/files/documentation/esp32-s3_datasheet_en.pdf)
* [HPD16A Module](https://github.com/Xinyuan-LilyGO/T-Connect-Pro/blob/main/information/HPDTEK_HPD16A_TCXO_V1.1.pdf)
* [SX1262 Datasheet](https://github.com/Xinyuan-LilyGO/T-Connect-Pro/blob/main/information/DS_SX1261-2_V2_1.pdf)
* [TD501MCANFD](https://github.com/Xinyuan-LilyGO/T-Connect-Pro/blob/main/information/TD501MCANFD_MORNSUN.pdf)
* [TD501D485H-A](https://github.com/Xinyuan-LilyGO/T-Connect-Pro/blob/main/information/TD501D485H-A_K-CUT.pdf)
* [TD501D232H](https://github.com/Xinyuan-LilyGO/T-Connect-Pro/blob/main/information/TD501D232H.pdf)

## Dependent Libraries
* Touch: [Arduino_DriveBus-1.1.2](https://github.com/Xk-w/Arduino_DriveBus)
* LoRa: [RadioLib-6.6.0](https://github.com/jgromes/RadioLib)
* Display: [Arduino_GFX](https://github.com/moononournation/Arduino_GFX)
* Ethernet: [Ethernet_V2.0.0](http://www.arduino.cc/en/Reference/Ethernet)