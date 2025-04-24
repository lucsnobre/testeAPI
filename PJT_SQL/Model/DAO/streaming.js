/****************************************************************************/
/* Objetivo: Model responsável pelo CRUD de dados de streaming no BD       */
/* Data: 10/04/2025                                                         */
/* Autor: Cachorrada                                                        */
/* Versão: 1.0                                                              */
/****************************************************************************/

const connection = require('../../../Módulo/config');

const Streaming = {
  getAll: async () => {
    const [rows] = await connection.query('SELECT * FROM tb_streaming');
    return rows;
  },
  
  getById: async (id) => {
    const [rows] = await connection.query('SELECT * FROM tb_streaming WHERE id_INT = ?', [id]);
    return rows[0];
  },
  
  create: async (streaming) => {
    const { tipo, quantidade, link, id_plataforma } = streaming;
    const [result] = await connection.query(
      'INSERT INTO tb_streaming (tipo, quantidade, link, id_plataforma) VALUES (?, ?, ?, ?)',
      [tipo, quantidade, link, id_plataforma]
    );
    return result.insertId;
  },
  
  update: async (id, streaming) => {
    const { tipo, quantidade, link, id_plataforma } = streaming;
    const [result] = await connection.query(
      'UPDATE tb_streaming SET tipo = ?, quantidade = ?, link = ?, id_plataforma = ? WHERE id_INT = ?',
      [tipo, quantidade, link, id_plataforma, id]
    );
    return result.affectedRows;
  },
  
  delete: async (id) => {
    const [result] = await connection.query('DELETE FROM tb_streaming WHERE id_INT = ?', [id]);
    return result.affectedRows;
  }
};

module.exports = Streaming;