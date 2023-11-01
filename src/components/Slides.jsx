import React from 'react';
import Button from './Button';


const Slides = ({question, onChange, value}) => {

    console.log('origin value:', value);

    const handleSelect = (answer) => {
        console.log('answerValue', answer.value);
        value = answer.value;
        return value;
    }

    const handleSubmit = () => {
        console.log('current value', value);
        onChange(value);
    }

    return (
        <div className='flex flex-col gap-3 justify-center items-center p-4'>

            <h3>
                {question.title}
            </h3>

            <p>
                {question.question}
            </p>

            <ul className='space-y-2'>
                {question.answers.map((answer, index) => {
                    return(
                    <li key={index}
                        onClick={() => handleSelect(answer)}
                        className='cursor-pointer p-2 border rounded'>
                        {answer.label}
                    </li>
                    )
                })}
            </ul>

            <div className='flex gap-2'>
                <Button secondary>Back</Button>
                <Button primary onClick={() => handleSubmit()}>Next</Button>
            </div>

        </div>
    )
}

export default Slides;