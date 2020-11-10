const bcryptjs = require('bcryptjs');

module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert('users', [
    {
      nome: 'John Doe',
      email: 'johndoe@gmail.com',
      password_hash: await bcryptjs.hash('123456', 8),
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      nome: 'John 2',
      email: 'john2@gmail.com',
      password_hash: await bcryptjs.hash('654321', 8),
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      nome: 'John 3',
      email: 'john3@gmail.com',
      password_hash: await bcryptjs.hash('147852369', 8),
      created_at: new Date(),
      updated_at: new Date(),
    },
  ], {}),

  down: async () => {},
};
