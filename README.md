## KINRO API - 金曜ロードショーのAPI v3.0

金曜ロードショーの詳細を取得できるAPI

## 使い方 / Usage

https://kinro-api.vercel.app/kinro

上記のエンドポイントにGETリクエストを送ると、以下のようなデータがJSON形式で返されます。

#### レスポンス例

```json
{
  "broadcastStartTime": "1月5日よる9時放送",
  "title": "千と千尋の神隠し",
  "imageUrl": "https://dtg3yjoeemd2c.cloudfront.net/cms/lineup/94262c2dd76bfdbd452b6c13b1dabc6cb6399137.jpg",
  "mitai":"21752"
}
```

`broadcastStartTime`は放送予定時刻、`title`は映画のタイトル, `imageUrl`は放送タイトルの画像, `Mitai`は見たい！の数です。

### なぜ作ったのか

NestJSでなにか適当なAPIを作ってやろうと思って作っただけなので需要はないと思います(笑)

使っていただけると嬉しいです。

#### curl

```bash
curl -X GET https://kinro-api.vercel.app/kinro
```

### バージョン履歴

v3.0 - コードを大幅に短縮, Mitaiのレスポンスを追加

v2.0 - レスポンスにtitleを追加。

v1.0 - 初期バージョン

**Powerd By island_dev**
