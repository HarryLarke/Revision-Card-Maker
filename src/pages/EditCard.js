import { useContext } from "react"
import { useParams } from "react-router-dom"

import Button from "../buttons/Button"
import DataContext from "../context/DataContext"

const cardDataURL = "http://localhost:3500/questions"


//Will need a question or card counter - might be able to re-use a previous hook??? 
const EditCard = () =>  {

    const { card, setCardQuestion, setCardAnswer } = useContext(DataContext)
    const { id } = useParams()
    console.log(card)


    return (
        <main
        className="Home">

        <form 
        action="submit"
        onSubmit={console.log("Savning Edit!!")}
        className="Card-Maker-Page-Holder"

        >
            
            <div
            className="Practice-Card Make-Card">
            <h3 
            className="Practice-Title">
                Question: {card.qNum}</h3> 
            <p
            className="Practice-Question"
            >Please add a qusestion.</p>
            <label htmlFor="CardQuest"/>
            <textarea
            className="Input-Card"
            id="CardQuest"
            value={card.question}
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
            value={card.answer}
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