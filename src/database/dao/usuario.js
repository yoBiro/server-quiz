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