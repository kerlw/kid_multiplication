import Phaser from 'libs/phaser-wx.js'

// 保存原始的canvas
wx.originContext = canvas.getContext('2d');

/**
 * 尺寸
 * @type {{w: number, h: number}}
 */
let size = { w: 375, h: 667 }
let screenSize = { w: 375, h: 667 }

let game

/**
 * 游戏主函数
 */
export default class Main {

    /**
     * 构造
     */
    constructor() {
        // 配置参数
        const conf = {
            width: size.w,
            height: size.h,
            canvas: canvas,
            //context: canvas.getContext('webgl',  { alpha: false, depth: true, stencil: true, antialias: true, premultipliedAlpha: false, preserveDrawingBuffer: true }),
            renderer: Phaser.CANVAS,
            parent: 'phaser',
            transparent: false,
            antialias: false,
            state: { preload: this.preload, create: this.create, update: this.update, pointer: this.pointDown },
            scaleMode: Phaser.ScaleManager.EXACT_FIT
        };

        // 创建游戏
        game = new Phaser.Game(conf)

        // 获取尺寸
        screenSize.w = window.innerWidth
        screenSize.h = window.innerHeight
        console.log('屏幕尺寸: ', screenSize.w, 'x', screenSize.h)
    }

    /**
     * 预载入阶段
     */
    preload() {
        // 载入 SpriteSheet 和 图片
    }

    /**
     * 创建阶段
     */
    create() {
        // 显示文本
        const text = game.add.text(5, 5, 'Phaser Test', { fill: 'white' });
        text.smoothed = false;

        // 触摸监听
        game.input.onDown.add(pointDown, this);
        game.input.onUp.add(pointUp, this);

        function pointDown(p) {
            if (p.clientX / size.w > 0.5) {
            } else {
            }
        }

        function pointUp(p) {
        }
    }

    /**
     * 更新 Update 循环
     */
    update() {
        // console.log("update ")
    }
}