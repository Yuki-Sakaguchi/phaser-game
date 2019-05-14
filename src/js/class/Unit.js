/**
 * @fileoverview ユニット
 */
import Phaser from 'phaser'
import {
  UNIT_SIZE_WIDTH,
  UNIT_SIZE_HEIGHT,
  VERTICAL_UNIT,
  HORIZONTAL_UNIT,
  SPRITE_NAME
} from '../common/config'

import { gridToPositionX, gridToPositionY } from '../common/util'

/**
 * ユニットクラス
 * 全てのオブジェクトの元となるクラス
 * @class
 * @extends Phaser.GameObjects.Container
 */
export class Unit extends Phaser.GameObjects.Container {
  /**
   * 当たり判定用のオブジェクトと画像をコンテナに追加する
   * @constructor
   * @param {Object}       config
   * @param {Phaser.Scene} config.scene 配置するシーン
   * @param {number}       config.width オブジェクトの幅
   * @param {number}       config.height オブジェクトの高さ
   * @param {number}       config.gridX X座標
   * @param {number}       config.gridY Y座標
   * @param {string}       config.frameName 画像名
   * @param {boolean}      config.isHit 当たり判定
   * @param {number}       config.depth z座標
   */
  constructor ({ scene, width = UNIT_SIZE_WIDTH, height = UNIT_SIZE_HEIGHT, gridX = (HORIZONTAL_UNIT - 1) / 2, gridY = (VERTICAL_UNIT - 1) / 2, frameName, isHit = true, depth = 1 }) {
    super(scene, gridToPositionX(gridX), gridToPositionY(gridY))
    this.scene = scene
    this.width = width
    this.height = height
    this.gridX = gridX
    this.gridY = gridY
    this.frameName = frameName
    this.isHit = isHit
    this.isDestructible = false

    // 当たり判定用の四角を生成
    this.rect = scene.add.rectangle(0, 0, width, height, 0xffffff)
    this.rect.alpha = 0
    scene.add.existing(this.rect)
    this.add(this.rect)

    // 画像を生成
    this.sprite = new Phaser.GameObjects.Sprite(scene, 0, height / 2, SPRITE_NAME, frameName)
    this.sprite.setOrigin(0.5, 1) // 画像は下辺に揃える
    scene.add.existing(this.sprite)
    this.add(this.sprite)
    this.depth = depth
    scene.add.existing(this)
  }
}
