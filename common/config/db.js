import { Pool } from "pg";

const pool = new Pool({
    user:"postgres" ,
    host:"localhost",
    port:5432,
    database:"notes",
    password:"postgres"
});

export default pool;