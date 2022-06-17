<center>

![Pmod_Compatible_mikroShield_iso](./pmod-compatible-mikroshield-iso1.jpg)

</center>


# Pmod<sup>TM</sup> Compatible mikroShield

## Overview
The Pmod<sup>TM</sup> Compatible mikroShield is a simple mikroBUS<sup>TM</sup> add-on board that links the Digilent Pmod<sup>TM</sup> Interface Specification to the mikroBUS<sup>TM</sup> standard. 

The Pmod<sup>TM</sup> Compatible mikroShield is fully passive and allows for connecting 6-pins and 12-pins Pmod<sup>TM</sup> Compatible modules, as well as various wired sensors and breakout boards.

The Digilent Pmod<sup>TM</sup> Compatible connector's supply voltage can be switched between 3.3 V and 5 V using the header, and the I<sup>2</sup>C pull-up resistors can be disconnected as necessary.

## Dimensions and Top & Bottom Views
<center>

![Pmod_Compatible_mikroShield_top_bottom](./pmod-compatible-mikroshield-top-bot-01.jpg)

</center>

The Pmod<sup>TM</sup> Compatible mikroShield conforms to the "S" size of the [mikroBUS<sup>TM</sup> add-on boards standard](https://download.mikroe.com/documents/standards/mikrobus/mikrobus-add-on%20boards-standard.pdf).

## Pinout

<center>

**Table: Pinout**
| Pmod<sup>TM</sup> pin #   | mikroBUS<sup>TM</sup> add-on  | mikroBUS<sup>TM</sup> socket  | [Espoir](https://docs.connaxio.com/espoir/hardware.html)'s ESP32-MINI-1 |
|:--------------------------|:------------------------------|:------------------------------|:----------------------|
| 1                         | CS                            | CS                            | IO15                  |
| 2                         | SDI                           | MOSI / SDO                    | IO13                  |
| 3                         | SDO                           | MISO / SDI                    | IO12                  |
| 4                         | SCK                           | SCK                           | IO14                  |
| 7                         | TX                            | RX                            | IO9                   |
| 8                         | RX                            | TX                            | IO10                  |
| 9                         | SCL                           | SCL                           | IO18                  |
| 10                        | SDA                           | SDA                           | IO23                  |

**Table: Pinout (continued)**
| Pmod<sup>TM</sup> pin #   | Pmod<sup>TM</sup> SPI | Pmod<sup>TM</sup> I<sup>2</sup>C  | Pmod<sup>TM</sup> UART    |
|:--------------------------|:----------------------|:------------------------------|:------------------------------|
| 1                         | CS                    | INT                           | CTS                           |
| 2                         | MOSI                  | RESET                         | TXD                           |
| 3                         | MISO                  | SCL                           | RXD                           |
| 4                         | SCK                   | SDA                           | RTS                           |
| 7                         | IO7                   | IO7                           | IO7                           |
| 8                         | IO8                   | IO8                           | IO8                           |
| 9                         | IO9                   | IO9                           | IO9                           |
| 10                        | IO10                  | IO10                          | IO10                          |

</center>

For more details, refer to the [Digilent Pmod<sup>TM</sup> Interface Specification](https://digilent.com/reference/_media/reference/pmod/pmod-interface-specification-1_3_1.pdf).




## Additional Resources
- [Pmod<sup>TM</sup> Compatible mikroShield's source on GitHub](https://github.com/Connaxio/pmod-compatible-mikroshield)
- [Pmod<sup>TM</sup> reference and modules](https://digilent.com/reference/pmod/start)
