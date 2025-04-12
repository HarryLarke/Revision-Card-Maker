import { useContext } from "react"
import DataContext from "../context/DataContext"
import PracticeCard from "../components/PracticeCard"
import FinishCard from "../components/FinishCard"


const PracticeCardFeed = ({questions}) => {

    let { count} = useContext(DataContext)
    const sortedQuestions = [...questions].sort((a, b) => a.createdAt - b.createdAt)
    const questionLength = sortedQuestions.length
    const question = sortedQuestions[count - 1]
    console.log(questionLength)
    console.log(count)

    return (
        <>
        {question && count <= questionLength && <PracticeCard
            key = {question.id}
            number = {count}
            question = {question.question}
            answer = {question.answer}
            /> }
        {!question && count > questionLength && <FinishCard/>}
        {!question && count === 0 && <p>No Cards to display...</p>}
        </>
    )
}

export default PracticeCardFeed