const Player = require('../models/player.model.js');
const SECRET = process.env.SECRET_KEY;

module.exports = {

    createPlayer: async (req,res)=>{        // create a new player
        try{
            const newPlayer = await Player.create(req.body)     // creates player before moving on

            res.status(201).cookie('name',newPlayer.name).json({successMessage:"User logged in",player:newPlayer})     // creates a cookie of first name and last name
        }catch(error){
            res.status(400).json(error)
        }
    },

}