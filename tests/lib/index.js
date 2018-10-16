import express from 'express'

const app = express()

app.use('/', (req, res) => {
  res.sendFile('index.html')
})

export default app
