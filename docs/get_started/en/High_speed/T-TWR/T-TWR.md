---
title: LILYGO T-TWR
show_source: false
tags: ESP32-S3, GNSS, Walkie-Talkie, OLED
---

<div style="width:100%; display:flex;justify-content: center;">

![T-TWR](./assets/T-TWR-1.jpg)

</div>

> Note: T-TWR has UHF and VHF receiver versions. The main difference is the walkie-talkie frequency band. UHF walkie-talkie frequency band is 400-480MHz, VHF walkie-talkie frequency band is 134-174MHz.

<div style="padding: 1em 0 0 0; display: flex; justify-content: center">
    <a target="_blank" style="margin: 1em;color: white; font-size: 0.9em; border-radius: 0.3em; padding: 0.5em 2em; background-color:rgb(103, 175, 8)" href="https://lilygo.cc/products/t-twr-rev2-1?variant=44505308528821">Official Store</a>
</div>

## Version History:
| Version | Update date | Update description |
| :-----: | :---------: | :---------------- |
| T-TWR REV2.1 |  | Current Version |

## Purchase Links

| Product | SOC | FLASH | PSRAM | Link |
| :-----: | :--: | :---: | :---: | :--: |
| T-TWR REV2.1 | ESP32-S3-WROOM-1-N16R8 | 16MB | 8MB (Octal SPI) | [LILYGO Mall](https://lilygo.cc/products/t-twr-rev2-1?variant=44505308528821) |

## Table of Contents
- [Description](#description)
- [Preview](#preview)
- [Modules](#modules)
- [Quick Start](#quick-start)
- [FAQ](#faq)
- [Projects](#projects)
- [Resources](#resources)
- [Dependent Libraries](#dependent-libraries)

## Description

LILYGO T-TWR REV2.1 is a highly integrated development board based on ESP32-S3-WROOM-1-N16R8, equipped with 16MB Flash and 8MB PSRAM, supporting Wi-Fi/Bluetooth 5 (LE) dual-mode communication, built-in PMU AXP2102 power management unit, supporting USB/21700/18650 battery multiple power supply modes, suitable for portable device development.

**Core Features**
- Multi-system Positioning: L76K GNSS module supports GPS, BDS, GLONASS multi-system positioning and AGNSS assistance
- Walkie-Talkie Function: SA868 UHF/VHF walkie-talkie module, optional 134-174MHz or 350-480MHz frequency bands
- HD Display: 1.3-inch SH1106 OLED screen (128×64 resolution, I²C interface)
- Power Management: AXP2102 power management chip, supports multiple power supply modes
- Rich Interfaces: TF card expansion, microphone input, environmental sensor interface, RGB status indicator
- Portable Design: Supports 21700/18650 batteries, suitable for outdoor applications

## Preview

### Physical Image

<div style="width:100%; display:flex;justify-content: center;">

![T-TWR](./assets/T-TWR-2.jpg)

</div>

### Pin Diagram

<img src="./assets/T-TWR-3.jpg" alt="summary" width=100%>

## Modules

### MCU

* Chip: ESP32-S3-WROOM-1-N16R8
* PSRAM: 8M (Octal SPI)
* FLASH: 16M
* Wireless: Wi-Fi 802.11 b/g/n; Bluetooth 5.0 (LE)
* Additional Information: More information available at [Espressif Official ESP32-S3 Datasheet](https://www.espressif.com/sites/default/files/documentation/esp32-s3_datasheet_en.pdf)

### Display Module

* Screen: 1.3-inch SH1106 OLED
* Resolution: 128×64 pixels
* Interface: I²C (SDA-1008/SCL-1009)
* Compatible Library: U8g2

### Positioning Module

* Chip: L76K GNSS
* Supported Systems: GPS, BDS, GLONASS
* Assisted Positioning: AGNSS
* Compatible Library: TinyGPSPlus

### Communication Module

* Chip: SA868
* Frequency Band Options:
  - UHF Version: 400-480MHz
  - VHF Version: 134-174MHz
* Function: Walkie-talkie communication

### Power Management

* Chip: AXP2102 PMU
* Power Supply Methods: USB, 21700 battery, 18650 battery
* Battery Type: Supports 21700/18650 batteries + spring battery holder

### Audio Module

* Chip: RS2257XC6
* Function: Audio collection and processing

### Overview
<img src="./assets/T-TWR-4.jpg" alt="summary" width=100%>

| Component | Description |
| :--: | :--: |
| MCU | ESP32-S3-WROOM-1-N16R8 |
| FLASH | 16MB |
| PSRAM | 8MB (Octal SPI) |
| Display | 1.3-inch SH1106 OLED (128×64) |
| Walkie-Talkie | SA868 UHF/VHF Module |
| Audio | RS2257XC6 Audio Collection Module |
| GNSS | L76K GNSS Module (GPS/BDS/GLONASS) |
| Power Management | AXP2102 PMU |
| Battery | 21700 Battery / 18650 Battery |
| LED | WS2812 RGB Status Indicator |
| Encoder | Supports rotary encoder control |
| Storage | TF Card Expansion Interface |
| Wireless | 2.4GHz Wi-Fi + Bluetooth 5.0 (LE) |
| USB | 1 × USB Port and OTG (TYPE-C) |
| IO Interface | 2 × 15pin Expansion IO Interface |
| Expansion Interface | 2 × 1mm 4-pin STEMMA QT/QWIIC Interface + Antenna Interface |
| Buttons | 1 x RESET + 1 x BOOT + 1 x PWR + 1 x PTT |
| Power | 5V/500mA |
| Mounting Holes | 2 × 2mm Positioning Holes |
| Dimensions | Product: **126×39×29mm** <br>Antenna: **200mm** |

## Quick Start

### Example Support

```txt
examples/
├── Factory                         # TWR Factory Application
├── GPS_Basic_Example               # GPS example
├── GPS_Full_Example                # GPS example
├── Pixels_RGBWstrandtest           # Pixels example
├── Pixels_Strandtest_Example       # Pixels example
├── SA868_ATDebug_Example           # Radio  AT Debug example
├── SA868_ESPSendAudio_Example      # Radio frequency sends ESP32 signal
├── SD_Test_Example                 # SD Test Example
├── SD_Time_Example                 # SD Time Example
├── WAV_Player                      # WAV Player
├── TFT_ArcFill_Example             # Screen extension example
├── TFT_Keypad_240x320_Example      # Screen extension example
├── U8g2_FontUsage_Example          # Onboard OLED U8G2 example
├── U8g2_GraphicsTest_Example       # Onboard OLED U8G2 example
└── U8g2_UpdateArea_Example         # Onboard OLED U8G2 example
```


### PlatformIO

1. Install [Visual Studio Code](https://code.visualstudio.com/) and [Python](https://www.python.org/)
2. Search for the `PlatformIO` plugin in the `VisualStudioCode` extension and install it.
3. After the installation is complete, you need to restart `VisualStudioCode`
4. After restarting `VisualStudioCode`, select `File` in the upper left corner of `VisualStudioCode` -> `Open Folder` -> select the `T-TWR` directory
5. Click on the `platformio.ini` file, and in the `platformio` column, cancel the sample line that needs to be used, please make sure that only one line is valid
6. Click the (✔) symbol in the lower left corner to compile
7. Connect the board to the computer USB
8. Click (→) to upload firmware
9. Click (plug symbol) to monitor serial output

### Arduino

1. Install [Arduino IDE](https://www.arduino.cc/en/software)
2. Install [Arduino ESP32](https://docs.espressif.com/projects/arduino-esp32/en/latest/)
3. Copy all the folders in the `T-TWR/lib` directory to `<C:\Users\UserName\Documents\Arduino\libraries>`. If there is no `libraries` directory, please create a new one. Please note that you are not copying the `lib` directory, but copying the folders in the lib directory
4. Open ArduinoIDE -> `Tools`
    | Arduino IDE Setting                  | Value                             |
    | ------------------------------------ | --------------------------------- |
    | Board                                | **ESP32S3 Dev Module**            |
    | Port                                 | Your port                         |
    | USB CDC On Boot                      | Enable                            |
    | CPU Frequency                        | 240MHZ(WiFi)                      |
    | Core Debug Level                     | None                              |
    | USB DFU On Boot                      | Disable                           |
    | Erase All Flash Before Sketch Upload | Disable                           |
    | Events Run On                        | Core1                             |
    | Flash Mode                           | QIO 80MHZ                         |
    | Flash Size                           | **16MB(128Mb)**                   |
    | Arduino Runs On                      | Core1                             |
    | USB Firmware MSC On Boot             | Disable                           |
    | Partition Scheme                     | **16M Flash(3M APP/9.9MB FATFS)** |
    | PSRAM                                | **OPI PSRAM**                     |
    | Upload Mode                          | **UART0/Hardware CDC**            |
    | Upload Speed                         | 921600                            |
    | USB Mode                             | **CDC and JTAG**                  |
    * The options in bold are required, others are selected according to actual conditions.
5. Insert USB into the PC and click Upload <If the upload fails, View the FAQ below>



### Development Platforms
1. [Arduino IDE](https://www.arduino.cc/en/software)
2. [Platform IO](https://platformio.org/)
3. [VS Code](https://code.visualstudio.com/)

## Pin Overview



1. ⚠⚠⚠ **Precautions (special matters)**:
    1. The **glue stick (RF) antenna** must be connected. If the antenna is not connected, the RF module may be damaged, and the PMU will automatically turn off the power output
    2. A separate USB power supply may not meet the power supply requirements, please connect the battery to use , **The Rev2.1 version must use a battery to power the radio frequency unit and cannot use USB to work alone (because the RF current is very large and the noise can be minimized using battery power)**
    3. Please note that when adjusting to high power transmission, please ensure that the battery has sufficient discharge capacity, otherwise the PMU will automatically shut down due to insufficient current.
    4. TWR Rev2.0 has two versions, one comes with NiceRF AT firmware, and the other is a community version without any functions. For the community version, please jump to [OpenRTX](https://github.com/OpenRTX/OpenRTX) to burn [OpenRTX SA8x8 firmware](https://github.com/OpenRTX/sa8x8-fw) for use. For novices, it is recommended to use NiceRF firmware.
    5. TWR Rev2.1 is version agnostic. The built-in NiceRF firmware can be flashed to OpenRTX firmware, but the NiceRF firmware cannot be restored after flashing.

 3. ⚠ **Unable to download the program, the error is shown below.**
      <details>
      <summary>
      Click to view detailed steps
      </summary>

      ```shell
      Flash: [====      ]  35.7% (used 467813 bytes from 1310720 bytes)
      Configuring upload protocol...
      AVAILABLE: cmsis-dap, esp-bridge, esp-builtin, esp-prog, espota, esptool, iot-bus-jtag, jlink, minimodule, olimex-arm-usb-ocd, olimex-arm-usb-ocd-h, olimex-arm-usb-tiny-h, olimex-jtag-tiny, tumpa
      CURRENT: upload_protocol = esptool
      Looking for upload port...
      Auto-detected: COM236
      Uploading .pio\build\uhf_band\firmware.bin
      esptool.py v4.5
      Serial port COM236
      Connecting...

      A serial exception error occurred: ClearCommError failed (PermissionError(13, 'The device does not recognize the command.', None, 22))
      Note: This error originates from pySerial. It is likely not a problem with esptool, but with the hardware connection or drivers.
      For troubleshooting steps visit: https://docs.espressif.com/projects/esptool/en/latest/troubleshooting.html
      *** [upload] Error 1
      ================================================================================================================ [FAILED] Took 8.75 seconds ================================================================================================================

      ```
      - Step
      - Press the **PWR** button for one second to make sure the TWR is powered on
      - Press and hold the **BOOT** button (without releasing it), then press the **RST** button, then release the **RST** button, and finally release the **BOOT** button
      - Click the upload button in the IDE and wait for the upload to complete
      - Press the **RST** button to exit the download mode
      
      </details>

3. ⚠ **Can I change the voltage of the peripheral?**
      <details>
      <summary>
      Click to view detailed steps
      </summary>
        1. Not recommended, changing the peripheral voltage may cause abnormal operation, please do not change the default voltage setting of the peripheral, please refer to the voltage setting in the sample program.
      </details>

4. ⚠ **Why can't I test the charging current to reach the set current?**
      <details>
      <summary>
      Click to view detailed steps
      </summary>
       1. If you use a USBC cable with low quality or too large or too long wire resistance, there will be a large internal resistance, and there is no rated 5V input on the board, so the PMU will think that the power supply voltage is insufficient, so the rated charging current cannot be reached. ,The solution is to replace the high-quality USBC wire, reduce the length of the wire to meet the requirements of the PMU input voltage<br>
       2. You can measure the voltage at both ends of the figure below to see if it can meet the 5V input voltage required by the PMU<br>
         <img width="320"  src=images/input-voltage.jpg>

      1. Please note that if the charging current is set to 1A, please install a suitable heat sink above the PMU to reduce the risk of heat and damage caused by overheating.
      </details>

5.  ⚠  When you think there is a problem with the board, you can try to burn our [factory firmware](https://github.com/Xinyuan-LilyGO/T-TWR/blob/master/firmware/README.MD) for testing, you can first rule out whether it is a hardware problem

6. ⚠ **I don’t have a **21700 battery**, can I replace the battery holder with a **18650** battery holder?**
      <details>
      <summary>
      Click to view detailed steps
      </summary>
      1. The board is compatible with 21700 and 18650 battery holders, if you have the ability to replace it, please note that **LilyGo does not bear the risk of replacing the battery holder without authorization, damage and Brought to work abnormally**
      </details>

7. ⚠ **Can't turn on automatically after connecting the battery?**
      <details>
      <summary>
      Click to view detailed steps
      </summary>
      1. Connect the battery separately, you need to press the **PWR button** for one second, the board will start the action, press and hold the **PWR** button for 6 seconds to shut down, the shutdown time can be set by software , In the latest version (Rev2.1), inserting the battery will automatically power on.
      </details>

8. TWR currently has two modes before leaving the factory, one is flashed with regular firmware and uses the esp built-in boot, and the other uses TinyUF2 as the boot program. For novices, please [see here](https://github.com/Xinyuan-LilyGO/T-TWR/blob/master/firmware/README.MD)

9.  How to enter TinyUF2 boot mode?

      <img src="https://github.com/lyusupov/SoftRF/raw/master/documents/images/ham-1.jpg" width="400"><br>

      <details>
      <summary>
      Click to view detailed steps
      </summary>
       1. Before entering TinyUF2, the boot program must have been flashed. If it has not been written, please [see here](https://github.com/Xinyuan-LilyGO/T-TWR/blob/master/firmware/README.MD)<br>
       2. Press the RST button<br>
       3. After pressing the RST button for one second, press the BOOT button. The disk will be ejected on the computer.<br>
       4. At this time, drag the firmware with the suffix uf2 into the disk to upgrade the device.<br>
      </details>
11. ⚠ **There is a microphone port on the bottom of the board, do I need to install a microphone? Only for Rev2.0, Rev2.1 has removed the external microphone interface**
      <details>
      <summary>
      Click to view detailed steps
      </summary>
      1. No, there is already a condenser microphone on board. If you need to use a wired microphone, please remove the board microphone. Please note that **LilyGo will not be responsible for the damage and abnormality of the board caused by unauthorized disassembly of the microphone**
      </details>

