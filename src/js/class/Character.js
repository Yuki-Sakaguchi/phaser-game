/**
 * @fileoverview キャラクター
 */
import Phaser from 'phaser'
import { WIDTH, HEIGHT, DIRECTION, SPRITE_NAME, UNIT_SIZE_X, UNIT_SIZE_Y } from '../common/config'
import { createFrameName, getKeyName } from '../common/util'

/**
 * キャラクタークラス
 * @class
 * @extends Phaser.GameObjects.Sprite
 */
export class Character extends Phaser.GameObjects.Sprite {
  /**
   * コンストラクタ
   * @constructor
   * @param {Object}       config
   * @param {Phaser.Scene} config.scene キャラクターを追加するシーン
   * @param {number}       config.gridX x座標
   * @param {number}       config.gridY y座標
   * @param {string}       config.frameName 画像名
   * @param {number}       config.speed キャラクターの移動スピード
   */
  constructor ({ scene, gridX = 5, gridY = 5, frameName, speed = 4, direction = DIRECTION.FRONT }) {
    super(scene, gridX * UNIT_SIZE_X, (gridY + 1) * UNIT_SIZE_Y, SPRITE_NAME, createFrameName(frameName, direction))

    this.scene = scene
    this.gridX = gridX
    this.gridY = gridY
    this.frameName = frameName
    this.speed = speed
    this.direction = direction

    this.createAnimeFrame()
    this.setOrigin(0.5, 1)
    scene.add.existing(this)
  }

  /**
   * アニメーションのframeを作成
   */
  createAnimeFrame () {
    // 方向の数だけ歩くアニメーションを作成
    for (let key in DIRECTION) {
      this.scene.anims.create({
        key: `walk-${key.toLowerCase()}`,
        repeat: -1,
        frameRate: this.speed,
        frames: this.scene.anims.generateFrameNames(SPRITE_NAME, {
          prefix: `${this.frameName}-${DIRECTION[key]}-`,
          start: 0,
          end: 3
        })
      })
    }
  }

  /**
   * マップ情報をセット
   * @param {Object} map
   */
  setMap (map) {
    this.map = map
  }

  /**
   * 移動
   * @method
   * @param {number} cursorKeys キーボードの入力
   */
  move (cursorKeys) {
    let mX = 0
    let mY = 0
    let direction = null

    // 移動ポイントを取得
    if (cursorKeys.left.isDown) {
      mX = -this.speed
    }
    if (cursorKeys.right.isDown) {
      mX = this.speed
    }
    if (cursorKeys.up.isDown) {
      mY = -this.speed
    }
    if (cursorKeys.down.isDown) {
      mY = this.speed
    }

    // 移動の向きを取得、斜め移動の場合は縦を優先
    if (mY > 0) {
      direction = DIRECTION.FRONT
    } else if (mY < 0) {
      direction = DIRECTION.BACK
    } else {
      if (mX > 0) {
        direction = DIRECTION.RIGHT
      } else if (mX < 0) {
        direction = DIRECTION.LEFT
      } else {
        direction = this.direction
      }
    }

    // 向きに応じてアニメーション変更
    if (this.direction !== direction) {
      // 方向が変わってたらアニメーションを変更
      this.direction = direction
      this.play(`walk-${getKeyName(DIRECTION, direction).toLowerCase()}`)
    } else if (!this.anims.isPlaying) {
      // 方向が変わってなくてもアニメーション中じゃなければアニメーションを開始
      this.play(`walk-${getKeyName(DIRECTION, direction).toLowerCase()}`)
    }

    // 移動距離が無ければアニメーションを止める
    if (mX === 0 && mY === 0) {
      this.anims.stop()
    }

    // 位置を移動
    this.x += mX
    this.y += mY
  }
}
