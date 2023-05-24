const TableName = {
  USERS: 'users',
  WORKSHOPS: 'workshops',
  IMAGES: 'images'
};

const ColumnName = {
  CREATED_AT: 'created_at',
  NAME: 'name',
  DESCRIPTION: 'description',
  ADDRESS: 'address',
  WEBSITE: 'website',
  PHONE_NUMBER: 'phoneNumber',
  ADMIN_ID: 'adminId',
  IMAGE_ID: 'imageId',
  EMAIL: 'email',
  ID: 'id',
  LINK: 'link',
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
    table.dateTime(ColumnName.CREATED_AT).notNullable().defaultTo(knex.fn.now());
    table.dateTime(ColumnName.UPDATED_AT).notNullable().defaultTo(knex.fn.now());
  });

  await knex.schema.createTable(TableName.WORKSHOPS, table => {
    table.increments(ColumnName.ID).primary();
    table.string(ColumnName.NAME).notNullable().unique();
    table.text(ColumnName.DESCRIPTION).notNullable();
    table.string(ColumnName.ADDRESS).notNullable().unique();
    table.string(ColumnName.WEBSITE).notNullable().unique();
    table.string(ColumnName.PHONE_NUMBER).notNullable().unique();
    table.dateTime(ColumnName.CREATED_AT).notNullable().defaultTo(knex.fn.now());
    table.dateTime(ColumnName.UPDATED_AT).notNullable().defaultTo(knex.fn.now());
  });

  await knex.schema.createTable(TableName.IMAGES, table => {
    table.increments(ColumnName.ID).primary();
    table.string(ColumnName.LINK).notNullable();
    table.dateTime(ColumnName.CREATED_AT).notNullable().defaultTo(knex.fn.now());
    table.dateTime(ColumnName.UPDATED_AT).notNullable().defaultTo(knex.fn.now());
  });
}

export async function down(knex) {
  await knex.schema.dropTableIfExists(TableName.USERS);
}
