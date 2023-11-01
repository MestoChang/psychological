import React from 'react';

const Result = ({ totalScore }) => {

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
        <div>
            <p>Total Score: {totalScore}</p>
            <p>Result:</p>
            {renderResult()}
        </div>
    )
}

export default Result