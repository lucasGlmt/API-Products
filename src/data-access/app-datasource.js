const Nedb = require('nedb');
const path = require('path');

const instance = new Nedb({
    filename: path.join(__dirname, 'db', 'db'),
    autoload: true,
});

module.exports = instance;
