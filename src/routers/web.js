import express from "express";
const router = express.Router()
/**
 * 
 * @param {*} app : express
 */
const initWebRouter = (app) => {
    router.get("/", (req, res) => {
        return res.send("Hello word")
    })
    return app.use("/", router)
}

export default initWebRouter