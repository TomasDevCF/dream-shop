const express = require('express')
const querystring = require('querystring')

const app = express()

app.use(express.urlencoded({extended: true}));

const PORT = process.env.PORT || 3001;

app.post("localhost:3000/renderForm", (req, res) => {
  const filters = req.body

  const queryString = querystring.stringify(filters)

  res.redirect(`localhost:3/search?` + queryString)
})

app.listen(PORT)