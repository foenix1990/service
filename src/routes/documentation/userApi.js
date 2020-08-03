// Get All User Scheme
exports.signUpSchema = {
  description: '',
  tags: ['users'],
  summary: 'Получения токена',
  headers: {
    type: 'object',
    properties: {
      username: {
        type: 'string',
        description: 'username'
      },
      password: {
        type: 'string',
        description: 'password'
      }
    }
  },
  response: {
    200: {
      description: 'Successful response',
      type: 'object',
      properties: {
        token: { type: 'string' },
      }
    },
  },
}

// Get All User Scheme
exports.getUsersSchema = {
  description: '',
  tags: ['users'],
  summary: 'Получения всех пользователей',
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
          fullname: { type: 'string' },
          email: { type: 'string' },
          phone: { type: 'string' },
        }
      }
    },
  },
}

// Get Single User Scheme
exports.getSingleUserSchema = {
  description: '',
  tags: ['users'],
  summary: 'Получения пользователя по _id',
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
        fullname: { type: 'string' },
        email: { type: 'string' },
        phone: { type: 'string' },
      }
    }
  }
}

// Create a new User Scheme
exports.addUserSchema = {
  description: '',
  tags: ['users'],
  summary: 'Добавления пользователя',
  body: {
    type: 'object',
    properties: {
      fullname: { type: 'string' },
      email: { type: 'string' },
      phone: { type: 'string' },
    }
  },
  response: {
    200: {
      description: 'Successful response',
      type: 'object',
      properties: {
        _id: { type: 'string' },
        fullname: { type: 'string' },
        email: { type: 'string' },
        phone: { type: 'string' },
      }
    }
  }
}

// Update User Scheme
exports.updateUserSchema = {
  description: '',
  tags: ['users'],
  summary: 'Обновления пользователя',
  body: {
    type: 'object',
    properties: {
      fullname: { type: 'string' },
      phone: { type: 'string' },
    }
  },
  response: {
    200: {
      description: 'Successful response',
      type: 'object',
      properties: {
        _id: { type: 'string' },
        fullname: { type: 'string' },
        email: { type: 'string' },
        phone: { type: 'string' },
      }
    }
  }
}

// Remove User Scheme
exports.deleteUserSchema = {
  description: '',
  tags: ['users'],
  summary: 'Удаления пользователя',
  response: {
    200: {
      description: 'Successful response',
      type: 'object',
      properties: {
        _id: { type: 'string' },
        fullname: { type: 'string' },
        email: { type: 'string' },
        phone: { type: 'string' },
      }
    }
  }
}
