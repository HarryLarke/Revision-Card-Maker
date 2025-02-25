import { useContext } from "react"
import { Link } from "react-router-dom"

import DataContext from "../context/DataContext"


const Button = ({route, title, showAns}) => {
    
    const { setShowAnswers } = useContext(DataContext)
    let { setCount } = useContext(DataContext)

    return(
        <Link
        className="Button"
        onClick={() => {setShowAnswers(showAns)
            setCount(1)
        }}
        to={route}>{title}
        </Link>
    )
}
//Send in viewAns as param!
export default Button