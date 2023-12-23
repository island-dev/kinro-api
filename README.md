# KINRO - API 金曜ロードショーの詳細を取得できるAPI v1.0

## Usage
使い方

https://kinro-api.vercel.app/kinro
にGETリクエストを送るだけで、json形式でtime, imgURLの値が取得できます
timeは放送予定日, imgURLは放送タイトルの画像です。

nestJSでなにか適当なAPIを作ってやろうと思って作っただけなので需要はないと思います(笑)

使っていただけると嬉しいです

### curl
$ curl -X GET https://kinro-api.vercel.app/kinro

**Powerd By island_dev**
