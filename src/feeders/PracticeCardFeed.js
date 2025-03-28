import { useContext } from "react"
import DataContext from "../context/DataContext"

import PracticeCard from "../components/PracticeCard"
import FinishCard from "../components/FinishCard"

const PracticeCardFeed = ({questions}) => {

    let { count, questionLength, setQuestionLength } = useContext(DataContext)

    
    setQuestionLength(questions) //Maybe do this elsewhere??
    //Counter and count assignment need - probably id's reordered within the array then matched with count?? 
    const question = questions.filter(question => question.id === count)
  
/*     if (count === questionLength + 1) {console.log('Finished!')}  */

    return( 
        <>  
            {count <= questionLength && <PracticeCard
            key = {question.id}
            number = {question.id}
            question={question.question}
            answer={question.answer}
            ></PracticeCard>}

            {count > questionLength && <FinishCard/>}
        </>
    
    )
}

export default PracticeCardFeed