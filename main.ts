input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Heart)
})
input.onGesture(Gesture.Shake, function () {
    basic.showIcon(IconNames.Rollerskate)
})
basic.forever(function () {
    basic.showString("pet")
    basic.showLeds(`
        # # . # #
        # # # # #
        . # # # .
        # # # # #
        . # # # .
        `)
})
