import Card from "./Card"

const CardFeed = ({questions}) => {

    return( 
        <>
        {questions.map(question => (
            <Card
            key = {question.id}
            number = {question.id}
            question={question.question}
            answer={question.answer}
            ></Card>
        ))}
        </>
    )
}

export default CardFeed