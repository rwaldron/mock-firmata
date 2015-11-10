var mocks = require("../index.js");
var Firmata = require("../mock-firmata");
var Pins = require("../mock-pins");
var SerialPort = require("../mock-serialport");

if (mocks.Firmata !== Firmata) {
  console.log(mocks.Firmata, Firmata);
  console.log("MockFirmata not exported correctly");
  process.exit(1);
}

if (mocks.Pins !== Pins) {
  console.log("MockPins not exported correctly");
  process.exit(1);
}

if (mocks.SerialPort !== SerialPort) {
  console.log("MockSerial not exported correctly");
  process.exit(1);
}


// TODO: write some real tests?
