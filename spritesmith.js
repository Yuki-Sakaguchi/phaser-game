/**
 * @fileoverview スプライト画像作成プラグインの設定
 */

'use strict'

module.exports = [
  {
    src: './src/images/*.{png,gif,jpg}',
    destImage: './dist/images/sprite.png',
    destCSS: './dist/images/sprite.json',
    cssTemplate: require('spritesmith-texturepacker'),
    padding: 2,
    algorithmOpts: { sort: false }
  }
]
