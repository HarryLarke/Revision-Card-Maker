import { useContext } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { nanoid } from 'nanoid'

import DataContext from "../context/DataContext"
import cardsApi from '../api/cards'
//Will need re-working!!!!!!!!! 
const useCreateCards = () => {

    const { bundleQuestions, setBundleQuestions, cardQuestion ,setCardQuestion, cardAnswer, setCardAnswer, questionLength } = useContext(DataContext)
    const { id } = useParams()
    const bundleId = parseInt(id) 
    const navigate = useNavigate()
    console.log(questionLength)
    let qNum 
    if(questionLength === 0) { qNum = 1}
    else qNum = questionLength + 1 

    const saveCard = async (e) => {
        e.preventDefault()
        console.log(bundleId)
        console.log(questionLength)

        const newQuestion = {
            bundleId: bundleId, 
            id: nanoid(), 
            qNum, 
            question: cardQuestion,
            answer: cardAnswer
        } 
        //This will look drastically different when backend is setup! 
        try {
            const response = await cardsApi.post('/questions', newQuestion)
            const allQuestions = [...bundleQuestions, response.data]
            setBundleQuestions(allQuestions)
            setCardAnswer('')
            setCardQuestion('')

        } catch (err) {
            console.log(`Error ${err.message}`)
        }  finally {
            console.log('Question posted!')
            navigate(`/`)
        }
    } 
    return {saveCard}
}

export default useCreateCards

//Still some issues witht rendering! - maybe put in a useEffect in DataContext?