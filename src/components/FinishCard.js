import { useParams } from "react-router-dom"
import { useContext } from "react"

import ButtonPrev from "../buttons/ButtonPrev"
import Button from "../buttons/Button"
import useKeyPress from "../hooks/useKeyPress"
import DataContext from "../context/DataContext"

const FinishCard = () => {
    const {id} = useParams()

    const { setShowAnswers } = useContext(DataContext) 
    let { count, setCount } = useContext(DataContext)

    useKeyPress("ArrowLeft", () => { if(count > 1) {setCount(count -= 1)
        setShowAnswers(false)}})

    return (
        <div
        className="Practice-Card"
        >
            <h2
            className="Title"
            >Bundle Completed!</h2>
            <p>Well done, you've completed or gone through all your revision cards!</p>
            <p>Please select what you want to do next:</p>

            <section
            className="Button-Holder-Finished"
            >
                <Button
                title={'View Answers'}
                route={`/view/${id}`}
                showAns={true}/>
                <ButtonPrev/>
                <Button
                title={'Practice Again'}
                route={`/practice/${id}`}
                showAns={false}
                />
            </section>
        </div>
    )
}

export default FinishCard