input.onButtonPressed(Button.A, function () {
    count += 1
})
function print_number (num: number) {
    if (num == 1) {
        basic.showLeds(`
            . . # . .
            . # # . .
            . . # . .
            . . # . .
            . # # # .
            `)
    } else if (num == 2) {
        basic.showLeds(`
            . # # # .
            . . . # .
            . # # # .
            . # . . .
            . # # # .
            `)
    } else if (num == 3) {
        basic.showLeds(`
            . # # # .
            . . . # .
            . # # # .
            . . . # .
            . # # # .
            `)
    } else if (num == 4) {
        basic.showLeds(`
            . # . # .
            . # . # .
            . # # # .
            . . . # .
            . . . # .
            `)
    } else if (num == 5) {
        basic.showLeds(`
            . # # # .
            . # . . .
            . # # # .
            . . . # .
            . # # # .
            `)
    } else if (num == 6) {
        basic.showLeds(`
            . # # # .
            . # . . .
            . # # # .
            . # . # .
            . # # # .
            `)
    } else if (num == 7) {
        basic.showLeds(`
            . # # # .
            . # . # .
            . . . # .
            . . . # .
            . . . # .
            `)
    } else if (num == 8) {
        basic.showLeds(`
            . # # # .
            . # . # .
            . # # # .
            . # . # .
            . # # # .
            `)
    } else if (num == 9) {
        basic.showLeds(`
            . # # # .
            . # . # .
            . # # # .
            . . . # .
            . . . # .
            `)
    } else if (num == 0) {
        basic.showLeds(`
            . # # # .
            . # . # .
            . # . # .
            . # . # .
            . # # # .
            `)
    }
}
input.onGesture(Gesture.Shake, function () {
    count = 0
})
function print (num: number) {
    _10자리 = (num - num % 10) / 10
    _1자리 = num % 10
    if (_10자리 != 0) {
        print_number(_10자리)
        basic.pause(100)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
    }
    print_number(_1자리)
    basic.pause(100)
    basic.showLeds(`
        . . . . .
        . . # . .
        . . . . .
        . . # . .
        . . . . .
        `)
    basic.pause(200)
}
input.onButtonPressed(Button.B, function () {
    count += -1
})
let _1자리 = 0
let _10자리 = 0
let count = 0
basic.showIcon(IconNames.EigthNote)
music.playMelody("E D G F B A C5 B ", 120)
count = 0
basic.forever(function () {
    print(count)
})
