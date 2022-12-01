async function commentsRoute(fastify, opts, done) {
    fastify.get('/', () => console.log('comments'))
    fastify.get('/get/:commentId', () => console.log('getComments'))
    fastify.post('/add', () => console.log('addComments'))
    fastify.patch('/update/:commentId', () => console.log('updateComment'))
    fastify.delete('/delete/:commentId', () => console.log('deleteComment'))

    done()
}

module.exports = commentsRoute