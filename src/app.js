import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser";

const app = express();


// Middleware 

const options={
    origin:process.env.CORS_ORIGIN,
    credentials:true
}


app.use(cors(options))

// form data 
app.use(express.json({
    limit:"16kb"
}))


// url  data 
app.use(express.urlencoded({extended:true,limit:"16kb"}))


// static files 
app.use(express.static("public"))


// cookie parser 
app.use(cookieParser())








export {app}