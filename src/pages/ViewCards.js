import { useParams } from "react-router-dom"
import { useContext } from "react"
import DataContext from "../context/DataContext"

import Button from "../buttons/Button"
import ButtonShowAns from "../buttons/ButtonShowAns"
import CardFeed from "../feeders/CardFeed"
import MakeCard from "../buttons/MakeCard"


const ViewCards = () => {
    const { id } = useParams()
    const { setQuestionLength, bundleQuestions, selectedBundleTitle, isCardLoading, fetchCardError } = useContext(DataContext) //sort outt passing in bundle??
    

    setQuestionLength(bundleQuestions.length + 1) //Destructuing here or elsehere in usecontext??? 
    //Add an error boundry!
    return (
        <>


        <header
            className="View-Header"
            >
                <h2>{selectedBundleTitle}</h2>
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
                questions = {bundleQuestions}
                />}

        </main>
        </>

    
    )

}

//Don't know if it's best to route to another page to the view the answers or use a function/id statement to reveal the answers

export default ViewCards