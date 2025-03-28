import { useContext } from "react"
import { useParams } from "react-router-dom"

import DataContext from "../context/DataContext"
import Card from "../components/Card"
import MakeCard from "../buttons/MakeCard"

const CardFeed = ({questions}) => {

const { id } = useParams()
const bundleId = Number(id)

const { setQuestionLength } = useContext(DataContext) //Is this the best location for setting question length

    const bundleQuestions = questions.filter(question => question.bundleId === bundleId)

    let content 
    content = bundleQuestions?.map(question => 
                <Card
                key = {question.id}
                number = {question.id}
                question={question.question}
                answer={question.answer}
                ></Card>)
        
    return( 
        <>
            {content}

            <MakeCard
            route={`/createCard/${id}`}/>
        </>
    )
}

export default CardFeed