import { useParams } from "react-router-dom"
import Card from "../components/Card"
import MakeCard from "../buttons/MakeCard"

const CardFeed = ({bundleQuestions}) => {
const { id } = useParams()

const questions = bundleQuestions.filter(question => question.bundleId === Number(id))
    let count = 0 
    let content 


    content = questions?.map(question => 
                <Card
                key = {question.id}
                id = {question.id}
                number = {count += 1}
                question={question.question}
                answer={question.answer}

                ></Card>)
        
    return( 
        <>
            {content}

            <MakeCard
            route={`/createCard/${id}`}/>
        </>
    )//Will need to send data of question number here? maybe a setCount??? Or passing in data of card into this area - to access data such as id's ect? 
}

export default CardFeed