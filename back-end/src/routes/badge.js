const express = require('express')
const router = express.Router()

const badge = [{
        id: 1,
        name: "Comum Quizzer",
        description: "Concluiu 3 Quizzes",
        image: "https://cdn2.iconfinder.com/data/icons/quiz-filloutline/64/MEDAL-question_mark-exam-reward-winner-question-512.png",
        xp: 20
    },
    {
        id: 2,
        name: "Rare Quizzer",
        description: "Concluiu 5 Quizzes",
        image: "https://cdn2.iconfinder.com/data/icons/quiz-filloutline/64/TARGET-question_mark-shoot-shooting-question-512.png",
        xp: 50
    },
    {
        id: 3,
        name: "The Explorer 1",
        description: "Concluiu o Capítulo 1",
        image: "https://cdn2.iconfinder.com/data/icons/law-enforcement-soft-fill/60/Police_Badge-shield-police-policing-law-enforcement-512.png",
        xp: 200,
        chapter: {
            id: 1
        }
    },
    {
        id: 4,
        name: "The Explorer 2",
        description: "Concluiu o Cpítulo 2",
        image: "https://cdn1.iconfinder.com/data/icons/law-28/512/Badge-law-police-security-symbolic-512.png",
        xp: 200,
        chapter: {
            id: 2
        }
    },
    {
        id: 5,
        name: "Comum Reader",
        description: "Leu 3 Artigos",
        image: "https://cdn1.iconfinder.com/data/icons/detective-2/64/police_badge-badge-police-shield-256.png",
        xp: 20
    },
    {
        id: 6,
        name: "Rare Reader",
        description: "Leu 5 Artigos",
        image: "https://cdn4.iconfinder.com/data/icons/artificial-intelligence-47/64/Book-education-knowledge-learning-ai-512.png",
        xp: 50
    },
    {
        id: 7,
        name: "Epic Reader",
        description: "Leu 10 Artigos",
        image: "https://cdn1.iconfinder.com/data/icons/education-309/64/book-education-knowledge-learning-512.png",
        xp: 100
    },
    {
        id: 8,
        name: "Winged Quizzer",
        description: "Concluiu 1 Quizz em menos de 10 segundos",
        image: "https://cdn3.iconfinder.com/data/icons/rock-and-roll-2/64/celebration-star-wing-events-party-512.png",
        xp: 70
    }
]

router.get('/', (req, res, next) => {
    res.status(200).send({ badge: badge });

});

module.exports = router;