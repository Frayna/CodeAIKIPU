const express = require('express')
const path = require('path')
const app = express()
const port = 6969

app.use('/', express.static('../scripts/'))
app.use('/libs', express.static('../scripts/libs'))
app.use('/json', express.static('../scripts/json'))

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})