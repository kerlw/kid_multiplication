import DataBus from './databus'
import Expression from './game/expression'

let ctx = canvas.getContext('2d')
let databus = new DataBus()

export default class Main {
    constructor() {
        // 维护当前requestAnimationFrame的id
        this.aniId = 0


        this.bindLoop = this.loop.bind(this)
        this.hasEventBind = false

        // 清除上一局的动画
        window.cancelAnimationFrame(this.aniId);

        this.aniId = window.requestAnimationFrame(
            this.bindLoop,
            canvas
        )
    }

    /**
     * canvas重绘函数
     * 每一帧重新绘制所有的需要展示的元素
     */
    render() {
        ctx.clearRect(0, 0, canvas.width, canvas.height)

        // this.bg.render(ctx)

        databus.expressions
            .forEach((item) => {
                item.drawToCanvas(ctx)
            })

        // this.gameinfo.renderGameScore(ctx, databus.score)

        // 游戏结束停止帧循环
        if (databus.gameOver) {
        //     this.gameinfo.renderGameOver(ctx, databus.score)
        //
        //     if (!this.hasEventBind) {
        //         this.hasEventBind = true
        //         this.touchHandler = this.touchEventHandler.bind(this)
        //         canvas.addEventListener('touchstart', this.touchHandler)
        //     }
        }
    }

    // 游戏逻辑更新主函数
    update() {
        if (databus.gameOver)
            return;

        // this.bg.update()

        databus.expressions
            .forEach((item) => {
                item.update()
            })

        if (databus.frame % 20 === 0) {
            Expression.randomExpression()
        }
    }

    // 实现游戏帧循环
    loop() {
        databus.frame++

        this.update()
        this.render()

        this.aniId = window.requestAnimationFrame(
            this.bindLoop,
            canvas
        )
    }


}