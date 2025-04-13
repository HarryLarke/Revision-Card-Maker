import { useContext } from "react"
import DataContext from "../context/DataContext"
import { Link } from "react-router-dom"


const Card = ({id, number, question, answer}) => {
    const { showAnswers, setQuestionNumber } = useContext(DataContext)
    
    return (
        <Link
        className="Bundle Card"
        to={`/viewCard/${id}`}
        onClick={() => {setQuestionNumber(number)
        }}
        >
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
        </Link>
    )
}

export default Card