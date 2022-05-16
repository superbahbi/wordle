import { useState } from "react"

const useWordle = (solution) => {

    const [turn, setTurn] = useState(0)
    const [currentGuess, setCurrentGuess] = useState('')
    const [guesses, setGuesses] = useState([...Array(6)]) // each guess is an array
    const [history, setHistory] = useState([]) // each guess is a string
    const [isCorrect, setIsCorrect] = useState(false)

    // Format key with color green, yellow, grey
    const formatGuess = () => {
        let solutionArray = [...solution]
        let formattedGuess = [...currentGuess].map(((l) => {
            return { key: l, color: "grey" }
        }))
        formattedGuess.forEach((l, i) => {
            if (solutionArray[i] === l.key) {
                formattedGuess[i].color = "green"
                solutionArray[i] = null
            }
        })
        formattedGuess.forEach((l, i) => {
            if (solutionArray.includes(l.key) && l.color !== "green") {
                formattedGuess[i].color = "yellow"
                solutionArray[solutionArray.indexOf(l.key)] = null
            }
        })
        return formattedGuess
    }
    const addNewGuess = (formattedGuess) => {
        if (currentGuess === solution) {
            setIsCorrect(true)
        }
        setGuesses((prevGuesses) => {
            let newGuesses = [...prevGuesses]
            newGuesses[turn] = formattedGuess
            return newGuesses
        })
        setHistory((prevHistory) => {
            return [...prevHistory, currentGuess]
        })
        setTurn((prevTurn) => {
            return prevTurn + 1
        })
        setCurrentGuess('')
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
            if (currentGuess.length !== 5) {
                console.log("word must be 5 chars long")
                return
            }
            addNewGuess(formatGuess())
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