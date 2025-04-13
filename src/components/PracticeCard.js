import { useContext } from "react"
import DataContext from "../context/DataContext"
import useKeyPress from "../hooks/useKeyPress"

const PracticeCard = ({number, question, answer}) => {

    const { showAnswers, setShowAnswers} = useContext(DataContext)
    let { count, setCount, questionLength } = useContext(DataContext)

    useKeyPress("ArrowRight", () => {if(count <= questionLength) {setCount(count += 1)
        setShowAnswers(false)}})

    useKeyPress("ArrowLeft", () => { if(count > 1) {setCount(count -= 1)
        setShowAnswers(false)}})

    useKeyPress("Space", () => {setShowAnswers(!showAnswers)})

    console.log(number)
    
    return (
        <div
        className="Practice-Card">
            <h3 
            className="Practice-Title">
                Question: {number}</h3>
            <p
            className="Practice-Question"
            >{question}</p>

            {showAnswers === true && <p
            className="Practice-Answer"
            >{answer}</p>}
        </div>
        
    )
}

export default PracticeCard