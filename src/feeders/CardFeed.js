import { useContext } from "react"

import DataContext from "../context/DataContext"
import Card from "../components/Card"
import MakeCard from "../buttons/MakeCard"

const CardFeed = ({questions, bundleId}) => {

    const { setQuestionLength } = useContext(DataContext) //Is this the best location for setting question length?
    setQuestionLength(questions)
    const bundleQuestions = questions.find((card) => card.bundleId === bundleId )
   
    return( 
        <>
        {bundleQuestions.map(question => (
            <Card
            key = {question.id}
            number = {question.id}
            question={question.question}
            answer={question.answer}
            ></Card>
        ))}

            <MakeCard
            route={`/createCard/${id}`}/>
        </>
    )
}

export default CardFeed