import React, { useState } from 'react';

const LastGuessInput = ({ parsedWords, setSelectedWords, setParsedWords }) => {
  const [selectedWord, setSelectedWord] = useState('');
  const [number, setNumber] = useState(0);

  const handleWordChange = (event) => {
    let v = event.target.value;
    setSelectedWord(prevSelectedWord => v);
  };

  const handleNumberChange = (event) => {
    setNumber(Number(event.target.value));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const _w = selectedWord;
    // remove selectedWord from parsedWords
    const updatedParsedWords = parsedWords.filter(word => word !== _w);
    setParsedWords(updatedParsedWords);
    const tmpSelected = [];
    if (number === 0) {
      // for each word in parsedWords
      parsedWords.forEach(word => {
        // if word is not equal to selectedWord
        if (word !== _w) {
          // add word to tmpSelected
          tmpSelected.push(word);
        }
      });
    } else {
      // for each word in parsedWords
      parsedWords.forEach(word => {
        // if the word isn't equal to selectedWord
        if (word !== _w) {
          let count = 0;
          // for each character in word
          for (let i = 0; i < word.length; i++) {
            // if the character is equal to the character at the same index in selectedWord
            if (word[i] === _w[i]) {
              // increment count
              count++;
            }
          }
          // if count is equal to number
          if (count === number) {
            // add word to tmpSelected
            tmpSelected.push(word);
          }
        }
      });
    }
    setSelectedWords(tmpSelected);
    setSelectedWord('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='form-group'>
        <label htmlFor="lastGuessInput">Last Guess</label>
        <select
          className="form-control"
          id="lastGuessInput"
          value={selectedWord}
          onChange={handleWordChange}
        >
          <option value=''>Select a word</option>
          {parsedWords.map(word => (
            <option value={word} key={word}>{word}</option>
          ))}
        </select>
      </div>
      <div className='form-group mb-1'>
        <label htmlFor="similarCharactersInput">Similar Characters</label>
        <input
          type="number"
          className="form-control"
          id="similarCharactersInput"
          value={number}
          onChange={handleNumberChange}
        />
      </div>
      <button className="btn btn-primary w-100" type="submit">Submit</button>
    </form>
  );
};

export default LastGuessInput;

