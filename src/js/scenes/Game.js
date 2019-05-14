/**
 * @fileoverview ゲーム画面
 */
import Phaser from 'phaser'
import {
  MAP_BASE,
  MAP_OBJECT,
  MAP_OVER,
  DIRECTION,
  SPRITE_NAME
} from '../common/config'
import { Map } from '../class/Map'
import { Character } from '../class/Character'

/**
 * ゲーム画面クラス
 * @class
 * @extends Phaser.Scene
 */
export default class extends Phaser.Scene {
  /**
   * コンストラクタ
   * @constructor
   */
  constructor () {
    super({ key: 'GameScene' })
  }

  /**
   * 事前ロード
   */
  preload () {
    // アニメーション作成
    for (let key in DIRECTION) {
      this.anims.create({
        key: `walk-${key.toLowerCase()}`,
        repeat: -1,
        frameRate: 6,
        frames: this.anims.generateFrameNames(SPRITE_NAME, {
          prefix: `player-${DIRECTION[key]}-`,
          start: 0,
          end: 3
        })
      })
    }
  }

  /**
   * ゲーム画面を構築
   * @method
   */
  create () {
    // 背景
    this.mapBg = new Map({
      scene: this,
      mapDate: MAP_BASE,
      prefix: 'base-',
      isHit: false,
      depth: 0
    })

    // 当たり判定のあるオブジェクト
    this.mapBlock = new Map({
      scene: this,
      mapDate: MAP_OBJECT,
      prefix: 'block-',
      depth: 5
    })

    // 当たり判定のないオブジェクト
    this.mapOver = new Map({
      scene: this,
      mapDate: MAP_OVER,
      prefix: 'block-',
      depth: 10
    })

    // プレイヤー
    this.player = new Character({
      scene: this,
      gridX: 2,
      gridY: 2,
      speed: 4,
      frameName: 'player',
      direction: DIRECTION.FRONT,
      depth: 8
    })
    this.player.setMap(this.mapBlock)
  }

  /**
   * 画面更新
   * @method
   */
  update () {
    const cursorKeys = this.input.keyboard.createCursorKeys()
    this.player.move(cursorKeys)
    if (cursorKeys.space.isDown) {
      this.player.putBomb()
    }
  }
}
