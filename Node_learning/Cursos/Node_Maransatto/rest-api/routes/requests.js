const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.status(200).send({
    message: "Retorna todos os pedidos",
  });
});

router.post("/", (req, res, next) => {
  const request = {
    id_product:req.body.id_product,
    amount:req.body.amount
  }
  res.status(201).send({
      message: "Adiciona novos produtos",
      requestCreated:request
  });
});

router.get("/:id_request", (req, res, next) => {
  const id = req.params.id_request;

  res.status(200).send({
    message: "Retorna um pedido",
    id: id,
  });
});


router.delete("/", (req, res, next) => {
  res.status(201).send({
    message: "Deleta pedidos",
  });
});


module.exports = router;
