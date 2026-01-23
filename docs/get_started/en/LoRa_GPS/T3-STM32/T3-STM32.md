---
title: LILYGO T3-STM32
show_source: false
tags: STM32WL55, LoRa, OLED, Low Power, IoT
---

<div style="width:100%; display:flex;justify-content: center;">

![T3-STM32](./assets/T3-STM32-1.jpg)

</div>

<div style="padding: 1em 0 0 0; display: flex; justify-content: center">
    <a target="_blank" style="margin: 1em;color: white; font-size: 0.9em; border-radius: 0.3em; padding: 0.5em 2em; background-color:rgb(63, 201, 28)" href="https://lilygo.cc/products/t3-stm32">Official Store</a>
</div>

## Purchase Links
| Product | SOC | FLASH | SRAM | Link |
| :-----: | :-: | :---: | :--: | :--: |
| T3-STM32 | STM32WL55CCU6 | 256KB | 64KB | [LILYGO Store](https://lilygo.cc/products/t3-stm32) |

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

LILYGO T3 STM32 is a versatile IoT development board based on the STM32WL55CCU6 low-power microcontroller, integrating LoRa long-range communication module that supports 433/868/915MHz multi-band, adapting to global IoT application scenarios. Its hardware configuration includes 256KB flash and 64KB SRAM, equipped with an SSD1315-driven OLED display (controlled via I2C interface), TF card storage expansion (SPI protocol), and solar input interface (4.4~6V), supporting outdoor energy harvesting and low-power operation. The onboard rich GPIO pins are compatible with various peripheral interfaces such as SPI, I2C, timers, and reserved QWIIC ecosystem connectors for easy sensor expansion. Suitable for rapid development of IoT terminals such as remote monitoring, environmental sensing, LoRa gateways, and solar-powered devices.

## Preview

### Physical Image

<div style="width:100%; display:flex;justify-content: center;">

![T3-STM32](./assets/T3-STM32-2.jpg)

</div>

### Pin Diagram

<img src="./assets/T3-STM32-3.jpg" alt="summary" width=100%>

## Modules

### MCU
* Chip: STM32WL55CCU6
* Architecture: 32-bit Arm® Cortex®-M4 + Cortex®-M0+ Dual-core
* FLASH: 256KB
* SRAM: 64KB
* Built-in Radio: LoRa®, (G)FSK, (G)MSK, BPSK

### Display
* Size: 0.96-inch OLED display
* Resolution: 128×64px
* Driver Chip: SSD1315
* Interface: I2C

### Wireless Communication
* LoRa: SX1262
* Frequency Band: 433MHz/868MHz/915MHz (selectable)
* Antenna Interface: Standard SMA interface

### Power Management
* Power Supply: USB Type-C
* Solar Input: 4.4~6V
* Battery Switch: Supports battery power switching

### Overview

| Component | Description |
| :--: | :--: |
| MCU | STM32WL55CCU6 Dual-core Cortex-M4+M0+ |
| FLASH| 256KB |
| SRAM | 64KB |
| Display | 0.96-inch SSD1315 OLED (128×64) |
| LoRa | SX1262 (433/868/915MHz) |
| Built-in Radio | LoRa®, (G)FSK, (G)MSK, BPSK |
| Storage | TF Card Expansion (SPI) |
| USB | 1 × USB Port (TYPE-C) |
| Expansion Interface | 2 × QWIIC Interface + 2.54mm Pitch 2×13 GPIO |
| Debug Interface | 2.54mm Pitch 4-pin SWD Interface |
| Power Interface | Solar Input Interface (4.4~6V) |
| Antenna Interface | LoRa Antenna Interface + 5-pin Antenna Socket |
| Buttons | 1 x RESET Button + 1 x BOOT Button |
| Mounting Holes | 2 × 2mm Positioning Holes |
| Dimensions | 66 × 27 × 13 mm |

## Quick Start

### Development Tools Preparation

#### Download Tools
1. **STM32CubeProgrammer** - [ST Official Download](https://www.st.com/en/development-tools/stm32cubeprog.html)
2. **J-Link** - [SEGGER Download](https://www.segger.com/downloads/jlink/#J-LinkSoftwareAndDocumentationPack)
3. **ST-Link** - [ST Official Driver](https://www.st.com/en/development-tools/stsw-link009.html)

> **Note**: JLink, STLink, and STM32CubeProgrammer all require drivers to function properly

### Development Platforms
1. [STM32CubeIDE](https://www.st.com/en/development-tools/stm32cubeide.html#get-software)
2. [VS Code](https://code.visualstudio.com/)
3. [PlatformIO](https://platformio.org/)

### Example Support

~~~
├─1_led : Create simple projects
├─2_jlink_rtt_print : Used only to test jlink printing
├─3_sdcard : Test TF card screen
├─4_oled : Test oled screen
├─5_RF_test : This example is AT Slave and is only used for RF testing
├─6_SubGHz_TXRX : Transceiver test using Lora modulation
├─DeepSleep : Test board sleep power consumption
├─PingPong : Port CubeMX package SubGHz_Phy_PingPong program
~~~

## Related Tests

## FAQ

* **Q. Which debuggers are supported?**  
  A. Supports various debuggers like ST-Link, J-Link, connected via 4-pin SWD interface.

* **Q. What are the requirements for solar input?**  
  A. Supports 4.4~6V solar input, suitable for outdoor energy harvesting applications.

* **Q. How to select LoRa frequency band?**  
  A. Provides three frequency band versions: 433MHz, 868MHz, 915MHz. Please select according to regional regulatory requirements.

## Projects
* [T3-STM32_V1.0](https://github.com/Xinyuan-LilyGO/T3-STM32/blob/master/hardware/T3_STM32%20V1.0%2024-07-30.pdf)

## Resources
* [SSD1315 Datasheet](https://github.com/Xinyuan-LilyGO/T3-STM32/blob/master/hardware/SSD1315.pdf)
* [STM32WL55 Datasheet](https://www.st.com/resource/en/datasheet/stm32wl55cc.pdf)
* [SX1262 Datasheet](https://www.semtech.com/products/wireless-rf/lora-core/sx1262)

## Dependent Libraries
* [STM32 HAL Library](https://www.st.com/en/embedded-software/stm32cubewl.html)
* [STM32CubeMX](https://www.st.com/en/development-tools/stm32cubemx.html)
* [LoRa Radio Driver](https://github.com/stm32-hotspot/STM32WL_LoRa_Radio_Driver)