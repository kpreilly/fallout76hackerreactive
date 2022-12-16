import React from 'react';

const TerminalWordsInput = ({ parsedWords }) => {
  const [words, setWords] = React.useState('');

  const handleChange = (event) => {
    setWords(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    parsedWords(words.split(/[\s,]+/).map((word) => word.toUpperCase()));
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea className="w-100"onChange={handleChange} value={words} placeholder="Terminal Text"/><br />
      <button className="btn btn-primary w-100"type="submit">Submit</button>
    </form>
  );
};

export default TerminalWordsInput;
