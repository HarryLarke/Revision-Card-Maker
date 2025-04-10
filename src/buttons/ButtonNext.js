import { useContext } from "react"
import DataContext from "../context/DataContext"

const ButtonNext = () => {
    let { count, setCount, questionLength } = useContext(DataContext)
    const { setShowAnswers } = useContext(DataContext)

    return (
        <div
        className="Button"
        onClick={() => {if(count <= questionLength) {setCount(count += 1)
            setShowAnswers(false)}} //Stop the question ccount going crazy high, whether I later chose to reset or remeber count outside the practice?
        }

        >Next</div>
    )
}

export default ButtonNext