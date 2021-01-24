# js-node-template

Node.jsの開発を行うためのテンプレートです。<BR>
主に次のものをサポートしています。

* Babel(ECMAScript 2015+)
* jest
* eslint
* prettier
* jsdoc

## dev dependencies modules.

次のモジュールは [package.json](/package.json) で管理しています。

* node-dev
* jest
* babel-jest
* eslint
* eslint-config-prettier
* eslint-plugin-prettier
* eslint-plugin-jest
* prettier
* jsdoc
* @babel/core
* @babel/preset-env
* @babel/plugin-transform-arrow-functions
* @babel/polyfill
* @babel/cli
* rimraf
* husky
* lint-staged

## 要件

* Linux / MacOS
* Node.js v12.9 or latter
* yarn

## インストール

`git clone` したディレクトリ内で `yarn` を実行します。

## 設定

各モジュールの設定について説明します。

### Babel

* CLI
* preset-env
* plugin-transform-arrow-functions

#### 設定ファイル

* [babel.config.json](/babel.config.json)

### jest

* モッククリア有効化
* モジュールのパスエリアス設定 `/src/foo.js` -> `@/foo.js`

#### 設定ファイル

* [jest.config.js](/jest.config.js)

### eslint

* eslint:recommended有効化
* prettier有効化

#### 設定ファイル

* [.eslintec.js](/.eslintrc.js)

### prettier

* eslintのrulesを参照

#### 設定ファイル

* [.eslintec.js](/.eslintrc.js)
* [.prettierrc.json](/.prettierrc.json)
* [.prettierignore](/.prettierignore)

### husky

* git commit前にlintを実行する

#### 設定ファイル

* [package.json](/package.json)

### lint-staged

* gitのステージに上がっているファイルに対し、eslintを実行する

#### 設定ファイル

* [package.json](/package.json)

## ビルド及び実行/テスト

出力ディレクトリは `./dist` です。

#### 出力ディレクトリをクリーンする

```
yarn clean
```
### 実行する

Babelでトランスパイルします。

```
yarn build
```

### 実行する

アプリケーションを実行します。

```
yarn start
```

### 開発モードで実行する

コードの修正を検知して再実行したい場合はこちらです。

```
yarn dev
```

### テストする

```
yarn test
```

カバレッジを確認する場合はこちらです。

```
yarn test:cov
```

### チェックスタイル、フォーマッター

```
yarn lint
```

チェックと同時に問題を修正します。

```
yarn lint:fix
```

### ドキュメント生成

```
yarn jsdoc
```

## 参考

* [Node.js 日本語](https://nodejs.org/ja/)
* [MDN WebDocs JavaScript 日本語](https://developer.mozilla.org/ja/docs/Web/JavaScript)
* [Babel Docs](https://babeljs.io/docs/en/)
* [JEST 日本語](https://jestjs.io/ja/)
* [ESLint rules](https://eslint.org/docs/rules/)