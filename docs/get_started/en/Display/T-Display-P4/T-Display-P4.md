---
title: LILYGO T-Display-P4
show_source: false
tags: ESP32-P4, MIPI, AMOLED, LoRa, GPS, ESP32-C6
---

<div style="width:100%; display:flex;justify-content: center;">

![T-Display-P4](./assets/T-Display-P4-1.jpg)

</div>

<div style="padding: 1em 0 0 0; display: flex; justify-content: center">
    <a target="_blank" style="margin: 1em;color: white; font-size: 0.9em; border-radius: 0.3em; padding: 0.5em 2em; background-color:rgb(63, 201, 28)" href="https://lilygo.cc/products/t-display-p4">Official Store</a>
</div>

## Version History:
| Version | Update date | Update description |
| :-----: | :---------: | :---------------- |
| T-Display-P4_V1.0 | 2025-06-13 | Initial Version |
| T-Display-P4-Keyboard_V1.0 | 2025-09-12 | Keyboard Expansion Board Initial Version |

## Purchase Links

| Product | SOC | FLASH | PSRAM | Link |
| :-----: | :--: | :---: | :---: | :--: |
| T-Display-P4_V1.0 | ESP32-P4 | 16MB | - | [LILYGO Mall](https://lilygo.cc/products/t-display-p4) |
| T-Display-P4-Keyboard_V1.0 | - | - | - | [LILYGO Mall](https://lilygo.cc/products/t-display-p4-keyboard) |

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

T-Display-P4 is a multi-functional development board based on the **ESP32-P4** high-performance core, designed for complex graphics processing, multimedia interaction, and IoT applications. Main features include:

1.  **High-Performance Processing**: Equipped with ESP32-P4 processor, supports complex graphics and video task processing.
2.  **HD Display**: Features a 4.05-inch MIPI interface screen with a resolution of 540×1168px, supporting touch.
3.  **Dual-Core Collaboration**: Onboard ESP32-C6 auxiliary processor, supports Wi-Fi 6 and Bluetooth 5.3.
4.  **Rich Peripherals**: Integrates speaker, microphone, linear vibration motor, LoRa, GPS, Ethernet, camera, battery monitoring, and other modules.
5.  **High Expandability**: Provides abundant GPIO interfaces, supports keyboard expansion board (T-Display-P4-Keyboard).

## Preview

### Physical Image

<div style="width:100%; display:flex;justify-content: center;">

![T-Display-P4-1](./assets/T-Display-P4-2.jpg)

</div>

### Pin Diagram
T-Display-P4 has two versions: Amoled and TFT. Pin diagrams are as follows:
#### Amoled Version

![alt text](assets/T-Display-P4-Amoled.jpg)

#### TFT Version
![alt text](assets/T-Display-P4-tft.jpg)


## Modules

### T-Display-P4 Main Board

#### 1. Core Processor
* **Chip**: ESP32-P4
* **FLASH**: 16MB
* **Documentation**: [Espressif Official Documentation](https://www.espressif.com/en/support/documents/technical-documents)

#### 2. Auxiliary Processor
* **Module**: ESP32-C6-MINI-1U
* **Chip**: ESP32-C6-FH4
* **PSRAM**: 4MB
* **Communication Protocol**: SDIO
* **Documentation**: [ESP32-C6-MINI-1U Datasheet](https://www.espressif.com/sites/default/files/documentation/esp32-c6-mini-1_mini-1u_datasheet_en.pdf)

#### 3. Display and Touch
| Model | H0405S002T002-V0 (TFT) | H0410S001AMT001-V0 (AMOLED) |
| :--- | :--- | :--- |
| **Size** | 4.05 inch | 4.1 inch |
| **Type** | α-Si TFT | AMOLED |
| **Resolution** | 540×1168px | 568×1232px |
| **Interface** | MIPI + I2C | MIPI + I2C |
| **Driver Chip** | HI8561 | RM69A10 + GT9895 |
| **Brightness** | 550 cd/m² | 500 cd/m² |
| **Contrast** | 1200:1 | 20000:1 |
| **Touch Points** | 10 points | 10 points |
| **Documentation** | [HI8561](https://github.com/Xinyuan-LilyGO/T-Display-P4/tree/main/information/HI8561_Preliminary%20_DS_V0.00_20230511.pdf) | [RM69A10](https://github.com/Xinyuan-LilyGO/T-Display-P4/tree/main/information/RM69A10_DataSheet_V0.2_20230330%20(Public%20version).pdf) <br> [GT9895](https://github.com/Xinyuan-LilyGO/T-Display-P4/tree/main/information/GT9895_Datasheet_V1.1.pdf) |

#### 4. Audio Module
* **DAC Chip**: ES8311
* **Amplifier Chip**: NS4150B
* **Microphone**: Mic Head
* **Communication Protocol**: I2S
* **Documentation**: [ES8311](https://github.com/Xinyuan-LilyGO/T-Display-P4/tree/main/information/ES8311.pdf) , [NS4150B](https://github.com/Xinyuan-LilyGO/T-Display-P4/tree/main/information/NS4150B.pdf)

#### 5. Vibration Motor
* **Driver Chip**: AW86224AFCR
* **Communication Protocol**: I2C
* **Documentation**: [AW86224](https://github.com/Xinyuan-LilyGO/T-Display-P4/tree/main/information/AW86224AFCR.pdf)

#### 6. LoRa Module
* **Module**: HPD16A
* **Chip**: SX1262
* **Communication Protocol**: SPI
* **Documentation**: [SX1261-2](https://github.com/Xinyuan-LilyGO/T-Display-P4/tree/main/information/DS_SX1261-2_V2_1.pdf)

#### 7. GPS Module
* **Module**: L76K
* **Communication Protocol**: UART
* **Documentation**: [L76K](https://github.com/Xinyuan-LilyGO/T-Display-P4/tree/main/information/L76KB-A58.pdf)

#### 8. RTC Clock
* **Chip**: PCF8563
* **Communication Protocol**: I2C
* **Documentation**: [PCF8563](https://github.com/Xinyuan-LilyGO/T-Display-P4/tree/main/information/PCF8563.pdf)

#### 9. Charging Management
* **Chip**: LGS4056H
* **Description**: Supports three-wire battery NTC temperature detection
* **Documentation**: [LGS4056H](https://github.com/Xinyuan-LilyGO/T-Display-P4/tree/main/information/LGS4056H.pdf)

#### 10. Battery Monitoring
* **Chip**: BQ27220
* **Communication Protocol**: I2C
* **Documentation**: [BQ27220](https://github.com/Xinyuan-LilyGO/T-Display-P4/tree/main/information/bq27220_en.pdf)

#### 11. Camera
* **Model**: OV2710 (MIPI interface)
* **Documentation**: [OV2710](https://github.com/Xinyuan-LilyGO/T-Display-P4/tree/main/information/OV2710_CSP3_DS_2.0_KING%20HORN%20ENTERPRISES%20Ltd..pdf)

#### 12. Inertial Sensor
* **Chip**: ICM20948
* **Communication Protocol**: I2C
* **Documentation**: [ICM20948](https://github.com/Xinyuan-LilyGO/T-Display-P4/tree/main/information/ICM20948.pdf)

#### 13. IO Expansion
* **Chip**: XL9535
* **Communication Protocol**: I2C
* **Documentation**: [XL9535](https://github.com/Xinyuan-LilyGO/T-Display-P4/tree/main/information/XL95x5.pdf)

### T-Display-P4-Keyboard Expansion Board

#### 1. Keyboard Driver
* **Chip**: TCA8418
* **Communication Protocol**: I2C
* **Documentation**: [TCA8418](https://github.com/Xinyuan-LilyGO/T-Display-P4/tree/main/information/tca8418.pdf)

#### 2. Backlight Driver
* **Chip**: SY7200A
* **Communication Protocol**: PWM
* **Documentation**: [SY7200A](https://github.com/Xinyuan-LilyGO/T-Display-P4/tree/main/information/SY7200AABC.pdf)

#### 3. IO Expansion
* **Chip**: XL9555
* **Communication Protocol**: I2C
* **Documentation**: [XL9555](https://github.com/Xinyuan-LilyGO/T-Display-P4/tree/main/information/XL95x5.pdf)

#### 4. Wireless Module (T-MixRF)
| Module | Chip | Protocol | Documentation |
| :--- | :--- | :--- | :--- |
| **CC1101** | CC1101 | SPI | [CC1101](https://github.com/Xinyuan-LilyGO/T-Display-P4/tree/main/information/cc1101.pdf) |
| **NRF24L01** | NRF24L01 | SPI | [NRF24L01](https://github.com/Xinyuan-LilyGO/T-Display-P4/tree/main/information/NRF24L01P-R.pdf) |
| **NFC** | ST25R3916 | SPI | [ST25R3916](https://github.com/Xinyuan-LilyGO/T-Display-P4/tree/main/information/st25r3916.pdf) |

### Overview

| Component | Description |
| :--: | :--: |
| MCU | ESP32-S3R8 Dual-core LX7 microprocessor |
| FLASH| 16MB |
| PSRAM | 8MB|
| Display | 1.91 inch RM67162 IPS AMOLED |
| Touch | Capacitive Touch Screen |
| LoRa | LR1121 (1276/868/915MHz) |
| Storage | TF Card |
| RTC | PCF85063ATL/1 |
| Power Management | AXPM65611 + BQ25896 |
| Wireless | 2.4 GHz Wi-Fi & Bluetooth 5 (LE) |
| USB | 1 × USB Port and OTG (TYPE-C) |
| IO Interface | 2×13 Dual-row Expansion Interface |
| Expansion Interface | FPC Antenna + TF Card + STEMMA QT/QWIIC + JST-GH 1.25MM |
| Buttons | 1 x RESET Button + 1 x BOOT Button |
| Mounting Holes | 4 × 2mm Positioning Holes |
| Dimensions | **60×32×12mm** |

## Quick Start

### Example Support

#### T-Display-P4 Examples

| example | `[vscode][esp-idf-v5.4.0]` | description | picture |
| ------  | ------ | ------ | ------ | 
| [afe](https://github.com/Xinyuan-LilyGO/T-Display-P4/tree/main/main/examples/afe) |  <p align="center">![alt text][supported] | | |
| [aw86224](https://github.com/Xinyuan-LilyGO/T-Display-P4/tree/main/main/examples/aw86224) |  <p align="center">![alt text][supported] | | |
| [bq27220](https://github.com/Xinyuan-LilyGO/T-Display-P4/tree/main/main/examples/bq27220) |  <p align="center">![alt text][supported] | | |
| [deep_sleep](https://github.com/Xinyuan-LilyGO/T-Display-P4/tree/main/main/examples/deep_sleep) |  <p align="center">![alt text][supported] | | |
| [es8311](https://github.com/Xinyuan-LilyGO/T-Display-P4/tree/main/main/examples/es8311) |  <p align="center">![alt text][supported] | | |
| [es8311_sd_wav](https://github.com/Xinyuan-LilyGO/T-Display-P4/tree/main/main/examples/es8311_sd_wav) |  <p align="center">![alt text][supported] | | |
| [esp_hosted_mcu_sdio_wifi](https://github.com/Xinyuan-LilyGO/T-Display-P4/tree/main/main/examples/esp_hosted_mcu_sdio_wifi) |  <p align="center">![alt text][supported] | | |
| [esp32c6_at_host_sdio_uart](https://github.com/Xinyuan-LilyGO/T-Display-P4/tree/main/main/examples/esp32c6_at_host_sdio_uart) |  <p align="center">![alt text][supported] | | |
| [esp32c6_at_host_sdio_wifi](https://github.com/Xinyuan-LilyGO/T-Display-P4/tree/main/main/examples/esp32c6_at_host_sdio_wifi) |  <p align="center">![alt text][supported] | | |
| [icm20948](https://github.com/Xinyuan-LilyGO/T-Display-P4/tree/main/main/examples/icm20948) |  <p align="center">![alt text][supported] | | |
| [iic_scan](https://github.com/Xinyuan-LilyGO/T-Display-P4/tree/main/main/examples/iic_scan) |  <p align="center">![alt text][supported] | | |
| [l76k](https://github.com/Xinyuan-LilyGO/T-Display-P4/tree/main/main/examples/l76k) |  <p align="center">![alt text][supported] | | |
| [lvgl_9_ui](https://github.com/Xinyuan-LilyGO/T-Display-P4/tree/main/main/examples/lvgl_9_ui) |  <p align="center">![alt text][supported] |Factory Example | |
| [pcf8563](https://github.com/Xinyuan-LilyGO/T-Display-P4/tree/main/main/examples/pcf8563) |  <p align="center">![alt text][supported] | | |
| [radiolib_sx1262_send_receive](https://github.com/Xinyuan-LilyGO/T-Display-P4/tree/main/main/examples/radiolib_sx1262_send_receive) |  <p align="center">![alt text][supported] | | |
| [screen_camera](https://github.com/Xinyuan-LilyGO/T-Display-P4/tree/main/main/examples/screen_camera) |  <p align="center">![alt text][supported] | | |
| [screen_lvgl](https://github.com/Xinyuan-LilyGO/T-Display-P4/tree/main/main/examples/screen_lvgl) |  <p align="center">![alt text][supported] | | |
| [screen_lvgl_touch_draw](https://github.com/Xinyuan-LilyGO/T-Display-P4/tree/main/main/examples/screen_lvgl_touch_draw) |  <p align="center">![alt text][supported] | | |
| [sgm38121](https://github.com/Xinyuan-LilyGO/T-Display-P4/tree/main/main/examples/sgm38121) |  <p align="center">![alt text][supported] | | |
| [sx1262_gfsk_send_receive](https://github.com/Xinyuan-LilyGO/T-Display-P4/tree/main/main/examples/sx1262_gfsk_send_receive) |  <p align="center">![alt text][supported] | | |
| [sx1262_lora_send_receive](https://github.com/Xinyuan-LilyGO/T-Display-P4/tree/main/main/examples/sx1262_lora_send_receive) |  <p align="center">![alt text][supported] | | |
| [sx1262_tx_continuous_wave](https://github.com/Xinyuan-LilyGO/T-Display-P4/tree/main/main/examples/sx1262_tx_continuous_wave) |  <p align="center">![alt text][supported] | | |
| [tusb_serial_device](https://github.com/Xinyuan-LilyGO/T-Display-P4/tree/main/main/examples/tusb_serial_device) |  <p align="center">![alt text][supported] | | |
| [xl9535](https://github.com/Xinyuan-LilyGO/T-Display-P4/tree/main/main/examples/Vibration_Motor) |  <p align="center">![alt text][supported] | | |
| [xiaozhi](https://github.com/78/xiaozhi-esp32) |  <p align="center">![alt text][supported] | | |
#### T-Display-P4-Keyboard Examples

| example | `[vscode][esp-idf-v5.4.0]` | description | picture |
| ------  | ------ | ------ | ------ | 
| [radiolib_cc1101_send_receive](https://github.com/Xinyuan-LilyGO/T-Display-P4/tree/main/main/keyboard_examples/radiolib_cc1101_send_receive) |  <p align="center">![alt text][supported] | | |
| [radiolib_nrf24l01_send_receive](https://github.com/Xinyuan-LilyGO/T-Display-P4/tree/main/main/keyboard_examples/radiolib_nrf24l01_send_receive) |  <p align="center">![alt text][supported] | | |
| [screen_tca8418_lvgl_touch_draw](https://github.com/Xinyuan-LilyGO/T-Display-P4/tree/main/main/keyboard_examples/screen_tca8418_lvgl_touch_draw) |  <p align="center">![alt text][supported] | | |
| [st25r3916](https://github.com/Xinyuan-LilyGO/T-Display-P4/tree/main/main/keyboard_examples/st25r3916) |  <p align="center">![alt text][supported] | | |
| [tca8418](https://github.com/Xinyuan-LilyGO/T-Display-P4/tree/main/main/keyboard_examples/tca8418) |  <p align="center">![alt text][supported] | | |
| [xl9555](https://github.com/Xinyuan-LilyGO/T-Display-P4/tree/main/main/keyboard_examples/xl9555) |  <p align="center">![alt text][supported] | | |

[supported]: https://img.shields.io/badge/-supported-green "example"

### ESP-IDF Visual Studio Code
1. Install [Visual Studio Code](https://code.visualstudio.com/Download), choose the installation according to your system type.

2. Open the "Extensions" in the sidebar of Visual Studio Code (or use <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>X</kbd> to open extensions), search for the "ESP-IDF" extension and install it.

3. While the extension is installing, use the git command to clone the repository:

        git clone --recursive https://github.com/Xinyuan-LilyGO/T-Display-P4.git

    You need to add "--recursive" when cloning. If not added during cloning, you need to initialize the submodules later:

        git submodule update --init --recursive

4. Download and install [ESP-IDF v5.4.1](https://dl.espressif.cn/dl/esp-idf/?idf=4.4), record the installation path, open the previously installed "ESP-IDF" extension and open "Configure ESP-IDF Extension", select the "USE EXISTING SETUP" menu, select the "Search ESP-IDF in system" field, correctly configure the previously recorded installation path:
   - **ESP-IDF directory (IDF_PATH):** `Your installation path xxx\Espressif\frameworks\esp-idf-v5.4`  
   - **ESP-IDF Tools directory (IDF_TOOLS_PATH):** `Your installation path xxx\Espressif`  
    Click the "install" button in the bottom right corner to install the framework.

5. Click the ESP-IDF extension menu "SDK Configuration Editor" in the bottom menu bar of Visual Studio Code, search for the "Select the example to build" field in the search bar, select the project you need to compile, then search for the "Select the camera type" field in the search bar, select the camera type onboard your board, and click Save.

6. Click "Set Espressif device target" in the bottom menu bar of Visual Studio Code, select **ESP32P4**, click "Build Project" in the bottom menu bar, wait for the build to complete, then click "Select port to use" in the bottom menu bar, then click "Flash Project" in the bottom menu bar to flash the program.

<p align="center" width="100%">
    <img src="./assets/1.jpg" alt="example">
</p>

### Firmware Downloads

| firmware | description | picture |
| ------  | ------  | ------ |
| [t_display_p4_lvgl_9_ui](https://github.com/Xinyuan-LilyGO/T-Display-P4/tree/main/firmware/[T-Display-P4][lvgl_9_ui]) | Factory Program |  |
| [t_display_p4_keyboard_lvgl_9_ui](https://github.com/Xinyuan-LilyGO/T-Display-P4/tree/main/firmware/[T-Display-P4-Keyboard][lvgl_9_ui]) | Keyboard Expansion Board Factory Program |  |
| [esp32c6_at](https://github.com/Xinyuan-LilyGO/T-Display-P4/tree/main/firmware/[T-Display-P4][esp32c6_at_slave]) | esp32c6-at Factory Program |  |
| [esp32c6_slave_esp_hosted_mcu_network_adapter](https://github.com/Xinyuan-LilyGO/T-Display-P4/tree/main/firmware/[T-Display-P4][esp32c6_slave_esp_hosted_mcu_network_adapter]) |  |  |
| [t_display_p4_xiaozhi](https://github.com/Xinyuan-LilyGO/T-Display-P4/tree/main/firmware/[T-Display-P4][xiaozhi]) |  |  |


### Pin Overview

For pin definitions, please refer to the configuration files:
<br />

[t_display_p4_config.h](https://github.com/Xinyuan-LilyGO/T-Display-P4/tree/main/components/private_library/t_display_p4_config.h)  
[t_display_p4_keyboard_config.h](https://github.com/Xinyuan-LilyGO/T-Display-P4/tree/main/components/private_library/t_display_p4_keyboard_config.h)

### Development Platforms
1.  [Micropython](https://micropython.org/)
2.  [Arduino IDE](https://www.arduino.cc/en/software)
3.  [Platform IO](https://platformio.org/)


## Related Tests

### Power Consumption

| firmware | program | description | picture |
| ------  | ------  | ------ | ------ | 
| [deep_sleep(single_board)](https://github.com/Xinyuan-LilyGO/T-Display-P4/tree/main/firmware/sleep/[T-Display-P4][deep_sleep][single_board]_firmware_202505301450.bin) |[deep_sleep](https://github.com/Xinyuan-LilyGO/T-Display-P4/tree/main/main/examples/deep_sleep/)| Average current consumption: 1.2mA For more information, please view [Power Consumption Test Log](https://github.com/Xinyuan-LilyGO/T-Display-P4/tree/main/relevant_test/PowerConsumptionTestLog_[T-Display-P4_V1.0]_20250605.pdf) | |

### Camera

| program | description | picture |
| ------  | ------ | ------ | 
| [uvc_sc2336](https://github.com/Xinyuan-LilyGO/T-Display-P4/tree/main/debug/examples/uvc_sc2336/)| Original image and captured screen image screenshot effect | <p align="center"> <img src="./assets/2.jpg" alt="example" width="100%"> </p> |
| [uvc_ov2710](https://github.com/Xinyuan-LilyGO/T-Display-P4/tree/main/debug/examples/uvc_ov2710/)| Original image and captured screen image screenshot effect | <p align="center"> <img src="./assets/3.jpg" alt="example" width="100%"> </p> |

## FAQ

* Q. I still don't know how to set up the programming environment after reading the above tutorial. What should I do?
* A. If you still don't understand how to set up the environment after reading the above tutorial, you can refer to the [LilyGo-Document](https://github.com/Xinyuan-LilyGO/LilyGo-Document) documentation for setup instructions.

<br />

* Q. Why does my board keep failing to upload programs?
* A. Please hold down the "BOOT" button and try uploading the program again.

<br />

* Q. Why do I fail when selecting the target compilation chip in the espidf framework or when configuring menuconfig in the SDK, reporting the following error:

        asyncio.exceptions.LimitOverrunError: Separator is found, but chunk is longer than limit

        ValueError: Separator is found, but chunk is longer than limit

* A. This is a bug in the espidf framework v5.4~v5.5. You need to modify line 351 of the file at path `esp-idf-v5.x\tools\idf_py_actions\tools.py` as follows:

        Original code:
        p = await asyncio.create_subprocess_exec(*cmd, env=env_copy, limit=1024 * 256, cwd=self.cwd, stdout=asyncio.subprocess.PIPE,stderr=asyncio.subprocess.PIPE)
        Modified code:
        p = await asyncio.create_subprocess_exec(*cmd, env=env_copy, limit=1024 * 512, cwd=self.cwd, stdout=asyncio.subprocess.PIPE,stderr=asyncio.subprocess.PIPE)


## Projects
*   [T-Display S3 AMOLED Plus](https://github.com/Xinyuan-LilyGO/LilyGo-AMOLED-Series/blob/master/schematic/T-Display-S3-AMOLED-Plus.pdf)

## Resources
*   [ESP32-S3 Datasheet](https://www.espressif.com/sites/default/files/documentation/esp32-s3_datasheet_en.pdf)
*   [LR1121 Datasheet](https://www.semtech.com/products/wireless-rf/lora-connect/lr1121)
*   *(More resources please refer to GitHub repository)*

## Dependent Libraries
*   [lvgl 8.3.9](https://github.com/lvgl/lvgl)
*   [AceButton](https://github.com/bxparks/AceButton)
*   [TFT_eSPI](https://github.com/Bodmer/TFT_eSPI)
*   [Arduino_GFX](https://github.com/moononournation/Arduino_GFX)
*   [XPowersLib](https://github.com/lewisxhe/XPowersLib)
*   [SensorLib](https://github.com/lewisxhe/SensorsLib)
*   [TinyGPSPlus](https://github.com/mikalhart/TinyGPSPlus)
*   [Arduino_NeoPixel](https://github.com/adafruit/Adafruit_NeoPixel)
*   [OneWire](https://github.com/PaulStoffregen/OneWire)
*   [SparkFun MAX3010x Pulse and Proximity Sensor Library](https://github.com/sparkfun/SparkFun_MAX3010x_Pulse_and_Proximity_Sensor_Library)