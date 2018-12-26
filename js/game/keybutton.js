export default class KeyButton {
    constructor(pos = {x: 0, y: 0}, size = {w: 100, h: 100}) {
        this._x = pos.x
        this._y = pos.y
        this._width = size.w
        this._height = size.h
    }

    drawToCanvas(ctx) {
        ctx.save()
    }
}