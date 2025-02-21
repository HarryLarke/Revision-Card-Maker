import { useContext } from "react"
import DataContext from "../context/DataContext"

const ButtonPrev = () => {
    let { count, setCount } = useContext(DataContext)
    const { setShowAnswers } = useContext(DataContext)

    return (
        <div
        className="Button"
        onClick={() => {setCount(count += 1)
            setShowAnswers(false)}}
        >Prev</div>
    )
}

export default ButtonPrev