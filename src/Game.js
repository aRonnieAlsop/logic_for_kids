import React, { useState } from 'react'

const Game = () => {
    const [targetNumber, setTargetNumber] = useState(Math.floor(Math.random() * 10) + 1)
    const [selectedNumber, setSelectedNumber] = useState('')
    const [message, setMessage] = useState('')

    const handleGuess = () => {
        const guessedNumber = parseInt(selectedNumber)

        if (guessedNumber === targetNumber) {
                setMessage('Congratulations! You guessed the correct number!')
            } else if (guessedNumber < targetNumber) {
                 setMessage('Try a higher number.')
                } else {
                    setMessage('Try a lower number.')
                }
            }
        

        return (
            <div>
                <h1>Guess the Number Game</h1>
                <p>{message}</p>
                <label htmFor="numberSelect">Select a number from 1 to 10:</label>
                <select 
                    id="numberSelect"
                    value={selectedNumber}
                    onChange={(e) => setSelectedNumber(e.target.value)}
                    >
                    <option value="">Select a number</option>
                    {Array.from({ length: 10}, (_, i) => i + 1).map((number) => (
                        <option key={number} value={number}>
                            {number}
                        </option>
                    ))}
                    </select>
                    <button onClick={handleGuess}>Guess</button>
            </div>
        )
        }

export default Game