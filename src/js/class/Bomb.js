import {
  MAP_OBJECT,
  HORIZONTAL_UNIT,
  VERTICAL_UNIT
} from '../common/config'
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
  constructor (map, numOfBomb, strength) {
    this.MAX_COUNT = numOfBomb
    this.numOfBomb = numOfBomb
    this.strength = strength
    this.bombs = []
    this.map = map
  }

  /**
   * ボムを設置
   */
  put ({ scene, gridX, gridY }) {
    const callback = () => this.numOfBomb++
    const b = new Bomb({ scene, gridX, gridY, frameName: 'bomb-0', zIndex: 2, callback, map: this.map })
  }
}

/**
 * 爆弾クラス
 */
class Bomb extends Unit {
  constructor ({ scene, gridX, gridY, frameName, zIndex, callback, map }) {
    super({ scene, gridX, gridY, frameName, zIndex })
    this.strength = 4
    this.isExploded = false
    this.callback = callback
    this.map = map
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

    let flags = 0
    const FLAG_CONTINUE = 1 // 爆風が続くかどうか
    const FLAG_DESTROY = 2 // 爆風で破壊するかどうか
    const blasts = [] // 爆風ユニット

    /**
     * 任意のグリッド上の状態をチェック
     * @function checkUnit
     */
    const checkUnit = (x, y) => {
      let mask = 0
      if (x >= 0 && x < HORIZONTAL_UNIT && y >= 0 && y < VERTICAL_UNIT) {
        if (this.map.mapDate[y][x] === -1) {
          mask |= FLAG_CONTINUE
          return mask
        } else if (this.map.mapObj[y][x].isDestructible) {
          mask |= FLAG_DESTROY
          return mask
        } else if (this.map.mapObj[y][x].constructor === Bomb) {
          this.map.mapObj[y][x].explosion()
        }
      }
      return mask
    }

    if (this.isExploded) {
      return 0
    } else {
      this.isExploded = true
    }

    this.tween.pause()
    this.vanish()

    for (let i = 0; i < 4; i++) {
      blasts[i] = []
      for (let j = 1; j <= this.strength; j++) {
        const x = i === 0 ? this.gridX - j : i === 1 ? this.gridX : i === 2 ? this.gridX + j : i === 3 ? this.gridX : 0
        const y = i === 0 ? this.gridY : i === 1 ? this.gridY - j : i === 2 ? this.gridY : i === 3 ? this.gridY + j : 0
        blasts[i][j] = 0
        flags = checkUnit(x, y)
        if ((flags & FLAG_DESTROY) !== 0) {
          this.map.mapObj[y][x].vanish()
        }
        if ((flags & FLAG_CONTINUE) !== 0) {
          blasts[i][j] = new Unit({
            scene: this.scene,
            gridX: x,
            gridY: y,
            frameName: 'explosion-0'
          })
          Bomb.prototype.vanish.call(blasts[i][j])
        } else {
          break
        }
      }
    }
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
          if (typeof this.callback === 'function') {
            this.callback()
          }
        }
      })
    }, 100)
  }
}
