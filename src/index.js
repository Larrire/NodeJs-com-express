const express = require('express');

const routes = require('./routes');

const app = express();
app.use(routes);

app.listen(3030, () => console.log('Server started at 3030'));
