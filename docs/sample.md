# sample.css

## 概要
Tippy.jsのカスタムテーマを定義するためのスタイルシートです。`tomato`テーマとして、トマト色の背景に緑黄色のテキストを組み合わせた視覚的に目立つツールチップスタイルを提供します。

## 定義されているテーマ

### tomato テーマ
```css
.tippy-box[data-theme~='tomato'] {
  background-color: tomato;
  color: greenyellow;
}
```

## テーマの特徴

### 色の組み合わせ
- **背景色**: `tomato` - 温かみのあるオレンジレッド色
- **テキスト色**: `greenyellow` - 鮮やかな黄緑色
- **コントラスト**: 高いコントラストで可読性を確保

### 視覚的効果
- **警告・注意喚起**: 目立つ色合いで重要な情報を強調
- **アクセシビリティ**: 色のコントラストが十分で読みやすい
- **感情的インパクト**: 暖色系の背景で注意を引きつける

## 使用方法

### HTML/JavaScript での適用
```javascript
tippy(element, {
    content: 'Warning message',
    theme: 'tomato'
});
```

### React での適用
```jsx
<Tippy content="Important notice" theme="tomato">
    <button>Click me</button>
</Tippy>
```

## CSS セレクタの仕組み

### 属性セレクタの活用
- `[data-theme~='tomato']`: `data-theme`属性に`tomato`を含む要素を選択
- `~=` 演算子: スペース区切りの属性値リストで部分一致検索
- 複数テーマの組み合わせが可能（例: `data-theme="tomato light"`）

### セレクタの詳細
```css
.tippy-box[data-theme~='tomato']
```
- `.tippy-box`: Tippy.jsのツールチップコンテナクラス
- `[data-theme~='tomato']`: tomato テーマが指定された要素
- 両方の条件を満たす要素にスタイルが適用

## 利用場面

### UI/UX での用途
- **エラーメッセージ**: システムエラーや警告の表示
- **重要な通知**: ユーザーが見逃してはいけない情報
- **削除確認**: 危険な操作の確認ダイアログ
- **期限切れ警告**: 有効期限や期限が近い項目の通知

### 実装例
```javascript
// 削除ボタンのツールチップ
tippy('.delete-button', {
    content: 'この操作は取り消せません',
    theme: 'tomato'
});

// エラー状態の入力フィールド
tippy('.error-field', {
    content: '入力内容を確認してください',
    theme: 'tomato'
});
```

## カスタマイズ拡張

### 追加スタイルの例
```css
.tippy-box[data-theme~='tomato'] {
  background-color: tomato;
  color: greenyellow;
  
  /* 追加のカスタマイズ */
  border: 2px solid darkred;
  border-radius: 8px;
  font-weight: bold;
  box-shadow: 0 4px 8px rgba(0,0,0,0.3);
}

.tippy-box[data-theme~='tomato'] .tippy-arrow {
  color: tomato;
}
```

### 類似テーマの作成
```css
/* 警告テーマ */
.tippy-box[data-theme~='warning'] {
  background-color: orange;
  color: black;
}

/* 成功テーマ */
.tippy-box[data-theme~='success'] {
  background-color: green;
  color: white;
}
```

## 設計思想
- **最小限の定義**: 必要最小限のプロパティで効果的なスタイリング
- **高いコントラスト**: アクセシビリティを考慮した色選択
- **拡張性**: 他のテーマとの組み合わせや追加スタイルが容易
- **明確な目的**: 警告・注意喚起に特化したデザイン

## ベストプラクティス
- 重要度に応じたテーマの使い分け
- ブランドカラーとの調和を考慮
- ユーザビリティテストでの効果確認
- アクセシビリティガイドラインの遵守
