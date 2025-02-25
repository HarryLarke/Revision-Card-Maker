import { useParams } from "react-router-dom"

import ButtonPrev from "./buttons/ButtonPrev"
import Button from "./buttons/Button"

const FinishCard = () => {
    const {id} = useParams()

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