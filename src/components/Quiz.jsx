// src/Quiz.js
import React, { useState } from 'react';
import quizData from '../constants/quizData';

const Quiz = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [userAnswers, setUserAnswers] = useState([]);
    const [showResult, setShowResult] = useState(false);
    const [totalScore, setTotalScore] = useState(0);

    const handleAnswerSelect = (selectedOption) => {
        const selectedScore = quizData[currentQuestion].options.find(
            (option) => option.text === selectedOption
        ).score;

        setUserAnswers([...userAnswers, selectedOption]);
        setTotalScore(totalScore + selectedScore);

        if (currentQuestion < quizData.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            setShowResult(true);
        }
    };

    return (
        <div className="flex flex-col items-center p-5">
            {showResult ? (
                <div className="mt-4">
                    <p>Total Score: {totalScore}</p>
                    <p>Result:</p>

                    {/* 提供結果 */}
                    {
                        totalScore >= 50 ? <p>你是一个秋季人。</p> : <p>你是一个夏季人。</p>
                    }
                </div>
            ) : (
                <div className="mt-4 flex flex-col gap-4">
                    <h2>
                        {quizData[currentQuestion].title}
                    </h2>
                    <p>
                        {quizData[currentQuestion].question}
                    </p>
                    <ul className="flex flex-col gap-4">
                        {
                        quizData[currentQuestion].options.map((option) => (
                            <li
                                key={option.text}
                                onClick={() => handleAnswerSelect(option.text)}
                                className='px-4 py-2 rounded bg-blue-100 duration-100 ease-in-out cursor-pointer hover:bg-blue-500'
                            >
                                {option.text}
                            </li>
                        ))
                        }
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Quiz;
