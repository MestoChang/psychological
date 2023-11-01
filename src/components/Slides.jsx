import React, { useState } from 'react';
import Button from './Button';
import Question from './Question';

const Slides = ({ data }) => {

    // console.log(data);

    const [currentIndex, setCurrentIndex] = useState(0);
    const nextSlide = () => {
        if (currentIndex < data.length - 1) {
            setCurrentIndex(currentIndex + 1);
        } else { // 之後改成無法再倒退
            setCurrentIndex(0);
            console.log('return to first');
        }
    };
    const prevSlide = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        } else { // 之後改成跳轉至結果
            setCurrentIndex(data.length - 1);
            console.log('back to last slide');
        }
    }


    return (
        <div className='bg-white shadow-lg max-w-sm rounded-lg overflow-hidden p-4'>

            <div>

                {/* render question */}
                {data.map((question, index) => (
                    <Question
                        key={question.id}
                        question={question}
                        index={index}
                        currentIndex={currentIndex} />
                ))}

            </div>

            <div className='flex gap-2 justify-center mt-4'>
                <Button secondary onClick={prevSlide}>
                    Back
                </Button>
                <Button primary onClick={nextSlide}>
                    Next
                </Button>
            </div>

        </div>

    )
}

export default Slides;