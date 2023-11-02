import React, { useState } from 'react';
import resultData from '../constants/resultData';
import Button from '../components/Button';


const Result = ({ totalScore }) => {

    // console.log(resultData);
    const [showImg, setShowImg] = useState(false);
    const toggleImage = () => {
        setShowImg(!showImg);
    }

    // display result text
    function resultElement(index) {
        return (
            <div className='flex flex-col gap-3 items-center w-full'>
                <h3 className='text-2xl font-bold'>
                    {resultData[index].title}
                </h3>

                {
                    showImg ? (
                        <div>
                            <img src={resultData[index].img} className='w-full max-h-screen lg:max-h-[400px] mb-2' />
                        </div>
                    ) : (
                        <div className='flex flex-col gap-2 items-center'>

                            {resultData[index].description.map((p, index) => (
                                <p key={index}>
                                    {p}
                                </p>
                            ))}

                            <Button primary onClick={toggleImage} className="mt-6 flex justify-center w-1/2">
                                顯示圖片
                            </Button>

                        </div>
                    )
                }



            </div>
        )
    }

    // 判斷結果
    const renderResult = () => {
        if (totalScore < 10) {
            return resultElement(0);

        } else if (totalScore < 20) {
            return resultElement(1);

        } else if (totalScore < 40) {
            return resultElement(2);

        } else if (totalScore < 60) {
            return resultElement(3);

        } else {
            return resultElement(4);
        }
    }

    return (
        <div className='h-full md:pt-6'>
            {/* <p>Total Score: {totalScore}</p> */}
            {renderResult()}
        </div>
    )
}

export default Result;