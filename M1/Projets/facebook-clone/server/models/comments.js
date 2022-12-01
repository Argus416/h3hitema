module.exports = function commentSchema(knex) {
    knex.schema.hasTable("comments").then(function (exists) {
        if (!exists) {
            return knex.schema.createTable("comments", function (t) {
                t.increments("id").primary();
                t.text("content");
                t.integer("userId").unsigned();
                t.integer("postId").unsigned();
                t.foreign("userId").references("users.id");
                t.foreign("postId").references("posts.id");
                t.timestamps();
            });
        }
    });
};