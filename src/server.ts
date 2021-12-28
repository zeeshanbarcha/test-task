import express from "express";
import './config/dbConfig';
import router from './route/userRoute';
const app = express();
app.use(express.json())
app.use('/api',router);
app.listen(3000,()=>{
    console.log(`app is listening on port 3000`)
})