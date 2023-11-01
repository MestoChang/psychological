// src/Quiz.js
import React, { useState } from 'react';
import quizData from '../constants/quizData';
import Button from '../components/Button';
import { Start, Result } from '../pages';

const Quiz = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [userAnswers, setUserAnswers] = useState([]);
    const [showResult, setShowResult] = useState(false);
    const [totalScore, setTotalScore] = useState(0);
    const [isTestCompleted, setIsTestCompleted] = useState(false);
    const [isTestStarted, setIsTestStarted] = useState(false);


    // 選取後跳轉下題
    const handleAnswerSelect = (selectedOption) => {
        const selectedScore = quizData[currentQuestion].options.find(
            (option) => option.text === selectedOption
        ).score;

        setUserAnswers([...userAnswers, selectedOption]);
        setTotalScore(totalScore + selectedScore);

        if (currentQuestion < quizData.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        } else { // last one
            setShowResult(true);
            setIsTestCompleted(true);
        }
    };

    // 開始測試
    const handleStartTest = () => {
        setIsTestStarted(true);
    };

    // 重新測試
    const handleRetakeTest = () => {
        setCurrentQuestion(0);
        setUserAnswers([]);
        setShowResult(false);
        setTotalScore(0);
        setIsTestCompleted(false);
        setIsTestStarted(false);
    };


    return (
        <div className="flex flex-col items-center bg-white h-screen">

            {/* Result or Quiz */}
            {isTestStarted ? (
                showResult ? (
                    // Result
                    <div className='bg-slate-100 p-6'>

                        <Result totalScore={totalScore} />

                        <div className='my-4'>
                            {isTestCompleted ? (
                                <Button secondary onClick={handleRetakeTest}>
                                    再測一次
                                </Button>
                            ) : null}
                        </div>
                    </div>

                ) : (
                    // Quiz
                    <div className="mt-4 flex flex-col gap-4 p-6">
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
                )) : (
                // start
                <Start onClick={handleStartTest} />
            )}
        </div>
    );
};

export default Quiz;
