/****************************************************************************/
/*Objetivo: Model responsável pelo CRUD de dados de música no Banco de Dados*/
/*Data: 13/02/2024                                                          */
/*Autor: Cachorrada                                                         */
/*Versão: 1.0                                                               */
/****************************************************************************/

const connection = require('../../../Módulo/config');

const Musica = {
  getAll: async () => {
    const [rows] = await connection.query('SELECT * FROM tb_musica');
    return rows;
  },
  
  getById: async (id) => {
    const [rows] = await connection.query('SELECT * FROM tb_musica WHERE id_INT = ?', [id]);
    return rows[0];
  },
  
  create: async (musica) => {
    const { nome, data_lancamento, duracao, tipo_capa, letra, link, id_premio, id_produtor, id_publico_alvo } = musica;
    const [result] = await connection.query(
      'INSERT INTO tb_musica (nome, data_lancamento, duracao, tipo_capa, letra, link, id_premio, id_produtor, id_publico_alvo) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)',
      [nome, data_lancamento, duracao, tipo_capa, letra, link, id_premio, id_produtor, id_publico_alvo]
    );
    return result.insertId;
  },
  
  update: async (id, musica) => {
    const { nome, data_lancamento, duracao, tipo_capa, letra, link, id_premio, id_produtor, id_publico_alvo } = musica;
    const [result] = await connection.query(
      'UPDATE tb_musica SET nome = ?, data_lancamento = ?, duracao = ?, tipo_capa = ?, letra = ?, link = ?, id_premio = ?, id_produtor = ?, id_publico_alvo = ? WHERE id_INT = ?',
      [nome, data_lancamento, duracao, tipo_capa, letra, link, id_premio, id_produtor, id_publico_alvo, id]
    );
    return result.affectedRows;
  },
  
  delete: async (id) => {
    const [result] = await connection.query('DELETE FROM tb_musica WHERE id_INT = ?', [id]);
    return result.affectedRows;
  }
};

module.exports = Musica;