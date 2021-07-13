const express = require('express');
const cors = require('cors');

const pokemonRoutes = require('./routes/pokemonRoutes');

const app = express();
const port = 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use('/', pokemonRoutes)

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`)
})