/**
 * @fileoverview 共通設定
 */

import Phaser from 'phaser'

export const WIDTH = 1280
export const HEIGHT = 768

export const GAME_CONFIG = {
  type: Phaser.AUTO,
  parent: 'content',
  width: WIDTH,
  height: HEIGHT,
  localStorageName: 'phager-game'
}
