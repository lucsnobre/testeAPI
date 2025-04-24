/*************************************************************************
Objetivo: API referente ao projeto de controle de músicas
Data: 24/04/2025
Autor: Adaptado do projeto original de Mohammad
Versão: 1.0
* Observação:
**********  Para configurar e instalar a API, precisamos das 
            seguintes bibliotecas:
                express         npm install express --save 
                cors            npm install cors --save 
                body-parser     npm install body-parser --save   
**********  Para configurar e instalar o acesso ao Banco de Dados, 
            precisamos baixar:
                prisma          npm install prisma --save (conexão com o BD)
                prisma/client   npm install @prisma/client --save   (Executa scripts no BD)
            Após a instalação completa do Prisma, deve rodar:
                comando         npx prisma init
            Para realizar o sincronismo do Prisma com o BD, devemos executar o seguinte comando:
                comando         npx prisma migrate dev
************************************************************************/

// Import das dependências para criar a API
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

// Criação do objeto app
const app = express()

// Configuração de permissões do cors
app.use((request, response, next) => {
    // Define quem poderá acessar a API (* = Todos)
    response.header('Access-Control-Allow-Origin', '*')
    // Define quais métodos serão utilizados na API
    response.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
    // Continua para as próximas configurações
    next()
})

// Configuração do cors
app.use(cors()) 

// Configuração do body-parser
app.use(bodyParser.json()) 

// Importação de rotas
const routesMain = require('./PJT_SQL/routes/MainRoutes')
const routesAlbum = require('./PJT_SQL/routes/routesAlbum')
const routesGenero = require('./PJT_SQL/routes/routesGenero')
const routesMusica = require('./src/routes/routesMusica')
const routesArtista = require('./src/routes/routesArtista')
const routesPremio = require('./src/routes/routesPremio')
const routesStreaming = require('./src/routes/routesStreaming')
const routesPlataforma = require('./src/routes/routesPlataforma')
const routesAvaliacao = require('./src/routes/foutesAvaliacao')
const routesGravadora = require('./src/routes/routesGravadora')
const routesProdutor = require('./src/routes/routesProdutor')
const routesPublicoAlvo = require('./src/routes/routesPublico')
const routesReproducoes = require('./src/routes/routesReproducoes')

// Definição das rotas
app.use("/v1/controle-musicas", routesMain)
app.use("/v1/controle-musicas/album", routesAlbum)
app.use("/v1/controle-musicas/genero", routesGenero)
app.use("/v1/controle-musicas/musica", routesMusica)
app.use("/v1/controle-musicas/artista", routesArtista)
app.use("/v1/controle-musicas/premio", routesPremio)
app.use("/v1/controle-musicas/streaming", routesStreaming)
app.use("/v1/controle-musicas/plataforma", routesPlataforma)
app.use("/v1/controle-musicas/avaliacao", routesAvaliacao)
app.use("/v1/controle-musicas/gravadora", routesGravadora)
app.use("/v1/controle-musicas/produtor", routesProdutor)
app.use("/v1/controle-musicas/publico-alvo", routesPublicoAlvo)
app.use("/v1/controle-musicas/reproducoes", routesReproducoes)

// Definição da porta da API
const port = process.env.PORT || 8080

// Inicia o servidor
app.listen(port, function(){
    console.log(`API de Controle de Músicas aguardando requisição na porta ${port}...`)
})