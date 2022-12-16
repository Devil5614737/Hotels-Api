const express=require('express');
const cors=require('cors')
const app=express();
const hotels=require('./routes/hotels')



app.use(express.json())
app.use(cors())


app.use('/api',hotels)

app.listen(4000,()=>{
    console.log('Listening on localhost:4000')
})