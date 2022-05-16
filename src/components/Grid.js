import React from 'react'
import Row from './Row'

export default function Grid({ currentGuess, guesses, turn }) {
    return (
        <div>
            {guesses.map((g, i) => {
                return <Row key={i} />
            })}
        </div>
    )
}
