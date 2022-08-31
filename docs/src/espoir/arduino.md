# Arduino

Arduino is a popular embedded development framework and is great for learning and for simple applications. A special setup may be required to program Espoir with Arduino, because the `ESP-MINI-1` may be single or dual core. Newer versions will eventually all be dual core.

There are a few ways to use the Arduino framework with Espoir. The instructions provided below are specialized for the single core version, but they will work for both single core and dual core processors.

## Arduino IDE

1. [Download Arduino IDE](https://www.arduino.cc/en/software) for your system and install it.

2. Follow Espressif's official [installation guide for Arduino IDE](https://docs.espressif.com/projects/arduino-esp32/en/latest/installing.html#installing-using-arduino-ide). Instead of the two provided Board Manager URLs, use the following link:

```url
https://docs.connaxio.com/arduino/package_connaxio_index.json
```

4. After installation, go to the `Tools` menu, select the board `Connaxio's Espoir`, connect Espoir and select the correct Port. You may then compile and upload an example sketch. Here is one:

```c
void setup() {
  // put your setup code here, to run once:
  Serial.begin(115200);
}

void loop() {
  // put your main code here, to run repeatedly:
  Serial.println("Hello world!");
  delay(1000);
}
```

You can see if everything is alright by opening the `Tools` > `Serial Monitor` (`Ctrl+Shift+M`) and setting the baudrate to `115200`.

### Troubleshooting

1. If you see errors during compilation, you may have to follow the manual installation steps for your operating system. These instructions are located further down the [installation guide](https://docs.espressif.com/projects/arduino-esp32/en/latest/installing.html#windows-manual-installation). However, instead of cloning Espressif's `arduino-esp32` repository, you will need to clone Connaxio's fork and `release-single-core` branch.
   
   ```bash
   ...
   git clone --single-branch --branch release-single-core https://github.com/Connaxio/arduino-esp32.git esp32 && \
   ...
   ```

```
2. If you can't upload your sketch, make sure you have selected the correct Port in the `Tools` menu. You may need to reboot your computer to update user permissions.


## PlatformIO IDE

1. [Follow the instructions](https://platformio.org/platformio-ide) to download and install PlatformIO IDE.

2. In VS Code, from the PlatformIO home page, select `Platforms` > `Installed`. If `Espressif 32` is not present, go to `Platforms` > `Embedded` and use the search bar to find and install it.

3. [Create a project](https://docs.platformio.org/en/latest/tutorials/espressif32/arduino_debugging_unit_testing.html#setting-up-the-project) and select `Connaxio's Espoir` as the project's board. In the project's `platformio.ini` file, set the following line:
   
   ```ini
   platform_packages = framework-arduinoespressif32 @ https://github.com/Connaxio/arduino-esp32.git#release-single-core
   ```

Your `platformio.ini` file should then look like this:

```ini{6}
[env:connaxio_espoir]
platform = espressif32
board = connaxio_espoir
framework = arduino
monitor_speed = 115200
platform_packages = framework-arduinoespressif32 @ https://github.com/Connaxio/arduino-esp32.git#release-single-core
```

4. [Follow the rest of the tutorial](https://docs.platformio.org/en/latest/tutorials/espressif32/arduino_debugging_unit_testing.html#adding-code-to-the-generated-project) to complete your first project with Espoir and PlatformIO IDE.

## Arduino libraries as an ESP-IDF component

This method requires no special configuration and is covered by the [official documentation](https://docs.espressif.com/projects/arduino-esp32/en/latest/esp-idf_component.html).
