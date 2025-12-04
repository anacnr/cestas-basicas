import { bank } from "../../bank/db";
import { Router } from "express";

const route_edit_superm = Router()

route_edit_superm.put("/supermarket/edit/:id", (req, res) =>{
const { id,company,manager,cnpj_pj,photo,address,fix_tel,mobile_tel,email} = req.body

if(!id){
    alert("Alteração não realizada!")
}
    bank.query('UPDATE register_supermarket SET company = ?, manager = ?, cnpj_pj = ?, photo = ? , address = ?, fix_tel = ?, mobile_tel = ?, email = ? where id = ?', [company, manager, cnpj_pj, photo, address, fix_tel, mobile_tel, email], (err, result) =>{
    if(err){
        console.log(`Erro: ${err}`);
    }
});
});

export {route_edit_superm}