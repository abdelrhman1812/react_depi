import React from 'react';

const Question = ({ data, handleAnswer, stopSound, index, showAnswer }) => {
    return (
        <div className="col-12">
            <div
                onClick={() => handleAnswer(index)}
                className={` ${showAnswer === index ? "active text-light" : ""} question`}
            >
                <h2>
                    {showAnswer === index ? data.answer : data.question}
                </h2>
                {showAnswer === index && (
                    <button
                        className='bg-danger w-25 border-0 p-2 rounded-1 text-white'
                        onClick={(e) => {
                            e.stopPropagation();
                            stopSound();
                        }}
                    >
                        Stop
                    </button>
                )}
            </div>
        </div>
    );
}

export default Question;
