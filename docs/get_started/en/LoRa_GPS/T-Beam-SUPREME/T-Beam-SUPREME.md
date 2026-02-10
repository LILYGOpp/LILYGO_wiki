---
title: LILYGO T-Beam SUPREME
show_source: false
tags: LoRa, GPS, ESP32-S3, IoT, Sensor
---

<div style="width:100%; display:flex;justify-content: center;">

![T-Beam SUPREME](./assets/T-Beam-SUPREME-1.jpg)

</div>

<div style="padding: 1em 0 0 0; display: flex; justify-content: center">
    <a target="_blank" style="margin: 1em;color: white; font-size: 0.9em; border-radius: 0.3em; padding: 0.5em 2em; background-color:rgb(63, 201, 28)" href="https://lilygo.cc/products/t-beam-supreme">Official Store</a>
</div>

## Version Iteration:
| Version | Update date | Update description |
| :-----: | :---------: | :---------------- |
| T-Beam-SUPREME_V3.0 | Latest Version | High-performance multifunctional IoT development board |

## Purchase Links

| Product | SOC | FLASH | PSRAM | LoRa | GPS | Link |
| :-----: | :--: | :---: | :---: | :--: | :--: | :--: |
| T-Beam SUPREME | ESP32-S3FN8 | 8M | 8M | SX1262 | MAX-M10S/L76K | [LILYGO Mall](https://lilygo.cc/products/t-beam-supreme) |

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

T-BEAM-SUPREME V3.0 is a high-performance multifunctional IoT development board based on the ESP32-S3FN8 dual-core processor, supporting Wi-Fi 802.11 b/g/n and Bluetooth 5.0, providing flexible wireless connectivity. The development board is compatible with Arduino-IDE, MicroPython, and VS Code programming environments, equipped with 8MB PSRAM and 8MB Flash storage, and integrates a six-axis sensor (QMI8658), temperature/humidity/pressure sensor (BME280), 3.7V 18650 battery power supply interface, and multifunctional buttons (Boot/Reset/Power).

It features a 1.3-inch SH1106 OLED screen (128x64 resolution, I2C interface), supports LoRa SX1262 module (covering 433/868/915/923MHz frequency bands), enabling long-range low-power communication. Additionally, users can flexibly choose between Ublox MAX-M10S or L76K GPS module versions to meet precise positioning requirements, suitable for smart hardware, environmental monitoring, and IoT node development scenarios.

## Preview

### Physical Image

<div style="width:100%; display:flex;justify-content: center">

![T-Beam SUPREME](./assets/T-Beam-SUPREME-2.jpg)

</div>

### Pinout Diagram

<img src="./assets/T-BEAM-Supreme-pin-en.jpg" alt="summary" width=100%>

### Core Board & Expansion Board

<img src="./assets/T-BEAM-S3-Core.jpg" alt="summary" width=100%>

<img src="./assets/T-Beam-SUPREME-3.jpg" alt="summary" width=100%>

## Modules

### MCU

* Chip: ESP32-S3FN8
* PSRAM: 8MB
* FLASH: 8MB
* Other Notes: For more information, please visit [Espressif Official ESP32-S3 Datasheet](https://www.espressif.com/en/products/socs/esp32-s3)

### Display

* Size: 1.3-inch OLED
* Resolution: 128x64px
* Display Type: OLED
* Driver Chip: SH1106
* Bus Communication Protocol: I2C

### LoRa

* Chip: SX1262
* Frequency: 433/868/915/923MHz
* Other: Optional SX1280 (2.4GHz)

### GPS

* Chip: MAX-M10S or L76K (selectable)
* Features: MAX-M10S supports NMEA 0183 protocol, L76K supports UBX protocol
* Baud Rate: 9600/19200/38400/57600/115200

### Sensors

* Six-Axis Sensor: QMI8658
* Temperature/Humidity/Pressure Sensor: BME280
* Magnetometer: QMC6310

### Power Management

* Chip: AXP2101
* Features: Supports 3.7V 18650 battery power supply

### RTC

* Chip: PCF85063ATL
* Bus Communication Protocol: I2C

### I2C Device Addresses

| Devices                                 | 7-Bit Address | Share Bus |
| --------------------------------------- | ------------- | --------- |
| OLED Display (**SH1106**)               | 0x3C          | ✅️         |
| RTC (**PCF8563**)                       | 0x51          | ✅️         |
| MAG Sensor(**QMC6310**)                 | 0x1C          | ✅️         |
| Temperature/humidity Sensor(**BME280**) | 0x77          | ✅️         |
| Power Manager (**AXP2101**)             | 0x34          | ❌         |

### Electrical Parameters

| Features             | Details                     |
| -------------------- | --------------------------- |
| 🔗USB-C Input Voltage | 3.9V-6V                     |
| ⚡Charge Current      | 0-1024mA (\(Programmable\)) |
| 🔋Battery Voltage     | 3.7V                        |


### Power Management

| Channel    | Peripherals                              |
| ---------- | ---------------------------------------- |
| DC1        | **ESP32-S3**                             |
| DC2        | Unused                                   |
| DC3        | External M.2 Socket                      |
| DC4        | External M.2 Socket                      |
| DC5        | External M.2 Socket                      |
| LDO1(VRTC) | Unused                                   |
| ALDO1      | **BME280 Sensor & Display & MAG Sensor** |
| ALDO2      | **Sensor**                               |
| ALDO3      | **Radio**                                |
| ALDO4      | **GPS**                                  |
| BLDO1      | **SD Card**                              |
| BLDO2      | External pin header                      |
| DLDO1      | Unused                                   |
| CPUSLDO    | Unused                                   |
| VBACKUP    | Unused                                   |

* T-Beam Supreme GPS backup power is provided by the 18650 battery. If you remove the 18650 battery, GPS hot start will not be possible. To use GPS hot start, please connect the 18650 battery.


### Overview

<img src="./assets/T-BEAM-SUPREME-info-en.jpg" alt="summary" width=100%>

| Component | Description |
| :--: | :--: |
| MCU | ESP32-S3FN8 Dual-core LX7 microprocessor |
| FLASH| 8MB |
| PSRAM | 8MB|
| Display | 1.3-inch SH1106 OLED |
| LoRa | SX1262 (868/915MHz) / SX1280 (2.4GHz) |
| GPS | MAX-M10S or L76K |
| RTC | PCF85063ATL (I2C) |
| Sensors | QMI8658 (Six-axis) + BME280 (Temp/Humidity/Pressure) |
| Power Management | AXP2101 |
| Microphone | MP34DT05-A (PDM) |
| Storage | TF Card |
| Wireless | 2.4GHz Wi-Fi + Bluetooth 5.0 |
| USB | 1 × USB Port and OTG (TYPE-C Connector) |
| IO Interface | 2.54mm pitch 2*13 expansion IO interface |
| Expansion Interfaces | WiFi antenna + LoRa antenna + GPS antenna + Qwiic interface |
| Buttons | 1 x RESET + 1 x BOOT + 1 x Power |
| Battery | Supports 3.7V 18650 battery |
| Dimensions | **114x33x28mm** |

## Quick Start

### Example Support

~~~bash
./examples/
├── ArduinoLoRa                              # Only support SX1276/SX1278 radio module
│   ├── LoRaReceiver
│   └── LoRaSender
├── Display                                  # Only supports TBeam TFT Shield
│   ├── Free_Font_Demo
│   ├── TBeam_TFT_Shield
│   ├── TFT_Char_times
│   └── UTFT_demo
├── GPS                                      # T-Beam GPS demo examples
│   ├── TinyGPS_Example
│   ├── TinyGPS_FullExample
│   ├── TinyGPS_KitchenSink
│   ├── UBlox_BasicNMEARead                  # Only support Ublox GNSS Module           
│   ├── UBlox_NMEAParsing                    # Only support Ublox GNSS Module           
│   ├── UBlox_OutputRate                     # Only support Ublox GNSS Module      
│   └── UBlox_Recovery                       # Only support Ublox GNSS Module      
├── LoRaWAN                                  # LoRaWAN examples
│   ├── LMIC_Library_OTTA
│   └── RadioLib_OTAA
├── OLED
│   ├── SH1106FontUsage
│   ├── SH1106GraphicsTest
│   ├── SH1106IconMenu
│   ├── SH1106PrintUTF8
│   ├── SSD1306SimpleDemo
│   └── SSD1306UiDemo
├── PMU                                      # T-Beam & T-Beam S3 PMU demo examples
├── RadioLibExamples                         # RadioLib examples,Support SX1276/78/62/80...
│   ├── Receive_Interrupt
│   └── Transmit_Interrupt
├── Sensor                                   # Sensor examples,only support t-beams3-supreme
│   ├── BME280_AdvancedsettingsExample
│   ├── BME280_TestExample
│   ├── BME280_UnifiedExample
│   ├── PCF8563_AlarmByUnits
│   ├── PCF8563_SimpleTime
│   ├── PCF8563_TimeLib
│   ├── PCF8563_TimeSynchronization
│   ├── QMC6310_CalibrateExample
│   ├── QMC6310_CompassExample
│   ├── QMC6310_GetDataExample
│   ├── QMC6310_GetPolarExample
│   ├── QMI8658_BlockExample
│   ├── QMI8658_GetDataExample
│   ├── QMI8658_InterruptBlockExample
│   ├── QMI8658_InterruptExample
│   ├── QMI8658_LockingMechanismExample
│   ├── QMI8658_MadgwickAHRS
│   ├── QMI8658_PedometerExample
│   ├── QMI8658_ReadFromFifoExample
│   └── QMI8658_WakeOnMotion
|── T3S3Factory                              # T3 S3 factory test examples
└── Factory                                  # T-Beam & T-Beam S3 and BPF factory test examples
~~~

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
    * macOS: `/Users/{Username}/Documents/Arduino`
    * Linux: `/home/{Username}/Arduino`
4.  Open the corresponding example
    * Open the downloaded `LilyGo-LoRa-Series` folder
    * Open the `examples` folder
    * Select the example file and open the file with `ino` extension
5.  Select the corresponding board model in the Arduino IDE Tools menu, click the corresponding option in the list below to select

| Name                                 | Value                             |
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
| Flash Size                           | **8MB(64Mb)**                     |
| Arduino Runs On                      | Core1                             |
| USB Firmware MSC On Boot             | Disable                           |
| Partition Scheme                     | **8M Flash(3M APP/1.5MB SPIFFS)** |
| PSRAM                                | **QSPI PSRAM**                    |
| Upload Mode                          | **UART0/Hardware CDC**            |
| Upload Speed                         | 921600                            |
| USB Mode                             | **CDC and JTAG**                  |
| Programmer                           | **Esptool**                       |

6. Please uncomment the corresponding model in the `utilities.h` file according to your board model, for example `T_BEAM_S3_SUPREME_SX1262` or `T_BEAM_S3_SUPREME_LR1121`, otherwise compilation will report an error
7. Upload the program

### Development Platforms
1. [Arduino IDE](https://www.arduino.cc/en/software)
2. [Platform IO](https://platformio.org/)
3. [ESP-IDF](https://www.espressif.com/en/products/sdks/esp-idf)
4. [Micropython](https://micropython.org/)

## Pin Overview

| Name                                 | GPIO NUM                  | Free |
| ------------------------------------ | ------------------------- | ---- |
| Uart1 TX                             | 43(External QWIIC Socket) | ✅️    |
| Uart1 RX                             | 44(External QWIIC Socket) | ✅️    |
| SDA                                  | 17                        | ❌    |
| SCL                                  | 18                        | ❌    |
| OLED(**SH1106**) SDA                 | Share with I2C bus        | ❌    |
| OLED(**SH1106**) SCL                 | Share with I2C bus        | ❌    |
| RTC(**PCF8563**) SDA                 | Share with I2C bus        | ❌    |
| RTC(**PCF8563**) SCL                 | Share with I2C bus        | ❌    |
| MAG Sensor(**QMC6310**) SDA          | Share with I2C bus        | ❌    |
| MAG Sensor(**QMC6310**) SCL          | Share with I2C bus        | ❌    |
| RTC(**PCF8563**) Interrupt           | 14                        | ❌    |
| IMU Sensor(**QMI8658**) Interrupt    | 33                        | ❌    |
| IMU Sensor(**QMI8658**) MISO         | Share with SPI bus        | ❌    |
| IMU Sensor(**QMI8658**) MOSI         | Share with SPI bus        | ❌    |
| IMU Sensor(**QMI8658**) SCK          | Share with SPI bus        | ❌    |
| IMU Sensor(**QMI8658**) CS           | 34                        | ❌    |
| SPI MOSI                             | 35                        | ❌    |
| SPI MISO                             | 37                        | ❌    |
| SPI SCK                              | 36                        | ❌    |
| SD CS                                | 47                        | ❌    |
| SD MOSI                              | Share with SPI bus        | ❌    |
| SD MISO                              | Share with SPI bus        | ❌    |
| SD SCK                               | Share with SPI bus        | ❌    |
| GNSS(**L76K or Ublox M10**) TX       | 8                         | ❌    |
| GNSS(**L76K or Ublox M10**) RX       | 9                         | ❌    |
| GNSS(**L76K or Ublox M10**) PPS      | 6                         | ❌    |
| GNSS(**L76K**) Wake-up               | 7                         | ❌    |
| LoRa(**SX1262 or LR1121**) SCK       | 12                        | ❌    |
| LoRa(**SX1262 or LR1121**) MISO      | 13                        | ❌    |
| LoRa(**SX1262 or LR1121**) MOSI      | 11                        | ❌    |
| LoRa(**SX1262 or LR1121**) RESET     | 5                         | ❌    |
| LoRa(**SX1262 or LR1121**) DIO1/DIO9 | 1                         | ❌    |
| LoRa(**SX1262 or LR1121**) BUSY      | 4                         | ❌    |
| LoRa(**SX1262 or LR1121**) CS        | 10                        | ❌    |
| Button1 (BOOT)                       | 0                         | ❌    |
| PMU (**AXP2101**) IRQ                | 40                        | ❌    |
| PMU (**AXP2101**) SDA                | 42                        | ❌    |
| PMU (**AXP2101**) SCL                | 41                        | ❌    |

> 1. GNSS wake-up function is only available in the L76K version.
> 
> 2. The radio has its own SPI bus, while other peripheral SPI devices share that SPI bus


## Related Tests

*Test data to be supplemented*

## FAQ

* **Q. How to choose GPS module version?**  
  A. MAX-M10S has higher accuracy and lower power consumption, L76K has better cost advantage. Choose according to positioning accuracy and budget requirements.

* **Q. What to do if LoRa communication distance is not ideal?**  
  A. Check antenna connection, ensure use in open environment, adjust LoRa parameters (spreading factor, bandwidth, etc.).

* **Q. Short battery life?**  
  A. Enable deep sleep mode, turn off unnecessary sensors and peripherals, select low-power operation mode.

* **Q. Device cannot flash program?**  
  A. Ensure USB CDC On Boot is enabled, hold BOOT button and click RESET to enter download mode.

## Projects

* [T-Beam Supreme schematic](https://github.com/Xinyuan-LilyGO/LilyGo-LoRa-Series/blob/master/schematic/LilyGo_T-BeamS3Supreme.pdf)

## Resources

* [Schematic](https://github.com/Xinyuan-LilyGO/LilyGo-LoRa-Series/blob/master/schematic/LilyGo_T-BeamS3Supreme.pdf)
* [SX1262 Datasheet](https://www.semtech.com/products/wireless-rf/lora-transceivers/sx1262)
* [MAX-M10S Datasheet](https://www.u-blox.com/en/product/max-m10-series)
* [L76K Protocol Specification](https://github.com/Xinyuan-LilyGO/LilyGo-LoRa-Series/blob/master/docs/datasheet/Quectel_L76KL26K_GNSS_Protocol_Specification_V1.2.pdf)
* [BME280 Datasheet](https://www.bosch-sensortec.com/products/environmental-sensors/humidity-sensors-bme280/)
* [QMI8658 Datasheet](https://github.com/Xinyuan-LilyGO/LilyGo-LoRa-Series/blob/master/lib/SensorsLib/datasheet/QMI8658A%20Datasheet%20Rev1.0.pdf)

## Dependent Libraries

* [AXP202X_Library](https://github.com/lewisxhe/AXP202X_Library)
* [Arduino_GFX](https://github.com/moononournation/Arduino_GFX)
* [Adafruit_BME280_Library](https://github.com/adafruit/Adafruit_BME280_Library)
* [RadioLib](https://github.com/jgromes/RadioLib)
* [TinyGPSPlus](https://github.com/mikalhart/TinyGPSPlus)
* [U8g2](https://github.com/olikraus/u8g2)
* [SensorsLib](https://github.com/lewisxhe/SensorsLib)