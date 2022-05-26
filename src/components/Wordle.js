import React, { useEffect, useState } from 'react'
import useWordle from '../hooks/useWordle';
import Grid from './Grid';
import Keypad from './Keypad';
import Modal from './Modal';
import Toast from './Toast';
export default function Wordle({ solution }) {
    const { currentGuess, guesses, isCorrect, turn, usedKeys, notInWordList, handleKeyUp } = useWordle(solution);
    const [showModal, setShowModal] = useState(false)


    useEffect(() => {
        window.addEventListener("keyup", handleKeyUp)
        if (isCorrect) {
            setTimeout(() => setShowModal(true), 2000)
            window.removeEventListener("keyup", handleKeyUp)
        }
        if (turn > 5) {
            setTimeout(() => setShowModal(true), 2000)
            window.removeEventListener("keyup", handleKeyUp)
        }
        return () => window.removeEventListener("keyup", handleKeyUp)

    }, [handleKeyUp, isCorrect, turn])

    return (
        <div className="game">
            <div>
                <h1>Wordle</h1>
            </div>
            <div className="board" >
                <Grid currentGuess={currentGuess} guesses={guesses} turn={turn} />
            </div>
            <div>
                <Keypad usedKeys={usedKeys} onClick={(key) => handleKeyUp({ key })} />
            </div>
            {notInWordList && <Toast />}
            {showModal && <Modal isCorrect={isCorrect} turn={turn} solution={solution} />}
        </div>
    )
}