/**
 * @fileoverview 共通設定
 */
import Phaser from 'phaser'

// ユニットサイズ
export const UNIT_SIZE_WIDTH = 64
export const UNIT_SIZE_HEIGHT = 64

// マップカウント
export const HORIZONTAL_UNIT = 19
export const VERTICAL_UNIT = 11

// ゲームのサイズ
export const WIDTH = UNIT_SIZE_WIDTH * HORIZONTAL_UNIT
export const HEIGHT = UNIT_SIZE_HEIGHT * VERTICAL_UNIT

// ゲームの設定
export const GAME_CONFIG = {
  type: Phaser.AUTO,
  parent: 'content',
  width: WIDTH,
  height: HEIGHT,
  localStorageName: 'phager-game',
  physics: {
    default: 'arcade',
    arcade: {
      debug: true
    }
  }
}

// 方向
export const DIRECTION = {
  'LEFT': 0,
  'BACK': 1,
  'RIGHT': 2,
  'FRONT': 3
}

// 画像
export const SPRITE_NAME = 'sprite'
export const SPRITE_IMAGE_PATH = 'dist/images/sprite.png'
export const SPRITE_JSON_PATH = 'dist/images/sprite.json'

// マップ情報
export const MAP_BASE = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
]
export const MAP_OBJECT = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, -1, -1, 2, 3, 4, -1, 2, 3, 4, -1, 2, 3, 4, -1, 2, 3, 4, 0],
  [0, 5, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0],
  [0, 7, -1, 0, 1, 0, 1, 0, 1, 0, -1, 0, 1, 0, -1, 0, -1, -1, 0],
  [0, -1, -1, 1, -1, -1, -1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, -1, 0],
  [0, -1, -1, 0, 1, 0, -1, 0, 1, 0, -1, 0, 1, 0, -1, 0, -1, -1, 0],
  [0, 5, -1, 1, -1, -1, -1, -1, 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0],
  [0, 7, -1, 0, -1, 0, 1, 0, 1, 0, -1, 0, -1, 0, -1, 0, -1, -1, 0],
  [0, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0],
  [0, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0],
  [9, 9, 9, 9, 11, 9, 9, 9, 9, 11, 9, 9, 9, 9, 11, 9, 9, 9, 9]
]
