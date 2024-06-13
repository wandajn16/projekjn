const db = require('../config/db')

class Note {
    static create(note) {
        const { title, datatime, note: content} = note
        return db.execute(
            'INSERT INTO note (title, datatime, note ) VALUES (?, ?, ?)',
            [title, datatime, content.title, content]
        )
    }
    static findALL() {
    return db.execute(
        'SELECT * FROM notes'
    )


}
static findById(id) {
    return db.execute(
        'SELECT * FROM notes WHERE id = ?',
        [id]
    )
    }

    static update(id, updateNote) {
        const { title, datatime, note: content} = updateNote
        return db.execute(
            'UPDATE notes SET title = ?, datatime =?, note = ?  WHERE (?, ?, ?)',
            [title, datatime, content, id]
        )
    }
    static delete(id) {
        return db.execute(
            'DELETE FROM notes WHERE id = ?',
            [id]
        )
    }
}

module.exports = Note 