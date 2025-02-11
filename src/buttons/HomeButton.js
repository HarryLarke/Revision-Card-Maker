import { Link } from "react-router-dom"

import HomeIcon from "../icons/HomeIcon"

const HomeButton = ({route}) => {

    return(
        <Link
            to={route}>
            <HomeIcon/>
        </Link>
    )
}

export default HomeButton