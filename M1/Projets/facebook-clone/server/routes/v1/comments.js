const {getComments, getComment, createComment, updateComment, deleteComment} = require("../../controllers/comments");

async function commentsRoute(fastify, opts, done) {
    fastify.get("/all/:postId", getComments);
    fastify.get('/get/:userId/:commentId', getComment)
    fastify.post('/add', createComment)
    fastify.patch('/update/:commentId', updateComment)
    fastify.delete('/delete/:commentId', deleteComment)

    done()
}

module.exports = commentsRoute