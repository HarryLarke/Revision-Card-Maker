import { Link } from "react-router-dom"

import AddIcon from "../icons/AddIcon"

const AddButton = ({route}) => {
    
    return(

        <Link
        to={route}>
            <AddIcon/>
        </Link>
    )
}

export default AddButton