const path = require('path');
const envfile=require('dotenv').config({path:"./.env"}).parsed;

const mongourl=envfile.MONGO_URI;
const port = envfile.PORT_NUMBER;

const express = require("express");
const app = express();
const mongoose = require("mongoose");

const cors = require('cors');
app.use(cors());
app.use(express.json());

// routers 
const userRouter = require('./routes/userRouter');
const expenseRouter = require("./routes/expenseRouter");

// user router
app.use(userRouter);
app.use(expenseRouter);

// const PORT = process.env.PORT_NUMBER || 4000;
// const mongoUrl = process.env.MONGO_URI;

// connecting to mongodb database
mongoose.connect(mongourl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(result => {
  console.log(`MongoDb is connected<<<<<<<<`);
  app.listen(port);
})
.catch(err => console.log(err));
