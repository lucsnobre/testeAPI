/****************************************************************************/
/* Objetivo: Model responsável pelo CRUD de dados de gênero no BD           */
/* Data: 10/04/2025                                                         */
/* Autor: Cachorrada                                                        */
/* Versão: 1.0                                                              */
/****************************************************************************/

const connection = require('../../../Módulo/config');

const Genero = {
  getAll: async () => {
    const [rows] = await connection.query('SELECT * FROM tb_genero');
    return rows;
  },
  
  getById: async (id) => {
    const [rows] = await connection.query('SELECT * FROM tb_genero WHERE id_INT = ?', [id]);
    return rows[0];
  },
  
  create: async (genero) => {
    const { nome } = genero;
    const [result] = await connection.query(
      'INSERT INTO tb_genero (nome) VALUES (?)',
      [nome]
    );
    return result.insertId;
  },
  
  update: async (id, genero) => {
    const { nome } = genero;
    const [result] = await connection.query(
      'UPDATE tb_genero SET nome = ? WHERE id_INT = ?',
      [nome, id]
    );
    return result.affectedRows;
  },
  
  delete: async (id) => {
    const [result] = await connection.query('DELETE FROM tb_genero WHERE id_INT = ?', [id]);
    return result.affectedRows;
  }
};

module.exports = Genero;