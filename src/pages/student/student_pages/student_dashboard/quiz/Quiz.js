import React, { useState } from 'react';
import Dashboard_navbar_student from '../../student_components/Dashboard_navbar_student';
import './quiz.css'
function Quiz() {
  const questions = [
    {
      question: 'Which sentence uses the correct verb tense?',
      options: ['I will went to the store yesterday.', ' I go to the store tomorrow.', 'I have went to the store yesterday. ', 'I went to the store yesterday.'],
      answer: 'I went to the store yesterday'
    },
    {
      question: ' Choose the correct form of the verb to complete the sentence: She ________ to the party last night.',
      options: ['go', 'goes', 'went', 'gone'],
      answer: 'went'
    },
    {
      question: 'Which of the following is a verb?',
      options: ['Cat', 'Run', ' Table', 'Beautiful'],
      answer: 'Run'
    }
    ,
    {
      question: 'Which of the following is a pronoun?',
      options: [' Car', 'She', ' Sing', 'Quickly'],
      answer: 'She'
    }
    ,
    {
      question: 'Which of the following is a preposition?',
      options: ['Jump', 'Under ', ' Happy ', 'Book'],
      answer: 'Under'
    }
    ,
    {
      question: 'Which of the following is a conjunction?',
      options: ['Tree ', 'And ', ' Big ', 'Sleep'],
      answer: 'And'
    }
    ,
    {
      question: 'Which of the following is a noun?',
      options: ['Quickly', 'Dance ', ' Yellow ', 'Laughing'],
      answer: 'Dance'
    }
    ,
    {
      question: 'Which of the following is a correct sentence?',
      options: ['She goes to the store yesterday', ' We is studying for the test. ', ' They are playing soccer in the park. ', 'Beautiful'],
      answer: 'They are playing soccer in the park.'
    }
    ,
    {
      question: 'Which of the following is a possessive pronoun?',
      options: ['My', 'Jumping ', ' Quickly ', 'Singing'],
      answer: 'My'
    }
    ,
    {
      question: 'Which of the following is a correct use of a comma?',
      options: ['I like to swim in the ocean and play tennis.', 'She is a doctor and a teacher.', '  After school I went to the movies', ' He likes pizza but not hamburgers.'],
      answer: ' After school I went to the movies.'
    }
    ,
    {
      question: 'Which of the following is a correct use of "your"? ',
      options: ['You  re book is on the table', 'Your going to the party tonight', ' I like your shoes.', 'Youre going to be late.'],
      answer: 'I like your shoes.'
    }

  ];

  const QuizApp = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);

    const handleAnswerOptionClick = (selectedAnswer) => {
      if (selectedAnswer === questions[currentQuestion].answer) {
        setScore(score + 1);
      }

      const nextQuestion = currentQuestion + 1;
      if (nextQuestion < questions.length) {
        setCurrentQuestion(nextQuestion);
      } else {
        setShowScore(true);
      }
    };

    return (
      <>
        <Dashboard_navbar_student />
        <div className="container mx-auto">
          {showScore ? (
            <div className="text-center">
              <h1 className="text-4xl font-bold">Quiz Score</h1>
              <p className="text-2xl">
                You scored {score} out of {questions.length}
              </p>
            </div>
          ) : (
            <div>
              <h1 className="text-4xl font-bold mb-4">
                <h3 className='text-center exam-heading'>Daily Exam</h3>
                {questions[currentQuestion].question}
              </h1>
              <div className="grid grid-cols-2 gap-4">
                {questions[currentQuestion].options.map((option) => (
                  <button
                    key={option}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() => handleAnswerOptionClick(option)}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </>
    );
  };

  return <QuizApp />;
}

export default Quiz;
