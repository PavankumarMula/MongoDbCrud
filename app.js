require("dotenv").config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");

const cors = require("cors");
app.use(cors());
app.use(express.json());

// routers
const userRouter = require("./routes/userRouter");
const expenseRouter = require("./routes/expenseRouter");

// user router
app.use(userRouter);
app.use(expenseRouter);

// env variables
const PORT = process.env.PORT_NUMBER || 4000;
const userName = process.env.USER;
const password = process.env.PASSWORD;
const database = process.env.DB_NAME;

// connecting to mongodb database
mongoose
  .connect(
    `mongodb+srv://${userName}:${password}@cluster0.j383jen.mongodb.net/${database}?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then((result) => {
    console.log(`MongoDb is connected<<<<<<<<`);
    app.listen(PORT);
  })
  .catch((err) => console.log(err));
