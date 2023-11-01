// src/Quiz.js
import React, { useState } from 'react';
import quizData from '../constants/quizData';
import Button from './Button';
import Start from './Start';
import Result from './Result';

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


    // 判斷結果
    const renderResult = () => {
        if (totalScore < 10) {
            console.log('show img 1');
            return (
                <p> AAA </p>
            )
        } else if (totalScore >= 10 && totalScore < 20) {
            console.log('show img 2');
            return (
                <p> BBB </p>
            )
        } else if (totalScore >= 20 && totalScore < 30) {
            console.log('show img 3');
            return (
                <p> CCC </p>
            )
        } else {
            console.log('show img 4');
            return (
                <p> DDD </p>
            )
        }
    }

    return (
        <div className="flex flex-col items-center bg-white h-screen">

            {/* Result or Quiz */}
            {isTestStarted ? (
                showResult ? (
                    // Result
                    <div className='bg-slate-100 h-screen w-screen p-6'>
                        <p>Total Score: {totalScore}</p>
                        <p>Result:</p>

                        <div>
                            {renderResult()}
                        </div>

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
