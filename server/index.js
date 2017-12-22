const express = require('express');
const { json } = require ('body-parser');
const axios = require('axios');
const cors = require('cors');
const massive = require ('massive');
require('dotenv').config();
const app = express();
const port = 3001;

app.use(cors());
app.use(json());

app.listen( port, () => {console.log(`server listening ${port} `); });

//testing