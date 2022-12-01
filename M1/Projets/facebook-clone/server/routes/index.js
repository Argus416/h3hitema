const usersRoute = require('./v1/users')
const postsRoute = require('./v1/posts')
const commentsRoute = require('./v1/comments')

async function routes(fastify, opts, done) {
    fastify.register(usersRoute, {prefix: "users"})
    fastify.register(postsRoute, {prefix: "posts"})
    fastify.register(commentsRoute, {prefix: "comments"})

    done()
}

module.exports = routes;