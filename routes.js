import { Router } from "express";
import pool from "./db.js";


const route = Router();

route.get("/" , (req,res)=>{
    res.send("OK!");
})

route.post("/note" ,async (req,res)=>{

    let {title , body} = req.body;

    const create_note = await pool.query("INSERT INTO notes(title , body) VALUES ($1 , $2)" , [title , body]);

    

})



export default route;