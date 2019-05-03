/**
 * @fileoverview マップ
 */
import {
  HORIZONTAL_UNIT,
  VERTICAL_UNIT,
  MAP_BASE,
  MAP_OBJECT
} from '../common/config'
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
  constructor (scene) {
    this.scene = scene
    this.mapBase = []
    this.mapObj = []
    this.createMap()
  }

  /**
   * 移動
   * @method
   */
  createMap () {
    for (let y = 0; y < VERTICAL_UNIT; y++) {
      this.mapBase[y] = []
      this.mapObj[y] = []
      for (let x = 0; x < HORIZONTAL_UNIT; x++) {
        // 床の生成
        if (MAP_BASE[y][x] >= 0) {
          this.mapBase[y][x] = new Unit(this.scene, x, y, `base-${[MAP_BASE[y][x]]}`)
        } else {
          this.mapBase[y][x] = MAP_BASE[y][x]
        }
        // オブジェクトの生成
        if (MAP_OBJECT[y][x] >= 0) {
          this.mapObj[y][x] = new Unit(this.scene, x, y, `block-${[MAP_OBJECT[y][x]]}`)
        } else {
          this.mapObj[y][x] = MAP_OBJECT[y][x]
        }
      }
    }
  }
}
