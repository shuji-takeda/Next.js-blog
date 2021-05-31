---
title: "Next.js プロジェクト環境構築 with typescript , tailwind css"
date: "2021-05-11"
---

## Next.js プロジェクト環境構築 with typescript , tailwind css

### 環境構築

- **①プロジェクト作成**

`
npx create-next-app プロジェクト名
`

- **②TypeScriptの導入**

 つづいて、作成したアプリケーションにTypeScriptを導入していきます。

 まず必要な型定義を取得しましょう。

`
yarn add --dev typescript @types/react @types/node
`

TypeScriptの導入は、簡単でプロジェクトのルートディレクトリに`tsconfig.json`を作成して、`yarn dev or npm run dev`のコマンドを叩くだけ！

`
// 作成したプロジェクトに移動しましょう。
cd プロジェクト名

// Typescript導入に必要なパッケージを取得
yarn add --dev typescript @types/react @types/node

// tsconfig.jsonを作成して、アプリ起動
touch tsconfig.json

yarn dev
`

`pages/index.js`を`index.tsx`に変更して、`localhost:3000`にアクセスして、問題なく画面が表示されていればTypeScriptの導入は完了です。

- **③Tailwind Cssの導入**

はい。とりあえず、インストールしましょう。

※Next.jsのバージョンによってインストールコマンドが異なるので、自分のバージョンに適応したモノをインストールしましょう。

`
yarn add -D tailwindcss@latest postcss@latest autoprefixer@latest
`

次に、構成ファイルを作成します。

下記コマンドを実行すると、ルートディレクトリに`tailwind.config.js` と `postcss.config.js`が作成されます。

`
npx tailwindcss init -p
`

>To make the development experience as productive as possible, Tailwind generates thousands of utility classes for you, most of which you probably won't actually use.

[公式ドキュメント](https://tailwindcss.com/docs/optimizing-for-production)に、↑のように記載されていますね。

実際は使わないようなモノも多く含んだ状態で大量のクラスを生成して容量が大きいから、不要なものを除外してしまいましょうってことですね。

```js
// tailwind.config.js
purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
```

次にTailwindをプロジェクトに適用する方法が２つあって

- 1.`_app.ts`に直接インポートする方法
- 2.`globals.css`にTailwindを含める方法

とはいえ、この環境構築では、`.style/global.css`作れていないが、チュートリアルを進めるにあたって作成する予定なので、２つ目の方法で行きたいと思います。

```css
/* ./styles/globals.css */
@tailwind base;
@tailwind components;
@tailwind utilities;
```

```js
// pages/_app.js
import '../styles/globals.css'
```

以上で、環境構築については終了です。
