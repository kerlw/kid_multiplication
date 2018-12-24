import Pool from './base/pool'

let instance

/**
 * 全局状态管理器
 */
export default class DataBus {
    constructor() {
        if (instance)
            return instance

        instance = this

        this.pool = new Pool()

        this.reset()
    }

    reset() {
        this.frame = 0
        this.score = 0
        this.speed = 2
        this.expressions = []
        // this.animations = []
        this.gameOver = false
    }

    /**
     * 回收敌人，进入对象池
     * 此后不进入帧循环
     */
    removeEnemey(enemy) {
        let temp = this.enemys.shift()

        temp.visible = false

        this.pool.recover('enemy', enemy)
    }

    /**
     * 回收表达式
     */
    removeExpression(expression) {
        let temp = this.expressions.shift()

        temp.visible = false
    }
}
