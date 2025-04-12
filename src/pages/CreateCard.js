import { useContext } from "react"
import { useParams } from "react-router-dom"

import useCreateCards from "../hooks/useCreateQuestion" 

import Button from "../buttons/Button"
import DataContext from "../context/DataContext"
import useFetchQuestions from "../hooks/useFetchQuestions"

const cardDataURL = "http://localhost:3500/questions"


//Will need a question or card counter - might be able to re-use a previous hook??? 
const CreateCard = () =>  {
    const { saveCard } = useCreateCards()
    const { cardQuestion ,setCardQuestion, cardAnswer, setCardAnswer, questionLength, setQuestionLength } = useContext(DataContext)
    const { id } = useParams()

    const { cardData } = useFetchQuestions(cardDataURL) //Don't know if I can set state here?? It's abit weird -- Again redux!!!

    const questions = cardData.filter(question => question.bundleId === Number(id))
    if(questions) {setQuestionLength(questions.length)}
    
    return (
        <main
        className="Home">

        <form 
        action="submit"
        onSubmit={saveCard}
        className="Card-Maker-Page-Holder"

        >
            
            <div
            className="Practice-Card Make-Card">
            <h3 
            className="Practice-Title">
                Question: {questionLength + 1}</h3> 
            <p
            className="Practice-Question"
            >Please add a qusestion.</p>
            <label htmlFor="CardQuest"/>
            <textarea
            className="Input-Card"
            id="CardQuest"
            value={cardQuestion}
            placeholder="Question here:"
            onChange={(e) => setCardQuestion(e.target.value)}
            rows="4"
            cols="10"
            />

            <p
            className="Practice-Answer"
            >Please add an answer.</p>
            <label htmlFor="CardAns"/>
            <textarea
            className="Input-Card"
            id="CardAns"
            value={cardAnswer}
            placeholder="Answer here:"
            onChange={(e) => setCardAnswer(e.target.value)}
            rows="4"
            cols="10"
            />
        </div>

        <div
        className="Vertical-Button-Holder">
        <button 
            className="Button Button-Create"
            type="submit">Make Card
        </button>

        <Button
        route={`/view/${id}`}
        title={"return to bundle"}
        />
        </div>
    
        </form>

        </main>
    )
}

export default CreateCard