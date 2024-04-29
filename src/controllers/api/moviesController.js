const db = require('../../database/models');

module.exports = {
    create: (req, res) => {
        const {title, rating, awards, release_date, length, genre_id } = req.body;

        db.Movie.create({
            title: title,
            rating: +rating,
            awards: +awards,
            release_date: release_date,
            length: +length,
            genre_id: +genre_id
        })
        .then(product => {
            res.status(201).json({
                meta: {
                    status: 201,
                    total: 1,
                    url: 'api/movies'
                },
                data: product
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
        db.Movie.destroy({
            where: {
                id
            }
        })
        .then((movie) => {
            res.status(200).json({
                meta: {
                    status: 200,
                    total: 1,
                    url: `/api/movies/${id}`
                },
                data: movie
            })
        })
        .catch(err => {
            res.status(500).json({
                ok: false,
                msg: err.message
            })
        })
    }
};