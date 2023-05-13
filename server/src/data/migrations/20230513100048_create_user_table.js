const TableName = {
  USERS: 'users'
};

const ColumnName = {
  CREATED_AT: 'created_at',
  EMAIL: 'email',
  ID: 'id',
  PASSWORD: 'password',
  UPDATED_AT: 'updated_at',
  USERNAME: 'username'
};

export async function up(knex) {
  await knex.schema.createTable(TableName.USERS, table => {
    table.increments(ColumnName.ID).primary();
    table.string(ColumnName.EMAIL).notNullable().unique();
    table.string(ColumnName.USERNAME).notNullable().unique();
    table.string(ColumnName.PASSWORD).notNullable();
    table
      .dateTime(ColumnName.CREATED_AT)
      .notNullable()
      .defaultTo(knex.fn.now());
    table
      .dateTime(ColumnName.UPDATED_AT)
      .notNullable()
      .defaultTo(knex.fn.now());
  });
}

export async function down(knex) {
  await knex.schema.dropTableIfExists(TableName.USERS);
}
