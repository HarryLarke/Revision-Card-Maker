import { useContext } from "react"
import DataContext from "./context/DataContext"

import PracticeCard from "./PracticeCard"

const PracticeCardFeed = ({questions}) => {

    let { count } = useContext(DataContext)

    const question = questions.find(question => question.id === count)

    return( 
    
            <PracticeCard
            key = {question.id}
            number = {question.id}
            question={question.question}
            answer={question.answer}
            ></PracticeCard>
    
    )
}

export default PracticeCardFeed