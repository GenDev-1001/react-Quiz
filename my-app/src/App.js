import React, { useState } from 'react';
import './App.css';

function App() {

const questions = [
  {
    questionText: "The capital of USA?",
    answerOptions: [
      {
        answerText: "Boston",
        isCorrect: false,
      },
      {
        answerText: "Washington",
        isCorrect: true,
      },
      {
        answerText: "New York",
        isCorrect: false,
      },
      {
        answerText: "Los Angeles",
        isCorrect: false,
      },
    ],
  },
  {
    questionText: "Which company developed React?",
    answerOptions: [
      {
        answerText: "Amazon",
        isCorrect: false,
      },
      {
        answerText: "Mail",
        isCorrect: false,
      },
      {
        answerText: "Facebook",
        isCorrect: true,
      },
      {
        answerText: "Google",
        isCorrect: false,
      },
    ],
  },
  {
    questionText: "What is not related to the Marvel Universe?",
    answerOptions: [
      {
        answerText: "Badman",
        isCorrect: true,
      },
      {
        answerText: "Halk",
        isCorrect: false,
      },
      {
        answerText: "Iron Man",
        isCorrect: false,
      },
      {
        answerText: "Spider Man",
        isCorrect: false,
      },
    ],
  },
  {
    questionText: "What is not a programming language?",
    answerOptions: [
      {
        answerText: "GO",
        isCorrect: false,
      },
      {
        answerText: "HTML",
        isCorrect: true,
      },
      {
        answerText: "JavaScript",
        isCorrect: false,
      },
      {
        answerText: "Python",
        isCorrect: false,
      },
    ],
  },
];


  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerOptionClick = (isCorrect) => {
    if(isCorrect){
      setScore(score+1);
    }

    const nextQuestion = currentQuestion + 1;

    if(nextQuestion < questions.length){
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  }

  const refresh = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
  }

  return (
    <div className="app">
      {showScore ? (
        <div className="section__score">
          <img className='section__img' src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Sign-check-icon.png/640px-Sign-check-icon.png" alt='done' />
          <div className='section__score-text'>
            Correct answers: {score} from {questions.length}
          </div>
          <button className="refresh__btn" onClick={refresh}>
            Repeat test
          </button>
        </div>
      ) : (
        <div className="quizz">
          <div className="question__section">
            <div className="question__count">
              <span>Question {currentQuestion + 1}</span> / {questions.length}
            </div>
            <div className="question__text">
              {questions[currentQuestion].questionText}
            </div>
          </div>
          <div className="answer__section">
            {questions[currentQuestion].answerOptions.map((item) => {
              return (
                <button
                  onClick={() => handleAnswerOptionClick(item.isCorrect)}
                  key={item.answerText}
                >
                  {item.answerText}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
