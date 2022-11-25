module.exports = function taskSchema(knex) {
    knex.schema.hasTable("tasks").then(function(exists) {
        if (!exists) {
            return knex.schema.createTable("tasks", function(t) {
                t.increments("id").primary();
                t.string("title", 100);
                t.text("description", 100);
                t.integer("userId").unsigned();
                t.foreign("userId").references("users.id");
                t.timestamps();
            });
        }
    });
};