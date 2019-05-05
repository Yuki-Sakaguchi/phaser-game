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
  constructor ({ scene, mapDate, prefix, isHit = true, zIndex = 1 }) {
    this.scene = scene
    this.mapDate = mapDate
    this.prefix = prefix
    this.isHit = isHit
    this.zIndex = zIndex
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
          depth: this.zIndex
        })
      }
    }
  }
}
