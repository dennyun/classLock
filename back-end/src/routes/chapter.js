const express = require('express')
const router = express.Router()

const chapter = [{
        id: 1,
        title: "Princípios Básicos da Segurança da Informação",
        description: "<p>Neste capítulo você será apresentado a missões que iram testar os seus conhecimentos a cerca dos princípios básicos da segurança da informação, para  executar este capítulo com êxito é nescessário compreender as características de cada um dos príncipios.</p>",
        image: "https://makewebbetter.com/wp-content/uploads/2017/12/mainbanner1-1-1.jpg",
    },
    {
        id: 2,
        title: "Os Tipos de Hackers",
        description: "<p>Este capítulo será dedicado aos indivíduos que possuem uma facilidade e um conhecimento elevado em torno da manipulação código que permite o acesso a informações consideradas sigilosas, apesar que serem nomeados generalizadamente como Hackers há diferenças entre cada um deles que se dá por questões de índole ou nível de conhecimento e neste capítulos você deverá conhecer cada um deles.</p>",
        image: "https://avante.biz/wp-content/uploads/Cool-Hacker-Wallpapers/Cool-Hacker-Wallpapers-014.jpg"
    }
]

router.get('/', (req, res, next) => {
    res.status(200).send({ chapter: chapter });

});

module.exports = router;