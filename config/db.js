const mongoose = require('mongoose'); 

const connection = mongoose.createConnection('mongodb://localhost:27017/toDo').on('open',()=>{
    console.log("MongoDB Connected");
}).on('error', ()=>{
    console.log("MongoDb connection error");
});

module.exports = connection; 