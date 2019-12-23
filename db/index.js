const mongo = require("./connect")
const {DB_NAME} = require("./connect")

module.exports = {

    getFilms: function(){
        const db = mongo.instance().db(DB_NAME)
        const resp = db.collection("films").find().toArray()
        return resp
    },

    getFilmByID: function(id){
        const db = mongo.instance().db(DB_NAME)
        const resp = db.collection("films").find({id}).toArray()
        return resp
    },

    postFilm: function(film){
        const db = mongo.instance().db(DB_NAME)
        const resp = db.collection("films").insertOne(film)
        return resp
    },

    deleteFilmByID: function(id){
        const db = mongo.instance().db(DB_NAME)
        const resp = db.collection("films").deleteOne({id})
        return resp
    },

    updateFilm: (id, film) => {
        const db = mongo.instance().db(DB_NAME)
        const resp = db.collection('films').updateOne({ 'id': id }, {
            $set: { "title": film } // Si sólo queremos actualizar el título de la película. Podemos actualizar todo indicando el objeto film entero. { film }
        })
        return resp
    }

}