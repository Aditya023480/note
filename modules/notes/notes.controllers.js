import pool from "../../common/config/db.js"

const createNote= async (req,res)=>{

    let {title , body ,tag} = req.body;

    const create_note = await pool.query("INSERT INTO notes(title , body , tag) VALUES ($1 , $2 , $3)" , [title , body , tag]);
    return res.status(201).json(
        {
            message:"Note created!"
        }
    )

}

export default createNote 