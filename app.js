console.log('posts')

const app = express()
const port = 3000


app.use(express('static'))

const posts = require('posts')
console.log(posts)

router.get('routers/posts.js', (req,res) => {
    console.log(res)
})