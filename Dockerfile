# Node.js 環境をセットアップ（React のビルド用）
FROM node:18-alpine AS build

WORKDIR /app

# 依存関係をインストール
COPY package*.json ./
RUN npm install

# Babel プラグインのインストール（必要なら）
RUN npm install --save-dev @babel/plugin-proposal-private-property-in-object

# React アプリをビルド
COPY . .
RUN npm run build

# 軽量な Nginx イメージを使用（React の公開用）
FROM nginx:1.25-alpine

# ビルド成果物を Nginx の公開ディレクトリにコピー
COPY --from=build /app/build /usr/share/nginx/html

# Nginx をデフォルト設定で起動
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
