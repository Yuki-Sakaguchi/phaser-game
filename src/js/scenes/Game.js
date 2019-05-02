/**
 * @fileoverview ゲーム画面
 */
import Phaser from 'phaser'
import { WIDTH, HEIGHT } from '../common/config'
import { centerGameObjects } from '../common/utils'

/**
 * ゲーム画面クラス
 * @class
 * @extends Phaser.Scene
 */
export default class extends Phaser.Scene {
  /**
   * 初期化
   * @constructor
   */
  constructor () {
    super({ key: 'GameScene' })
    this.speed = 4
    this.oldCursor = {}
  }

  /**
   * ゲーム画面を構築
   */
  create () {
    // キャラクター追加
    this.player = this.add.sprite(WIDTH / 2, HEIGHT / 2, 'sprite', 'player-3-0')
    this.anims.create({
      key: 'walk-left',
      repeat: -1,
      frameRate: 5,
      frames: this.anims.generateFrameNames('sprite', {
        prefix: 'player-0-',
        start: 0,
        end: 3
      })
    })
    this.anims.create({
      key: 'walk-back',
      repeat: -1,
      frameRate: 5,
      frames: this.anims.generateFrameNames('sprite', {
        prefix: 'player-1-',
        start: 0,
        end: 3
      })
    })
    this.anims.create({
      key: 'walk-right',
      repeat: -1,
      frameRate: 5,
      frames: this.anims.generateFrameNames('sprite', {
        prefix: 'player-2-',
        start: 0,
        end: 3
      })
    })
    this.anims.create({
      key: 'walk-front',
      repeat: -1,
      frameRate: 5,
      frames: this.anims.generateFrameNames('sprite', {
        prefix: 'player-3-',
        start: 0,
        end: 3
      })
    })
    this.player.play('walk-front')

    // タイトル追加
    const text = this.add.text(
      WIDTH / 2, 100,
      'Phaser 3 - ES6 - Webpack ',
      {
        font: '64px Bangers',
        fill: '#ffffff'
      }
    )
    centerGameObjects([text])
  }

  /**
   * 画面更新
   */
  update () {
    const cursorKeys = this.input.keyboard.createCursorKeys()
    if (cursorKeys.left.isDown) {
      this.player.x -= this.speed
      if (!this.oldCursor.left.isDown) {
        this.player.play('walk-left')
      }
    }
    if (cursorKeys.right.isDown) {
      this.player.x += this.speed
      if (!this.oldCursor.right.isDown) {
        this.player.play('walk-right')
      }
    }
    if (cursorKeys.up.isDown) {
      this.player.y -= this.speed
      if (!this.oldCursor.up.isDown) {
        this.player.play('walk-back')
      }
    }
    if (cursorKeys.down.isDown) {
      this.player.y += this.speed
      if (!this.oldCursor.down.isDown) {
        this.player.play('walk-front')
      }
    }
    this.oldCursor = JSON.parse(JSON.stringify(cursorKeys))
  }
}
