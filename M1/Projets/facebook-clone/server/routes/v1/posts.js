const {getPosts, getPost, createPost, updatePost, deletePost} = require("../../controllers/posts");

async function postsRoute(fastify, opts, done) {
    fastify.get('/all/:userId', getPosts)
    fastify.get('/get/:postId', getPost)
    fastify.post('/add', createPost)
    fastify.patch('/update/:postId', updatePost)
    fastify.delete('/delete/:postId', deletePost)

    done()
}

module.exports = postsRoute