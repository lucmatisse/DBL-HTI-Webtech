### 2IOA0 Group 2 Prototype
This prototype is a web based visual programming tool aimed at children between grade <grade> and <grade> who have Autism Spectrum Disorder (ASD). The current version runs locally and is based on BlocklyDuino.

> See [BlockDuino v2](https://github.com/BlocklyDuino/BlocklyDuino-v2) for the source and original README.

### Instructions
The current prototype version is not yet hosted and therefore runs locally.

To start the tool:
* Find `arduino_web_server.py` in the same folder as this README file and run it.
* Check the Command Prompt for confirmation. The window should say: `Blocklyduino can now be accessed at http://127.0.0.1:8080/`
* Find the `2IOA0 Group 2 Prototype` shortcut in the same folder and run it.

The visual interface should now be open and the tool is ready to go!

To use the tool:
* Browse the categories in the toolbox on the left to find the code blocks
* Click and drag blocks to the workspace and snap them together to create a program
* When ready, hit the `Upload` button to send the code to the Arduino

Additional features:
* The `Reset Arduino` button stops the current Arduino programming
* The `Clear Workspace` button clears all blocks from the workspace (after confirmation)
* The `Save Arduino Code` button allows the user to save (download) the Arduino code directly
* The `Save Project` and `Load Project` buttons allow the user to save and load the current block configuration and code
* The `Low Stimuli mode` button activates low stimuli mode, a mode that mutes sounds and reduces colors to help prevent sensory overload


* Programming Arduino with visually drag and drop code blocks
* Generate fully compatible Arduino source code
* Interactive Arduino board with 10+ predefined Grove sensor blocks
* Load different on-site examples with url parameters

### Usage
1. Open browser to BlocklyDuino, drag and drop blocks to make an Arduino program
2. Select the `Arduino` tab and copy all of the source code into an existing or new project in the Arduino IDE
3. Press the `Upload` button in the Arduino IDE to burn the code into a connected Arduino board

OR (if running `arduino_web_server.py`):
1. Open browser to BlocklyDuino, drag and drop blocks to make an Arduino program.
2. Select the `Arduino` tab and press the `Upload` button. (press the `Reset` button to upload an empty program)

### Authors

