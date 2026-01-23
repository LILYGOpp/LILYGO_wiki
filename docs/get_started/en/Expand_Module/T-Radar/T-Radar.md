---
title: LILYGO T-Radar
show_source: false
tags: Radar, 60GHz, A121, High Precision, IoT, Sensing
---

<!-- **[English](README.MD) | 中文** -->

<div style="width:100%; display:flex;justify-content: center;">
  <img src="./assets/T-Radar-1.jpg" alt="T-Radar V1.0 Product Main Image" width="80%">
</div>

<div style="padding: 1em 0 0 0; display: flex; justify-content: center">
  <a target="_blank" style="margin: 1em;color: white; font-size: 0.9em; border-radius: 0.3em; padding: 0.5em 2em; background-color:rgb(103, 175, 8)" href="https://lilygo.cc/products/t-radar">Purchase on Official Store</a>
</div>

## 🚀 Product Overview

**LILYGO T‑Radar V1.0** is a high-precision proximity detection expansion board based on the **60GHz A121 radar chip**. It utilizes **Pulsed Coherent Radar (PCR) technology**, enabling distance measurement up to **20 meters**, with **millimeter-level absolute accuracy** and **micrometer-level relative accuracy**. It is suitable for various applications such as high-precision motion sensing, material identification, object tracking, and vital sign detection.

### Core Features

- ✅ **High-Precision Ranging**: Absolute accuracy at millimeter level, relative accuracy at micrometer level.
- ✅ **Long-Range Detection**: Maximum measurement range of 20 meters.
- ✅ **Multi-Functional Radar**: Supports motion detection, material classification, object tracking, breathing, and heart rate monitoring.
- ✅ **Plug and Play**: Compatible with various LILYGO mainboards (requires sufficient external I/O).
- ✅ **Industrial-Grade Design**: Suitable for scientific research, medical, sports, and engineering measurements.

## 📊 Technical Specifications

| Item | Parameter |
|------|------|
| Radar Chip | A121 60GHz Pulsed Coherent Radar (PCR) |
| Maximum Measurement Distance | 20 meters |
| Absolute Accuracy | Millimeter level (mm) |
| Relative Accuracy | Micrometer level (µm) |
| Interface Type | Standard expansion board interface |
| Power Supply Voltage | 3.3V / 5V (depending on the mainboard) |
| Communication Interface | I²C / SPI (configurable via jumpers) |
| Application Scenarios | Motion sensing, material identification, engineering measurement, medical detection |

### Pinout Diagram

<img src="./assets/T-Radar-pin.jpg" alt="T-Radar Pinout Diagram" width="100%">

### Kit Contents

- T‑Radar V1.0 Expansion Board ×1
- Pin Headers (optional for soldering) ×1 set
- Screws and Mounting Accessories ×1 set
- Quick Start Guide ×1

## 🛠️ Installation and Usage

### Connection Diagram

<img src="./assets/T-Radar-set.jpg" alt="T-Radar Installation Diagram" width="100%">

### Usage Steps

1. **Hardware Connection**
   - Connect the T‑Radar to a compatible LILYGO mainboard (e.g., T3, T‑Beam, etc.) via the pin headers.
   - Ensure the mainboard provides sufficient I/O and power (3.3V/5V).

2. **Software Configuration**
   - Download and install the radar driver library.
   - Initialize the radar module via I²C or SPI interface.
   - Configure measurement modes (distance, motion, vital signs, etc.).

3. **Data Acquisition**
   - Read radar data such as distance, speed, or vital signs.
   - Perform data filtering and algorithm processing as needed.

## 🧭 Application Scenarios

### 🏃 Sports and Athletics
- Athlete motion capture and analysis.
- Fitness equipment motion trajectory tracking.

### 🧱 Materials and Industry
- Material classification and identification.
- Surface deformation detection.

### ⚙️ Engineering and Measurement
- High-precision object distance tracking.
- Mechanical equipment vibration monitoring.

### 🏥 Medical and Health
- Non-contact breathing detection.
- Heart rate monitoring (at rest).

### 🏠 Smart Home and IoT
- Human presence detection.
- Gesture recognition for interaction.

## ❓ Frequently Asked Questions

**Q1: Can T‑Radar be used outdoors?**  
A: Yes, 60GHz radar is less affected by weather, but heavy rain or snow may cause slight signal attenuation.

**Q2: Does it support multi-target detection?**  
A: The current version is mainly designed for single-target high-precision ranging and tracking. Multi-target identification requires additional algorithm processing.

**Q3: What is the maximum refresh rate?**  
A: It depends on the main controller chip and communication interface. Typically, it supports data update rates above 100Hz.

**Q4: Can it detect objects behind glass or walls?**  
A: The radar can penetrate thin non-metallic layers, but metallic materials will completely block the signal.

## 📚 Resource Downloads

- [docs.acconeer](https://docs.acconeer.com/en/latest/detectors/a121/index.html)
- [developer.acconeer](https://developer.acconeer.com/home/a121-docs-software/)