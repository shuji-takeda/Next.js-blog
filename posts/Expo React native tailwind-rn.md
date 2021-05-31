---
title: "Expo React native tailwind-rn 導入"
date: "2021-04-25"
---


tailwindscssを使ってみたい！

ということで、React-nativeにtailwind-rnを導入してみました。

まずはInstallから。

`` yarn add tailwind-rn ``

で、次に

`npx tailwindcss init`

これで、tailwind.config.jsが作成されます。

この中で、色々カスタマイズ出来る感じなんですかね。

[tailwindの公式ドキュメントへのリンク](https://tailwindcss.com/docs/configuration)

その次は、

`npx create-tailwind-rn`

このコマンドで、customした内容も含めて、適用されたstyles.jsonが作成されます。

導入自体は、これで終了。

あとは使用したいコンポーネントで、こうして

`import tailwind from 'tailwind-rn';`

こう

`<Text style={tailwind('text-red-500')}>`

tailwindを使用するファイルで初期化するのは、利便性が悪いから、tailwind.jsというのを作成して、どこからでもimportするだけで使えるように設定することをオススメしてくれてるので、

おとなしくそうしときましょう。

その内容については、リンク先のドキュメント参照してみてください。

[公式ドキュメント][]

[公式ドキュメント]:[https://github.com/vadimdemedes/tailwind-rn]
