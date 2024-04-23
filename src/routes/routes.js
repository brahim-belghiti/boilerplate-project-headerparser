const express = require('express');
const router = express.Router();


router.get("/whoami", (req, res) => {

    const responseObject = {
        ipaddress: req.ip,
        language: req.rawHeaders[7],
        software: req.rawHeaders[3],
    }
    res.json(responseObject);
})

module.exports = router;