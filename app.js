require('dotenv').config();

const express = require('express');
const app = express();

const moves = require('./controllers/userMovesController')
const user = require('./controllers/userController')

const sequelize = require('./db');

sequelize.sync();
app.use(express.json());
app.use(require('./middleware/headers'))

app.use('/auth', user);
app.use(require('./middleware/validate-session'));
app.use('/moves', moves);

app.listen(process.env.PORT, () => console.log(`app is listening on ${process.env.PORT}`));
