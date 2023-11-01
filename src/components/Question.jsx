import React from 'react'

const Question = ({ question, index, currentIndex }) => {

    return (
        <div className={`flex-col gap-3 justify-center items-center p-4 border ${ currentIndex == index ? 'flex' : 'hidden'}`}>

            <h3>
                {question.title}
            </h3>

            <p>
                {question.question}
            </p>

            <ul className='space-y-2'>
                {question.answers.map((answer, index) => {
                    return (
                        <li key={index}
                            className='cursor-pointer p-2 border rounded'>
                            {answer.label}
                        </li>
                    )
                })}
            </ul>

        </div>
    )
}

export default Question;