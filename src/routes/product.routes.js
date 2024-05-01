const router = require('express').Router();
const datasource = require('../data-access/app-datasource');

// Récupération des produits
router.get('/', async (req, res) => {
    const products = datasource.getAllData();

    res.json({data: products});
});

// Récupération d'un produit
router.get('/:id', async (req, res) => {
    const pr = new Promise((resolve, reject) => {
        datasource.find({_id: req.params.id}, (err, doc) => {
            resolve(doc);
        })
    });

    const product = await pr;

    res.json({data: product});
});

// Ajout d'un produit
router.post('/', async (req, res) => {

    const name = req.body.name;
    const price = Number.parseInt(req.body.price);
    const description = req.body.description;
    const image = req.body.image;

    if (!name || !price || !description) {
        res.status(422).status({
            error: "Payload incorrect",
        });
        return;
    };

    const pr = new Promise((resolve, reject) => {
        datasource.insert({
            name,
            price,
            description,
            image
        }, (err, newDocs) => resolve({product: newDocs}));
    });

    const product = await pr;
    res.json({data: product});
});

// Modification d'un produit
router.put('/', (req, res) => {

});

// Suppression d'un produit
router.delete('/:id', async (req, res) => {

    const id = req.params.id;

    const pr = new Promise((resolve, reject) => {
        datasource.remove({_id: id}, (err, n) => resolve({res: n}));
    });

    const response = await pr;

    res.json({data: response});
});


module.exports = router;