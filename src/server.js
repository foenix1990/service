// Require the fastify framework and instantiate it
const fastify = require('fastify')({
	logger: true,
})

// Require external modules
const mongoose = require('mongoose')

// Connect to DB
mongoose.connect('mongodb+srv://foenix:foenix1990@todo-nvzi8.mongodb.net/todos?replicaSet=Todo-shard-0', { useNewUrlParser: true, useUnifiedTopology: true })
 .then(() => console.log('MongoDB connected…'))
 .catch(err => console.log(err))

module.exports = fastify
