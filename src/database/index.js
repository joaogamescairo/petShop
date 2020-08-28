const fs = require("fs");
const path = require ("path");

const dbfile = path.resolve(__dirname,'data.json');

const existe =fs.existsSync(dbfile)

console.log(existe)
if(existe == false ){
    fs.writeFileSync(dbfile, JSON.stringify({
        users: [],
        animais: []
    }))
}

function read () {
    const file = fs.readFileSync ( dbfile )
    const obj = JSON.parse ( file )
    return obj
}

function write (objForSave = {}, where = '') {
const file = fs.readFileSync (dbfile)
const obj = JSON.parse (file)

obj [where].push( objForSave)

const json = JSON.stringify (obj)
fs.writeFileSync (dbfile,json)

console.log('salvo com sucesso')
}

module.exports = {
    write,
    read,
}