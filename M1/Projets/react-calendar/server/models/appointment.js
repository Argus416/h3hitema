module.exports = function appointmentSchema(knex) {
    knex.schema.hasTable("appointments").then(function(exists) {
        if (!exists) {
            return knex.schema.createTable("appointments", function(t) {
                t.increments("id").primary();
                t.string("title", 100);
                t.text("description", 100);
                t.date("rdv");
                t.integer("userId").unsigned();
                t.foreign("userId").references("users.id");
                t.timestamps();
            });
        }
    });
};