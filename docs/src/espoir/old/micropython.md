# MicroPython

MicroPython is supported for Espoir by Connaxio, until the related Github pull-request is merged into the main MicroPython branch.

## Source

The micropython port for Espoir can be found in [Connaxio's MicroPython fork](https://github.com/Connaxio/micropython/tree/feature/espoir).

## Bin file

The .bin file can be downloaded at the following link:

[micropython-espoir-v1.19.1.bin](https://docs.connaxio.com/micropython/micropython-espoir-v1.19.1.bin)

## Flashing

If it is the first time you flash MicroPython on Espoir, you should first erase the flash:

```bash
esptool.py --chip esp32 --port <PORT> erase_flash
```

To flash MicroPython on Espoir, the following command can be used:

```bash
esptool.py -p <PORT> -b 460800 --before default_reset --after hard_reset --chip esp32  write_flash --flash_mode dio --flash_size detect --flash_freq 80m 0x1000 micropython-espoir-v1.19.1.bin
```

Replace `<PORT>` with the actual serial port, typically `/dev/ttyUSBx` for Linux and `COMx` for Windows.

For flashing, esptool can be downloaded [from Github](https://github.com/espressif/esptool/releases).

## First steps: connect to LAN

1. Connect to Espoir via serial port at a baudrate of 115200
2. Send an empty line: press `ENTER`
3. Run the following commands:

```python
from machine import Pin
import network

lan=network.LAN(mdc=Pin(32),mdio=Pin(33),power=None,phy_type=network.PHY_KSZ8081,phy_addr=0)

lan.active(1)
lan.ifconfig()
```

You should see something similar appear:

```python
('192.168.1.122', '255.255.255.0', '192.168.1.1', '192.168.1.1')
```

If instead you see only `'0.0.0.0'`, make sure you are connected to the LAN and re-run the last command.

## Additional resources

More information can be obtained directly on [micropython.org](https://micropython.org/).
