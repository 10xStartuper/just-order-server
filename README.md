# just-order-server

## .ENV Config

1. **PORT** of your own. Default is 3000

2. Generationg **JWT_SECRET**
   `require('crypto').randomBytes(32).toString('hex')`

> Remember you should just generate **JWT_SECRET** only once and use it as a Secret key but you can come up with your own.
