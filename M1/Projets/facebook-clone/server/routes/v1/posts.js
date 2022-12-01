const {getPosts, getPost, createPost, updatePost, deletePost} = require("../../controllers/posts");

async function postsRoute(fastify, opts, done) {
    fastify.get('/posts', () => console.log('posts'))
    fastify.get('/posts/get/:postId', () => console.log('getPosts'))
    fastify.post('/posts/add', () => console.log('addPosts'))
    fastify.patch('/posts/update/:postId', () => console.log('updatePost'))
    fastify.delete('/posts/delete/:postId', () => console.log('deletePost'))

    done()
}

module.exports = postsRoute