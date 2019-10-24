const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

// Get All Poems
router.get('/', async (req, res) => {
    const poems = await loadPoemmsCollection();
    res.send(await poems.find({}).toArray());
});

// Add Poems
router.post('/', async (req, res) => {
    const poems = await loadPoemmsCollection();
    await poems.insertOne({
        text: req.body.poem,
        createdAt: new Date()
    });
    res.status(201).send();
});

// Delete Poems
router.delete('/:id', async (req, res) => {
    const poems = await loadPoemmsCollection();
    await poems.deleteOne({_id: new mongodb.ObjectID(req.params.id)})
    res.status(200).send();
});


// Update Poems
router.put('/:id', async(req, res) => {
    const poems = await loadPoemmsCollection();
    await poems.findOneAndReplace({_id: new mongodb.ObjectID(req.body.poem._id)}, {
        text: req.body.poem.text,
        createdAt: new Date()
    });
    res.status(200).send();
});


async function loadPoemmsCollection() {
    const client = await mongodb.MongoClient.connect('mongodb+srv://yppahade:@Admission123@demo-d9r1e.mongodb.net/test?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    return client.db('demo').collection('poems');
};


module.exports = router;