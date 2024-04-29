const db = require('../../database/models');

module.exports = {
    list: (req, res) => {
        db.Genre.findAndCountAll()
        .then(genres => {
            res.status(200).json({
                meta: {
                    status: 200,
                    total: genres.count,
                    url: "api/genres"
                },
                data: genres.rows
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

        db.Genre.findByPk(id)
        .then(genre => {
            res.status(200).json({
                meta: {
                    status: 200,
                    total: 1,
                    url: `api/genres/${id}`
                },
                data: genre
            })
        }).catch(err => {
            res.status(500).json({
                ok: false,
                msg: err.message
            })
        })
    },
};