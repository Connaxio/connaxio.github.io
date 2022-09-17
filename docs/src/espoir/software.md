# Software

Espoir is compatible with _many_ software tools to accelerate development. This section outlines how to quickly get started with the most popular (and officially supported) ones.

## [ESP-IDF](https://docs.espressif.com/projects/esp-idf/en/stable/esp32/get-started/index.html)

ESP-IDF is Espressif's IoT Development Framework, the most barebones development framework for ESP32. It is the basic building block for all other frameworks, and features drivers for all peripherals. To get started, simply follow the [Getting Started guide](https://docs.espressif.com/projects/esp-idf/en/stable/esp32/get-started/index.html).

At the time of writing, most frameworks are based on ESP-IDF 4.4, and ESP-IDF 5.0 is currently in beta release.

## [Arduino-ESP32](https://docs.espressif.com/projects/arduino-esp32/en/latest/getting_started.html)

To program Espoir with Arduino, simply follow the [official Arduino-ESP32 documentation](https://docs.espressif.com/projects/arduino-esp32/en/latest/getting_started.html). Select `Connaxio's Espoir` as your board, either in ArduinoIDE or PlatformIO.

If you wish to quickly test Espoir, you can run the `ETH_LAN8720` example with the following modified line:

```cpp
ETH.begin(0, -1, 32, 33, ETH_PHY_KSZ8081, ETH_CLOCK_GPIO0_IN);
```

## [MicroPython](https://micropython.org/)

MicroPython for Espoir is currently supported by Connaxio ([source](https://github.com/Connaxio/micropython/tree/feature/espoir)).

You can download the compiled binary file here: [micropython-espoir-v1.19.1.bin](https://docs.connaxio.com/micropython/micropython-espoir-v1.19.1.bin).

If flashing for the first time, you should first erase Espoir's flash:

```bash
esptool.py --chip esp32 --port <PORT> erase_flash
```

then upload the binary file, by replacing `<PORT>` with the actual serial port, typically `/dev/ttyUSBx` for Linux and `COMx` for Windows:

```bash
esptool.py -p <PORT> -b 460800 --before default_reset --after hard_reset --chip esp32  write_flash --flash_mode dio --flash_size detect --flash_freq 80m 0x1000 micropython-espoir-v1.19.1.bin
```

esptool can be downloaded from the [official GitHub repository](https://github.com/espressif/esptool/releases).

You are now ready to open a serial port to Espoir with a baudrate of `115200`. After pressing `ENTER` once, you can type the following commands to establish your first LAN connection:

```python
from machine import Pin
import network

lan=network.LAN(mdc=Pin(32),mdio=Pin(33),power=None,phy_type=network.PHY_KSZ8081,phy_addr=0)

lan.active(1)
lan.ifconfig() # Prints DHCP configuration.
```

## [Tasmota](https://tasmota.github.io/docs/)

The preferred way to install Tasmota on Espoir is through [TasmoCompiler](https://github.com/benzino77/tasmocompiler) on [GitPod](https://gitpod.io/#https://github.com/benzino77/tasmocompiler). Select `ESP32`:`Generic` and check `Ethernet` and other desired functionalities.

For Tasmota 12.1.1, the following `Custom parameters` must be added for Ethernet:

```cpp
#ifdef ETH_TYPE
  #undef ETH_TYPE
#endif
#define ETH_TYPE        6	// ETH_PHY_KSZ8081

#ifdef ETH_ADDRESS
  #undef ETH_ADDRESS
#endif
#define ETH_ADDRESS     0 

#ifdef ETH_CLKMODE
  #undef ETH_CLKMODE
#endif
#define ETH_CLKMODE     0    // ETH_CLOCK_GPIO0_IN
```

Additionally, the following pins must be configured:
- Pin `32` : `ETH_MDC`
- Pin `33` : `ETH_MDIO`
