import { Router } from "express";

const route = Router();

route.get("/" , (req,res)=>{
    res.send("OK!");
})

export default route;