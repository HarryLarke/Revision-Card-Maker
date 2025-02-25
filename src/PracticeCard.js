import { useContext } from "react"
import DataContext from "./context/DataContext"

const PracticeCard = ({number, question, answer}) => {

    let { count, setCount } = useContext(DataContext)
    const { showAnswers } = useContext(DataContext)

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