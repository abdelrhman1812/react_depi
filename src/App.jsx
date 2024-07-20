/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Question from './components/Question/Question';
import reactQuestions from './utils/question';

const App = () => {
  const [questions, setQuestions] = useState(reactQuestions);
  const [showAnswer, setShowAnswer] = useState(null);

  const handleAnswer = (index) => {
    setShowAnswer(index);
    const answer = questions[index].answer;
    window.speechSynthesis.cancel();
    speak(answer);
  }

  const speak = (text) => {
    const utterance = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(utterance);
  }

  const stopSound = () => {
    console.log('Stop button clicked');
    window.speechSynthesis.cancel();
    setShowAnswer(null)
  }

  return (
    <div className='container mt-5'>
      <div className="row g-3">
        {questions.length > 0 ? questions.map((question, index) => (
          <Question
            key={question.id}
            data={question}
            index={index}
            showAnswer={showAnswer}
            stopSound={stopSound}
            handleAnswer={handleAnswer}
          />
        )) : ""}
      </div>
    </div>
  );
};

export default App;
