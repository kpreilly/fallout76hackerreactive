import React, { useState } from 'react';

const LastGuessInput = ({ parsedWords, setSelectedWords }) => {
  const [word, setWord] = useState('');
  const [number, setNumber] = useState(0);

  const handleWordChange = (event) => {
    setWord(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNumber(Number(event.target.value));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // save a copy of word
    let _w = word;
    _w = _w.toUpperCase();
    // set word to uppercase
    const tmpSelected = [];
    if (number !== 0) {
      parsedWords.forEach((p_word) => {
        if (p_word !== _w) {
          let count = 0;
          for (let i = 0; i < p_word.length; i++) {
            if (p_word[i] === _w[i]) {
              count += 1;
            }
          }
          if (count === number) {
            tmpSelected.push(p_word);
          }
        }
      });
    } else {
      parsedWords.forEach((p_word) => {
        let hasSimilarChar = false;
        for (let i = 0; i < p_word.length; i++) {
          if (p_word[i] === _w[i]) {
            hasSimilarChar = true;
            break;
          }
        }
        if (!hasSimilarChar) {
          tmpSelected.push(p_word);
        }
      });
    }
    setSelectedWords(tmpSelected);
  };

  return (
    <form onSubmit={handleSubmit} className="m-3">
      <div className='mb-2'>
        <div className="row">
          <div className="col-sm-3">
            <span>Last Guess</span>
          </div>
          <div className='col-sm-9'>
            <input type="text" value={word} onChange={handleWordChange} placeholder="Last Guess" />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-3">
            <span>Similar Characters</span>
          </div>
          <div className="col-sm-9">
            <input type="number" value={number} onChange={handleNumberChange} /><br />
          </div>
        </div>
      </div>
      <button className="btn btn-primary w-100" type="submit">Submit</button>
    </form>
  );
};

export default LastGuessInput;
