const express = require("express");
const router = express.Router();
const mysql = require("../mysql").pool;

router.get("/", (req, res, next) => {
  mysql.getConnection((error, conn) => {
    if (error) {
      return res.status(500).send({ error: error });
    }
    conn.query("SELECT * FROM products;", (error, data, fields) => {
      if (error) {
        return res.status(500).send({ error: error });
      }
      return res.status(200).send({ data: data });
    });
  });
});

router.post("/", (req, res, next) => {
  mysql.getConnection((error, conn) => {
    if (error) {
      return res.status(500).send({ error: error });
    }
    conn.query(
      "INSERT INTO products(name,price,image,author) VALUES(?,?,?,?)",
      [req.body.name, req.body.price, req.body.image, req.body.author],
      (error, data, field) => {
        conn.release();

        if (error) {
          return res.status(500).send({
            error: error,
            data: null,
          });
        }

        res.status(201).send({
          message: "Produto inserido com sucesso",
          id_product: data.insertId,
        });
      }
    );
  });
});

router.get("/:id_product", (req, res, next) => {
  mysql.getConnection((error, conn) => {
    if (error) {
      return res.status(500).send({ error: error });
    }
    conn.query(
      "SELECT * FROM products WHERE id_product = ?;",
      [req.params.id_product],

      (error, data, fields) => {
        if (error) {
          return res.status(500).send({ error: error });
        }
        return res.status(200).send({ data: data });
      }
    );
  });
});

router.patch("/", (req, res, next) => {
  mysql.getConnection((error, conn) => {
    if (error) {
      return res.status(500).send({ error: error });
    }
    conn.query(
      "UPDATE products SET name = ?, price = ?,image = ?, author = ?  WHERE id_product = ?",
      [
        req.body.name,
        req.body.price,
        req.body.image,
        req.body.author,
        req.body.id_product,
      ],

      (error, data, field) => {
        conn.release();

        if (error) {
          return res.status(500).send({
            error: error,
            data: null,
          });
        }

        res.status(202).send({
          message: "Produto editado com sucesso",
        });
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
      "DELETE FROM  products WHERE id_product = ?",
      [req.body.id_product],
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
  res.status(201).send({
    message: "Deleta os produtos",
  });
});

module.exports = router;
