import { useContext } from "react"
import DataContext from "./context/DataContext"

import PracticeCard from "./PracticeCard"

const PracticeCardFeed = ({questions}) => {

    let { count, setCount, questionLength, setQuestionLength } = useContext(DataContext)

    
    setQuestionLength(questions.length) //Maybe do this elsewhere??
    const question = questions.find(question => question.id === count)
  
/*     if (count === questionLength + 1) {console.log('Finished!')}  */

    return( 
        <>  {count <= questionLength && <PracticeCard
            key = {question.id}
            number = {question.id}
            question={question.question}
            answer={question.answer}
            ></PracticeCard>}

            {count > questionLength && <div><h2>Finished!</h2></div>}


        </>
    
    )
}

export default PracticeCardFeed