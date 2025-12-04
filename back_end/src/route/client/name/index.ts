import { bank } from "../../bank/db";
import { Router } from "express";

const route_supermarket = Router();

route_supermarket.get("/user/supermarket/:id", async (req, res) => {
  bank.query("SELECT * FROM coxinha", (err, result) => {
    if (!err) {
      console.log(result);
    } else {
      console.log("Erro: ", err);
      return;
    }
    res.json(result);
  });
});
export { route_supermarket };
