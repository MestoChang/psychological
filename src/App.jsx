import React, { useState } from 'react';
import Slides from './components/Slides';
import Questions from './constants/Question';

const App = () => {

  const [result, setResult] = useState(0);

  // console.log(Questions);

  const handleChange = (value) => {
    setResult(result + value);
    console.log('result value:', result)
  }


  return (
    <div>

      <div className='text-2xl font-bold'>
        Final resultValue:{result}
      </div>

      {Questions.map(question => {
        return (
          <Slides key={question.id} question={question} value={result} onChange={handleChange} />
        )
      })}

    </div>
  )
}

export default App;