//Estudar sobre a relação de portas com servidores. Para entender melhor por que o express é usado para criar um servidor.
import express from "express";
import cors from 'cors'

import { route_register_superm } from "./supermarket/register";
import { route_supermarket } from "./supermarket/dates";
import { route_edit_superm } from "./supermarket/edit";

const port = express();

port.use(cors());

port.listen(3000 , ()=>{
    console.log("Porta está sendo executada");
});

port.use(express.urlencoded({extended : true})) //Serve para o Express entender dados vindos de formulários HTML. O navegador envia os dados em um formato chamado URL-encoded(my_name=Ana).
port.use(express.json())//Permite ler dados em JSON

port.use(route_register_superm)//Registro do supermercado
port.use(route_supermarket)//Informações do supermercado
port.use(route_edit_superm)//Editar dado do supermercado
