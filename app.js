const express = require("express");
const mongoose = require("mongoose");
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
require("dotenv").config();
const app = express();
const userRouter = require('./routes/UserRoutes'); //USER ROUTES

const port = process.env.PORT || 8000; //PORT

//connection
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    // createIndexes: true,
  })
  .then(() => {
    console.log("DATABASE CONNECTED");
  })
  .catch((error) => {
    console.log(error);
  });
//MIDDLEWARES
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cookieParser());

//ROUTES
app.use('/api', userRouter);

app.listen(port, () => {
  console.log(`NODE IS RUNNING ON PORT ${port}`);
});
