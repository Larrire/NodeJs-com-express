const express = require('express');

const app = express()

app.get('/', (request, response) => {
  response.send('hello cc!')
})

app.listen(3030, () => console.log('Server started at 3030'))