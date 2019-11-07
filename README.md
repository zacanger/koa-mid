# koa-mid

[![Support with PayPal](https://img.shields.io/badge/paypal-donate-yellow.png)](https://paypal.me/zacanger) [![Patreon](https://img.shields.io/badge/patreon-donate-yellow.svg)](https://www.patreon.com/zacanger) [![ko-fi](https://img.shields.io/badge/donate-KoFi-yellow.svg)](https://ko-fi.com/U7U2110VB)

Common Koa middlewares

* koa-bodyparser
* koa-compress
* koa-cookie
* koa-helmet
* koa-lowercase

With reasonable defaults.

```javascript
const Koa = require('koa')
const mid = require('koa-mid')
const app = new Koa()
app.use(mid)
// the rest of your server
```

[LICENSE](./LICENSE.md)
