const express = require("express");
const router = express.Router();
const mysql = require("../mysql").pool;

router.get("/", (req, res, next) => {
  // res.status(200).send({
  //   message: "Retorna todos os produtos",
  // });

  mysql.getConnection((error,conn)=>{
    if(error){
      return res.status(500).send({error:error})
    }
    conn.query(
      "SELECT * FROM products;",
      (error,response,fields)=>{
        if(error){
          return res.status(500).send({error:error})
        }
        return res.status(200).send({response:response})

      }
    )

  })
});



router.post("/", (req, res, next) => {

  mysql.getConnection((error, conn) => {
    if(error){
      return res.status(500).send({error:error})
    }
    conn.query(
      "INSERT INTO products(name,price,image) VALUES(?,?,?)",
      [req.body.name, req.body.price, req.body.image],
      (error, response, field) => {

        conn.release();

        if (error) {
          return res.status(500).send({
            error: error,
            response: null,
          });
        }

        res.status(201).send({
          message: "Produto inserido com sucesso",
          id_product: response.insertId,
        });
      }
    );
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
