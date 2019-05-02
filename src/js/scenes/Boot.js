/**
 * @fileoverview 初期表示画面
 */
import Phaser from 'phaser'
import WebFont from 'webfontloader'

/**
 * 初期表示画面クラス
 * @class
 * @extends Phaser.Scene
 */
export default class extends Phaser.Scene {
  /**
   * 初期化
   * @constructor
   */
  constructor () {
    super({ key: 'BootScene' })
    this.fontsReady = false
  }

  /**
   * 最低限の事前ロード
   * @method
   */
  preload () {
    // フォントをロード
    WebFont.load({
      google: {
        families: ['Bangers']
      },
      active: () => {
        this.fontsReady = true
      }
    })
  }

  /**
   * 準備ができたらスプラッシュページへ遷移
   * @method
   */
  update () {
    if (this.fontsReady) {
      this.scene.start('SplashScene')
    }
  }
}
