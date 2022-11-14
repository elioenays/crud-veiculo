import mysql from 'mysql2'

export const database = () => {
  const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    database: process.env.DB,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
  })

  connection.connect(e => {
    if (e) throw e.message
  })

  return connection
}
