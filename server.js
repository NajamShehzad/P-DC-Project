const express = require("express");
const app = express();
const totalIteration = 20000;
app.get('/distributed',(req,res)=>{
    const time = new Date().getTime();
    for (let i = 0; i < totalIteration; i++) {
        console.log(i);
    }
    const time2 = new Date().getTime();
    const totalTime = time2 - time;
    res.send({totalTime:totalTime});
});

app.get('/single_node',(req,res)=>{
    const singleNodeIteration = totalIteration * 3
    const time = new Date().getTime();
    for (let i = 0; i < singleNodeIteration; i++) {
        console.log(i);
    }
    const time2 = new Date().getTime();
    const totalTime = time2 - time;
    res.send({totalTime:totalTime});
});

app.listen(5001,()=>{
    console.log("server is running on port 5000");
});