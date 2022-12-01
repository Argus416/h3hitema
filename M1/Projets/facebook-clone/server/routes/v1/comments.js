async function commentsRoute(fastify, opts, done) {
    fastify.get('/comments', () => console.log('comments'))
    fastify.get('/comments/get/:commentId', () => console.log('getComments'))
    fastify.post('/comments/add', () => console.log('addComments'))
    fastify.patch('/comments/update/:commentId', () => console.log('updateComment'))
    fastify.delete('/comments/delete/:commentId', () => console.log('deleteComment'))

    done()
}

module.exports = commentsRoute