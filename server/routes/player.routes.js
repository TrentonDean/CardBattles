const playerController = require('../controllers/player.controller.js')

module.exports = (app) => {
    app.post('/player', playerController.createPlayer);
}