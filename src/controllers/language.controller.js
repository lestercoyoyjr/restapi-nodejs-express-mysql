// Conectarme a la db
import { getConnection } from "./../database/database";

// Remember some apps are async
// we must wait a time so they can load
// we use "async" and "await"
const getLanguages = async(req,res)=>{
    const connection = await getConnection();
    const result =  await connection.query("SELECT id, name, programmers FROM language");
    console.log(result);
    res.json(result);
};

export const methods={
    getLanguages
};