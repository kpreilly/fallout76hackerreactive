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
        <div className="container">
            <h1 className="m-3">Fallout 76 Terminal Helper</h1>
            
            <div className="mb-3">
                <h2>Input</h2>
                <p>Submit space separated words</p>
                <TerminalWordsInput
                    parsedWords={handleParsedWords}
                />
            </div>
            
            <div className="mb-3">
                <h2>Guess</h2>
                <LastGuessInput
                    parsedWords={parsedWords}
                    setSelectedWords={handleSelectedWords}
                    setParsedWords={setParsedWords}
                />
            </div>
            
            <h2>Result</h2>
            <Display
                parsedWords={selectedWords}
            />
        </div>
    );
};

export default App;
