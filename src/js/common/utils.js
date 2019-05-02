/**
 * @fileoverview 共通関数
 */

/**
 * オブジェクトをステージの真ん中に配置する
 * @param {Array<Phaser.GameObjects>} objects
 */
export const centerGameObjects = objects => {
  objects.forEach(object => object.setOrigin(0.5))
}
