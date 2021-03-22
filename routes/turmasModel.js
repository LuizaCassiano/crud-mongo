const express = require('express')
const router = express.Router()
const conexao = require('../config/connectionDb')

const turmaSchema = new conexao.Schema({
    _id: String,
    id_turma : Number, 
    nome_turma: String,
    curso: String, 
    data_matricula: Date,
    alunos: [Number]
})

const turmaModel = conexao.model('turmas', turmaSchema)

router.get('/turmas', (req, res) => {

    var resposta = {}
    
    turmaModel.find((erro, resultado) =>{

        if(erro){
            resposta.status = '400'
            resposta.dados = erro
            resposta.mensagem = 'Error!'
        } else {
            resposta.status = '200'
            resposta.dados = resultado
            resposta.mensagem = 'Success!'
        }

        res.send(resposta)
    })
})

router.get('/turmas/:id', (req, res) => {
    
    var resposta = {}
    var id = req.params.id
    
    turmaModel.findOne({'id_turma': id}, (erro, resultado) =>{

        if(erro){
            resposta.status = '400'
            resposta.dados = erro
            resposta.mensagem = 'Error!'
        } else {
            resposta.status = '200'
            resposta.dados = resultado
            resposta.mensagem = 'Success!'
        }

        res.send(resposta)
    })
})

router.post('/turmas', (req, res) => {
    
    var resposta = {}
    var dado = {
        id_turma: req.body.id_turma,
        nome_turma: req.body.nome_turma,
        curso: req.body.curso,
        data_matricula: req.body.data_matricula,
        alunos: req.body.alunos
    }

    turmaModel.insertMany(dado, (erro, resultado) => {
        
        if(erro){
            resposta.status = '400'
            resposta.dados = erro
            resposta.mensagem = 'Error!'
        } else {
            resposta.status = '200'
            resposta.dados = resultado
            resposta.mensagem = 'Success!'
        }

        res.send(resposta)
    })
})

router.patch('/turmas/:id', (req, res) => {
    
    var resposta = {}
    var id = req.params.id
    var dado = {
        id_turma: req.body.id_turma,
        nome_turma: req.body.nome_turma,
        curso: req.body.curso,
        data_matricula: req.body.data_matricula,
        alunos: req.body.alunos
    }

    turmaModel.updateOne({'id_turma' : id}, dado, (erro, resultado) => {
        
        if(erro){
            resposta.status = '400'
            resposta.dados = erro
            resposta.mensagem = 'Error!'
        } else {
            resposta.status = '200'
            resposta.dados = resultado
            resposta.mensagem = 'Success!'
        }

        res.send(resposta)
    })
})

router.delete('/turmas/:id', (req, res) => {
    
    var resposta = {}
    var id = req.params.id
    
    turmaModel.deleteOne({'id_turma' : id}, (erro, resultado) =>{
        
        if(erro){
            resposta.status = '400'
            resposta.dados = erro
            resposta.mensagem = 'Error!'
        } else {
            resposta.status = '200'
            resposta.dados = resultado
            resposta.mensagem = 'Success!'
        }

        res.send(resposta)
    })
})

module.exports = router