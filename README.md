# test-optimize-turborepo-ci

このリポジトリはYarnワークスペースを利用したmonorepo構成です。

## ディレクトリ構成
- apps/app-a
- apps/app-b
- packages/package-1
- packages/package-2

## 各アプリのコマンド
- `yarn workspace app-a build` / `yarn workspace app-b build`
- `yarn workspace app-a lint` / `yarn workspace app-b lint`
- `yarn workspace app-a test` / `yarn workspace app-b test`

## セットアップ
```sh
yarn install
```
