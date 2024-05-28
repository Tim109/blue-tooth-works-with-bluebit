bluetooth.onBluetoothConnected(function () {
    basic.showString("C")
})
bluetooth.onBluetoothDisconnected(function () {
    basic.showString("D")
})
basic.showString("Blue NP")
bluetooth.startAccelerometerService()
bluetooth.startTemperatureService()
bluetooth.startLEDService()
