const express = require('express')
const router = express.Router()

const conquests = [{
        id: 1,
        articleRead: 5,
        quizzCompleted: 6,
        chapterCompleted: 2,
        totalXp: 540,
        totalBadges: 4,
        userId: 1,
        userName: "Jack"
    },
    {
        id: 2,
        articleRead: 3,
        quizzCompleted: 4,
        chapterCompleted: 1,
        totalXp: 220,
        totalBadges: 2,
        userId: 2,
        userName: "Ryan"
    },
    {
        id: 3,
        articleRead: 5,
        quizzCompleted: 5,
        chapterCompleted: 1,
        totalXp: 370,
        totalBadges: 3,
        userId: 3,
        userName: "Francis"
    },
    {
        id: 4,
        articleRead: 4,
        quizzCompleted: 4,
        chapterCompleted: 0,
        totalXp: 150,
        totalBadges: 1,
        userId: 4,
        userName: "Anny"
    }
]

router.get('/', (req, res, next) => {
    res.status(200).send({ conquests: conquests });

});

module.exports = router;