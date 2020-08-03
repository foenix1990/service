// Import Server
const fastify = require('./src/server.js')

// Import external dependancies
const gql = require('fastify-gql')

// Import GraphQL Schema
const schema = require('./src/schema')

// Register Fastify GraphQL
fastify.register(gql, {
	schema,
	graphiql: true
})

// Register Cors
fastify.register(require('fastify-cors'), {
  // put your options here
})

// Import Swagger Options
const swagger = require('./src/config/swagger')

// Register Swagger
fastify.register(require('fastify-swagger'), swagger.options)

// Auth Token
fastify.register(require('fastify-jwt'), { secret: 'supersecret' })
fastify.register(require('fastify-leveldb'), { name: 'authdb' })
fastify.register(require('fastify-auth'))

fastify.decorate('verifyJWTandLevelDB', verifyJWTandLevelDB)

function verifyJWTandLevelDB (request, reply, done) {
	const jwt = this.jwt
	const level = this.level.authdb
	if (request.body && request.body.failureWithReply) {
		reply.code(401).send({ error: 'Unauthorized' })
		return done(new Error())
	}
	if (!request.raw.headers.auth) {
		return done(new Error('Missing token header'))
	}
	jwt.verify(request.raw.headers.auth, onVerify)
	function onVerify (err, decoded) {
		if (err || !decoded.username || !decoded.password) {
			return done(new Error('Token not valid'))
  	}
		level.get(decoded.username, onUser)
		function onUser (err, password) {
			if (err) {
				if (err.notFound) {
        	return done(new Error('Token not valid'))
      	}
      	return done(err)
    	}
    	if (!password || password !== decoded.password) {
      	return done(new Error('Token not valid'))
    	}
			done()
  	}
  }
}

// SignUp
const documentationUser = require('./src/routes/documentation/userApi')
fastify.after(() => {
	fastify.route({
		method: 'POST',
		url: '/api/signup',
		schema: {
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
		},
		schema: documentationUser.signUpSchema,
		handler: (req, reply) => {
			console.log(req)
			fastify.level.authdb.put(req.headers.username, req.headers.password, onPut)
			function onPut (err) {
				if (err) return reply.send(err)
				fastify.jwt.sign(req.headers, onToken)
			}
			function onToken (err, token) {
				if (err) return reply.send(err)
				reply.send({ token })
			}
		}
	})
})

// Import Routes
const routes = require('./src/routes')

// Loop over each route
routes.forEach((route, index) => {
	if (route.auth) {
		fastify.after(() => {
			route.preHandler = fastify.auth([fastify.verifyJWTandLevelDB]);
			fastify.route(route)
		})
	} else {
		fastify.route(route)
	}
})

// Run the server!
const start = async () => {
	try {
		await fastify.listen(3000, '127.0.0.1')
		fastify.swagger()
		fastify.log.info(`server listening on ${fastify.server.address().port}`)
	} catch (err) {
		fastify.log.error(err)
		process.exit(1)
	}
}
start()
