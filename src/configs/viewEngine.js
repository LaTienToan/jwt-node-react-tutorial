import express from "express";
/**
 * 
 * @param {*} app - express app
 */
const configViewEngine = (app) => {
    // config cho phep app truy cap file nao, o dau
    app.use(express.static('./src/public'))
    // noi express biet minh se dung html thong qua view engine cua ejs
    app.set("view engine", "ejs")
    // tat ca view engine se luu trong thu muc ./src/views
    app.set("views", "./src/views")
}
export default configViewEngine