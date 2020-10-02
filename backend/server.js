const express = require('express');
const app = express();
const cors = require('cors');

require('dotenv').config();

app.use(cors());
app.use(express.json());


// ------------------------------------------------
// Set up Object-Document mapping
// i.e., declare the schema of collections in the db
// ------------------------------------------------
const mongoose = require('mongoose');
//connect to local
//mongoose.connect('mongodb://localhost:27017/shoppingDB', { 
//    useNewUrlParser: true,
 //   useCreateIndex: true,
//    useUnifiedTopology: true
//});
const uri= process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser: true,useCreateIndex: true,useUnifiedTopology: true});
const connection= mongoose.connection;
connection.once('open', ()=> {
    console.log("connect sucessfully");
})

const exercisesRouter = require('./routes/exercises');
const usersRouter= require('./routes/users');

app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);



app.listen(5000, () => console.log('Running on http://localhost:5000/'));