import './App.css';
import React, { useState } from 'react';

function App() {
  const [input, setInput] = useState('');
  const [vowel, setVowel] = useState('');

  const handleVowel = () =>{
    let count = 0;
    for (const chr of input){
      if('aeiou'.includes(chr.toLowerCase())){
        count++
      }
    }
    setVowel(`The count of vowel in the word you enter is ${count}`)
  }
  return (
    <div className="App">
      <h1>Vowel counter</h1>
      <input placeholder='Enter a string' id='input' name='input' onChange={(e) =>setInput(e.target.value)} />
      <button id='findBtn' onClick={handleVowel}>Find</button>
      <p id='result'>{vowel}</p>
    </div>
  );
}

export default App;
