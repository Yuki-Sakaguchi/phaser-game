import {
  VERTICAL_UNIT,
  HORIZONTAL_UNIT
} from '../common/config'
import { Unit } from './Unit'

/**
 * @class Bomb
 * @constructor
 * @extends Block
 * @param texture {PIXI.Texture} テクスチャ
 * @param container {PIXI.Container} 配置するコンテナ
 * @param gridX {Number} グリッドのX座標
 * @param gridY {Number} グリッドのX座標
 * @param opts {Object} オプション
 */
export class Bomb extends Unit {
  constructor ({ scene, gridX = (HORIZONTAL_UNIT - 1) / 2, gridY = (VERTICAL_UNIT - 1) / 2, frameName, zIndex = 1 }) {
    super({ scene, gridX, gridY, frameName, depth: zIndex })
    this.strength = 4
    this.isExploded = false
  }
}
