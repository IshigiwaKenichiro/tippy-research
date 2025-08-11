# cdn-example.html

## 概要
CDN経由でTippy.jsを使用するサンプルページです。外部ライブラリを読み込んで、ツールチップ機能を実装する最もシンプルな方法を示しています。

## 機能
### 基本的なツールチップ
- `tippy()`関数を使用してCSSセレクタ指定でツールチップを作成
- ボタン要素にマウスオーバーでツールチップを表示

### データ属性を使用したツールチップ
- `data-tippy-content`属性を使用した宣言的なツールチップ作成
- HTMLの属性として直接ツールチップの内容を指定

### 動的ツールチップ
- JavaScriptで動的に作成した要素にもツールチップを追加
- HTMLコンテンツを含むリッチなツールチップの表示
- `allowHTML: true`オプションでHTMLタグを有効化

## 使用ライブラリ
- `@popperjs/core@2` - ポジショニングライブラリ
- `tippy.js@6` - ツールチップライブラリ

## コード構造
```html
<!-- CDNから必要なライブラリを読み込み -->
<script src="https://unpkg.com/@popperjs/core@2"></script>
<script src="https://unpkg.com/tippy.js@6"></script>

<!-- ツールチップの実装例 -->
tippy('#myButton', {
  content: 'My tooltip!',
});

tippy(button, {
  content: '...',
  allowHTML: true,
});
```

## 特徴
- 外部CDNを利用するため、ビルドプロセス不要
- 複雑な設定なしで簡単にツールチップを実装可能
- 日本語のコメントと説明で理解しやすい
- 基本的な使用方法から応用的な使い方まで網羅

## 利用場面
- プロトタイプの作成
- 簡単なWebページでのツールチップ実装
- Tippy.jsの動作確認
- ライブラリの学習目的
