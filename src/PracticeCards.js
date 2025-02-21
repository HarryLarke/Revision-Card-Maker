import { useParams, useNavigate, Link} from "react-router-dom"
import { useContext, useState } from "react"

import DataContext from "./context/DataContext"
import PracticeCardFeed from "./PracticeCardFeed"
import ButtonPrev from "./buttons/ButtonPrev"
import ButtonNext from "./buttons/ButtonNext"
import ButtonShowAns from "./buttons/ButtonShowAns"

const PracticeCards = () => {
    const { id } = useParams()
    const { bundles } = useContext(DataContext)
    const { setShowAnswers } = useContext(DataContext)

    const bundle = bundles.find(bundle => (bundle.id).toString() === id)

    return (

       <main
       className="Home  Practice-Home">
        
            <PracticeCardFeed
            questions = {bundle.questions}
            />

            <section
            className="Button-Holder">
                <ButtonPrev/>
                <ButtonShowAns
                title={'Answers'}/>
                <ButtonNext/>
            </section>

       </main>
    )

}

export default PracticeCards