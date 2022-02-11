const DatabaseClient = require("../DatabaseClient")

var UserCollectionDoa = {

    getAllUsers: () => {
        return DatabaseClient.getAllDocuments("blogposts", "users");
    },
    getUserByID: (id) => {
        return DatabaseClient.getOneDocument("blogposts", "users", {_id: id});
    },
    getUserByUsername: (username) => {
        return DatabaseClient.getOneDocument("blogposts", "users", {username_lowercase: username.toLowerCase()});
    },

    createNewUser: (user) => {
        return DatabaseClient.createOneDocument("blogposts", "users", user);
    }
}

module.exports = UserCollectionDoa;