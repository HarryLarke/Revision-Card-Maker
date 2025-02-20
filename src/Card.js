
const Card = ({number, question, answer}) => {

    return (
        <div
        className="Bundle Card">
            <h3>Question: {number}</h3>
            <p>{question}</p>
        </div>
    )
}

export default Card