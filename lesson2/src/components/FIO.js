'use strict';
const file = require('../package.json');
module.exports = class Author{
    constructor(){      
        this.author = file.author;
    }
    getAuthor(){
        return this.author;
    }
};