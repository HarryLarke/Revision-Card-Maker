import Button from "../buttons/Button"
import ButtonShowAns from "../buttons/ButtonShowAns"
import useFetchQuestions from "../hooks/useFetchQuestions"
import PracticeCard from "../components/PracticeCard"

import { useParams } from "react-router-dom"


const ViewCard = () => {
    const { id } = useParams()
    const cardDataURL = "http://localhost:3500/questions" 
    const { cardData, isCardLoading, fetchCardError} = useFetchQuestions(cardDataURL)

    const question = cardData.find(question => question.id === id)
    console.log(question)
    let bundleId = "/"
    if(question) {
        bundleId = `/view/${question.bundleId}`
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
        number = {question.qNum}
        question = {question.question}
        answer = {question.answer}
        />}
        </section>


        <div
        className="Vertical-Button-Holder">
        <ButtonShowAns title={'Answer'}/>
        
        <Button
        route={`viewCards/:id/edit`}
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
