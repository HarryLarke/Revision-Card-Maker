import { useContext } from "react"
import DataContext from "../context/DataContext"
import PracticeCard from "../components/PracticeCard"
import FinishCard from "../components/FinishCard"




const PracticeCardFeed = ({questions}) => {

    let { count, questionLength } = useContext(DataContext)
    const question = questions?.find(question => question.qNum === count) 
    console.log(questionLength)
    console.log(count)

    return (
        <>
        {question && count <= questionLength && <PracticeCard
            key = {question.id}
            number = {question.qNum}
            question = {question.question}
            answer = {question.answer}
            /> }
        {!question && count > questionLength && <FinishCard/>}
        {!question && count === 1 && <p>No Cards to display...</p>}
        </>
    )
}

export default PracticeCardFeed