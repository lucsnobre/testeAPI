/******************************************************************************
 * Objetivo: Controller CRUD de Artistas (sem chaves estrangeiras)
 * Data: 24/04/2025
 * Autor: Tropa do CRUD
 ******************************************************************************/

const Artista = require('../../Model/DAO/artista');

const ArtistaController = {
  getArtistas: async (req, res) => {
    try {
      const artistas = await Artista.getAll();
      res.json({ status: 'success', data: artistas });
    } catch (error) {
      res.status(500).json({ status: 'error', message: error.message });
    }
  },
  
  getArtistaById: async (req, res) => {
    try {
      const id = req.params.id;
      const artista = await Artista.getById(id);
      
      if (!artista) {
        return res.status(404).json({ status: 'error', message: 'Artista não encontrado' });
      }
      
      res.json({ status: 'success', data: artista });
    } catch (error) {
      res.status(500).json({ status: 'error', message: error.message });
    }
  },
  
  createArtista: async (req, res) => {
    try {
      const { nome, biografia } = req.body;
      
      if (!nome) {
        return res.status(400).json({ status: 'error', message: 'Nome é obrigatório' });
      }
      
      const id = await Artista.create(req.body);
      res.status(201).json({ status: 'success', message: 'Artista criado com sucesso', id });
    } catch (error) {
      res.status(500).json({ status: 'error', message: error.message });
    }
  },
  
  updateArtista: async (req, res) => {
    try {
      const id = req.params.id;
      const artista = await Artista.getById(id);
      
      if (!artista) {
        return res.status(404).json({ status: 'error', message: 'Artista não encontrado' });
      }
      
      const affectedRows = await Artista.update(id, req.body);
      
      if (affectedRows === 0) {
        return res.status(500).json({ status: 'error', message: 'Falha ao atualizar o artista' });
      }
      
      res.json({ status: 'success', message: 'Artista atualizado com sucesso' });
    } catch (error) {
      res.status(500).json({ status: 'error', message: error.message });
    }
  },
  
  deleteArtista: async (req, res) => {
    try {
      const id = req.params.id;
      const artista = await Artista.getById(id);
      
      if (!artista) {
        return res.status(404).json({ status: 'error', message: 'Artista não encontrado' });
      }
      
      const affectedRows = await Artista.delete(id);
      
      if (affectedRows === 0) {
        return res.status(500).json({ status: 'error', message: 'Falha ao excluir o artista' });
      }
      
      res.json({ status: 'success', message: 'Artista excluído com sucesso' });
    } catch (error) {
      res.status(500).json({ status: 'error', message: error.message });
    }
  }
};

module.exports = ArtistaController;