import { useParams } from "react-router-dom"
import { useContext } from "react"
import DataContext from "../context/DataContext"

import Button from "../buttons/Button"
import ButtonShowAns from "../buttons/ButtonShowAns"
import CardFeed from "../feeders/CardFeed"
import MakeCard from "../buttons/MakeCard"
import useFetchQuestions from "../hooks/useFetchQuestions"

const cardDataURL = "http://localhost:3001/questions"

const ViewCards = () => {
    const { id } = useParams()
    const { cardData, isCardLoading, fetchCardError} = useFetchQuestions(cardDataURL)
    const { bundles } = useContext(DataContext)
    const questions = cardData



    let bundleTitle = 'Loading Title'
    if(bundles) {
    const selectedBundle = bundles.find(bundle => bundle.id === id)
    bundleTitle = selectedBundle.title }


    return (
        <>
            <header
            className="View-Header"
            >
                <h2>{bundleTitle}</h2>
                <Button
                title = {'Practice'}
                route = {`/practice/${id}`}
                />
                <ButtonShowAns
                title={'Answers'}/>
            </header>

        <main
            className="Home">
            {isCardLoading && <h2>Loading Cards...</h2>}

            {!isCardLoading && fetchCardError && <h2
            className="Error"
            >{fetchCardError}</h2>}

            {!isCardLoading && !fetchCardError && <CardFeed
                    bundleQuestions = {questions}
                    />}
        </main>
        </>
    )

}

//Don't know if it's best to route to another page to the view the answers or use a function/id statement to reveal the answers

export default ViewCards