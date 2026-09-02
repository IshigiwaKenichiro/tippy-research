# tippy-research

【気になるライブラリ研究部】Tippy.jsを研究するプロジェクトです。

公式ドキュメント: https://atomiks.github.io/tippyjs

**3通りの使い方**（CDN / React / kintone）をサンプルとして用意し、それぞれの書き味を比べられるようにしています。

## デモ

GitHub Pages でホスティングしています。ビルド済みなのでそのまま開けます。

**https://ishigiwakenichiro.github.io/tippy-research/build/index.html**

| サンプル | 内容 |
|---|---|
| [CDN Example](https://ishigiwakenichiro.github.io/tippy-research/build/cdn-example.html) | `<script>` を2本読むだけ。ビルド不要 |
| [React Example](https://ishigiwakenichiro.github.io/tippy-research/build/react-example.html) | `@tippyjs/react` でコンポーネントとして使う。テーマ切り替えつき |
| kintone Example | kintoneのJS/CSSに設定して使う（下記） |

## kintoneで試す

kintoneのJS/CSSカスタマイズに、次の2つを**URL指定**で追加してください。

```
https://ishigiwakenichiro.github.io/tippy-research/build/kintone-example.js
https://ishigiwakenichiro.github.io/tippy-research/build/kintone-example.css
```

設定すると、こう動きます。

**一覧画面** — 各行の3つのボタンに説明のツールチップが付きます。

| ボタン | ツールチップ |
|---|---|
| 表示（`a.recordlist-show-gaia`） | ドキュメントレコードの詳細を表示します。 |
| 編集（`button.recordlist-edit-gaia`） | ドキュメントレコードを編集します。 |
| 削除（`button.recordlist-remove-gaia`） | ドキュメントレコードを削除します。**`tomato` テーマ**で色を変えています |

**詳細画面** — **文字列1行フィールド**すべてに、そのフィールドの定義を出します。
`getFormFields` でスキーマを取り、フィールドコード・フィールド名と、JSONそのものを整形して表示します。

> **一覧画面のサンプルは、各セレクタの最初の1件にしか付きません。**
> `document.querySelector` で1要素だけ取っているためです（全行に付けるなら `querySelectorAll` に変えてください）。

## 3つの実装方法の比較

### CDN（`src/cdn-example.html`）

`@popperjs/core` と `tippy.js` を `<script>` で読み込むだけ。ビルド環境が要りません。

```html
<script src="https://unpkg.com/@popperjs/core@2"></script>
<script src="https://unpkg.com/tippy.js@6"></script>
```

呼び出し方は2通りあり、両方を並べています。

```javascript
tippy('#myButton', { content: 'My tooltip!' });   // CSSセレクタを渡す
```

```html
<button data-tippy-content="...">   <!-- 属性で書く（tippy("button") で一括適用） -->
```

DOMを動的に作ってから `tippy()` を呼ぶ例も入れています。

### React（`src/react-example.jsx`）

`@tippyjs/react` の `<Tippy>` で子要素を包みます。`content` に**JSXをそのまま渡せる**のが利点です。

```jsx
<Tippy content={<div><p>Tooltip content</p></div>} theme={theme}>
  <button>Change Theme</button>
</Tippy>
```

ボタンを押すと `default` → `light` → `translucent` → `material` の順にテーマが変わります。
状態に応じてツールチップの見た目を変えられることを確かめるためのサンプルです。

### kintone（`src/kintone-example.tsx`）

素の `tippy()` を使います。kintoneのDOMを `querySelector` で掴んで付ける形です。
`allowHTML: true` を渡すと `content` にHTML文字列を書けます。

## 開発

```bash
npm install

npm run start    # 開発サーバー（parcel、ブラウザが自動で開きます）
npm run build    # build/ に出力
```

エントリは `src/index.html` と `src/kintone-example.tsx` の2つです。
`cdn-example.html` と `react-example.html` は `index.html` からリンクされているため、parcel が辿って一緒にビルドします。

> **`build/` はコミットしています。** GitHub Pages から配信して kintone に読み込ませるためです。
> サンプルを直したら `npm run build` の結果もコミットしてください。

## 各ファイルの解説

`docs/` に、ソース1ファイルにつき1つの解説を置いています。

- [index.html](docs/index.md) — 各サンプルへのランディングページ
- [cdn-example.html](docs/cdn-example.md) — CDN版の解説
- [react-example.jsx](docs/react-example.md) — React版の解説
- [kintone-example.tsx](docs/kintone-example.md) — kintone版の解説
- [sample.css](docs/sample.md) — `tomato` テーマの定義

## 構成

```
src/
├── index.html            各サンプルへの入り口
├── cdn-example.html      CDNで使う例
├── react-example.html    React版のホストページ
├── react-example.jsx     React版の本体
├── kintone-example.tsx   kintoneカスタマイズの例
└── sample.css            tippy のカスタムテーマ（tomato）
docs/                     src の各ファイルの解説
build/                    ビルド成果物（GitHub Pages で配信）
```
