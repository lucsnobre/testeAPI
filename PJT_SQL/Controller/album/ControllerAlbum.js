/****************************************************************************/
/* Objetivo: Controller responsável pelas requisições de álbum na API       */
/* Data: 10/04/2025                                                         */
/* Autor: Cachorrada                                                        */
/* Versão: 1.0                                                              */
/****************************************************************************/

const Album = require('../../Model/DAO/album');

const AlbumController = {
  getAlbums: async (req, res) => {
    try {
      const albums = await Album.getAll();
      res.json({ status: 'success', data: albums });
    } catch (error) {
      res.status(500).json({ status: 'error', message: error.message });
    }
  },
  
  getAlbumById: async (req, res) => {
    try {
      const id = req.params.id;
      const album = await Album.getById(id);
      
      if (!album) {
        return res.status(404).json({ status: 'error', message: 'Álbum não encontrado' });
      }
      
      res.json({ status: 'success', data: album });
    } catch (error) {
      res.status(500).json({ status: 'error', message: error.message });
    }
  },
  
  createAlbum: async (req, res) => {
    try {
      const { nome, lancamento, duracao, numero_faixas, tipo_capa, id_genero, id_musica, id_premio, id_artista } = req.body;
      
      if (!nome || !lancamento) {
        return res.status(400).json({ status: 'error', message: 'Nome e data de lançamento são obrigatórios' });
      }
      
      const id = await Album.create(req.body);
      res.status(201).json({ status: 'success', message: 'Álbum criado com sucesso', id });
    } catch (error) {
      res.status(500).json({ status: 'error', message: error.message });
    }
  },
  
  updateAlbum: async (req, res) => {
    try {
      const id = req.params.id;
      const album = await Album.getById(id);
      
      if (!album) {
        return res.status(404).json({ status: 'error', message: 'Álbum não encontrado' });
      }
      
      const affectedRows = await Album.update(id, req.body);
      
      if (affectedRows === 0) {
        return res.status(500).json({ status: 'error', message: 'Falha ao atualizar o álbum' });
      }
      
      res.json({ status: 'success', message: 'Álbum atualizado com sucesso' });
    } catch (error) {
      res.status(500).json({ status: 'error', message: error.message });
    }
  },
  
  deleteAlbum: async (req, res) => {
    try {
      const id = req.params.id;
      const album = await Album.getById(id);
      
      if (!album) {
        return res.status(404).json({ status: 'error', message: 'Álbum não encontrado' });
      }
      
      const affectedRows = await Album.delete(id);
      
      if (affectedRows === 0) {
        return res.status(500).json({ status: 'error', message: 'Falha ao excluir o álbum' });
      }
      
      res.json({ status: 'success', message: 'Álbum excluído com sucesso' });
    } catch (error) {
      res.status(500).json({ status: 'error', message: error.message });
    }
  }
};

module.exports = AlbumController;