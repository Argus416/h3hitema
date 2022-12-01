const {getPosts, getPost, createPost, updatePost, deletePost} = require("../../controllers/posts");

async function postsRoute(fastify, opts, done) {
    fastify.get('/', () => console.log('posts'))
    fastify.get('/get/:postId', () => console.log('getPosts'))
    fastify.post('/add', () => console.log('addPosts'))
    fastify.patch('/update/:postId', () => console.log('updatePost'))
    fastify.delete('/delete/:postId', () => console.log('deletePost'))

    done()
}

module.exports = postsRoute