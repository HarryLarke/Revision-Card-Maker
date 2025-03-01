import { Link, useParams } from "react-router-dom"

import AddIcon from "../icons/AddIcon"

const MakeCard = () => {
    const id = useParams() 

    return (
        <Link
        to={`/createCard/${id}`}
        className="Bundle Card-Make" 
        >
        <AddIcon
        style={'Icon Card-Icon'}
        />
        </Link>
    )
}

export default MakeCard