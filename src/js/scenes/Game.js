/**
 * @fileoverview ゲーム画面
 */
import Phaser from 'phaser'
import { WIDTH, HEIGHT, DIRECTION } from '../common/config'
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
    // マップ生成
    this.map = new Map(this)

    // キャラクター追加
    this.player = new Character({
      scene: this,
      gridX: 2,
      gridY: 2,
      frameName: 'player',
      direction: DIRECTION.FRONT
    })
    this.player.setMap(this.map)
  }

  /**
   * 画面更新
   * @method
   */
  update () {
    const cursorKeys = this.input.keyboard.createCursorKeys()
    this.player.move(cursorKeys)
  }
}
