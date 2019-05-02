/**
 * @fileoverview よく使う共通関数
 */

/**
 * オブジェクトをステージの真ん中に配置する
 * @param {Array} objects
 */
export const centerGameObjects = objects => {
  objects.forEach(object => object.anchor.setTo(0.5))
}
