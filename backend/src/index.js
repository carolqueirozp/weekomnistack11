//variável que importa a biblioteca
const express = require('express');
const cors = require('cors');
const routes = require('./routes');

//variável que instancia a aplicação
const app  = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);