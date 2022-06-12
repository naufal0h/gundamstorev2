const { item, brand } = require('../models');

class ItemController {
    static list(req, res) {
        item.findAll({
            include: [brand]
        })
            .then(items => res.json(items))
            .catch(err => res.json(err))
    }

    static add(req, res) {

    }

    static addPost(req, res) {
        const { name, price, image, brandId } = req.body;
        item.create({
            name, price, image, brandId
        })
            .then(result => {
                res.json(result)
            })
            .catch(err => {
                res.json(err)
            })
    }

    static edit(req, res) {

    }

    static editPost(req, res) {
        const id = +req.params.id;
        const { name, price, image, brandId, } = req.body;

        item.update({
            name, price, image, brandId,
        }, {
            where: { id }
        })
            .then(result => [
                result[0] === 1 ?
                    res.json({
                        message: `id ${id} has been updated..`
                    }) : 
                    res.json({
                        message: `id ${id} has not been updated..!`
                    })
            ])
            .catch(err => res.json(err))
    }

    static delete(req, res) {
        const id = +req.params.id;

        item.destroy({
            where: { id }
        })
            .then(result => {
                result === 1 ?
                    res.json({
                        message: `id ${id} has been deleted..`
                    }) : 
                    res.json({
                        message: `id ${id} has not been deleted..!`
                    })
            })
            .catch(err => res.json(err))
    }

    static getInfo(req, res) {
        const id = +req.params.id;

        item.findByPk(id)
            .then(result => res.json(result))
            .catch(err => res.json(err))
    }
}

module.exports = ItemController;