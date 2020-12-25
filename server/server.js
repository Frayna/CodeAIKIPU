const express = require('express')
const path = require('path')
const app = express()
const port = 4200

app.use('/', express.static('../scripts/'))

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})