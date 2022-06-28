// Conectarme a la db
import { getConnection } from "./../database/database";

// Remember some apps are async
// we must wait a time so they can load
// we use "async" and "await"
const getLanguages = async(req,res)=>{
    try {
        const connection = await getConnection();
        const result =  await connection.query("SELECT id, name, programmers FROM language");
        console.log(result);
        res.json(result);   
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const methods={
    getLanguages
};