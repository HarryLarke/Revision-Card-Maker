import { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"

import DataContext from "../context/DataContext"


const Button = ({route, title}) => {
    
    const { setShowAnswers } = useContext(DataContext)

    return(
        <Link
        className="Button"
        onClick={() => setShowAnswers(false)}
        to={route}>{title}
        </Link>
    )
}

export default Button