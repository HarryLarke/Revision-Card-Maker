import { useParams} from "react-router-dom"
import { useContext} from "react"

import DataContext from "../context/DataContext"
import PracticeCardFeed from "../feeders/PracticeCardFeed"
import ButtonPrev from "../buttons/ButtonPrev"
import ButtonNext from "../buttons/ButtonNext"
import ButtonShowAns from "../buttons/ButtonShowAns"

const PracticeCards = () => {
    const { id } = useParams()
    const { bundles } = useContext(DataContext)
    let { count, questionLength } = useContext(DataContext)


    const bundle = bundles.find(bundle => (bundle.id).toString() === id)

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