import cors from 'cors'
import 'dotenv/config'
import express from 'express'
import { database } from './database'
import routes from './routes'

database()

const app = express()

const port = process.env.PORT

app.use(cors())
app.use(express.json())

app.use(routes)

app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`)
})
