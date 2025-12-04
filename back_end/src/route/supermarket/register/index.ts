import { bank } from "../../bank/db";
import  { Router }  from "express";

const route_register_superm = Router()

route_register_superm.post("/supermarket/register" , (req, res) =>{

    const { company,manager,cnpj_pj,photo,address,fix_tel,mobile_tel,email,password_hash } = req.body

    if(!company && !cnpj_pj){
        res.status(400).send("Campo vazio")
    }
    else{
      //Tratar a imagem

      
    bank.query("INSERT INTO register_supermarket (photo,company, manager, cnpj_pj, address, fix_tel, mobile_tel, email, password_hash) VALUE (?,?,?,?,?,?,?,?,?)" , [photo,company,manager,cnpj_pj,address,fix_tel,mobile_tel,email,password_hash] , (err) =>{
     if(err){
        console.log("Erro ao inserir nome: " , err);
        return res.status(400).send(`Ocorreu um erro AiaiAI`)  
      }
      else{
        console.log("Funcionou!");
        return res.status(200).send("Usuário cadastrado")
      }
    });        
    }
})

export {route_register_superm}