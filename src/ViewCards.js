import { useParams, useNavigate, Link} from "react-router-dom"
import { useContext } from "react"
import DataContext from "./context/DataContext"

import Button from "./buttons/Button"
import CardFeed from "./CardFeed"


const ViewCards = () => {
    const {id} = useParams()
    const { bundles } = useContext(DataContext)

    const bundle = bundles.find(bundle => (bundle.id).toString() === id)

    
    return (
        <main
        className="Home View"
        >
            <header
            className="View-Header"
            >
                <h2>{bundle.title}</h2>
                <Button
                title = {'Pratice'}
                route = {`/practice/:${id}`}
                />
                <Button
                title = {'View Answers'}
                route = {'/'}/>
            </header>


            <section
            className="Home Holder">
                <CardFeed
                questions = {bundle.questions}
                />
                <div
                className="Bundle"
                >Add Card</div>
            </section>

        </main>

    
    )

}

//Don't know if it's best to route to another page to the view the answers or use a function/id statement to reveal the answers

export default ViewCards