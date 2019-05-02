/**
 * @fileoverview キャラクター
 */
import Phaser from 'phaser'

/**
 * キャラクタークラス
 * @class
 * @param {Phaser.Scene} Scene 追加するシーン
 * @param {Number} x X座標
 * @param {Number} y X座標
 * @param {String} asset 画像名
 */
export default class Character extends Phaser.GameObjects.Sprite {
  /**
   * コンストラクタ
   * @constructor
   */
  constructor ({ scene, x, y, asset }) {
    super(scene, x, y, asset)
  }
}
