module.exports = function commentSchema(knex) {
    knex.schema.hasTable("comments").then(function (exists) {
        if (!exists) {
            return knex.schema.createTable("comments", function (t) {
                t.increments("id").primary();
                t.text("content");
                t.integer("userId").unsigned();
                t.integer("postId").unsigned();
                t.foreign("userId").references("id").inTable("users");
				t.foreign("postId").references("id").inTable("posts");
                t.timestamps();
            });
        }
    });
};