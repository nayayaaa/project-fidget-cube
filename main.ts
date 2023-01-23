input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Heart)
})
input.onGesture(Gesture.ScreenDown, function () {
    basic.clearScreen()
    shake = 0
})
input.onButtonPressed(Button.AB, function () {
    basic.clearScreen()
    num1 = randint(1, 50)
    basic.showNumber(num1)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.SmallHeart)
})
input.onGesture(Gesture.Shake, function () {
    shake = 1
})
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
})
input.onLogoEvent(TouchButtonEvent.Released, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
let num1 = 0
let shake = 0
shake = 0
let wave = images.createBigImage(`
    . . . . . . . . . .
    . . . . . . . . . .
    . . # . . . # . . .
    . # . # . # . # . #
    # . . . # . . . # .
    `)
basic.forever(function () {
    if (shake == 1) {
        wave.scrollImage(1, 200)
    }
})
