import { Link, useParams } from "react-router-dom"

import AddIcon from "../icons/AddIcon"

const MakeCard = ({route}) => {
    const id = useParams() 
    //hmmmm ID is not working here?
    return (
        <Link
        to={route}
        className="Bundle Card-Make" 
        >
        <AddIcon
        style={'Icon Card-Icon'}
        />
        </Link>
    )
}

export default MakeCard