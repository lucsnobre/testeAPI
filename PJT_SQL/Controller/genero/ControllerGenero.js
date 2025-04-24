/****************************************************************************/
/* Objetivo: Controller responsável pelas requisições de gênero na API      */
/* Data: 10/04/2025                                                         */
/* Autor: Cachorrada                                                        */
/* Versão: 1.0                                                              */
/****************************************************************************/

const Genero = require('../../Model/DAO/genero');

const GeneroController = {
  getGeneros: async (req, res) => {
    try {
      const generos = await Genero.getAll();
      res.json({ status: 'success', data: generos });
    } catch (error) {
      res.status(500).json({ status: 'error', message: error.message });
    }
  },
  
  getGeneroById: async (req, res) => {
    try {
      const id = req.params.id;
      const genero = await Genero.getById(id);
      
      if (!genero) {
        return res.status(404).json({ status: 'error', message: 'Gênero não encontrado' });
      }
      
      res.json({ status: 'success', data: genero });
    } catch (error) {
      res.status(500).json({ status: 'error', message: error.message });
    }
  },
  
  createGenero: async (req, res) => {
    try {
      const { nome } = req.body;
      
      if (!nome) {
        return res.status(400).json({ status: 'error', message: 'Nome é obrigatório' });
      }
      
      const id = await Genero.create(req.body);
      res.status(201).json({ status: 'success', message: 'Gênero criado com sucesso', id });
    } catch (error) {
      res.status(500).json({ status: 'error', message: error.message });
    }
  },
  
  updateGenero: async (req, res) => {
    try {
      const id = req.params.id;
      const genero = await Genero.getById(id);
      
      if (!genero) {
        return res.status(404).json({ status: 'error', message: 'Gênero não encontrado' });
      }
      
      const affectedRows = await Genero.update(id, req.body);
      
      if (affectedRows === 0) {
        return res.status(500).json({ status: 'error', message: 'Falha ao atualizar o gênero' });
      }
      
      res.json({ status: 'success', message: 'Gênero atualizado com sucesso' });
    } catch (error) {
      res.status(500).json({ status: 'error', message: error.message });
    }
  },
  
  deleteGenero: async (req, res) => {
    try {
      const id = req.params.id;
      const genero = await Genero.getById(id);
      
      if (!genero) {
        return res.status(404).json({ status: 'error', message: 'Gênero não encontrado' });
      }
      
      const affectedRows = await Genero.delete(id);
      
      if (affectedRows === 0) {
        return res.status(500).json({ status: 'error', message: 'Falha ao excluir o gênero' });
      }
      
      res.json({ status: 'success', message: 'Gênero excluído com sucesso' });
    } catch (error) {
      res.status(500).json({ status: 'error', message: error.message });
    }
  }
};

module.exports = GeneroController;