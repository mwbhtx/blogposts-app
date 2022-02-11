/* Initialize Environment Variables */
require('dotenv').config();


const UserManager = require('./app/src/database/Managers/UserManager');

//
const createServer = require('./app/src/server');
const app = createServer();
const app_port = 3001;
//
app.listen(app_port, () => {
    console.log(`Server listening on port ${app_port}.`);
})

// UserManager.createNewUser("Matthew", "Bennett", "FarawaySkies", "1337Haxx808!?");
// UserManager.processLoginRequest("FaraWaySkies", "1337Haxx808!?");
