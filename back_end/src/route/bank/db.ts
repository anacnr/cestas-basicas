import mysql from "mysql2"

const bank = mysql.createConnection({
    host : "localhost", user : "root", password : "", database : "basic_shopping"
});

bank.connect((err)=>{
    if(!err){
        console.log("Tudo normal");
    }
    else{
        console.log("Banco sem conexão. Erro:" , err);   
    }
})

export {bank}