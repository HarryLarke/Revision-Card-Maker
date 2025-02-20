import { Link } from "react-router-dom"

import AddIcon from "../icons/AddIcon"

const Button = ({route, title}) => {
    
    return(

        <Link
        className="Button"
        to={route}>{title}
        </Link>
    )
}

export default Button