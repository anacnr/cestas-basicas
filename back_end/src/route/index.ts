import express  from "express" //Auxilia nos métodos e rotas
import mysql from 'mysql2' //Instancia do banco
import cors from 'cors' //Opera com o navegador
import RegisterRouter from "./register";//Importa o método post

const api = express();
//Faz o navegador aceitar a solicitação
api.use(cors())
//Middlewares
api.use(express.urlencoded({extended:true}))
api.use(express.json())

api.use("/" , RegisterRouter)

api.listen(3000, ()=>{console.log("Porta aberta");
})

export const connection = mysql.createConnection({
    host : 'localhost', user : 'root', password : "" , database : 'test'
})

connection.connect((err)=>{
    if(!err){
        console.log("Conexxão OK");
    } else{
        console.log("Conexão BAD " , err);//Funcionou! Emitiu um objeto de erros
    }
})
