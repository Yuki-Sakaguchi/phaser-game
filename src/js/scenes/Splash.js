/**
 * @fileoverview スプラッシュ画面
 */
import Phaser from 'phaser'
import { WIDTH, HEIGHT, SPRITE_NAME, SPRITE_IMAGE_PATH, SPRITE_JSON_PATH } from '../common/config'
import { centerGameObjects } from '../common/util'

/**
 * スプラッシュ画面クラス
 * @class
 * @extends Phaser.Scene
 */
export default class extends Phaser.Scene {
  /**
   * コンストラクタ
   * @constructor
   */
  constructor () {
    super({ key: 'SplashScene' })
  }

  /**
   * 初期化
   * @method
   */
  init () {
    this.assetLoaded = false
  }

  /**
   * ゲーム全体で使うアセットの事前ロード
   * @method
   */
  preload () {
    // プログレスバーの外側
    const boxWidth = 320
    const boxHeight = 50
    const boxX = (WIDTH / 2) - (boxWidth / 2)
    const boxY = (HEIGHT / 2) - (boxHeight / 2)
    const progressBox = this.add.graphics()
    progressBox.fillStyle(0x222222, 0.8)
    progressBox.fillRect(boxX, boxY, boxWidth, boxHeight)

    // プログレスバーの内側
    const barPadding = 20
    const progressBar = this.add.graphics()

    // ローディングのテキスト
    const loadingText = this.make.text({
      x: WIDTH / 2,
      y: HEIGHT / 2 - 50,
      text: 'Loading...',
      style: {
        font: '20px monospace',
        fill: '#ffffff'
      }
    })

    // ローディングのパーセント
    const percentText = this.make.text({
      x: WIDTH / 2,
      y: HEIGHT / 2,
      text: '0%',
      style: {
        font: '18px monospace',
        fill: '#000000'
      }
    })

    // 要素を真ん中にセット
    centerGameObjects([loadingText, percentText])

    // ゲームで使うアセットを読み込み
    this.load.atlas(SPRITE_NAME, SPRITE_IMAGE_PATH, SPRITE_JSON_PATH)

    // ロードにあわせてバーと数値を変更
    this.load.on('progress', value => {
      percentText.setText(parseInt(value * 100) + '%')
      progressBar.clear()
      progressBar.fillStyle(0xffffff, 1)
      progressBar.fillRect(boxX + (barPadding / 2), boxY + (barPadding / 2), (boxWidth * value) - barPadding, boxHeight - barPadding)
    })

    // ロード完了後に表示を削除
    this.load.on('complete', () => {
      setTimeout(() => {
        progressBar.destroy()
        progressBox.destroy()
        loadingText.destroy()
        percentText.destroy()
        this.assetLoaded = true
      }, 300)
    })
  }

  /**
   * 準備ができたらゲーム画面に遷移
   * @method
   */
  update () {
    if (this.assetLoaded) {
      this.scene.start('GameScene')
    }
  }
}
