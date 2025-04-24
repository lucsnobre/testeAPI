const connection = require('../../../Módulo/config');

const Album = {
    getAll: async () => {
      const [rows] = await connection.query('SELECT * FROM tb_album');
      return rows;
    },
    
    getById: async (id) => {
      const [rows] = await connection.query('SELECT * FROM tb_album WHERE id_INT = ?', [id]);
      return rows[0];
    },
    
    create: async (album) => {
      const { nome, lancamento, duracao, numero_faixas, tipo_capa, id_genero, id_musica, id_premio, id_artista } = album;
      const [result] = await connection.query(
        'INSERT INTO tb_album (nome, lancamento, duracao, numero_faixas, tipo_capa, id_genero, id_musica, id_premio, id_artista) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)',
        [nome, lancamento, duracao, numero_faixas, tipo_capa, id_genero, id_musica, id_premio, id_artista]
      );
      return result.insertId;
    },
    
    update: async (id, album) => {
      const { nome, lancamento, duracao, numero_faixas, tipo_capa, id_genero, id_musica, id_premio, id_artista } = album;
      const [result] = await connection.query(
        'UPDATE tb_album SET nome = ?, lancamento = ?, duracao = ?, numero_faixas = ?, tipo_capa = ?, id_genero = ?, id_musica = ?, id_premio = ?, id_artista = ? WHERE id_INT = ?',
        [nome, lancamento, duracao, numero_faixas, tipo_capa, id_genero, id_musica, id_premio, id_artista, id]
      );
      return result.affectedRows;
    },
    
    delete: async (id) => {
      const [result] = await connection.query('DELETE FROM tb_album WHERE id_INT = ?', [id]);
      return result.affectedRows;
    }
  };
  
  module.exports = Album;