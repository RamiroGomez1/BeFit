const { log } = require('util');
var pool = require('./bd');

async function getNovedades() {
    var query = 'select * from novedades';
    var rows = await pool.query(query)
    return rows
}

async function insertNovedad(obj) {
    try {
        var query = 'insert into novedades set ?';
        var rows = await pool.query(query, [obj])
        return rows;
    } catch(error) {
        console.log(error);
        throw error;
    }
}

async function deleteNovedad(id) {
    try {
        var query = 'delete from novedades where id = ?';
        var rows = await pool.query(query, [id])
        return rows;
    } catch(error) {
        console.log(error);
        throw error;
    }
}



async function getNovedadesById(id) {
    try {
        var query = 'select * from novedades where id = ?';
        var rows = await pool.query(query, [id])
        return rows[0];
    } catch(error) {
        console.log(error);
        throw error;
    }
}

async function editarNovedadById(obj, id) {
    try {
        var query = 'update novedades set ? where id = ?';
        var rows = await pool.query(query, [obj, id]);
        return rows;
    } catch(error) {
        console.log(error);
    }
}



module.exports = { getNovedades, insertNovedad, deleteNovedad, getNovedadesById, editarNovedadById }