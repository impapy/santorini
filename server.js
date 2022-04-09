require('dotenv').config();
const express = require('express');
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());

const userRoute = require('./routes/users.router.js');

app.use("/user",userRoute)



app.use((err,req,res,next)=>{
    console.log(err.stack)
    console.log(err.name)
    console.log(err.code)

    res.status(500).json({
        message:'something wrong'
    })
})


app.listen(process.env.PORT || 5000, () => {
    console.log(`server listen on ${process.env.PORT}`)
})