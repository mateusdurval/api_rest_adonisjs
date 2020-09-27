'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with tweets
 */

const Tweet = use('App/Models/Tweet')

class TweetController {

  async ind
    const tweets = await Tweet.query().with('user', builder => {
      builder.select(['id', 'username', 'email', 'password'])
    }).fetch()

    return tweets
  }

  async store ({ request, auth }) 
  {
    const data = request.only(['content'])
    const tweet = await Tweet.create({user_id: auth.user.id, ...data})

    return tweet
  }

  async show ({ params }) 
  {
    const tweet = await Tweet.findOrFail(params.id)
    return tweet
  }

  async destroy ({ params, auth, response }) 
  {
    const tweet = await Tweet.findOrFail(params.id)
    
    if (tweet.user_id != auth.user.id)
    {
      return response.status(401)
    }

    await tweet.delete()
    return 'destroy success'
  } 
}

module.exports = TweetController
