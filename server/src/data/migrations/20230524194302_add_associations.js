const TableName = {
  USERS: 'users',
  WORKSHOPS: 'workshops',
  IMAGES: 'images'
};

const ColumnName = {
  ID: 'id',
  IMAGE_ID: 'image_id',
  WORKSHOP_ID: 'workshop_id',
  ADMIN_ID: 'admin_id'
};

const RelationRule = {
  CASCADE: 'CASCADE',
  SET_NULL: 'SET NULL'
};

export async function up(knex) {
  await knex.schema.alterTable(TableName.WORKSHOPS, table => {
    table
      .integer(ColumnName.IMAGE_ID)
      .references(ColumnName.ID)
      .inTable(TableName.IMAGES)
      .onUpdate(RelationRule.CASCADE)
      .onDelete(RelationRule.SET_NULL);
    table
      .integer(ColumnName.ADMIN_ID)
      .references(ColumnName.ID)
      .inTable(TableName.USERS)
      .onUpdate(RelationRule.CASCADE)
      .onDelete(RelationRule.SET_NULL);
  });
}

export async function down(knex) {
  await knex.schema.alterTable(TableName.WORKSHOPS, table => {
    table.dropColumn(ColumnName.IMAGE_ID);
    table.dropColumn(ColumnName.ADMIN_ID);
  });
}
