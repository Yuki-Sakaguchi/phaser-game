/**
 * @fileoverview キャラクター
 */
import {
  DIRECTION,
  UNIT_SIZE_WIDTH,
  UNIT_SIZE_HEIGHT,
  VERTICAL_UNIT,
  HORIZONTAL_UNIT,
  MAP_OBJECT,
  MAP_TOP_OBJECT
} from '../common/config'
import { createFrameName, getKeyName } from '../common/util'
import { Unit } from '../class/Unit'
import { Bomb } from '../class/Bomb'

/**
 * キャラクタークラス
 * @class
 * @extends Unit
 */
export class Character extends Unit {
  /**
   * @constructor
   * @param {Object}       config
   * @param {Phaser.Scene} config.scene 配置するシーン
   * @param {number}       config.width オブジェクトの幅
   * @param {number}       config.height オブジェクトの高さ
   * @param {number}       config.gridX X座標
   * @param {number}       config.gridY Y座標
   * @param {string}       config.frameNamew 画像名
   * @param {boolean}      config.isHit 当たり判定
   * @param {number}       config.speed キャラクターの移動スピード
   */
  constructor ({ scene, width = UNIT_SIZE_WIDTH, height = UNIT_SIZE_HEIGHT, gridX = (HORIZONTAL_UNIT - 1) / 2, gridY = (VERTICAL_UNIT - 1) / 2, frameName, isHit = true, speed = 4, direction = DIRECTION.FRONT, zIndex = 1 }) {
    super({ scene, width, height, gridX, gridY, frameName: createFrameName(frameName, direction), isHit, depth: zIndex })
    this.scene = scene
    this.speed = speed
    this.direction = direction
    this.frameName = frameName
    this.moveX = 0
    this.moveY = 0
    this.numOfBomb = 12
  }

  /**
   * 移動
   * @method
   * @param {number} cursorKeys キーボードの入力
   */
  move (cursorKeys) {
    let direction = this.direction

    // 移動ポイントを取得
    if (this.moveX !== 0 || this.moveY !== 0) {
      // 移動中は反応しない
    } else if (cursorKeys.left.isDown) {
      this.moveX = -UNIT_SIZE_WIDTH
      direction = DIRECTION.LEFT
    } else if (cursorKeys.right.isDown) {
      this.moveX = UNIT_SIZE_WIDTH
      direction = DIRECTION.RIGHT
    } else if (cursorKeys.up.isDown) {
      this.moveY = -UNIT_SIZE_HEIGHT
      direction = DIRECTION.BACK
    } else if (cursorKeys.down.isDown) {
      this.moveY = UNIT_SIZE_HEIGHT
      direction = DIRECTION.FRONT
    }

    // 移動後のタイル
    let mX = Math.floor((this.x + this.moveX) / UNIT_SIZE_WIDTH)
    let mY = Math.floor((this.y + this.moveY) / UNIT_SIZE_HEIGHT)

    // 移動禁止
    if (MAP_OBJECT[mY][mX] >= 0 || MAP_TOP_OBJECT[mY][mX] >= 0) {
      this.moveX = 0
      this.moveY = 0
    }

    // 向きに応じてアニメーション
    if (this.moveX === 0 && this.moveY === 0) {
      this.direction = direction
      this.sprite.setFrame(`player-${this.direction}-0`)
      this.sprite.anims.stop()
    } else if (this.direction !== direction) {
      this.direction = direction
      this.sprite.anims.play(`walk-${getKeyName(DIRECTION, this.direction).toLowerCase()}`)
    } else if (!this.sprite.anims.isPlaying) {
      this.sprite.anims.play(`walk-${getKeyName(DIRECTION, this.direction).toLowerCase()}`)
    }

    // 位置を移動
    this.x += sign(this.moveX) * this.speed
    this.y += sign(this.moveY) * this.speed
    this.moveX -= sign(this.moveX) * this.speed
    this.moveY -= sign(this.moveY) * this.speed
  }

  /**
   * 爆弾を配置
   */
  bomb () {
    if (this.moveX !== 0 || this.moveY !== 0) {
      return false
    }
    let mX = Math.floor(this.x / UNIT_SIZE_WIDTH)
    let mY = Math.floor(this.y / UNIT_SIZE_HEIGHT)
    if (this.numOfBomb > 0) {
      if (MAP_OBJECT[mY][mX] <= 0 || MAP_TOP_OBJECT[mY][mX] <= 0) {
        MAP_OBJECT[mY][mX] = MAP_TOP_OBJECT[mY][mX] = 99
        this.numOfBomb--
        const bomb = new Bomb({
          scene: this.scene,
          gridX: mX,
          gridY: mY,
          frameName: 'bomb-0',
          zIndex: 2
        })
      }
    }
  }
}

/**
 * IE対応用のSign関数
 */
function sign (val) {
  if (val === 0) return 0
  if (val > 0) return 1
  if (val < 0) return -1
}
