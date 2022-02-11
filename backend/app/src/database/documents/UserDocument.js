const bcrypt = require('bcryptjs');
const UserCollectionDoa = require('../collections/UserCollectionDoa');

class User {

    constructor(firstname, lastname, username, password) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.username = username;
        this.username_lowercase = username.toLowerCase();
        this.password = password;
        this.date_created = new Date().toISOString();
    }

}

module.exports = User;