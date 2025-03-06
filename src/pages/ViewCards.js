import { useParams } from "react-router-dom"
import { useContext } from "react"
import DataContext from "../context/DataContext"

import Button from "../buttons/Button"
import ButtonShowAns from "../buttons/ButtonShowAns"
import CardFeed from "../feeders/CardFeed"
import MakeCard from "../buttons/MakeCard"


const ViewCards = () => {
    const {id} = useParams()
    const { bundles, setQuestionLength, setBundleQuestions } = useContext(DataContext)
    
    const bundle = bundles.find(bundle => (bundle.id).toString() === id)

    setQuestionLength(bundle.questions.length + 1)
    setBundleQuestions(bundle.questions) 

    return (
        <>
        <header
            className="View-Header"
            >
                <h2>{bundle.title}</h2>
                <Button
                title = {'Practice'}
                route = {`/practice/${id}`}
                />
                <ButtonShowAns
                title={'Answers'}/>
            </header>
        <main
        className="Home"
        >
   
                <CardFeed
                questions = {bundle.questions}
                />
                <MakeCard
                route={`/createCard/${id}`}/>

        </main>
        </>

    
    )

}

//Don't know if it's best to route to another page to the view the answers or use a function/id statement to reveal the answers

export default ViewCards