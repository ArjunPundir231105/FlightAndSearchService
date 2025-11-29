'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Airports',
[
  {
    name: 'Kempegowda International Airport',
    cityId: 2,            // Bengaluru
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'HAL Airport (Hindustan Aeronautics Limited Airport)',
    cityId: 2,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'Jakkur Aerodrome',
    cityId: 2,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'Hosur Aerodrome (TAAL Airport)',
    cityId: 2,
    createdAt: new Date(),
    updatedAt: new Date()
  }
],
{});
},
  async down (queryInterface, Sequelize) {
  }
};
