import cors from 'cors'
import 'dotenv/config'
import express from 'express'
import { database } from './database'
import routes from './routes'

database()

const app = express()

app.use(cors())
app.use(express.json())

app.use(routes)

app.listen(3333, () => {
  console.log('🚀 Server running')
})
