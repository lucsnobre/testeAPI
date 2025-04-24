/****************************************************************************/
/* Objetivo: Model responsável pelo CRUD de dados de produtor no BD        */
/* Data: 10/04/2025                                                         */
/* Autor: Cachorrada                                                        */
/* Versão: 1.0                                                              */
/****************************************************************************/

const connection = require('../../../Módulo/config');

const Produtor = {
  getAll: async () => {
    const [rows] = await connection.query('SELECT * FROM tb_produtor');
    return rows;
  },
  
  getById: async (id) => {
    const [rows] = await connection.query('SELECT * FROM tb_produtor WHERE id_INT = ?', [id]);
    return rows[0];
  },
  
  create: async (produtor) => {
    const { nome, nacionalidade, data_nascimento } = produtor;
    const [result] = await connection.query(
      'INSERT INTO tb_produtor (nome, nacionalidade, data_nascimento) VALUES (?, ?, ?)',
      [nome, nacionalidade, data_nascimento]
    );
    return result.insertId;
  },
  
  update: async (id, produtor) => {
    const { nome, nacionalidade, data_nascimento } = produtor;
    const [result] = await connection.query(
      'UPDATE tb_produtor SET nome = ?, nacionalidade = ?, data_nascimento = ? WHERE id_INT = ?',
      [nome, nacionalidade, data_nascimento, id]
    );
    return result.affectedRows;
  },
  
  delete: async (id) => {
    const [result] = await connection.query('DELETE FROM tb_produtor WHERE id_INT = ?', [id]);
    return result.affectedRows;
  }
};

module.exports = Produtor;