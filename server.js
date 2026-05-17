import express from "express";
import route from "./modules/notes/notes.routes.js";



const app = express();

app.use(express.json());
app.use(route)

app.listen(8080 , ()=>{
    console.log("Server Started!");
})
