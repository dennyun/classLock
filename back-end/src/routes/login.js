const express = require('express');
const router = express.Router();

const login = {
    email: "jack@gmail.com",
    password: "jack123"
}

router.get('/', (req, res, next) => {
    res.status(200).send({ login: login });
});

module.exports = router;