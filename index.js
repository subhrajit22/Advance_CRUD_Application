const ConnectDB=require('./src/db');
const express=require('express');
const router=require('./routes/auth.js');
const app=express();
ConnectDB();
app.use(express.json())
app.use(router);
// app.get("/",(req,res)=>{
//     res.status(200).end("Welcome to my server");
// })

app.listen(5000,()=>{
    console.log('listening at poet no. 5000');
});