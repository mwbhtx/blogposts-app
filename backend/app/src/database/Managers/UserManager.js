const UserCollectionDoa = require("../collections/UserCollectionDoa");
const User = require("../documents/UserDocument");
const bcrypt = require('bcryptjs');



const UserManager = {

    async generateHashedPassword(password) {
        // work factor of encryption, tune for an appropriate encryption time
        const saltRounds = 10;  

        // create & set hash
        return bcrypt.hash(password, saltRounds);
    },

    async validateUserPassword(hash, password) {
        return bcrypt.compare(password, hash);
    },

    async createNewUser(firstname, lastname, username, password) {

        // check if user already exists
        UserCollectionDoa.getUserByUsername(username)
        .then( userSearchResult => {  
            if (userSearchResult) {
                throw new Error("USERNAME ALREADY EXISTS");
            } 
            else {
                return this.generateHashedPassword(password);
            }
        })
        .then( hash => {
            // create user object
            const user = new User(firstname, lastname, username, hashedPassword);
            // create user document in database
            return UserCollectionDoa.createNewUser(user);
        })
        .then( result => {
            // account created, return new user id#
            console.log(`Account created with id - ${result.id}`);
        })
        .catch( error => {
            console.error(`REGISTRATION ERROR: ${error.message}`);
        })

    },

    async validateLoginRequest(username, password) {

        console.log('Authenticating User');

        try {
            // find user in database
            const userSearchResult = await UserCollectionDoa.getUserByUsername(username);

            // error out if user not found
            if (!userSearchResult) throw new Error('USERNAME DOES NOT EXIST');

            // validate user password
            const passwordValid = await UserManager.validateUserPassword(userSearchResult.password, password);

            // error out if password not valid
            if (!passwordValid) throw new Error('INCORRECT PASSWORD');

            // user authenticated
            console.log('User Authenticated Successfully');

        }
        catch (error) 
        {
            console.error(error.message);
        }

    }
}


module.exports = UserManager;