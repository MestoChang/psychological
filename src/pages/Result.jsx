import React, { useState } from 'react';
import resultData from '../constants/resultData';


const Result = ({ totalScore }) => {

    // console.log(resultData);

    function resultElement(index) {
        return (
            <div className='flex flex-col gap-3'>
                <h3 className='text-2xl font-bold'>
                    {resultData[index].title}
                </h3>
                <div className='flex flex-col gap-2'>
                    {resultData[index].description.map(p => (
                        <p>{p}</p>
                    ))}
                </div>
                <div>
                    <img src={resultData[index].img} />
                </div>
            </div>
        )
    }


    // 判斷結果
    const renderResult = () => {
        if (totalScore < 10) {
            return resultElement(0);

        } else if (totalScore >= 10) {
            return resultElement(1);

        } else if (totalScore >= 25) {
            return resultElement(2);

        } else if (totalScore >= 50) {
            return resultElement(3);

        } else {
            return resultElement(4);
        }
    }

    return (
        <div>
            <p>Total Score: {totalScore}</p>
            {renderResult()}
        </div>
    )
}

export default Result;