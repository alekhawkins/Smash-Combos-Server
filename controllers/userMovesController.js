const router = require('express').Router();
const Moves = require('../db').import('../models/userMoves');
const validateSession = require('../middleware/validate-session');

//GET ALL
router.get('/', (req, res) => {
    Moves.findAll()
        .then(moves => res.status(200)
        .json(moves))
        .catch(err => res.status(500)
        .json({
            error: err
        }))
})

//POST REQUEST

router.post('/', validateSession, (req, res) => {
    const movesFromRequest = {
        owner: req.user.id,
        character: req.body.character,
        moves: req.body.moves
    }

    Moves.create(movesFromRequest)
        .then(moves => res.status(200)
        .json(moves))
        .catch(err => res.json
            (req.errors));
})

// DELETE BY ID
router.delete('/:id', validateSession, (req, res) => {
    Moves.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(moves => res.status(200).json
    (moves))
    .catch (err => res.json ({
        error: err
    }))
})

module.exports = router;