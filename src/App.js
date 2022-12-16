import React from 'react';
import TerminalWordsInput from './TerminalWordsInput';
import LastGuessInput from './LastGuessInput';
import Display from './Display';

const App = () => {
    const [parsedWords, setParsedWords] = React.useState([]);
    const [selectedWords, setSelectedWords] = React.useState([]);

    const handleParsedWords = (words) => {
        setParsedWords(words);
    };

    const handleSelectedWords = (words) => {
        setSelectedWords(words);
    };

    return (
        <div className="m-3">
            <h1 className="m-3">Fallout 76 Terminal Helper</h1>
            <h2 className="m-3">Input</h2>
            <TerminalWordsInput parsedWords={handleParsedWords} />
            <h2 className="m-3">Guess</h2>
            <LastGuessInput parsedWords={parsedWords} setSelectedWords={handleSelectedWords} />
            <h2 className="m-3">Result</h2>
            <Display parsedWords={selectedWords} />
        </div>
    );
};

export default App;
