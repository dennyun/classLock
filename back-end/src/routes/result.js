const express = require('express')
const router = express.Router()

const result = [{
        id: 1,
        totalCorrect: 3,
        userId: 1,
        userName: "Jack"
    },
    {
        id: 2,
        totalCorrect: 2,
        userId: 2,
        userName: "Ryan"
    },
    {
        id: 3,
        totalCorrect: 0,
        userId: 3,
        userName: "Francis"
    }
]

router.get('/', (req, res, next) => {
    res.status(200).send({ result: result });

});

module.exports = router;