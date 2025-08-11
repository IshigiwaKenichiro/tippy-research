# kintone-example.tsx

## 概要
KintoneのカスタマイズでTippy.jsを利用するサンプルコードです。TypeScriptで記述され、Kintone REST APIクライアントと組み合わせて、レコード一覧画面と詳細画面にインタラクティブなツールチップを実装しています。

## 主要機能

### レコード一覧画面での機能 (`app.record.index.show`)
- **操作ボタンへのツールチップ追加**
  - 詳細表示ボタン: ドキュメントレコードの詳細表示説明
  - 編集ボタン: ドキュメントレコード編集説明
  - 削除ボタン: ドキュメントレコード削除説明（tomato テーマ適用）

### レコード詳細画面での機能 (`app.record.detail.show`)
- **動的フィールド情報ツールチップ**
  - 文字列一行フィールドを自動検出
  - フィールドコードとラベルを表示
  - フィールド設定の詳細情報をJSON形式で表示
  - Kintone REST APIを使用してフィールド情報を動的取得

## 使用技術・ライブラリ

### 外部ライブラリ
```typescript
import tippy from "tippy.js";
import { KintoneRestAPIClient } from "@kintone/rest-api-client"
```

### スタイルシート
```typescript
import "tippy.js/dist/tippy.css";
import 'tippy.js/themes/light.css';
import 'tippy.js/themes/material.css';
import 'tippy.js/themes/translucent.css';
import "./sample.css";
```

## 実装詳細

### セレクタを使用した要素取得
```typescript
const $$a = document.querySelector("a.recordlist-show-gaia")!;
const $$edit = document.querySelector("button.recordlist-edit-gaia")!;
const $$remove = document.querySelector("button.recordlist-remove-gaia")!;
```

### 動的フィールド処理
```typescript
const form = await client.app.getFormFields({
    app: kintone.app.getId()
});

const fields = Object.values(form.properties)
    .filter(field => field.type === 'SINGLE_LINE_TEXT');
```

### カスタムツールチップ設定
```typescript
tippy(elem, {
    content: `
        <p>フィールドコード: ${field.code}<br/>フィールド名: ${field.label}</p>
        <pre>${JSON.stringify(field, null, 2)}</pre>
    `,
    allowHTML: true,
});
```

## 特徴

### 技術的特徴
- **TypeScript使用**: 型安全性とIDEサポートの向上
- **非同期処理**: REST API呼び出しでのawait/async使用
- **動的要素対応**: 実行時にフィールド情報を取得して処理
- **カスタムテーマ**: `tomato`テーマで削除ボタンの視覚的警告

### UX向上要素
- **文脈的情報提供**: 各操作の説明をツールチップで表示
- **技術情報の可視化**: フィールド設定をJSON形式で開発者に提供
- **視覚的差別化**: 削除操作に特別な色テーマを適用

## 利用場面
- **Kintoneアプリのユーザビリティ向上**
- **管理者向けのフィールド情報確認ツール**
- **カスタマイズ開発での操作説明**
- **業務アプリケーションのUI改善**

## 注意事項
- Kintone環境での実行が前提
- KintoneのDOM構造に依存（CSSセレクタ）
- REST APIクライアントライブラリが必要
- 文字列一行フィールドのみが対象

## 拡張可能性
- 他のフィールドタイプへの対応
- より詳細なフィールド情報表示
- ユーザー権限に応じたツールチップ内容の変更
- 多言語対応の実装
