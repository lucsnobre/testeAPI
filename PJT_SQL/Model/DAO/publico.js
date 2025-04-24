/****************************************************************************/
/* Objetivo: Model responsável pelo CRUD de dados de público no BD         */
/* Data: 10/04/2025                                                         */
/* Autor: Cachorrada                                                        */
/* Versão: 1.0                                                              */
/****************************************************************************/

const connection = require('../../../Módulo/config');

const PublicoAlvo = {
  getAll: async () => {
    const [rows] = await connection.query('SELECT * FROM tb_publicoAlvo');
    return rows;
  },
  
  getById: async (id) => {
    const [rows] = await connection.query('SELECT * FROM tb_publicoAlvo WHERE id_INT = ?', [id]);
    return rows[0];
  },
  
  create: async (publicoAlvo) => {
    const { faixa_etaria, local } = publicoAlvo;
    const [result] = await connection.query(
      'INSERT INTO tb_publicoAlvo (faixa_etaria, local) VALUES (?, ?)',
      [faixa_etaria, local]
    );
    return result.insertId;
  },
  
  update: async (id, publicoAlvo) => {
    const { faixa_etaria, local } = publicoAlvo;
    const [result] = await connection.query(
      'UPDATE tb_publicoAlvo SET faixa_etaria = ?, local = ? WHERE id_INT = ?',
      [faixa_etaria, local, id]
    );
    return result.affectedRows;
  },
  
  delete: async (id) => {
    const [result] = await connection.query('DELETE FROM tb_publicoAlvo WHERE id_INT = ?', [id]);
    return result.affectedRows;
  }
};

module.exports = PublicoAlvo;