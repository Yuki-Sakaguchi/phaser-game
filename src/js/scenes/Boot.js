/**
 * @fileoverview 初期表示画面
 */

import Phaser from 'phaser'
import WebFont from 'webfontloader'

/**
 * 初期表示画面クラス
 * @class
 */
export default class extends Phaser.Scene {
  /**
   * 初期化
   * @constructor
   */
  constructor () {
    super({ key: 'BootScene' })
  }

  /**
   * 事前ロード
   * @method
   */
  preload () {
    this.fontsReady = false
    this.fontsLoaded = this.fontsLoaded.bind(this)
    this.add.text(100, 100, 'loading fonts...')

    this.load.image('loaderBg', './assets/images/loader-bg.png')
    this.load.image('loaderBar', './assets/images/loader-bar.png')

    WebFont.load({
      google: {
        families: ['Bangers']
      },
      active: this.fontsLoaded
    })
  }

  update () {
    if (this.fontsReady) {
      this.scene.start('SplashScene')
    }
  }

  fontsLoaded () {
    this.fontsReady = true
  }
}
