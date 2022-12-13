module.exports = function likeSchema(knex) {
	knex.schema.hasTable("likes").then(function (exists) {
		if (!exists) {
			return knex.schema.createTable("likes", function (t) {
				t.increments("id").primary();
				t.integer("userId").unsigned();
				t.integer("postId").unsigned();
				t.foreign("userId").references("id").inTable("users");
				t.foreign("postId").references("id").inTable("posts");
				t.timestamps();
			});
		}
	});
};
