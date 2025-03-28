import { useParams } from "react-router-dom"
import { useContext, useEffect } from "react"
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


    const questions = cardData//Destructuing here or elsehere in usecontext??? 
    //Add an error boundry!
    return (
        <>

        <header
            className="View-Header"
            >
                <h2>Title Required!</h2>
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
                questions = {questions}
                />}
        </main>
        </>

    
    )

}

//Don't know if it's best to route to another page to the view the answers or use a function/id statement to reveal the answers

export default ViewCards