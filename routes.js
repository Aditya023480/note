import { Router } from "express";
import pool from "./db.js";


const route = Router();

route.get("/" , (req,res)=>{
    res.send("OK!");
})

route.post("/createnote" ,async (req,res)=>{

    let {title , body ,tag} = req.body;

    if(!(tag==="hard"||tag==="medium"||tag==="easy")){
        return res.status(400).json(
            {
                message:"Invalid Tag!"
            }
        )
    }

    const create_note = await pool.query("INSERT INTO notes(title , body , tag) VALUES ($1 , $2 , $3)" , [title , body , tag]);
    return res.status(201).json(
        {
            message:"Note created!"
        }
    )
})



export default route;