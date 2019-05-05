/**
 * @fileoverview ゲーム画面
 */
import Phaser from 'phaser'
import {
  MAP_BASE,
  MAP_OBJECT,
  MAP_TOP_OBJECT,
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
      zIndex: 1
    })

    // マップオブジェクト
    this.mapBlock = new Map({
      scene: this,
      mapDate: MAP_OBJECT,
      prefix: 'block-',
      zIndex: 2
    })

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

    // プレイヤー
    this.player = new Character({
      scene: this,
      gridX: 2,
      gridY: 2,
      speed: 4,
      frameName: 'player',
      direction: DIRECTION.FRONT,
      zIndex: 3
    })

    // 一番上のオブジェクト
    this.mapTopBlock = new Map({
      scene: this,
      mapDate: MAP_TOP_OBJECT,
      prefix: 'block-',
      zIndex: 4
    })
  }

  /**
   * 画面更新
   * @method
   */
  update () {
    const cursorKeys = this.input.keyboard.createCursorKeys()
    this.player.move(cursorKeys)
    if (cursorKeys.space.isDown) {
      this.player.bomb()
    }
  }
}
