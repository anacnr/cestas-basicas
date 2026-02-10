import { bank } from "../../bank/db";
import  { Router }  from "express";
import bcrypt from "bcrypt";
import { validationCNPJ_PJ } from "../../utils/cnpj_pj/validate";

const route_register_superm = Router()

route_register_superm.post("/supermarket/register" , async (req, res) =>{

    const { photo, company,manager,cnpj_pj,address,fix_tel,mobile_tel,email,password_hash } = req.body

    if(!company || !cnpj_pj){
        res.status(400).send("campo-vazio")
        return
    }
    else{
    //Tratar a imagem

    //Tratar o CNPJ/PJ
    if(!validationCNPJ_PJ(cnpj_pj)){
     res.status(400).send("cnpj-ou-pj-invalido")
   }
   else{
    //Segurança da senha
    const saltNumber = 10
    const hashing_pass = await bcrypt.hash(password_hash, saltNumber)

    bank.query("INSERT INTO register_supermarket (photo,company, manager, cnpj_pj, address, fix_tel, mobile_tel, email, password_hash) VALUES (?,?,?,?,?,?,?,?,?)" , [photo, company,manager,cnpj_pj,address,fix_tel,mobile_tel,email,hashing_pass] , (err) =>{
     if(err){
      console.log("ERRO: " , err);      
        return res.status(400).send(`Ocorreu um erro AiaiAI`)  
      }
      else{
        return res.status(200).send("Usuário cadastrado")
      }
    });
   }  
    }
})

export {route_register_superm}