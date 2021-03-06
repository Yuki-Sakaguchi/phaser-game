/**
 * @fileoverview マップ
 */
import { HORIZONTAL_UNIT, VERTICAL_UNIT } from '../common/config'
import { Unit } from '../class/Unit'

/**
 * マップクラス
 * @class
 */
export class Map {
  /**
   * コンストラクタ
   * @constructor
   * @param {Phaser.Scene} scene マップを追加するシーン
   */
  constructor ({ scene, mapDate, prefix, depth }) {
    this.scene = scene
    this.mapDate = mapDate
    this.prefix = prefix
    this.depth = depth
    this.mapObj = []
    this.createMap()
  }

  /**
   * 移動
   * @method
   */
  createMap () {
    for (let y = 0; y < VERTICAL_UNIT; y++) {
      this.mapObj[y] = []
      for (let x = 0; x < HORIZONTAL_UNIT; x++) {
        if (this.mapDate[y][x] < 0) {
          continue
        }
        this.mapObj[y][x] = new Unit({
          scene: this.scene,
          gridX: x,
          gridY: y,
          frameName: `${this.prefix}${[this.mapDate[y][x]]}`,
          isHit: this.isHit,
          depth: this.zIndex ? this.zIndex : [this.mapDate[y][x]]
        })
        if (this.mapDate[y][x] === 1 ||
          this.mapDate[y][x] === 16 ||
          this.mapDate[y][x] === 17 ||
          this.mapDate[y][x] === 18 ||
          this.mapDate[y][x] === 19 ||
          this.mapDate[y][x] === 20 ||
          this.mapDate[y][x] === 21 ||
          this.mapDate[y][x] === 22 ||
          this.mapDate[y][x] === 23) {
          this.mapObj[y][x].isDestructible = true
        }
      }
    }
  }
}
