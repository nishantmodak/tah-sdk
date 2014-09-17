ELECTRONICS DICE WITH TAH
===

[Image of Dice]

**TAH** is a **Bluetooth Low Energy Open Source** Development platform compatible with Arduino.
The **TAH** can be used for designing some intresting projects like **Electronic Dice**. Current status of the **Dice** will be updated in Real Time and displays the numbers on your Smart Phone.

## Materials Required

* **TAH** board.
* General PCB Board.
* ADXL335 3-Axis Accelerometer.
* 7805 Voltage Regulator.
* 3D plastic casing for Dice.
* 9V HW Battery.
* Male pinheads.
* Female pinheades.
* Wire Stripper.
* Soldering Gun and Soldering Metal.
* PC/Laptop with Arduino IDE 1.1.0.5 Installed.
* Your Smart Phone
* Download the app for Electrons Dice.To Download [Click Here](http://www.tah.io/start.html)


[Images of all Materials]

## Step : 1

Now lets begin with to creating your first Electronics Dice.Lets collect all the materials required to design the Electronics Dice.

Cut the PCB as per your design  and solder the  male and female pinheads as shown in the image below.
 To interface 3-Axis Accelerometer with **TAH** use with analog pins of the **TAH** here i am using A2,A3,A4 analog channels to read the positions of the X,Y and Z axis  of Co-ordinates. please refer the datasheet for Accelerometer ADXL335 [Click here](https://www.sparkfun.com/datasheets/Components/SMD/adxl335.pdf)

[Images Circuit Diagram]

## Step : 2

Connect the LM 7805 voltage regulator to step down and regulate the constant 5V DC with filter capacitors for **TAH board** because our **TAH board** needs constant 5VDC supply.
 
Onces we have done with **TAH** Hardware setups and Interfacing circuit with **TAH** shown in the images above.
Now download the **TAH** Open Source library for the board to get working with your Smart Phone.
To Download the **TAH** library from [here.](http://www.tah.io/start.html)

 [Soldered PCB Board]
## Step : 3

**TAH** is uses the Bluetooth Low Energy module to communicate with your Smart phone.
To see the change in the Electronics Dice Status on your Smart phone you need to download the app for **Electronics Dice** from the app store [here](http://www.tah.io/start.html).

Once you have Downloaded all the Software files, Compile the Sketch for Electronics Dice in the Arduino IDE 1.1.0.5.

## Step : 4

Follow the steps to see the Electronics Dice Status in your Smart Phone.

* Download the app for Electronics Dice on app store [here](http://www.tah.io/start.html)
* Open the TAH DICE app in your Smart Phone.
* Scan for the Bluetooth Devices.
* Connect with **DICE**

Now Start enjoying numbers from Electronics Dice.


[Images of DICE and Smart Phone with O/p]


Watch the Electronics Dice Video
===









    








