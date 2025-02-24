import { useContext } from "react"
import DataContext from "../context/DataContext"

const ButtonShowAns = ({title}) => {

const { setShowAnswers, showAnswers }  = useContext(DataContext)
let { count, questionNumber } = useContext(DataContext)

const handleTitle = (showAnswers) => {
    if(showAnswers === true) { 
    return 'Hide'}
    return 'Show'   
}

    return (
        <div
        className="Button"
        onClick={() => setShowAnswers(prev => !prev)}>
            {handleTitle(showAnswers)} {title}
        </div>
    )
}
//Don't know if this is the best way to swapped out the title of button?
export default ButtonShowAns