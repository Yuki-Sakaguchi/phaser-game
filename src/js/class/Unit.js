/**
 * @fileoverview ユニット
 */
import Phaser from 'phaser'
import { UNIT_SIZE_X, UNIT_SIZE_Y, SPRITE_NAME } from '../common/config'

/**
 * ユニットクラス
 * @class
 */
export class Unit {
  /**
   * @constructor
   * @param {Phaser.Scene} scene 配置するシーン
   * @param {number} gridX X座標
   * @param {number} gridY Y座標
   * @param {string} frameNamew 画像名
   */
  constructor (scene, gridX, gridY, frameNamew) {
    this.scene = scene
    this.gridX = gridX
    this.gridY = gridY
    this.frameNamew = frameNamew

    this.unit = null
    this.createUnit()
  }

  /**
   * ユニットを生成し、シーンに追加
   */
  createUnit () {
    this.unit = new Phaser.GameObjects.Sprite(
      this.scene,
      UNIT_SIZE_X * this.gridX + UNIT_SIZE_X / 2,
      UNIT_SIZE_Y * (this.gridY + 1),
      SPRITE_NAME,
      this.frameNamew
    )
    this.unit.setOrigin(1)
    this.scene.add.existing(this.unit)
  }
}
