module.exports = function postSchema(knex) {
    knex.schema.hasTable("posts").then(function (exists) {
        if (!exists) {
            return knex.schema.createTable("posts", function (t) {
                t.increments("id").primary();
                t.text("body");
                t.string("image", 255);
                t.integer("userId").unsigned();
                t.integer("postId").unsigned();
                t.foreign("userId").references("users.id");
                t.timestamps();
            });
        }
    });
};