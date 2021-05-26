const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.status(200).send({
    message: "Retorna todos os pedidos",
  });
});

router.post("/", (req, res, next) => {
  res.status(201).send({
    message: "Adiciona novo pedido",
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
