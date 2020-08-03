// Get All User Scheme
exports.getCarsSchema = {
  description: '',
  tags: ['cars'],
  summary: 'Получения всех авто',
  querystring: {
    limit: { type: 'integer' },
  },
  response: {
    200: {
      description: 'Successful response',
      type: 'array',
      items: {
        type: 'object',
        properties: {
          _id: { type: 'string' },
          title: { type: 'string' },
          brand: { type: 'string' },
          price: { type: 'string' },
          age: { type: 'number' },
          services: { type: 'object' },
          __v: { type: 'number' }
        }
      }
    },
  },
}

// Get Single User Scheme
exports.getSingleCarSchema = {
  description: '',
  tags: ['cars'],
  summary: 'Получения авто по _id',
  params: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
        description: 'user id'
      }
    }
  },
  response: {
    200: {
      description: 'Successful response',
      type: 'object',
      properties: {
        _id: { type: 'string' },
        title: { type: 'string' },
        brand: { type: 'string' },
        price: { type: 'string' },
        age: { type: 'number' },
        services: { type: 'object' },
        __v: { type: 'number' }
      }
    }
  }
}

// Create a new User Scheme
exports.addCarSchema = {
  description: '',
  tags: ['cars'],
  summary: 'Добавления авто',
  body: {
    type: 'object',
    properties: {
      title: { type: 'string' },
      brand: { type: 'string' },
      price: { type: 'string' },
      age: { type: 'number' },
      services: { type: 'object' }
    }
  },
  response: {
    200: {
      description: 'Successful response',
      type: 'object',
      properties: {
        _id: { type: 'string' },
        title: { type: 'string' },
        brand: { type: 'string' },
        price: { type: 'string' },
        age: { type: 'number' },
        services: { type: 'object' },
        __v: { type: 'number' }
      }
    }
  }
}

// Update User Scheme
exports.updateCarSchema = {
  description: '',
  tags: ['cars'],
  summary: 'Обновления авто',
  body: {
    type: 'object',
    properties: {
      _id: { type: 'string' },
      title: { type: 'string' },
      brand: { type: 'string' },
      price: { type: 'string' },
      age: { type: 'number' },
      services: { type: 'object' },
      __v: { type: 'number' }
    }
  },
  response: {
    200: {
      description: 'Successful response',
      type: 'object',
      properties: {
        _id: { type: 'string' },
        title: { type: 'string' },
        brand: { type: 'string' },
        price: { type: 'string' },
        age: { type: 'number' },
        services: { type: 'object' },
        __v: { type: 'number' }
      }
    }
  }
}

// Remove User Scheme
exports.deleteCarSchema = {
  description: '',
  tags: ['cars'],
  summary: 'Удаления авто',
  response: {
    200: {
      description: 'Successful response',
      type: 'object',
      properties: {
        _id: { type: 'string' },
        title: { type: 'string' },
        brand: { type: 'string' },
        price: { type: 'string' },
        age: { type: 'number' },
        services: { type: 'object' },
        __v: { type: 'number' }
      }
    }
  }
}
