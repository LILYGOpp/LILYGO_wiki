---
title: Firmware
keywords: Firmware
desc: Firmware
tags: START, Firmware, LILYGO
order: 1
date: LILYGO Device Firmware
show_source: false
---


## DISPLAY 
### T-Display-S3
| Product                 | Firmware Name                             | Description
| ----------------------- | ----------------------------------------- |------------|
| [T-Display-S3][1]       | [ScreenDetection](./bin/T-Display-S3/ScreenDetection.bin)  |
| [T-Display-S3][1]       | [Factory](./bin/T-Display-S3/firmware_no_touch.bin)        |
| [T-Display-S3-Touch][2] | [Factory](./bin/T-Display-S3/firmware_touch.bin)           |
| [T-Display-S3-MIDI][3]  | [firmware](./bin/T-Display-S3/T-Display-S3-MIDI_V1.0.0_firmware.bin) |Original
||[firmware](./bin/T-Display-S3/T-Display-S3-MIDI_V1.0.1_firmware.bin) |Fixed T-Display S3 MIDI left and right channel error issue


[1]: https://www.lilygo.cc/products/t-display-s3?variant=42589373268149
[2]: https://www.lilygo.cc/products/t-display-s3?variant=42351558590645
[3]: https://www.lilygo.cc/products/t-display-s3?variant=43164741632181

### T-Display-S3 Pro

 | firmware                          | Describe                                                                                              |
 | --------------------------------- | ----------------------------------------------------------------------------------------------------- |
 | Factory_1.x.bin                   | Default factory-installed desktop firmware                                                            |
 | UnitTest_V1.x_Release.bin         | Firmware for testing hardware, outputting debugging information to Qwiic UART                         |
 | UnitTest_V1.x_Debug.bin           | Firmware for testing hardware, output debugging information to USB CDC                                |
 | UnitTest_V1.x_DiscChg_Release.bin | Firmware for testing hardware,Disable charge function, outputting debugging information to Qwiic UART |
 | UnitTest_V1.x_DiscChg_Debug.bin   | Firmware for testing hardware,Disable charge function, output debugging information to USB CDC        |

<details>
<summary>
V1.0
</summary>

| Product                 | Firmware Name                             | 
| ----------------------- | ----------------------------------------- |
| [T-Display-S3-Pro](https://www.lilygo.cc/products/t-display-s3-pro)|[Factory](./bin/T-Display-S3-Pro/Factory_V1.0.bin) |
| |[Release](./bin/T-Display-S3-Pro/Factory_V1.0_Release.bin)|
||[debug](./bin/T-Display-S3-Pro/UnitTest_V1.0_Debug.bin)|
||[DiscChg_Release](./bin/T-Display-S3-Pro/UnitTest_V1.0_DiscChg_Release.bin)|
||[DiscChg_Debug](./bin/T-Display-S3-Pro/UnitTest_V1.0_DiscChg_Debug.bin)|

</details>

<!-- ***************************************************** -->

<details>
<summary>
V1.1
</summary>

| Product                 | Firmware Name                             | 
| ----------------------- | ----------------------------------------- |
| [T-Display-S3-Pro](https://www.lilygo.cc/products/t-display-s3-pro)|[Factory](./bin/T-Display-S3-Pro/Factory_V1.1.bin) |
| |[Release](./bin/T-Display-S3-Pro/Factory_V1.1_Release.bin)|
||[debug](./bin/T-Display-S3-Pro/UnitTest_V1.1_Debug.bin)|
||[DiscChg_Release](./bin/T-Display-S3-Pro/UnitTest_V1.1_DiscChg_Release.bin)|
||[DiscChg_Debug](./bin/T-Display-S3-Pro/UnitTest_V1.1_DiscChg_Debug.bin)|

</details>


###



## LoRa
### LoRa32

<details>
<summary>
LoRa32 V1.3
</summary>

| Product                 | Firmware Name                             | 
| ----------------------- | ----------------------------------------- |
| [T3 LoRa32 V1.3](https://lilygo.cc/products/lora-v1-3)|
| |[recv-868M](./bin/LoRa32/firmware-1_3-recv--868M.bin) |
| |[send-868M](./bin/LoRa32/firmware-1_3-send--868M.bin)|
| |[recv-915M](./bin/LoRa32/firmware-1_3-recv--915M.bin) |
| |[send-915M](./bin/LoRa32/firmware-1_3-send--915M.bin)|
</details>
<!-- ***************************************************** -->

<details>
<summary>
LoRa32 V1.6.1
</summary>

| Product                 | Firmware Name                             | 
| ----------------------- | ----------------------------------------- |
| [T3 LoRa32 V1.6.1](https://lilygo.cc/products/lora3)|
| |[recv-433M](./bin/LoRa32/firmware-1_6_1-recv-433M.bin) |
| |[send-433M](./bin/LoRa32/firmware-1_6_1-send-433M.bin)|
| |[recv-868M](./bin/LoRa32/firmware-1_6_1-recv-868M.bin) |
| |[send-868M](./bin/LoRa32/firmware-1_6_1-send-868M.bin)|
| |[recv-915M](./bin/LoRa32/firmware-1_6_1-recv-915M.bin) |
| |[send-915M](./bin/LoRa32/firmware-1_6_1-send-915M.bin)|

</details>

<!-- ***************************************************** -->

<details>
<summary>
LoRa32 V3
</summary>

| Product                 | Firmware Name                             | 
| ----------------------- | ----------------------------------------- |
| [T3 LoRa32 V3](https://lilygo.cc/products/t3-tcxo)|
| |[T3_V_3_TXCO_Recv](./bin/LoRa32/T3_V_3_TXCO_Recv.bin) |
| |[T3_V_3_TXCO_Sender](./bin/LoRa32/T3_V_3_TXCO_Sender.bin)|

</details>


### T-LoRa-Pager

| Product                 | Firmware Name                             | 
| ----------------------- | ---------- |
| [T-LoRa-Pager](https://lilygo.cc/products/t-lora-pager)|
| |[Factory.LR1121](./bin/T-LoRaPager/factory.tlora.pager.lr1121.20251031.bin)|
| |[Factory.SX1262](./bin/T-LoRaPager/factory.tlora.pager.sx1262.20251031.bin)|


## Portable

### T-Echo

>`firmware-xxx.uf2` firmware includes LoRa transceiver, BLE connection, all hardware function test items, about ble , please download nRF Connect on google play, and then you can scan Bluetooth devices through nRF Connect.

>`gps_factory.uf2` Used to diagnose whether the hardware is normal and test when GPS fails.

| Product                 | Firmware Name                             | 
| ----------------------- | ----------------------------------------- |
| [T-Echo](https://lilygo.cc/products/t-echo-lilygo)|
| |[firmware-433M](./bin/T-Echo/firmware-433M.uf2) |
| |[firmware-868M](./bin/T-Echo/firmware-868M.uf2)|
| |[firmware-915M](./bin/T-Echo/firmware-915M.uf2) |
| |[firmware-920M](./bin/T-Echo/firmware-920M.uf2) |
| |[firmware-923M](./bin/T-Echo/firmware-923M.uf2) |
| |[gps_factory](./bin/T-Echo/gps_factory.uf2)|
| |[Meshtastic_Online](https://flasher.meshtastic.org) |

#### How to update the firmware?

- Connect the USB-C port to the device. Do not use the USB-C to USB-C port; use the USB-A to USB-C port.

- Double-click the top left button on the device. Remember to double-click. If this doesn't work, try again.

- Once the disk is visible on your computer, drag the `*.uf2` firmware file to the disk and wait for the file to copy.

- The device should boot normally

### T-Deck

| Firmware Name | description  |  
|-------------------|-------------|
| [T-Keyboard.bin](./bin/T-Deck/T-Keyboard_Keyboard_ESP32C3_250620.bin) | T-Deck Keyboard C3 firmware               |   
| [T-Deck_UnitTest.bin](./bin/T-Deck/T-Deck_UnitTest_250620.bin) | T-Deck/T-Deck-Plus function test firmware |   
| [T-Deck-Plus-TouchFix.bin](./bin/T-Deck/T-Deck-Plus-TouchFix_241203.bin) | T-Deck-Plus Touch Fix                     |   
| [Meshtastic Online](https://flasher.meshtastic.org)  | Meshtastic Web flasher    |   


### T-Deck pro

|            Firmware                |         description            |
| :--------------------------------: | :-------------------------: |
|[Factory_v1.2](./bin/T-Deck-Pro/H693_factory_v1.3_20251015.bin)   |      Factory firmware       |
|[Factory_v1.2_fix](./bin/T-Deck-Pro/H693_factory_v1.2_20250412_fix.bin)|        Fix firmware     |
|[Test_EPD](./bin/T-Deck-Pro/Test_EPD.bin)             |        Display test         |
|[Test_pcm5102a](./bin/T-Deck-Pro/Test_pcm5102a.bin)           | Sound test(non-4G version) |



### T-Watch S3

|            Firmware                |         description            |
| :--------------------------------: | :-------------------------: |
| [Watch_S3_Factory](./bin/T-Watch/factory.twatchs3.sx1262.20251031.bin)|SX1262 Factory firmware    |
| [Watch_S3_Factory](./bin/T-Watch/factory.twatchs3.sx1280.20251031.bin)|SX1280 Factory firmware    |
| [Watch_Ulrta_Factory](./bin/T-Watch/factory.watch.ultra.sx1262.20251106.bin)|Watch Ultra Factory firmware    |

