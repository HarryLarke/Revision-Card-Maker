import { useContext } from "react"

import DataContext from "../context/DataContext"

const useCreateCards = () => {

    const { cardQuestion ,setCardQuestion, cardAnswer, setCardAnswer } = useContext(DataContext)

    const saveCard = async (e) => {
        e.preventDefault() 
        setCardAnswer('')
        setCardQuestion('')

        console.log('Submitting it!')
    }
    return {saveCard}
}

export default useCreateCards