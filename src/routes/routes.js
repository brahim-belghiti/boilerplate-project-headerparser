const express = require('express');
const router = express.Router();


router.get("/whoami", (req, res) => {
    const { ip, rawHeaders } = req;
    const responseObject = {
        ipaddress: ip,
        language: rawHeaders[7],
        software: rawHeaders[3]
    }
    res.json(responseObject);
})

module.exports = router;