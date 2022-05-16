import { useState } from "react"

const useWordle = (solution) => {

    const [turn, setTurn] = useState(0)
    const [currentGuess, setCurrentGuess] = useState('')
    const [guesses, setGuesses] = useState([]) // each guess is an array
    const [history, setHistory] = useState(['hello']) // each guess is a string
    const [isCorrect, setIsCorrect] = useState(false)

    const formatGuess = () => {
        console.log("formatting guess - ", currentGuess)
    }
    const addNewGuess = () => {

    }
    const handleKeyUp = ({ key }) => {
        if (key === 'Enter') {
            // only add guess when current guess is less then 5
            if (turn > 5) {
                console.log("you used all your guesses")
                return
            }
            // dont allowed dupe guess
            if (history.includes(currentGuess)) {
                console.log("you are already tried that word")
                return
            }
            // check word is 5 chars long
            if(currentGuess.length !== 5){
                console.log("word must be 5 chars long")
                return
            }
            formatGuess()
        }
        if (key === "Backspace") {
            setCurrentGuess((prev) => {
                return prev.slice(0, -1)
            })
            return
        }
        if (/^[A-Za-z]$/.test(key)) {
            if (currentGuess.length < 5) {
                setCurrentGuess((prev) => {
                    return prev + key
                })
            }
        }
    }

    return { turn, currentGuess, guesses, isCorrect, handleKeyUp }
}
export default useWordle