'use strict'

const User = use('App/Models/User')
const Tweet = use('App/Models/Tweet')

class AuthController {
    async index ()
    {
        const user = await User.query().with('tweets').fetch()

        return user
    }

    async register({ request }) 
    {
        const data = request.only(['username', 'email', 'password'])
        const user = await User.create(data)

        return user
    }

    async authenticate({ request, auth }) 
    {
        const {email, password} = request.all()

        const token = auth.attempt(email, password)

        return token
    }
}

module.exports = AuthController
