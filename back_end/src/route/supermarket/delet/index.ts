/*
NÃO VOU UTILIZAR PARA O CADASTRO
import { bank } from "../../bank/db";
import { Router } from "express";

const route_delet_superm = Router()

route_delet_superm.delete("/delet", (req, res)=>{
    const { id, name } = req.body
    bank.query("DELETE FROM coxinha WHERE id = ?" , [id, name], (err, result)=>{
        if(err){
            console.log("Houve algum erro: " , err);
        }
        else{
            console.log("Tudo ok!");
        }
    });
});
export { route_delet_superm }*/