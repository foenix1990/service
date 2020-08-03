exports.options = {
  openapi: '3.0.0',
  routePrefix: '/documentation',
  exposeRoute: true,
  swagger: {
    info: {
      title: 'Тестовый API',
      description: 'Тестовый апи для Fastify и Swagger',
      version: '1.0.0'
    },
    externalDocs: {
      url: 'https://swagger.io',
      description: 'Find more info here'
    },
    host: 'localhost:3000',
    schemes: ['http'],
    consumes: ['application/json'],
    produces: ['application/json'],
    tags: [
      { name: 'users', description: 'Получения данных по юзерам' },
      { name: 'cars', description: 'Получения данных по автомобилям' },
    ],
    securityDefinitions: {
      apiKey: {
        type: 'apiKey',
        description: 'Authorization Token',
        name: 'auth',
        in: 'header'
      }
    },
    security: [
      {
        apiKey: []
      }
    ]
  }
}
