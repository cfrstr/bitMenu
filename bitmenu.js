let showStepAnim = 0
let onMenu = 0
let menuLocation = 0
let counterNumb = 0
let showLoadAnim = 0
let stepCount = 0
let screenOn = 0
input.onGesture(Gesture.TiltLeft, () => {
    if (menuLocation == 4) {
        counterNumb += -1
    }
})
input.onButtonPressed(Button.A, () => {
    if (onMenu == 1) {
        menuLocation += -1
    }
})
function loadAnim() {
    showLoadAnim = 1
    basic.pause(2000)
    showLoadAnim = 0
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
}
input.onButtonPressed(Button.B, () => {
    if (onMenu == 1) {
        menuLocation += 1
    }
})
input.onButtonPressed(Button.AB, () => {
    if (menuLocation == 5) {
        if (screenOn == 1) {
            led.enable(false)
            screenOn = 0
        } else if (screenOn == 0) {
            led.enable(true)
            screenOn = 1
        }
    } else {
        basic.showIcon(IconNames.No)
    }
})
input.onGesture(Gesture.TiltRight, () => {
    if (menuLocation == 4) {
        counterNumb += 1
    }
})
function progStepometer() {
    if (showStepAnim == 0) {
        basic.showLeds(`
            . # . . .
            . # . . .
            . # # . .
            . # # # .
            . . . . .
            `)
        showStepAnim = 1
        basic.pause(500)
    }
    basic.showNumber(stepCount)
}
input.onGesture(Gesture.Shake, () => {
    stepCount += 1
    if (menuLocation == 4) {
        counterNumb = 0
    }
})
function homeScreen() {
    basic.showLeds(`
        . . . . .
        . # . # .
        # . . . #
        . # . # .
        . . . . .
        `)
}
function progCounter() {
    basic.showNumber(counterNumb)
}
screenOn = 1
counterNumb = 0
loadAnim()
menuLocation = 5
onMenu = 1
basic.forever(() => {
    if (showLoadAnim == 1) {
        led.toggle(Math.random(5), Math.random(5))
    }
})
basic.forever(() => {
    if (screenOn == 1) {
        if (onMenu == 1) {
            if (menuLocation == 2) {

            } else if (menuLocation == 3) {

            } else if (menuLocation == 4) {
                progCounter()
            } else if (menuLocation == 5) {
                showStepAnim = 0
                homeScreen()
            } else if (menuLocation == 6) {
                progStepometer()
            } else if (menuLocation == 7) {
                showStepAnim = 0
            } else if (menuLocation == 8) {

            }
        }
    }
})
basic.forever(() => {
    if (menuLocation == 1) {
        menuLocation = 8
    } else if (menuLocation == 9) {
        menuLocation = 2
    }
})
basic.forever(() => {
    if (counterNumb < 0) {
        counterNumb = 0
    }
})
