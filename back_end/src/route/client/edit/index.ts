import { bank } from "../../bank/db";
import { Router } from "express";

const route_edit = Router();

route_edit.put("/edit", (req, res) => {
  const { id, name } = req.body;

  if (!id && !name) {
    alert("Campos incompletos");
  }
  bank.query(
    "UPDATE coxinha SET name = ? where id = ?",
    [name, id],
    (err, result) => {
      if (err) {
        console.log(`Erro: ${err}`);
      }
    }
  );
});

export { route_edit };
