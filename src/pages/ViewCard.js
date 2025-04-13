import Button from "../buttons/Button"
import ButtonShowAns from "../buttons/ButtonShowAns"
import useFetchQuestions from "../hooks/useFetchQuestions"
import PracticeCard from "../components/PracticeCard"
import DataContext from "../context/DataContext"

import { useParams } from "react-router-dom"
import { useContext } from "react"



const ViewCard = () => {
    const { id } = useParams()
    const cardDataURL = "http://localhost:3500/questions" 
    const { setCard, setCardQuestion, setCardAnswer, questionNumber }  = useContext(DataContext)
    const { cardData, isCardLoading, fetchCardError} = useFetchQuestions(cardDataURL)
    console.log(questionNumber)
    const question = cardData.find(question => question.id === id)
    let bundleId = "/"
    if(question) {
        bundleId = `/view/${question.bundleId}`
        setCard(question)
        setCardQuestion(question.question)
        setCardAnswer(question.answer)
    }
//Probably need some form of setting function - so to transfer data to edit? 
//Maybe keep in the same route?

    return (
       <main
       className="ViewCard">
        
        <section>
        {isCardLoading && <h2>Loading Card...</h2>}

        {!isCardLoading && fetchCardError && <h2
        className="Error"
        >{fetchCardError}</h2>}

        {!isCardLoading && !fetchCardError && question && <PracticeCard 
        key = {question.id}
        number = {questionNumber}
        question = {question.question}
        answer = {question.answer}
        />}
        </section>


        <div
        className="Vertical-Button-Holder">
        <ButtonShowAns title={'Answer'}/>
        
        <Button
        route={`edit`}
        title={"Edit"}
        />

        <Button
        route={bundleId}
        title={"return to bundle"}
        />
        </div>
            
       </main>
    )
}

export default ViewCard
