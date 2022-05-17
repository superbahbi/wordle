import React, { useState } from 'react'
import data from "../data/db.json"
export default function Keypad({ usedKeys }) {
    const [letters, setLetters] = useState(data.letters)

    return (
        <div className="keypad">
            {letters && letters.map(l => {
                const color = usedKeys[l.key]
                return (
                    <div key={l.key} className={color}>{l.key}</div>
                )
            })}
        </div>
    )
}
