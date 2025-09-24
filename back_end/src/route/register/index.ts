import { Router, Request, Response } from "express";
import { connection } from "../index";

const RegisterRouter = Router()

RegisterRouter.post("/register", (req: Request, res: Response) => {

  const myname = req.body.myname; 

  const insert = `INSERT INTO person (name) VALUES (?)`;
  
  connection.query(insert, [myname], (err) => {

    if (!err) {
      res.send("Cadastrou!");
    } else {
      console.error("Erro ao inserir no banco:", err);
      res.status(500).send("Erro no servidor.");
    }
  });
});

export default RegisterRouter