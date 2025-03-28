import { useParams} from "react-router-dom"
import { useContext} from "react"

import DataContext from "../context/DataContext"
import PracticeCardFeed from "../feeders/PracticeCardFeed"
import ButtonPrev from "../buttons/ButtonPrev"
import ButtonNext from "../buttons/ButtonNext"
import ButtonShowAns from "../buttons/ButtonShowAns"

const PracticeCards = () => {

    let { count, questionLength } = useContext(DataContext)

    const bundle = [
        {
           "id": 11,
           "bundleId": 1,
           "question": "What is the capital of the UK?",
           "answer": "London"
         },
         {
           "id": 12,
           "bundleId": 1,
           "question": "Why is Minecraft so great?",
           "answer": "Combination of freedom, simplicity and creativity in the game."
         }]

    return (

       <main
       className="Practice">
        
            <PracticeCardFeed
            questions = {bundle.questions}
            />

            {count <= questionLength &&
            <section
            className="Button-Holder">
                <ButtonPrev/>
                <ButtonShowAns
                title={'Answer'}/>
                <ButtonNext/>
    
            </section>}

       </main>
    )

}

export default PracticeCards