const express = require ('express');
const { json } = require ('body-parser');
const cors = require('cors');
const session = require('express-session');
const massive = require ('massive');
require('dotenv').config();
const { secret } = require("./config");
const app = express();

massive(process.env.CONNECTION_STRING).then(db => {
    app.set("db", db);
  });

  app.use(json());
  app.use(cors());
  


  app.use(
    session({
      secret: process.env.SESSION_SECRET,
      saveUninitialized: false,
      resave: false,
      cookie: { maxAge: 100000 }
    })
  );







const port = 3001;


app.listen(port, console.log(`Listening on port @ ${port}`));