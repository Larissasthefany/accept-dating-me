import { useState } from "react";

function Quiz() {
    const questions = [
        {
            question: 'Quem falou eu te amo primeiro?',
            options: ['Eu', 'Você'],
            correctAnswer: 'Você'
        },
        {
            question: 'Quem se interessou primeiro?',
            options: ['Eu', 'Você', 'Nós duas'],
            correctAnswer: 'Nós duas'
        },

        {
            question: 'Quem é mais ciumenta?',
            options: ['Eu', 'Você', 'Nós duas'],
            correctAnswer: 'Você'
        },

        {
            question: 'Quem se irrita com mais facilidade?',
            options: ['Eu', 'Você', 'Nós duas'],
            correctAnswer: 'Eu'
        },

        {
            question: 'Quem é mais viciada por jogos?',
            options: ['Eu', 'Você', 'Nós duas'],
            correctAnswer: 'Nós duas'
        },


        {
            question: 'Qual é a nossa música favorita como casal?',
            options: ['Samba in Paris', 'Desculpa jay-z', '20 ligações'],
            correctAnswer: 'Desculpa jay-z'

        },

        {
            question: 'Qual é o nosso jogo favorita?',
            options: ['Brawl', 'Free Fire', 'Mine'],
            correctAnswer: 'Brawl'
        },

        {
            question: 'Em que dia eu te pedi em namoro?',
            options: ['30/9', '30/10', '30/11'],
            correctAnswer: '30/10'
        },

        {
            question: 'Quem é mais romântica?',
            options: ['Eu', 'Você', 'Nós duas'],
            correctAnswer: 'Você'
        },

        {
            question: 'Quem é mais surda?',
            options: ['Eu', 'Você', 'Nós duas'],
            correctAnswer: 'Nós duas'
        },

        {
            question: ' Qual é a primeira coisa que queremos fazer quando finalmente estivermos juntos fisicamente?',
            options: ['Ficar agarradinha', '+18', 'brigar'],
            correctAnswer: 'Ficar agarradinha'
        },

        {
            question: ' Quando formos viajar juntas, qual lugar iremos primeiro?',
            options: ['Praia', 'Praia','ou', ' praia'],
            correctAnswer: 'Praia'
        },
    ];

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [userAnswers, setUserAnswers] = useState([]);
    const [score, setScore] = useState(0);

    const handleAnswer = (selectedOption) => {
        const currentAnswer = {
            question: questions[currentQuestion].question,
            answer: selectedOption,
            correct: selectedOption === questions[currentQuestion].correctAnswer
        };

        setUserAnswers([...userAnswers, currentAnswer]);
        if (currentAnswer.correct) {
            setScore(score + 1);
        }

        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            setCurrentQuestion(questions.length);
        }
    };

    const restartQuiz = () => {
        setCurrentQuestion(0);
        setUserAnswers([]);
        setScore(0);
    };

    return (
        <div>
            {currentQuestion < questions.length ? (
                <div>
                    <h1 className="quiz-sobre">Quiz sobre nós❤️</h1>
                    <h2 className="question">{questions[currentQuestion].question}</h2>
                    <ul className="meu-item-quiz">
                        {questions[currentQuestion].options.map((option, index) => (
                            <li className="quiz" key={index}>
                                <button className="btn-quiz" onClick={() => handleAnswer(option)}>{option}</button>
                            </li>
                        ))}
                    </ul>
                </div>
            ) : (
                <div>
                    <p className="pontuacao">Pontuação: {score}/{questions.length}</p>
                    <h2 className="text-quiz">Quiz Finalizado!</h2>
                    <button className="btn-quiz" onClick={restartQuiz}>Reiniciar</button>
                </div>
            )}
        </div>
    );
}

export default Quiz;
