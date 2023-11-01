import React from 'react';
import Button from './Button';

const Start = ({ onClick }) => {
    return (
        <div className='bg-slate-100 p-6'>
            <h2>心理測驗</h2>
            <Button primary onClick={onClick}>開始測試</Button>
        </div>
    )
}

export default Start;