require('dotenv').config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");

const cors = require('cors');
app.use(cors());
app.use(express.json());

// routers 
const userRouter =  require ('./routes/userRouter');
const expenseRouter = require("./routes/expenseRouter");


// user router
app.use(userRouter);
app.use(expenseRouter);

const PORT = process.env.PORT_NUMBER || 4000

// connecting to mongodb database
mongoose.connect(process.env.MONGODB_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(result=>{
  console.log(`MongoDb is connected<<<<<<<<`);
  app.listen(PORT)
})
.catch(err=>console.log(err))

