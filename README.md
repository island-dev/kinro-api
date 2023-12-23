# KINRO API - 金曜ロードショーの詳細を取得できるAPI v2.0

## Usage
使い方

https://kinro-api.vercel.app/kinro
にGETリクエストを送ると、json形式でtime, imgURLの値がレスポンスとしてjson形式で帰ってきます
timeは放送予定日, titleは映画のタイトル, imgURLは放送タイトルの画像です。

### レスポンス例
```{"time":"1月5日よる9時放送","title":"千と千尋の神隠し","imgUrl":"https://dtg3yjoeemd2c.cloudfront.net/cms/lineup/94262c2dd76bfdbd452b6c13b1dabc6cb6399137.jpg"}```

nestJSでなにか適当なAPIを作ってやろうと思って作っただけなので需要はないと思います(笑)

使っていただけると嬉しいです

### curl
```$ curl -X GET https://kinro-api.vercel.app/kinro```

v2.0 - レスポンスにtitleを追加。

v1.0 - 初期バージョン

**Powerd By island_dev**
