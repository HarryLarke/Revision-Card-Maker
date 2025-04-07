import { useContext } from "react"
import { useParams } from "react-router-dom"

import PracticeCardFeed from "../feeders/PracticeCardFeed"
import ButtonPrev from "../buttons/ButtonPrev"
import ButtonNext from "../buttons/ButtonNext"
import ButtonShowAns from "../buttons/ButtonShowAns"
import DataContext from "../context/DataContext"
import useFetchQuestions from "../hooks/useFetchQuestions"

const PracticeCards = () => {
    const { id } = useParams()
    const cardDataURL = "http://localhost:3500/questions" 
    const { cardData, isCardLoading, fetchCardError} = useFetchQuestions(cardDataURL)
    let { count, questionLength, setQuestionLength } = useContext(DataContext)

    const questions = cardData.filter(question => question.bundleId === Number(id))
    if(questions) {setQuestionLength(questions.length)}

    return (
       <main
       className="Practice">
        
        <section
        className="Home">
        {isCardLoading && <h2>Loading Cards...</h2>}

        {!isCardLoading && fetchCardError && <h2
        className="Error"
        >{fetchCardError}</h2>}

        {!isCardLoading && !fetchCardError && <PracticeCardFeed questions={questions}/>
                }
        </section>
            

            {count <= questionLength &&
            <section
            className="Button-Holder">
                <ButtonPrev/>
                <ButtonShowAns
                title={'Answer'}/>
                <ButtonNext/>
    
            </section>}

       </main>
    )

}

export default PracticeCards