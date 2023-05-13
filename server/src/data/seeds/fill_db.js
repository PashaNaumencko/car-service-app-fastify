import { usersSeed } from '../seed-data/users-seed.js';

const TableName = {
  USERS: 'users'
};

export async function seed(knex) {
  try {
    await knex.transaction(async trx => {
      await trx(TableName.USERS).del();

      // Add users.
      const usersMappedSeed = usersSeed.map(user => ({
        ...user
      }));
      await trx(TableName.USERS).insert(usersMappedSeed).returning('*');
    });
  } catch (error) {
    console.log(`Seeding error: ${error}`);
  }
}
