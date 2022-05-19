import React, { useState } from 'react'
import data from "../data/db.json"
export default function Keypad({ usedKeys, onClick }) {
    const letters = [
        [{ "key": "q" },
        { "key": "w" },
        { "key": "e" },
        { "key": "r" },
        { "key": "t" },
        { "key": "y" },
        { "key": "u" },
        { "key": "i" },
        { "key": "o" },
        { "key": "p" }],
        [{ "key": "a" },
        { "key": "s" },
        { "key": "d" },
        { "key": "f" },
        { "key": "g" },
        { "key": "h" },
        { "key": "j" },
        { "key": "k" },
        { "key": "l" }],
        [{ "key": "Enter", "icon": "⏎" },
        { "key": "z" },
        { "key": "x" },
        { "key": "c" },
        { "key": "v" },
        { "key": "b" },
        { "key": "n" },
        { "key": "m" },
        { "key": "Backspace", "icon": "←" }]
    ]

    return (
        <>
            <div className="keyboard">
                <div className="keyboard__row">
                    {
                        letters && letters[0].map(l => {
                            const color = usedKeys[l.key]
                            return (
                                <button onClick={() => onClick(l.key)} key={l.key} className={color}>{l.icon ? l.icon : l.key}</button>
                            )
                        })
                    }
                </div>
                <div className="keyboard__row">
                    {
                        letters && letters[1].map(l => {
                            const color = usedKeys[l.key]
                            return (
                                <button onClick={() => onClick(l.key)} key={l.key} className={color}>{l.icon ? l.icon : l.key}</button>
                            )
                        })
                    }
                </div>
                <div className="keyboard__row">
                    {
                        letters && letters[2].map(l => {
                            const color = usedKeys[l.key]
                            return (
                                <button onClick={() => onClick(l.key)} key={l.key} className={l.icon ? `key--w3 ${color}` : `key--letter ${color}`}>{l.icon ? l.icon : l.key}</button>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}
