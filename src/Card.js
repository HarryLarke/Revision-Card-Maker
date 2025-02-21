import { useContext } from "react"
import DataContext from "./context/DataContext"


const Card = ({number, question, answer}) => {

    const { showAnswers } = useContext(DataContext)

    return (
        <div
        className="Bundle Card">
            <h3 
            className="Card-Title">
                Question: {number}</h3>
            <p
            className="Question"
            >{question}</p>
            {showAnswers === true &&
                <p
                className="Answer"
                >{answer}</p>
            }
        </div>
    )
}

export default Card