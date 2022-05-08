import { useState } from 'react';
import './styles.css'


const questions = [
    {
      questionText: "O que é phishing?",
      answerOptions: [
        { answerText: "Site de compras", isCorrect: false },
        { answerText: "Site seguro", isCorrect: false },
        { answerText: "É o uso fraudulento de comunicações eletrônicas para enganar e explorar os usuários", isCorrect: true },
        { answerText: "É usado para identificar que o site é seguro", isCorrect: false },
        { answerText: "Jogo virtual", isCorrect: false }
      ],
    },
    {
      questionText:
        "Qual ferramenta é utilizada para verificar se um site é seguro?",
      answerOptions: [
        { answerText: "Google imagens", isCorrect: false },
        { answerText: "Safe Browsing Site Status", isCorrect: true },
        { answerText: "Firefox", isCorrect: false },
        { answerText: "Google Meet", isCorrect: false },
        { answerText: "Click Jogos", isCorrect: false }
      ],
    },
    {
      questionText: "Como saber se um link é legítimo??",
      answerOptions: [
        { answerText: "Clicando nele", isCorrect: false },
        { answerText: "Acesse ele sem VPN", isCorrect: false },
        { answerText: "Observe se o site apresenta o certificado ssl", isCorrect: true },
        { answerText: "Todo link é confiável", isCorrect: false },
        { answerText: "Feadbacks", isCorrect: false }
      ],
    },
    {
      questionText: "São as principais categorias de sites perigosos, exceto :",
      answerOptions: [
        { answerText: "Conteúdo adulto", isCorrect: false },
        { answerText: "Downloads de arquivos", isCorrect: false },
        { answerText: "Jogos online", isCorrect: false },
        { answerText: "Lojas virtuais", isCorrect: false },
        { answerText: "Youtube", isCorrect: true }
      ],
    },
  ];

export const Quiz = () => {
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);
    const [currentQuestion, setCurrentQuestion] = useState(0);

  //Respostas
    function handleAnswer(isCorrect){
        if(isCorrect){
            setScore(score + 1);
        }

        const nextQuestion = currentQuestion + 1;
        if(nextQuestion < questions.length){
            setCurrentQuestion (nextQuestion);
        } else{
            setShowScore(true)
        }
    }


  return (
      <div className='container'>
        <div className='container-quiz'>
          <div className="quiz">
              {showScore ? (
                  <div className="score-section">
                      Você pontuou {score} de {questions.length}
                  </div>
              ) : (

              <>
                  <div className="question-section">
                      <div className="question-count">
                          <span>{currentQuestion + 1}</span>/{questions.length}
                      </div>

                      <div className="question-text">
                          {questions[currentQuestion].questionText}
                      </div>
                  </div>

                  <div className="answer-section">
                      {questions[currentQuestion].answerOptions.map(
                      (answerOption, index) => (
                          <button onClick={() => handleAnswer(answerOption.isCorrect)} key={index}>
                          {answerOption.answerText}
                          </button>
                      )
                      )}
                  </div>
              </>
              )}
          </div>
        </div>
      </div>    
  );
}