const Avaliacao = {
    getAll: async () => {
      const [rows] = await connection.query('SELECT * FROM tb_av');
      return rows;
    },
    
    getById: async (id) => {
      const [rows] = await connection.query('SELECT * FROM tb_av WHERE id_INT = ?', [id]);
      return rows[0];
    },
    
    create: async (avaliacao) => {
      const { pontuacao, comentario, id_musica } = avaliacao;
      const [result] = await connection.query(
        'INSERT INTO tb_av (pontuacao, comentario, id_musica) VALUES (?, ?, ?)',
        [pontuacao, comentario, id_musica]
      );
      return result.insertId;
    },
    
    update: async (id, avaliacao) => {
      const { pontuacao, comentario, id_musica } = avaliacao;
      const [result] = await connection.query(
        'UPDATE tb_av SET pontuacao = ?, comentario = ?, id_musica = ? WHERE id_INT = ?',
        [pontuacao, comentario, id_musica, id]
      );
      return result.affectedRows;
    },
    
    delete: async (id) => {
      const [result] = await connection.query('DELETE FROM tb_av WHERE id_INT = ?', [id]);
      return result.affectedRows;
    }
  };
  
  module.exports = Avaliacao;
  
  // ==========================================================
  // models/Gravadora.js - Modelo para tb_gravadora
  // ==========================================================
  const connection = require('../config/database');
  
  const Gravadora = {
    getAll: async () => {
      const [rows] = await connection.query('SELECT * FROM tb_gravadora');
      return rows;
    },
    
    getById: async (id) => {
      const [rows] = await connection.query('SELECT * FROM tb_gravadora WHERE id_INT = ?', [id]);
      return rows[0];
    },
    
    create: async (gravadora) => {
      const { nome, fundacao, sede } = gravadora;
      const [result] = await connection.query(
        'INSERT INTO tb_gravadora (nome, fundacao, sede) VALUES (?, ?, ?)',
        [nome, fundacao, sede]
      );
      return result.insertId;
    },
    
    update: async (id, gravadora) => {
      const { nome, fundacao, sede } = gravadora;
      const [result] = await connection.query(
        'UPDATE tb_gravadora SET nome = ?, fundacao = ?, sede = ? WHERE id_INT = ?',
        [nome, fundacao, sede, id]
      );
      return result.affectedRows;
    },
    
    delete: async (id) => {
      const [result] = await connection.query('DELETE FROM tb_gravadora WHERE id_INT = ?', [id]);
      return result.affectedRows;
    }
  };
  
  module.exports = Gravadora;