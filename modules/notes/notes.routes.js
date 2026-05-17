import { Router } from "express";
import pool from "../../common/config/db.js";

import createNote from "./notes.controllers.js"
import {validate} from "../../common/middleware/validation.js"
import { noteSchema } from "./notes.schema.js";


const route = Router();



route.post("/createnote", validate(noteSchema) ,createNote)



export default route;