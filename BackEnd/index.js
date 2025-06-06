import express from 'express'

const app = express()

app.get('/', (req, res) => {
  res.send('Hello Worldssss')
})

app.listen(3000)