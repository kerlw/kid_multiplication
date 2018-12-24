import { randomInt, format } from '../libs/utils'
import DataBus from '../databus.js'

let databus = new DataBus()

export default class Expression {
    constructor(a, b, mask) {
        this.a = a
        this.b = b
        this.m = a * b
        this.mask = mask
        this.x = 0
        this.y = 0
    }

    static randomExpression() {
        let x = randomInt(1, 9)
        let ret = new Expression(x, randomInt(x, 9), randomInt(0, 2))
        databus.expressions.push(ret)
        return ret
    }

    update() {
        this.y += databus.speed

        if (this.y < 0 || this.y > window.innerHeight) {
            databus.removeExpression(this)
        }
    }

    drawToCanvas(ctx) {
        ctx.save()
        ctx.fillStyle = '#fff'
        // ctx.setFontSize(20)
        ctx.font = "30px sans-serif"
        ctx.fillText(format("{0} x {1} = {2}",
            this.mask == 0 ? "_" : this.a,
            this.mask == 1 ? "_" : this.b,
            this.mask == 2 ? (this.m >= 10 ? "__" : "_") : this.m), this.x, this.y)
        ctx.restore()
    }
}