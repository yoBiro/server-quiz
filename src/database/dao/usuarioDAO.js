import { connection } from "../database.js";

export async function getAllUsers() {
  const sql = `SELECT * FROM tb_usuario;`

  const conn = await connection()
    try {
        // Executar a consulta
        const [rows, fields] = await conn.query(sql);
        await conn.end()
        return rows
      } catch (err) {
        return err.message
      }
}

export async function getUser(user_id) {
  const sql = `SELECT * FROM tb_usuario WHERE id_usuario = ?;`

  const conn = await connection()
    try {
        // Executar a consulta
        const [rows, fields] = await conn.query(sql, [user_id]);
        await conn.end()
        return rows
      } catch (err) {
        return err.message
      }
}

export async function createUser(infos) {
  const sqlInsert = `INSERT INTO tb_usuario (nome_usuario, email_usuario, senha_usuario, data_nascimento_usuario, estado_usuario, sexo_usuario, criado_em) VALUES (?, ?, ?, ?, ?, ?, ?);`

  const data = [infos]
  const conn = await connection()

  try {
      const [results] = await conn.query(sqlInsert, infos)
      await conn.end()
      return results
  } catch (err) {
      await conn.end()
      return err.message
  }
}