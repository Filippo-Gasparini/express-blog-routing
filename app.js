const express = require('express') 
const posts = require('./posts')

const app = express()
const port = 3000


app.use(express('static'))

app.listen(port, () => {
    console.log(`in ascolto sulla porta ${port}`)
})


app.get('/posts', (req,res) => {
    // console.log('Prova')
    res.send(`lista dei post ${posts}`)
})


app.delete('/post/1/', (req,send) => {
    res.send(`Cancellazione post 1 ${posts}`)
})