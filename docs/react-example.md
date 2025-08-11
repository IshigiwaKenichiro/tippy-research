# react-example.jsx

## 概要
ReactとTippy.jsを組み合わせた実装例です。`@tippyjs/react`パッケージを使用して、Reactコンポーネント内でツールチップ機能を実装し、動的なテーマ変更機能を持つインタラクティブなデモアプリケーションを提供します。

## 主要機能

### 動的テーマ切り替え
- **4種類のテーマ**: default, light, translucent, material
- **テーマローテーション**: ボタンクリックで次のテーマに循環切り替え
- **リアルタイム反映**: 全てのツールチップに即座にテーマが適用

### 複数のツールチップパターン

#### シンプルなテキストツールチップ
```jsx
<Tippy content="Hello" theme={theme}>
    <button onClick={() => setThemeIdx(themeIdx + 1)}>
        Change Theme ({theme})
    </button>
</Tippy>
```

#### JSX構造を使ったリッチツールチップ
```jsx
<Tippy content={(<div><p>Tooltip content</p><p>More content here</p></div>)} theme={theme}>
    <button>Change Theme ({theme})</button>
</Tippy>
```

## 技術実装

### 使用ライブラリ
```jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import Tippy from '@tippyjs/react';
```

### スタイルシート
```jsx
import 'tippy.js/dist/tippy.css';
import 'tippy.js/themes/light.css';
import 'tippy.js/themes/material.css';
import 'tippy.js/themes/translucent.css';
```

### 状態管理
```jsx
const THEMES = ["default", "light", "translucent", "material"];
const [themeIdx, setThemeIdx] = React.useState(0);
const theme = THEMES[themeIdx % THEMES.length];
```

## コンポーネント構造

### TippyApp コンポーネント
- **状態管理**: `useState`フックでテーマインデックスを管理
- **レイアウト**: Flexboxを使用した縦配置レイアウト
- **インタラクション**: クリックイベントでテーマ切り替え

### レンダリング設定
```jsx
const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

root.render(
    <React.StrictMode>
        <TippyApp />
    </React.StrictMode>
);
```

## UI/UXデザイン

### レイアウトスタイル
```jsx
style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    padding: '20px',
    fontFamily: 'Arial, sans-serif'
}}
```

### インタラクティブ要素
- **視覚的フィードバック**: ボタンに現在のテーマ名を表示
- **直感的操作**: クリックするだけでテーマが切り替わる
- **一貫性**: 全てのツールチップが同じテーマを適用

## 学習ポイント

### React統合パターン
- **宣言的なツールチップ**: JSXでツールチップを宣言的に記述
- **プロップス経由での設定**: `content`と`theme`プロップスで設定
- **状態との連携**: Reactの状態とツールチップ設定の同期

### 実装の利点
- **型安全性**: TypeScript対応の`@tippyjs/react`使用
- **React生態系統合**: Reactのライフサイクルとイベントシステムとの連携
- **開発効率**: Reactの開発ツールとデバッグ機能の活用

## 実用的応用例
- **フォームヘルプ**: 入力項目の説明をツールチップで表示
- **アクション説明**: ボタンやアイコンの機能説明
- **設定画面**: 各種オプションの詳細説明
- **ダッシュボード**: データポイントの詳細情報表示

## カスタマイズ可能性
- **カスタムテーマ**: 独自のテーマCSSの追加
- **アニメーション設定**: 表示・非表示アニメーションのカスタマイズ
- **配置オプション**: ツールチップの表示位置調整
- **トリガー設定**: マウスオーバー以外のイベントでの表示制御
- **条件付き表示**: 状態に応じたツールチップの動的表示・非表示

## 開発者向けメモ
- **パフォーマンス**: 大量のツールチップでもReactの最適化機能を活用
- **アクセシビリティ**: キーボードナビゲーションとスクリーンリーダー対応
- **テスト**: React Testing Libraryでのツールチップテスト手法
- **SSR対応**: サーバーサイドレンダリング環境での注意点

## 推奨用途
- **Reactアプリケーション**: 既存のReactプロジェクトへの統合
- **UI ライブラリ**: 再利用可能なツールチップコンポーネントの作成
- **管理画面**: 複雑なUIでのユーザーガイダンス
- **データ可視化**: チャートやグラフでの詳細情報表示
