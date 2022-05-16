import React, { useEffect } from 'react'
import useWordle from '../hooks/useWordle';
import Grid from './Grid';
import Keypad from './Keypad';

export default function Wordle({ solution }) {
    const { currentGuess, guesses, isCorrect, turn, usedKeys, handleKeyUp } = useWordle(solution);

    useEffect(() => {
        window.addEventListener("keyup", handleKeyUp)
        if (isCorrect) {
            window.removeEventListener("keyup", handleKeyUp)
        }
        if (turn > 5) {
            window.removeEventListener("keyup", handleKeyUp)
        }
        return () => window.removeEventListener("keyup", handleKeyUp)

    }, [handleKeyUp, isCorrect, turn])

    return (
        <div>
            <Grid currentGuess={currentGuess} guesses={guesses} turn={turn} />
            <Keypad usedKeys={usedKeys} />
        </div>
    )
}