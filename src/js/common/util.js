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

/**
 * frame名と方向の番号から画像名を返す
 * @param {string} frameName
 * @param {number} direction
 * @return {string} sprite.jsonと一致するファイル名
 */
export const createFrameName = (frameName, direction) => {
  return `${frameName}-${direction}-0`
}

/**
 * 連想配列の値からキーを取得
 * @param {Object} obj
 * @param {string|number} value
 * @param {string} キー名
 */
export const getKeyName = (obj, value) => {
  return Object.keys(obj).reduce((r, k) => { return obj[k] === value ? k : r }, null)
}
