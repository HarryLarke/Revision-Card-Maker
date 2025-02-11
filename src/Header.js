import HomeButton from "./buttons/HomeButton"
import AddButton from "./buttons/AddButton"

const Header = ({title}) => {

    return (
        <header
        className="Header">
            <h1
            >{title}
            </h1>
            <HomeButton
            route='/'/>
            <AddButton
            route='/create'/>
        </header>
    )
}

export default Header