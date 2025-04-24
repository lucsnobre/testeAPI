/*******************************************************************************/
/*Objetivo: Controller responsável pela manipulação do CRUD de dados de música */
/*Data: 13/02/2024                                                             */
/*Autor: Cachorrada                                                            */
/*Versão: 1.0                                                                  */
/*******************************************************************************/
const Musica = require('../../Model/DAO/musica');

const MusicaController = {
  getMusicas: async (req, res) => {
    try {
      const musicas = await Musica.getAll();
      res.json({ status: 'success', data: musicas });
    } catch (error) {
      res.status(500).json({ status: 'error', message: error.message });
    }
  },
  
  getMusicaById: async (req, res) => {
    try {
      const id = req.params.id;
      const musica = await Musica.getById(id);
      
      if (!musica) {
        return res.status(404).json({ status: 'error', message: 'Música não encontrada' });
      }
      
      res.json({ status: 'success', data: musica });
    } catch (error) {
      res.status(500).json({ status: 'error', message: error.message });
    }
  },
  
  createMusica: async (req, res) => {
    try {
      const { nome, data_lancamento } = req.body;
      
      if (!nome || !data_lancamento) {
        return res.status(400).json({ status: 'error', message: 'Nome e data de lançamento são obrigatórios' });
      }
      
      const id = await Musica.create(req.body);
      res.status(201).json({ status: 'success', message: 'Música criada com sucesso', id });
    } catch (error) {
      res.status(500).json({ status: 'error', message: error.message });
    }
  },
  updateMusica: async (req, res) => {
    try {
      const id = req.params.id;
      const musica = await Musica.getById(id);
      
      if (!musica) {
        return res.status(404).json({ status: 'error', message: 'Música não encontrada' });
      }
      
      const affectedRows = await Musica.update(id, req.body);
      
      if (affectedRows === 0) {
        return res.status(500).json({ status: 'error', message: 'Falha ao atualizar a música' });
      }
      
      res.json({ status: 'success', message: 'Música atualizada com sucesso' });
    } catch (error) {
      res.status(500).json({ status: 'error', message: error.message });
    }
  },
  
  deleteMusica: async (req, res) => {
    try {
      const id = req.params.id;
      const musica = await Musica.getById(id);
      
      if (!musica) {
        return res.status(404).json({ status: 'error', message: 'Música não encontrada' });
      }
      
      const affectedRows = await Musica.delete(id);
      
      if (affectedRows === 0) {
        return res.status(500).json({ status: 'error', message: 'Falha ao excluir a música' });
      }
      
      res.json({ status: 'success', message: 'Música excluída com sucesso' });
    } catch (error) {
      res.status(500).json({ status: 'error', message: error.message });
    }
  }
};

module.exports = MusicaController;
