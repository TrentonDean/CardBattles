const express = require('express');
const app = express();
const cors = require('cors')
const cookieParser = require('cookie-parser')
const port = 8000;

require('dotenv').config();
require('./config/mongoose.config');

app.use(cors({credentials:true, origin:"http://localhost:3000"}))
app.use(express.json());                           
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser())

const playerRoutes = require("./routes/player.routes");
playerRoutes(app);

app.listen(port, () => console.log(`Listening on port: ${port}`) );