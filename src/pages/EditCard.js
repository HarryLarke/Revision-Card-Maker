import { useContext } from "react"
import useEditQuestion from "../hooks/useEditQuestion"
import useDeleteQuestion from "../hooks/useDeleteQuestion"
import Button from "../buttons/Button"
import DataContext from "../context/DataContext"

const EditCard = () =>  {

    const { editCard } = useEditQuestion()
    const { deleteQuestion } = useDeleteQuestion()
    const { card, cardQuestion, setCardQuestion, cardAnswer, setCardAnswer, questionNumber } = useContext(DataContext)

    return (
        <main
        className="Home">

        <form 
        action="submit"
        onSubmit={editCard}
        className="Card-Maker-Page-Holder"

        >
            
            <div
            className="Practice-Card Make-Card">
            <h3 
            className="Practice-Title">
                Question: {questionNumber}</h3> 
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
            type="submit">Edit
        </button>

        <button
        className="Button Delete"
        onClick={deleteQuestion}
        >
            Delete 
        </button>

        <Button
        route={`/view/${card.bundleId}`}
        title={"return to bundle"}
        />
        </div>
    
        </form>

        </main>
    )
}

export default EditCard