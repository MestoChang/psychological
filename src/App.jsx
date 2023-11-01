import React, { useState } from 'react';
import Slides from './components/Slides';
import QuestionData from './constants/QuestionData';

const App = () => {

  // console.log(QuestionData);
  const [result, setResult] = useState(0);

  const handleChange = (value) => {
    setResult(result + value);
    console.log('result value:', result)
  }

  return (
    <div className='flex flex-col gap-4 justify-center items-center'>

      <Slides data={QuestionData} />

      <div className='text-2xl font-bold'>
        Final resultValue:{result}
      </div>


    </div>
  )
}

export default App;