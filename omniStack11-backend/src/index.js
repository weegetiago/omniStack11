const express = require('express');
const cors = require('cors'); //5.2k (gzinpped: 2.1k)
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);