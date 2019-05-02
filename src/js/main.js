/**
 * @fileoverview bundle元のファイル
 */

'use strict'

import Phaser from 'phaser'
import BootScene from './scenes/Boot'
import SplashScene from './scenes/Splash'
import GameScene from './scenes/Game'
import { GAME_CONFIG } from './common/config'

/**
 * ゲームの設定
 */
const gameConfig = Object.assign(GAME_CONFIG, {
  scene: [
    BootScene,
    SplashScene,
    GameScene
  ]
})

/**
 * ゲーム本体
 * @class
 * @extend Phaser.Game
 */
class Game extends Phaser.Game {
  /**
   * ゲーム初期化
   */
  constructor () {
    super(gameConfig)
  }
}

// ゲーム実行
window.game = new Game()
