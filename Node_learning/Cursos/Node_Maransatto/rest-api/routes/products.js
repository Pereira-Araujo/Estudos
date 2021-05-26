const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.status(200).send({
    message: "Retorna todos os produtos",
  });
});

router.post("/", (req, res, next) => {
  res.status(201).send({
    message: "Adiciona novos produtos",
  });
});

router.get("/:id_product", (req, res, next) => {
  const id = req.params.id_product;

  res.status(200).send({
    message: "Retorna um novo produto",
    id: id,
  });
});

// ALTERA
router.patch("/", (req, res, next) => {
  res.status(201).send({
    message: "Altera produtos",
  });
});

router.delete("/", (req, res, next) => {
  res.status(201).send({
    message: "Deleta os produtos",
  });
});


module.exports = router;
