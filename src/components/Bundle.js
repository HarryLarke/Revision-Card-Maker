import { Link } from "react-router-dom"
import { useContext } from "react"
import DataContext from "../context/DataContext"

const Bundle = ({bundle}) => {

    const { setShowAnswers } = useContext(DataContext)

    const QNum = bundle.questions.length

    return (

        <Link
        className="Bundle"
        to={`/view/${bundle.id}`}
        onClick={() => setShowAnswers(false)}
        >
        <h3
        className="Bundle-Title"
        >{bundle.title}</h3>
        <p
        className="Bundle-Desciption-Title">Description:</p>
        <p>{bundle.description}</p>
        <p>{`${QNum} Cards`}</p>
        </Link>
    )
}
//Will probably turn this bundle/item into a link? So I can navigate to practice or edit? 
//Probably worth re-organising a folder for pages and then one for components? - Assk Davy?
export default Bundle