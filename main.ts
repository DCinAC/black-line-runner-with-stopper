radio.setGroup(69)
basic.forever(function () {
    if (mbit_Robot.Avoid_Sensor(mbit_Robot.enAvoidState.NOOBSTACLE)) {
        if (mbit_Robot.Line_Sensor(mbit_Robot.enPos.LeftState, mbit_Robot.enLineState.Black)) {
            mbit_Robot.CarCtrlSpeed2(mbit_Robot.CarState.Car_Run, 20, 50)
        } else if (mbit_Robot.Line_Sensor(mbit_Robot.enPos.RightState, mbit_Robot.enLineState.Black)) {
            mbit_Robot.CarCtrlSpeed2(mbit_Robot.CarState.Car_Run, 50, 20)
        } else {
            mbit_Robot.CarCtrlSpeed2(mbit_Robot.CarState.Car_Run, 50, 50)
        }
    } else {
        mbit_Robot.CarCtrl(mbit_Robot.CarState.Car_Stop)
        radio.sendString("success")
    }
})
