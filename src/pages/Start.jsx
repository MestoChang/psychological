import React from 'react';
import Button from '../components/Button';

const Start = ({ onClick }) => {
    return (
        <div className='p-6 min-h-screen w-full flex flex-col justify-center items-center gap-4'>
            <h2 className='text-2xl font-bold'>心理測驗</h2>
            <div className='my-6 w-full flex justify-center'>
                <Button primary
                    onClick={onClick}
                    className="flex w-1/2 justify-center">
                        開始測試
                </Button>
            </div>
        </div>
    )
}

export default Start;