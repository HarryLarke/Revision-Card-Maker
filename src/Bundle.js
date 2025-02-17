import { Link } from "react-router-dom"

const Bundle = ({bundle}) => {
    
    return (

        <Link
        className="Bundle"
        to={`/view/:${bundle.id}`}>
        <h3
        className="Bundle-Title"
        >{bundle.title}</h3>
        <p
        className="Bundle-Desciption-Title">Description:</p>
        <p>{bundle.description}</p>
        <p>12 Cards</p>
        </Link>
    )
}
//Will probably turn this bundle/item into a link? So I can navigate to practice or edit? 
//Probably worth re-organising a folder for pages and then one for components? - Assk Davy?
export default Bundle