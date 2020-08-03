// External Dependancies
const boom = require('boom')

// Get Data Models
const User = require('../models/User')

// Get all users
exports.getUsers = async req => {
	try {
		const limit = req.query === undefined ? 15 : req.query.limit;
		return await User.find().limit(limit);
	} catch (err) {
		throw boom.boomify(err)
	}
}

// Get single user by ID
exports.getSingleUser = async req => {
	try {
		const id = req.params === undefined ? req.id : req.params.id
		return await User.findById(id)
	} catch (err) {
		throw boom.boomify(err)
	}
}

// Add a new user
exports.addUser = async req => {
	try {
		const user = new User(req)
		const newUser = await user.save()
		return newUser
	} catch (err) {
		throw boom.boomify(err)
	}
}

// Update an existing user
exports.updateUser = async req => {
	try {
		const id = req.params === undefined ? req.id : req.params.id
		const updateData = req.params === undefined ? req : req.params
		const update = await User.findByIdAndUpdate(id, updateData, { new: true })
		return update
	} catch (err) {
		throw boom.boomify(err)
	}
}

// Delete a user
exports.deleteUser = async req => {
	try {
		const id = req.params === undefined ? req.id : req.params.id
		const user = await User.findByIdAndRemove(id)
		return user
	} catch (err) {
		throw boom.boomify(err)
	}
}
