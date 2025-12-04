import { bank } from "../../bank/db";
import { Router } from "express"

const route_supermarket = Router()

route_supermarket.get("/supermarket/:id", async (req, res)=>{

bank.query("SELECT * FROM register_supermarket", (err, result) =>{
    if(!err){
        console.log(result);
    }else{
        console.log("Erro: " , err);
        return
    }
     res.json(result)
})
});
export { route_supermarket }