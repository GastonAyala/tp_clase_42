const db = require('../../database/models');

module.exports = {
    list: (req, res) => {
        db.Actor.findAndCountAll()
        .then(actors => {
            res.status(200).json({
                meta: {
                    status: 200,
                    total: actors.count,
                    url: "api/actors"
                },
                data: actors.rows
            })
        })
        .catch(err => {
            res.status(500).json({
                ok: false,
                msg: err.message
            })
        })
    },
    detail: (req, res) => {
        const { id } = req.params;

        db.Actor.findByPk(id)
        .then(actor => {
            res.status(200).json({
                meta: {
                    status: 200,
                    total: 1,
                    url: `api/actors/${id}`
                },
                data: actor
            })
        })
        .catch(err => {
            res.status(500).json({
                ok: false,
                msg: err.message
            })
        })

    },
    create: (req, res) => {
        const { first_name, last_name, rating, favorite_movie_id } = req.body

        db.Actor.create({
            first_name,
            last_name,
            rating,
            favorite_movie_id
        })
        .then((actor) => {
            res.status(201).json({
                meta: {
                    status: 201,
                    total: 1,
                    url: 'api/actors'
                },
                data: actor
            })
        })
        .catch(err => {
            res.status(500).json({
                ok: false,
                msg: err.message
            })
        })

    },
    destroy: (req, res) => {
        const { id } = req.params;

        db.Actor.destroy({
            where: {id}
        })
        .then(actor => {
            res.status(200).json({
                meta: {
                    status: 200,
                    total: 1,
                    url: `api/actors${id}`
                },
                data: actor
            })
        })
        .catch(err => {
            res.status(500).json({
                ok: false,
                msg: err.message
            })
        })
    },
}