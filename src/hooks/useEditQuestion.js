import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"

import DataContext from "../context/DataContext"

const useEditQuestion = () => {

    const apiURL = 'http://localhost:3500/questions'
    const { bundleQuestions, setBundleQuestions, card ,cardQuestion ,setCardQuestion, cardAnswer, setCardAnswer } = useContext(DataContext)
    
    const navigate = useNavigate()

    const editCard = async (e) => {
        e.preventDefault()

        const editedQuestion = {
            bundleId: card.bundleId,
            id: card.id,
            qNum: card.qNum,
            question: cardQuestion,
            answer: cardAnswer
        } 
        //This will look drastically different when backend is setup! 
        try {
            const response = await axios.patch(`${apiURL}/${card.id}`, editedQuestion)
            setBundleQuestions(bundleQuestions.map(question => question.id === card.id ? {...response.data} : question))
            setCardAnswer('')
            setCardQuestion('')

        } catch (err) {
            console.log(`Error ${err.message}`)
        }  finally {
            console.log('Question posted!')
            navigate(`/view/${card.bundleId}`)
        }
    } 
    return {editCard}
}

export default useEditQuestion