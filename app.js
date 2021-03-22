const express = require('express')
const app = express()
const port = 8000
const mainRoutes  = require('./routes/index')
const alunos = require('./routes/alunosModel')
const turmas = require('./routes/turmasModel')

app.use(express.json())
app.use(express.urlencoded({extended : false}))

app.use(mainRoutes)
app.use(alunos)
app.use(turmas)

app.listen(port, () => {
  console.log(`Servidor rodando em: http://localhost:${port}`)
})