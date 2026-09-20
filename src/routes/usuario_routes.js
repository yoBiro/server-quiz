// GET 
// POST
// DELETE
// PUT

import express from 'express';
import { getAllUsers, createUser } from '../database/dao/usuarioDAO.js';

export const userRoutes = express.Router();

userRoutes.get('/', async (req, res) => {
    try {
        const clientes = await getAllUsers();

        res.json(clientes);
    } catch (erro) {
        res.status(500).json({
            erro: 'Erro ao listar clientes',
            detalhes: erro.message
        });
    }
});

userRoutes.post('/', async (req, res) => {
    let {nome_usuario, email_usuario, senha_usuario, data_nascimento_usuario, estado_usuario, sexo_usuario, criado_em} = req.body
    let infos = [nome_usuario, email_usuario, senha_usuario, data_nascimento_usuario, estado_usuario, sexo_usuario, criado_em]
    let results = await createUser(infos)

    console.log(results)
    res.send(results)
});