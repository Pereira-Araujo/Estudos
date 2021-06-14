const express = require("express");
const router = express.Router();
const mysql = require("../mysql").pool;

router.get("/", (req, res, next) => {
  mysql.getConnection((error, conn) => {
    if (error) {
      return res.status(500).send({ error: error });
    }
    conn.query("SELECT * FROM requests;", (error, data, fields) => {
      if (error) {
        return res.status(500).send({ error: error });
      }
      const response = {
        amount: data.length,
        requests: data.map((request) => {
          return {
            id_request: request.id_request,
            id_product: request.id_product,
            amount: request.amount,

            request: {
              type: "GET",
              description: "Insere um pedido",
              url: "http://localhost:3000/requests/" + request.id_product,
            },
          };
        }),
      };
      return res.status(200).send(response);
    });
  });
});

//
router.post("/", (req, res, next) => {
  mysql.getConnection((error, conn) => {
    if (error) {
      return res.status(500).send({ error: error });
    }
    conn.query(
      "INSERT INTO requests(id_product,amount) VALUES(?,?)",
      [req.body.id_product, req.body.amount],
      (error, data, field) => {
        conn.release();

        if (error) {
          return res.status(500).send({
            error: error,
            data: null,
          });
        }

        res.status(201).send({
          message: "Pedido inserido com sucesso",
          id_product: req.body.id_product,
        });
      }
    );
  });
});

//

router.get("/:id_request", (req, res, next) => {
  mysql.getConnection((error, conn) => {
    if (error) {
      return res.status(500).send({ error: error });
    }
    conn.query(
      "SELECT * FROM requests WHERE id_request = ?;",
      [req.params.id_request],

      (error, data, fields) => {
        if (error) {
          return res.status(500).send({ error: error });
        }
        if (data.length === 0) {
          return res.status(404).send({ message: "Produto não encontrado" });
        }
        return res.status(200).send({ data: data });
      }
    );
  });
});

router.delete("/", (req, res, next) => {
  mysql.getConnection((error, conn) => {
    if (error) {
      return res.status(500).send({ error: error });
    }
    conn.query(
      "DELETE FROM requests WHERE id_request = ?",
      [req.body.id_request],
      (error, data, field) => {
        conn.release();

        if (error) {
          return res.status(500).send({
            error: error,
            data: null,
          });
        }

        res.status(202).send({
          message: "Produto removido com sucesso",
        });
      }
    );
  });
});

module.exports = router;
