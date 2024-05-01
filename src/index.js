const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const registerRoutes = require('./routes/index.routes');
const datasource = require('./data-access/app-datasource');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

datasource.loadDatabase(() => console.log('Base de données initialisée.'))

registerRoutes(app);

const PORT = 8080;
app.listen(PORT, () => console.log(`Serveur en écoute sur le port: ${PORT}`));