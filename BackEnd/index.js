import express from 'express'

const app = express()

app.get('/', (req, res) => {
  res.send('keno jancok')
})

app.listen(3000)