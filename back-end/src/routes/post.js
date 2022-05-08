const express = require('express')
const router = express.Router()

const post = [{
        id: 1,
        title: "Princípios básicos da Segurança da Informação",
        summary: "'Porque é importante criar esforço para seguir e manter os quatro princípios da Segurança da Informação'",
        views: 0,
        body: "<p>É imprescindível que as empresas protejam os dados dos seus clientes com todo o afinco que puderem. Na era digital, os dados são tão importantes que milhares de ataques acontecem diariamente. O Brasil se tornou o segundo maior alvo mundial de ciberataques, segundo um estudo da Netscout. Por isso, as empresas devem sempre se preocupar em gerenciar riscos e proteger as informações de acesso não autorizado, vazamentos, alterações, invasões e perdas. As ameaças à segurança da informação podem acontecer de diversas formas, desde ataques ransomwares a erros humanos. Dessa forma, a segurança da informação se baseia em quatro pilares para proteger as informações e dados: confidencialidade, integridade, disponibilidade e autenticidade.</p>",
        image: "http://sfwallpaper.com/images/blog-wallpaper-3.jpg",
        createdBy: "Big Hunt",
        createdDate: "2022-05-01T14:59:03.471986",
        user: {
            id: 1,
            userName: "Jack",
        }
    },
    {
        id: 2,
        title: "Confidencialidade e integridade",
        summary: "\"O quão importante é manter de sigílo e inalteração nos dados através dos princípios da Segurança da Informação ?\"",
        views: 0,
        body: "<p>A confidencialidade é o primeiro princípio da segurança da informação por um motivo bem simples: ele lida com a privacidade dos dados, que é fundamental para qualquer empresa que deseja garantir a segurança. Esse conceito diz respeito às ações tomadas para assegurar que as informações não sejam roubadas dos sistemas através de ciberataques, espionagem, acesso não autorizado, entre outras práticas. É pensando na confidencialidade que diversas ações preventivas podem ser tomadas, como por exemplo utilizar programas de Bug Bounty para manter os sistemas seguros, e assim proteger a confidencialidade.</p> <p>O princípio da integridade assegura que os dados mantenham suas características originais, ou seja, não sejam alterados indevidamente. Existe perda da integridade quando uma informação é modificada ou violada impropriamente. Por exemplo, se um funcionário alterar uma informação para simular um preço mais alto que o real, está corrompendo o princípio da integridade.</p>",
        image: "http://sfwallpaper.com/images/blog-wallpaper-3.jpg",
        createdBy: "Big Hunt",
        createdDate: "2022-05-01T14:59:03.480985",
        user: {
            id: 2,
            userName: "Ryan",
        }
    },
    {
        id: 3,
        title: "Autencidade e Disponibilidade",
        summary: "\"Os limites na autoridade para um usuário acessar informações e o quanto o acesso a esta informação estará disponível\"",
        views: 0,
        body: "<p>O princípio da autenticidade garante que as informações sejam provenientes de uma fonte confiável. Em outras palavras, confirma que os dados possuem legitimidade, não havendo manipulação ou intervenções externas, como terceiros se passando por colaboradores.</p> <p>A autenticidade é o pilar que valida a autorização do usuário para acessar, transmitir e receber informações, como logins, senhas ou até autenticações biométricas. Um sistema autêntico confirma a identidade dos usuários antes de liberar o acesso.</p> <p>Para que um sistema de informação seja útil, é indispensável que seus dados estejam disponíveis quando necessário. Portanto, a disponibilidade é outro dos quatro princípios da segurança da informação, que garante o acesso em tempo integral para usuários finais.</p> <p>Para fazer isso, você precisa garantir a estabilidade e acesso permanente às informações dos sistemas por meio de processos de manutenção rápida, eliminação de falhas de software, atualizações contínuas e planos de gerenciamento de crises. Os sistemas são vulneráveis a desastres naturais, ataques, falta de energia e diversas outras ameaças à disponibilidade. Manter os sistemas seguros também significa garantir o máximo possível de segurança para que os dados estejam sempre disponíveis.</p>",
        image: "http://sfwallpaper.com/images/blog-wallpaper-3.jpg",
        createdBy: "Big Hunt",
        createdDate: "2022-05-01T14:59:03.481987",
        user: {
            id: 3,
            userName: "Francis",
        }
    },
    {
        id: 4,
        title: "As Classificações de um Hacker - Parte 1",
        summary: "'O termo hacker é muitas vezes usado como sinónimo de alguém que possui um alto conhecimento em manipulação de código, mas cada um destes indivíduos possuem motivações e princípios diferentes que a qual usuários mais leigos precisam saber para entender com quem podem estar lidando.'",
        views: 0,
        body: "<p>White Hat (Hacker Ético / Chapéu branco) – São hackers que estudam sistemas de computação e redes há procura de falhas na segurança, respeitando sempre os princípios da sua ética. Quando encontram algum tipo de falhas na segurança, reportam aos responsáveis das empresas (bancos, governo, empresas comerciais) para que estes possam tomar as devidas medidas de segurança. Muitos deles aumentam as suas capacidades através de estudos e passam a exercer profissões de professores de informática ou técnicos de rede e computação; Black Hat (Chapéu preto) – São também conhecido como Dark-Side Hacker (hacker do lado negro), são aqueles que não respeitam os códigos de ética da comunidade em que se inserem. São eles que têm contribuído para denegrir a imagem dos hackers, pois utilizam os seus conhecimentos para a prática de crimes através da internet (roubo de dados e informações secretas das empresas); Grey Hat (Chapéu cinzento) – São tipos de hackers que estão entre os white hat e os black hat e que invadem sistemas apenas por diversão, no entanto não mexem nem divulgam dados interditos ou confidenciais. Muitas vezes atuam em troco de dinheiro, ou seja, exploram as vulnerabilidades do sistema de uma determinada empresa, e caso encontrem alguma, oferecem-se para a resolver a troco de dinheiro; Blue Hat (Hacker Empresarial / Chapéu azul) – São hackers contratados por diversas empresas, para testar os sistemas de segurança antes que os mesmos sejam liberados. Estes tentam encontrar quebras nos sistemas para que as mesmas possam ser resolvidas.</p>",
        image: "http://sfwallpaper.com/images/blog-wallpaper-3.jpg",
        createdBy: "Filipa Cardoso",
        createdDate: "2022-05-01T15:30:21.678582",
        user: {
            id: 4,
            userName: "Anny",
        }
    }
]

router.get('/', (req, res, next) => {
    res.status(200).send({ post: post });

});

module.exports = router;