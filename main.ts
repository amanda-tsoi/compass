let bearing = 0
basic.forever(function () {
    bearing = input.compassHeading()
    if (bearing < 0 || bearing > 315) {
        basic.showString("N")
        music.ringTone(262)
    } else if (bearing < 45) {
        basic.showString("NE")
        music.ringTone(294)
    } else if (bearing < 90) {
        basic.showString("E")
        music.ringTone(330)
    } else if (bearing < 135) {
        basic.showString("SE")
        music.ringTone(349)
    } else if (bearing < 180) {
        basic.showString("S")
        music.ringTone(392)
    } else if (bearing < 225) {
        basic.showString("SW")
        music.ringTone(440)
    } else if (bearing < 270) {
        basic.showString("W")
        music.ringTone(494)
    } else if (bearing < 315) {
        basic.showString("Hello!")
        music.ringTone(523)
    }
})
