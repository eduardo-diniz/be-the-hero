const express = require('express');

const cors = require('cors');


const routes = require('./routes');

const app = express();

app.use(cors());

app.use(express.json());

app.use(routes);


app.listen(3333);

/**
 * Metodos HTTP:
 * GET:Buscar/Listar
 * POST:Criar
 * PUT: Editar
 * Delete: Deletar
 * 
 */

 /**
  * Tipos de parâmetros:
  * 
  * Query Params:  Parâmetros nomeados e enviados na rota após o simbolode "?", 
  * geralmente serve para filtros, paginação. EX: /users?page=2&nome=Eduardo
  * 
  * Route Params: Parâmetros utilizado para identificar recursos EX: :id   /users/1
  * 
  * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
  * 
  */

  /**
   * 
   * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server.
   * NoSQL: MongoDB, CouchDB.
   * 
   */

   /**
    * 
    * Driver do BD: SELECT *FROM users
    * Query Builder: table('users').select('*').where()
    * 
    */




