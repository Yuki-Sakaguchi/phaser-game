# Phaser3 + ES6（Babel） + Webpack4でゲームを作る。

# DEMO
https://yuki-sakaguchi.github.io/phaser-game/index.html

# TODO
* ゲーム開発
* pwa対応
* cordoba対応

# 開発
```
npm run dev
```

# ディレクトリ構造
```
├── assets # 加工しない素材はここに保存する。画像や音楽ファイルなどを想定
│   └── images
│       ├── icon-192px.png 
│       └── icon-512px.png
│
├── dist # コンパイル後のjs, css, スプライト画像に変換された画像と紐づくjson
│   ├── css
│   │   └── bundle.css
│   ├── images
│   │   ├── sprite.json
│   │   └── sprite.png
│   └── js
│       ├── bundle.js
│       └── vendor.bundle.js
│
├── src # コンパイル前のjs, css, images
│   ├── images
│   │   ├── sample1.png
│   │   └── sample2.png
│   ├── js
│   │   ├── common # 共通で使うjsファイル
│   │   ├── scenes # 各シーンのjsファイル
│   │   ├── class # 各クラスのjsファイル
│   │   └── main.js # bundle元の実行ファイル
│   └── scss
│       └── bundle.scss
│
├── manifest.json
└── index.html
```

# 参考
* https://phaser.io
* https://github.com/lean/phaser-es6-webpack
