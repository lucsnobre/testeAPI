/****************************************************************************/
/* Objetivo: Model responsável pelo CRUD de dados de artista no Banco de Dados */
/* Data: 10/04/2025                                                         */
/* Autor: Cachorrada                                                        */
/* Versão: 1.0                                                              */
/****************************************************************************/

const connection = require('../../../Módulo/config');

const Artista = {
  getAll: async () => {
    const [rows] = await connection.query('SELECT * FROM tb_artista');
    return rows;
  },
  
  getById: async (id) => {
    const [rows] = await connection.query('SELECT * FROM tb_artista WHERE id_INT = ?', [id]);
    return rows[0];
  },
  
  create: async (artista) => {
    const { nome, biografia, data_nascimento, id_premio, id_gravadora, id_plataforma } = artista;
    const [result] = await connection.query(
      'INSERT INTO tb_artista (nome, biografia, data_nascimento, id_premio, id_gravadora, id_plataforma) VALUES (?, ?, ?, ?, ?, ?)',
      [nome, biografia, data_nascimento, id_premio, id_gravadora, id_plataforma]
    );
    return result.insertId;
  },
  
  update: async (id, artista) => {
    const { nome, biografia, data_nascimento, id_premio, id_gravadora, id_plataforma } = artista;
    const [result] = await connection.query(
      'UPDATE tb_artista SET nome = ?, biografia = ?, data_nascimento = ?, id_premio = ?, id_gravadora = ?, id_plataforma = ? WHERE id_INT = ?',
      [nome, biografia, data_nascimento, id_premio, id_gravadora, id_plataforma, id]
    );
    return result.affectedRows;
  },
  
  delete: async (id) => {
    const [result] = await connection.query('DELETE FROM tb_artista WHERE id_INT = ?', [id]);
    return result.affectedRows;
  }
};

module.exports = Artista;