# koa-mid

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
