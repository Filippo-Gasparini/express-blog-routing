const express = require('express') 
const posts = require('./posts')

const app = express()
const port = 3000


app.use(express('static'))

app.listen(port, () => {
    console.log(`in ascolto sulla porta ${port}`)
})


console.log(posts)



app.get('/', (req,res) => {
    console.log('Prova')
})