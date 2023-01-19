input.onButtonPressed(Button.A, function () {
    num1 = randint(1, 10)
})
input.onButtonPressed(Button.AB, function () {
	
})
input.onButtonPressed(Button.B, function () {
	
})
input.onGesture(Gesture.Shake, function () {
    for (let index = 0; index < 4; index++) {
        wave.scrollImage(1, 200)
    }
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
let wave: Image = null
wave = images.createBigImage(`
    . . . . . . . . . .
    . . . . . . . # . .
    . . # . . . # . # .
    . # . # . # . . . #
    # . . . # . . . . .
    `)
