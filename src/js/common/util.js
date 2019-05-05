/**
 * @fileoverview 共通関数
 */

import { UNIT_SIZE_WIDTH, UNIT_SIZE_HEIGHT } from './config'

/**
 * オブジェクトをステージの真ん中に配置する
 * @param {Array<Phaser.GameObjects>} objects
 */
export const centerGameObjects = objects => objects.forEach(object => object.setOrigin(0.5))

/**
 * グリッドXをpositionに変換
 * @param {number} gridX
 * @return {number} positionX
 */
export const gridToPositionX = gridX => UNIT_SIZE_WIDTH * gridX + UNIT_SIZE_WIDTH / 2

/**
 * グリッドXをpositionに変換
 * @param {number} gridY
 * @return {number} positionY
 */
export const gridToPositionY = gridY => UNIT_SIZE_HEIGHT * gridY + UNIT_SIZE_WIDTH / 2

/**
 * frame名と方向の番号から画像名を返す
 * @param {string} frameName
 * @param {number} direction
 * @return {string} sprite.jsonと一致するファイル名
 */
export const createFrameName = (frameName, direction) => `${frameName}-${direction}-0`

/**
 * 連想配列の値からキーを取得
 * @param {Object} obj
 * @param {string|number} value
 * @return {string} キー名
 */
export const getKeyName = (obj, value) => Object.keys(obj).reduce((r, k) => { return obj[k] === value ? k : r }, null)
