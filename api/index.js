import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import mongoose from 'mongoose';
import userRouter from './routes/user.router.js'
import authRouter from './routes/auth.router.js'

mongoose.connect().then(() =>{
    console.log("Connected to database")
}).catch((err) => {console.log(err)}) 

const app = express();
app.use(express.json());

app.listen(3000, () => {
    console.log(`Server is running on port 3000`);
})

app.use("/api/user",userRouter)
app.use("/api/auth",authRouter)
