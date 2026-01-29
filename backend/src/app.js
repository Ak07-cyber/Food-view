//we will create a server in this file

const express=require("express");
const cookieParser=require('cookie-parser');
const authRoutes=require('./routes/auth.routes');

const app=express();

//parsing the body json using the middleware
app.use(express.json());
app.use(cookieParser());

app.use('/api/auth',authRoutes);
app.use("/api/food",foodRoutes);

module.exports=app;