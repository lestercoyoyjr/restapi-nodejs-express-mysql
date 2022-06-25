import {request, response, Router} from "express";
import { restart } from "nodemon";

const router=Router();

router.get("/",(request, response)=>{
    response.send("Lester Coyoy");
});

export default router;