import { MAP_OBJECT } from '../common/config'
import { Unit } from './Unit'

/**
 * 爆弾設置用クラス
 * @class Bomber
 * @constructor
 * @extends Block
 * @param texture {PIXI.Texture} テクスチャ
 * @param container {PIXI.Container} 配置するコンテナ
 * @param gridX {Number} グリッドのX座標
 * @param gridY {Number} グリッドのX座標
 */
export class Bomber {
  constructor (numOfBomb, strength) {
    this.MAX_COUNT = numOfBomb
    this.numOfBomb = numOfBomb
    this.strength = strength
    this.bombs = []
  }

  /**
   * ボムを設置
   */
  put ({ scene, gridX, gridY }) {
    const callback = () => this.numOfBomb++
    const b = new Bomb({ scene, gridX, gridY, frameName: 'bomb-0', zIndex: 2, callback })
  }
}

/**
 * 爆弾クラス
 */
class Bomb extends Unit {
  constructor ({ scene, gridX, gridY, frameName, zIndex, callback }) {
    super({ scene, gridX, gridY, frameName, zIndex })
    this.strength = 4
    this.isExploded = false
    this.callback = callback
    this.bombAnimation()
  }

  /**
   * ボムのアニメーション
   */
  bombAnimation () {
    this.tween = this.scene.tweens.add({
      targets: this,
      scaleX: '-=0.1',
      scaleY: '-=0.1',
      ease: 'Quint.easeIn',
      duration: 500,
      repeat: -1,
      yoyo: true
    })
    setTimeout(() => {
      this.explosion()
    }, 3000)
  }

  /**
   * 爆発
   */
  explosion () {
    console.log('爆発した！')
    this.tween.pause()
    this.vanish()
  }

  /**
   * ブロックを破壊する
   * @param {*} delay
   */
  vanish () {
    MAP_OBJECT[this.gridY][this.gridX] = -1
    setTimeout(() => {
      this.tint = 0xff7e1f
      this.tween = this.scene.tweens.add({
        targets: this,
        alpha: 0,
        duration: 300,
        onComplete: () => {
          console.log('消えた！')
          this.destroy()
          this.callback()
        }
      })
    }, 100)
  }
}
