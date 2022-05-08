const express = require('express');
const router = express.Router();

const login = {
    email: "jack@gmail.com",
    password: "jack123"
}

const user = [{
        id: 1,
        email: "jack@gmail.com",
        userName: "Jack",
        password: "jack123",
        image: "https://cdn4.iconfinder.com/data/icons/diversity-v2-0-volume-02/64/bandit-asian-male-cowboy-512.png",
    },
    {
        id: 2,
        email: "ryan@gmail.com",
        userName: "Ryan",
        password: "ryan123",
        image: "https://cdn4.iconfinder.com/data/icons/diversity-v2-0-volume-05/64/rastafarian-male-formal-512.png",
    },
    {
        id: 3,
        email: "francis@gmail.com",
        userName: "Francis",
        password: "francis123",
        image: "https://cdn4.iconfinder.com/data/icons/diversity-v2-0-volume-05/64/emo-asian-female-512.png",
    },
    {
        id: 4,
        email: "Anny@gmail.com",
        userName: "Anny",
        password: "Anny123",
        image: "https://cdn4.iconfinder.com/data/icons/diversity-v2-0-volume-05/64/emo-black-female-512.png",
    }
]

router.get('/', (req, res, next) => {
    res.status(200).send({ user: user });
});

module.exports = router;