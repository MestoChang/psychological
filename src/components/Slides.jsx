import React from 'react'

const Slides = ({question}) => {
    return (
        <div className='flex flex-col gap-3 justify-center items-center p-4'>

            <h3>
                {question.question}
            </h3>

            <ul>
                {question.answers.map((answer, index) => {
                    return(
                    <li key={index}>
                        {answer.label}
                    </li>
                    )
                })}
            </ul>

            <div className='flex gap-2'>
                <button>Back</button>
                <button>Next</button>
            </div>

        </div>
    )
}

export default Slides