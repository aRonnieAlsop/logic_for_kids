import React, { useState, useEffect } from 'react'

const Game = () => {
    const [targetNumber, setTargetNumber] = useState(Math.floor(Math.random() * 10) + 1)
    const [selectedNumber, setSelectedNumber] = useState('')
    const [message, setMessage] = useState('')
    const [isGameOver, setIsGameOver] = useState(false)

    function generateRandomNumber() {
        return Math.floor(Math.random() * 10) + 1
    }

    function resetGame() {
        setTargetNumber(generateRandomNumber()) 
        setSelectedNumber('')
        setMessage('')
        setIsGameOver(false)
    }
    const handleGuess = () => {
        const guessedNumber = parseInt(selectedNumber)

        if (guessedNumber === targetNumber) {
                setMessage('Congratulations! You guessed the correct number!')
                setIsGameOver(true)
            } else if (guessedNumber < targetNumber) {
                 setMessage('Try a higher number.')
                } else {
                    setMessage('Try a lower number.')
                }
            }
    useEffect(() => {
        resetGame()
    }, [])    

        return (
            <div>
                <h1>Guess the Number</h1>
                <p>{message}</p>
                <label htmFor="numberSelect">Select a number from 1 to 10:  </label>
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
                    <button onClick={handleGuess} disabled={isGameOver}>Guess</button><br />
                    <br />
                    <button onClick={resetGame}>Play Again</button>
            </div>
        )
        }

export default Game