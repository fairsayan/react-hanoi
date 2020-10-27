import { useState, useEffect } from 'react'
import Playground from './Playground'
import getStates from './Logic'
import './App.css'

const states = getStates(6)

function App() {
    const [step, setStep] = useState(0)
    const data = states[step]

    useEffect(() => {
        if (step < states.length - 1)
            setTimeout( () => setStep( step + 1 ), 500)
    })

    return (
        <div className="App">
            <Playground data={ data } />
        </div>
    )
}

export default App
