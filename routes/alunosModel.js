const express = require('express')
const router = express.Router()
const conexao = require('../config/connectionDb')

const alunoSchema = new conexao.Schema({
    _id: String,
    id_aluno : Number,
    id_turma : Number, 
    nome_aluno: String, 
    data_matricula: Date
})

const alunoModel = conexao.model('alunos', alunoSchema)

router.get('/alunos', (req, res) => {

    var resposta = {}
    
    alunoModel.find((erro, resultado) =>{

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

router.get('/alunos/:id', (req, res) => {
    
    var resposta = {}
    var id = req.params.id
    
    alunoModel.findOne({'id_aluno': id}, (erro, resultado) =>{
        
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

router.post('/alunos', (req, res) => {
    
    var resposta = {}
    var dado = {
        id_aluno: req.body.id_aluno,
        id_turma: req.body.id_turma,
        nome_aluno: req.body.nome_aluno,
        data_matricula: req.body.data_matricula
    }

    alunoModel.insertMany(dado, (erro, resultado) => {
        
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

router.patch('/alunos/:id', (req, res) => {
    
    var resposta = {}
    var id = req.params.id
    var dado = {
        id_aluno: req.body.id_aluno,
        id_turma: req.body.id_turma,
        nome_aluno: req.body.nome_aluno,
        data_matricula: req.body.data_matricula
    }

    alunoModel.updateOne({'id_aluno' : id}, dado, (erro, resultado) => {
        
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

router.delete('/alunos/:id', (req, res) => {
    
    var resposta = {}
    var id = req.params.id
    
    alunoModel.deleteOne({'id_aluno' : id}, (erro, resultado) =>{
        
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