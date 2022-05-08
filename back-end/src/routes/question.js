const express = require('express')
const router = express.Router()

const question = [{
        id: 1,
        title: "Quais os princípios básicos da Segurança da Informação ?",
        optionA: "Confidencialidade, integridade, disponibilidade, autencidade",
        optionB: "Confidencialidade, não repúdio, disponibliidade, concistência",
        optionC: "Escalabilidade, integridade, autenticiadade, criptografia",
        optionD: "Durabilidade, integridade, tolerância, encapsulamento",
        optionE: "Confidencialidade, disponibilidade, autencidade",
        ans: 1,
        chose: -1,
        chapter: {
            chapterId: 1
        }
    },
    {
        id: 2,
        title: "Qual atributo corresponde ao nível de sigilo de uma informação ?",
        optionA: "Criptografia",
        optionB: "Confidencialidade",
        optionC: "Privacidade",
        optionD: "Isolamento",
        optionE: "Todas as alternativas estão corretas",
        ans: 2,
        chose: -1,
        chapter: {
            chapterId: 1
        }
    },
    {
        id: 3,
        title: "Dados importantes em que a condição de inalteravél deve durar o máximo possível, este princípio trata-se de:",
        optionA: "Autenticidade",
        optionB: "Durabilidade",
        optionC: "Disponibilidade",
        optionD: "Particionamento",
        optionE: "Integridade",
        ans: 3,
        chose: -1,
        chapter: {
            chapterId: 1
        }
    },
    {
        id: 4,
        title: "Qual indivíduo é responsável por um ataque autorizado com intenções justas ?",
        optionA: "Cracker",
        optionB: "Hackvista",
        optionC: "Grey Hat",
        optionD: "Hacker ético",
        optionE: "Insider",
        ans: 4,
        chose: -1,
        chapter: {
            chapterId: 2
        }
    },
    {
        id: 5,
        title: "Invadir sistemas sem autorização, manipular códigos e coletar dados sigilosos em prol de causas sociais, éticas ou morais. Essas características referem-se ao:",
        optionA: "Hackvista",
        optionB: "Newbie",
        optionC: "Hacker ético",
        optionD: "Grey Hat",
        optionE: "Phreakers",
        ans: 1,
        chose: -1,
        chapter: {
            chapterId: 2
        }
    },
    {
        id: 6,
        title: "Quem tem acesso a informações privilegiadas de uma determinada empresa é chamado de: ",
        optionA: "Black Hat",
        optionB: "Hackvista",
        optionC: "Elite",
        optionD: "Blue Hat",
        optionE: "Insider",
        ans: 5,
        chose: -1,
        chapter: {
            chapterId: 2
        }
    }
]

router.get('/', (req, res, next) => {
    res.status(200).send({ question: question });

});

module.exports = router;