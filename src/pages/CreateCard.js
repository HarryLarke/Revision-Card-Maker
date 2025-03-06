import { useContext } from "react"
import { useParams } from "react-router-dom"

import useCreateCards from "../hooks/useCreateQuestion" 

import Button from "../buttons/Button"
import DataContext from "../context/DataContext"

//Will need a question or card counter - might be able to re-use a previous hook??? 
const CreateCard = () => {

    const { saveCard } = useCreateCards()
    const { cardQuestion ,setCardQuestion, cardAnswer, setCardAnswer, questionLength } = useContext(DataContext)
    const { id } = useParams()


    
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
                Question: {questionLength}</h3> 
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