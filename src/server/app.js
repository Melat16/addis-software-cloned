const express = require('express');
const userRouter = require('./router/userRouter');


const AppErorr = require('./utils/appError');
const Cors = require('cors');
const { errHandling } = require('./controller/errorController');

const app = express();
app.use(express.json());
app.use(Cors());

app.use('/api/v1/users',userRouter)

// app.use('/api/v1/comments',commentRouter)




app.all('*',(req,res,next)=>{
    // const err = new Error("ther os a errrasd")
    // err.statusCode=404
    // err.status="fial"
   return next(new AppErorr("Page is not found",404))
})


app.use(errHandling)

module.exports = app

