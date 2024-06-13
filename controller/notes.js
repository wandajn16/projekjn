const Notes = require('../models/note')

exports.createNote = async (req, res) => {
    try {
        await Notes.create(req.body)
        res.status(200.).send({Message: 'Note created successfully'})
    } catch (error) {
        res.status(500).send({error: 'Failed to create note'})

    }
}

exports.getAllnotes = async (req, res) => {
    try {
        const [notes] = await Note.findAll()
        await Notes.create(req.body)
        res.status(200.).send(notes)
    } catch (error) {
        res.status(500).send({error: 'Failed to fetch notes'})

    }
}

exports.getNoteById = async (req, res) => {
    try {
        const [notes] = await Note.findById(req.parms.id)
        if (notes.length > 0) {
            res.status(200).send(notes[0])
        } else {
            res.status(404).send({error: 'Note not found'})
        }
    } catch (error) {
        res.status(500).send({error: 'Failed to fetch note'})

    }
}

exports.updateNote = async (req, res) => {
    try {
        await Notes.update(req.parms.id, req.body)
        res.status(200.).send({Message: 'Note update successfully'})
    } catch (error) {
        res.status(500).send({error: 'Failed to update note'})

    }
}

exports.deleteNote = async (req, res) => {
    try {
        await Notes.delete(req.parms.id)
        res.status(200.).send({Message: 'Note delete successfully'})
    } catch (error) {
        res.status(500).send({error: 'Failed to delete note'})

    }
}