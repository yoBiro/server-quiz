import express from 'express'
import { testConnection } from './src/database/database.js'
import { getAllUsers } from './src/database/dao/usuario.js'

const app = express()

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})

app.get('/users', async (req, res) => {
  try {
        const clientes = await getAllUsers()
        res.json(clientes)
    } catch (erro) {
        res.status(500).json({ erro: 'Erro ao listar clientes', detalhes: erro.message })
    }
  })