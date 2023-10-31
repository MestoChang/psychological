import React from 'react';
import Slides from './components/Slides';
import Questions from './constants/Question';

const App = () => {

  console.log(Questions);


  return (
    <div>

      {Questions.map(question => {
        return (
          <Slides key={question.id} question={question} />
        )
      })}

    </div>
  )
}

export default App;