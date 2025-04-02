const express= require('express');
const app = express();
 let port  =5050;
 app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
 });


 app.get('/new',(req,res)=>{
    res.send('hello world');
 });