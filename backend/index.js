const express = require('express');
const app = express();

app.use(express.urlencoded({extended:false}));

const PORT = process.env.PORT || 5000;

app.get('/',(req,res)=>{
    res.send('Yay the server works for now');
})
app.listen(PORT,()=>{
    console.log(`Connected to PORT:${PORT}`);
})
