import express, { urlencoded } from "express";
import path from "path";
import expressEjsLayouts from "express-ejs-layouts";
import { getHome, getAbout } from "./src/app.controller.js";
import { getStrock } from "./src/services.controller.js";


const app = express();

app.use(express.static('public'));
app.use(express.json());
app.use(urlencoded({ extended: true }));

app.use(expressEjsLayouts);
app.set("view engine", "ejs");
app.set("views", path.resolve("src", "views"));

app.get('/', getHome);
app.get('/about', getAbout);
app.get('/services/strock', getStrock);

app.listen(3000, ()=>{
    console.log('Servering is listening on server 3000')
})

export default app;
