const TableName = {
  USERS: 'users',
  IMAGES: 'images',
  WORKSHOPS: 'workshops',
  ORDERS: 'orders',
  CARS: 'cars',
  SERVICES: 'services',
  ORDERS_TO_SERVICES: 'orders_to_services'
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
  TITLE: 'title',
  PRICE: 'price',
  BRAND: 'brand',
  MODEL: 'model',
  YEAR_OF_PRODUCTION: 'yearOfProduction',
  LICENSE_PLATE_NUMBER: 'licensePlateNumber',
  VISIT_DATE: 'visitDate',
  STATUS: 'status',
  PASSWORD: 'password',
  UPDATED_AT: 'updated_at',
  USERNAME: 'username',
  ROLE: 'role',
  ORDER_ID: 'order_id',
  SERVICE_ID: 'service_id'
};

export async function up(knex) {
  await knex.schema.createTable(TableName.USERS, table => {
    table.increments(ColumnName.ID).primary();
    table.string(ColumnName.EMAIL).notNullable().unique();
    table.string(ColumnName.USERNAME).notNullable().unique();
    table.string(ColumnName.PASSWORD).notNullable();
    table.string(ColumnName.ROLE).notNullable().default('User');
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

  await knex.schema.createTable(TableName.ORDERS, table => {
    table.increments(ColumnName.ID).primary();
    table.text(ColumnName.DESCRIPTION).notNullable();
    table.string(ColumnName.MODEL).notNullable();
    table.integer(ColumnName.YEAR_OF_PRODUCTION).notNullable();
    table.string(ColumnName.LICENSE_PLATE_NUMBER).notNullable().unique();
    table.dateTime(ColumnName.VISIT_DATE).notNullable();
    table.string(ColumnName.STATUS).notNullable().default('Requested');
    table.dateTime(ColumnName.CREATED_AT).notNullable().defaultTo(knex.fn.now());
    table.dateTime(ColumnName.UPDATED_AT).notNullable().defaultTo(knex.fn.now());
  });

  await knex.schema.createTable(TableName.CARS, table => {
    table.increments(ColumnName.ID).primary();
    table.string(ColumnName.BRAND).notNullable().unique();
    table.dateTime(ColumnName.CREATED_AT).notNullable().defaultTo(knex.fn.now());
    table.dateTime(ColumnName.UPDATED_AT).notNullable().defaultTo(knex.fn.now());
  });

  await knex.schema.createTable(TableName.ORDERS_TO_SERVICES, table => {
    table.increments(ColumnName.ID).primary();
    table.integer(ColumnName.ORDER_ID).notNullable().unique();
    table.integer(ColumnName.SERVICE_ID).notNullable().unique();
    table.dateTime(ColumnName.CREATED_AT).notNullable().defaultTo(knex.fn.now());
    table.dateTime(ColumnName.UPDATED_AT).notNullable().defaultTo(knex.fn.now());
  });

  await knex.schema.createTable(TableName.SERVICES, table => {
    table.increments(ColumnName.ID).primary();
    table.string(ColumnName.TITLE).notNullable().unique();
    table.integer(ColumnName.PRICE).notNullable();
    table.dateTime(ColumnName.CREATED_AT).notNullable().defaultTo(knex.fn.now());
    table.dateTime(ColumnName.UPDATED_AT).notNullable().defaultTo(knex.fn.now());
  });
}

export async function down(knex) {
  await knex.schema.dropTableIfExists(TableName.USERS);
}
