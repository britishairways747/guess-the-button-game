let answer = 0
basic.forever(function () {
    answer = randint(1, 2)
})
input.onButtonPressed(Button.A, function () {
    if (answer == 2)
    basic.showLeds(`
    . . . . .
    . . . . #
    . . . # .
    # . # . .
    . # . . .
    `)

    basic.clearScreen()
    basic.pause(500)

    if (answer == 1)
    basic.showLeds(`
    # . . . #
    . # . # .
    . . # . .
    . # . # .
    # . . . #
    `)

    basic.clearScreen()
    basic.pause(500)
})
input.onButtonPressed(Button.B, function () {
    if (answer == 1)
    basic.showLeds(`
    . . . . .
    . . . . #
    . . . # .
    # . # . .
    . # . . .
    `)

    basic.clearScreen()
    basic.pause(500)

    if (answer == 2)
    basic.showLeds(`
    # . . . #
    . # . # .
    . . # . .
    . # . # .
    # . . . #
    `)

    basic.clearScreen()
    basic.pause(500)

})