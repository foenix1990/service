const carController = require('../controllers/carController')
const userController = require('../controllers/userController')

// Import Swagger documentation
const documentationCar = require('./documentation/carsApi')
const documentationUser = require('./documentation/userApi')

const fastify = require('../server.js')

const routes = [
  // Users API
  {
    method: 'GET',
    url: '/api/users',
    handler: userController.getUsers,
    schema: documentationUser.getUsersSchema,
    auth: true,
  },
  {
    method: 'GET',
    url: '/api/users/:id',
    handler: userController.getSingleUser,
    schema: documentationUser.getSingleUserSchema,
    auth: true,
  },
  {
    method: 'POST',
    url: '/api/users',
    handler: userController.addUser,
    schema: documentationUser.addUserSchema,
  },
  {
    method: 'PUT',
    url: '/api/users/:id',
    handler: userController.updateUser,
    schema: documentationUser.updateUserSchema,
    auth: true,
  },
  {
    method: 'DELETE',
    url: '/api/users/:id',
    handler: userController.deleteUser,
    schema: documentationUser.deleteUserSchema,
    auth: true,
  },
  // Cars API
  {
    method: 'GET',
    url: '/api/cars',
    handler: carController.getCars,
    schema: documentationCar.getCarsSchema,
    auth: true,
  },
  {
    method: 'GET',
    url: '/api/cars/:id',
    handler: carController.getSingleCar,
    schema: documentationCar.getSingleCarSchema,
    auth: true,
  },
  {
    method: 'POST',
    url: '/api/cars',
    handler: carController.addCar,
    schema: documentationCar.addCarSchema,
    auth: true,
  },
  {
    method: 'PUT',
    url: '/api/cars/:id',
    handler: carController.updateCar,
    schema: documentationCar.updateCarSchema,
    auth: true,
  },
  {
    method: 'DELETE',
    url: '/api/cars/:id',
    handler: carController.deleteCar,
    schema: documentationCar.deleteCarSchema,
    auth: true,
  }
]

module.exports = routes
