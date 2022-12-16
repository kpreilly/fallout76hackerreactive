import React from 'react';

const Display = ({ parsedWords }) => {
  return (
    <ul className="list-group">
      {parsedWords.map((word) => (
        <li className="list-group-item" key={word}>{word}</li>
      ))}
    </ul>
  );
};

export default Display;
