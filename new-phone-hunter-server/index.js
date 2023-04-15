const express=require('express');
const phones=require('./phones.json')
var cors = require('cors')
const app=express();
const port=4110;
app.use(cors())

app.get('/',(req,res)=>{
    res.send('my phone informations comming soon0000000000')
})

app.get('/phones',(req,res)=>{
    res.send(phones);
})
app.get('/phones/:id',(req,res)=>{
    const id =req.params.id;
    const i_id=parseInt(id)
    console.log('route id:',i_id);
    const phone=phones.find(phone=>phone.id===i_id) || {};
    res.send(phone)
})

app.listen(port,()=>{
    console.log(`My phone server is running on port:${port}`)
})