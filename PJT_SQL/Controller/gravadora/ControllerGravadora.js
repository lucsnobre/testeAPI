/****************************************************************************/
/* Objetivo: Controller das requisições de gravadora na API                */
/* Data: 10/04/2025                                                         */
/* Autor: Cachorrada                                                        */
/* Versão: 1.0                                                              */
/****************************************************************************/

const gravadoraDAO = require('../../Model/DAO/gravadora.js');
const MESSAGE = require('../../../Módulo/config.js');

// Listar todas as gravadoras
const listarGravadoras = (req, res) => {
    gravadoraModel.selectAllGravadoras()
        .then(results => {
            if (!results) return res.status(404).json({ msg: "Nenhuma gravadora encontrada" });
            res.status(200).json(results);
        })
        .catch(err => res.status(500).json(err));
};

// Buscar gravadora por ID
const buscarGravadora = (req, res) => {
    const id = req.params.id;
    gravadora.selectByIdGravadora(id)
        .then(result => {
            if (!result) return res.status(404).json({ msg: "Gravadora não encontrada" });
            res.status(200).json(result[0]);
        })
        .catch(err => res.status(500).json(err));
};

// Criar nova gravadora


const inserirGravadora = async function(dados) {
    // Validação dos dados recebidos
    if (!dados.nome || dados.nome == '' || dados.nome == undefined || dados.nome.length > 100) {
      return {
        status_code: 400,
        message: 'Nome da gravadora inválido.'
      };
    }
  
    // Chama o DAO para inserir
    let result = await gravadoraDAO.insertGravadora(dados);
  
    if (result) {
      return {
        status_code: 201,
        message: 'Gravadora inserida com sucesso!',
        dados: dados
      };
    } else {
      return {
        status_code: 500,
        message: 'Erro interno ao inserir a gravadora.'
      };
    }
  };
  




// Atualizar gravadora
const atualizarGravadora = (req, res) => {
    const gravadora = req.body;
    gravadora.id = req.params.id;

    gravadora.updateGravadora(gravadora)
        .then(result => {
            if (result) res.status(200).json({ msg: "Gravadora atualizada com sucesso" });
            else res.status(404).json({ msg: "Gravadora não encontrada ou erro ao atualizar" });
        })
        .catch(err => res.status(500).json(err));
};

// Deletar gravadora
const deletarGravadora = (req, res) => {
    const id = req.params.id;
    gravadoraModel.deleteGravadora(id)
        .then(result => {
            if (result) res.status(200).json({ msg: "Gravadora deletada com sucesso" });
            else res.status(404).json({ msg: "Gravadora não encontrada ou erro ao deletar" });
        })
        .catch(err => res.status(500).json(err));
};

module.exports = {
    listarGravadoras,
    buscarGravadora,
    inserirGravadora,
    atualizarGravadora,
    deletarGravadora
};
