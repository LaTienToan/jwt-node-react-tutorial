import express from "express";
import configViewEngine from "./configs/viewEngine";
import initWebRouter from "./routers/web";
require("dotenv").config()
const app = express()
const PORT = process.env.PORT || 8080

// config view engine 
configViewEngine(app)
//init web router
initWebRouter(app)

app.listen(PORT, () => { //Neu ung dung chay thanh cong se run dong log ben duoi
    console.log(">>> JWT Backend id running on the port = " + PORT);
})