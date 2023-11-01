import React from 'react'

const Result = ({onClick}) => {

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
        <div className='p-6'>
            <p>Total Score: {totalScore}</p>
            <p>Result:</p>

            <div>
                {renderResult()}
            </div>

            <div className='my-4'>
                {isTestCompleted ? (
                    <Button secondary onClick={onClick}>
                        再測一次
                    </Button>
                ) : null}
            </div>

        </div>
    )
}

export default Result