const express = require('express');
const User = require('./database/documents/UserDocument');
const UserManager = require('./database/Managers/UserManager');
const router = express.Router();

/** 
 * GET ROUTES
 */
router.get('/', async (req,res) => {
    res.send(`GET Request @ '/' Received.`);
})

router.post('/login', async (req,res) => {

    // user attemping to login 
    const sessionCookie = await UserManager.validateLoginRequest(req.body.data.username, req.body.data.password);

    if (sessionCookie) {
        res.send("User logged in and cookie generated successfully.");
    } else {
        res.send("User login failed.");
    }

})

/** 
 * POST ROUTES
 */
 router.post('/', async (req,res) => {
    res.send({
        username: req.body.data.username,
        password: req.body.data.password,
        success: true
    })
})

module.exports = router;