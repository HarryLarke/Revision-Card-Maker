import { useContext } from "react"
import { sub } from 'date-fns'
import { useParams, useNavigate } from "react-router-dom"
import { nanoid } from 'nanoid'
import axios from "axios"

import DataContext from "../context/DataContext"
//Will need re-working!!!!!!!!! 
const useCreateCards = () => {

    const apiURL = 'http://localhost:3500/questions'
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
        let min = 1
        const newQuestion = {
            bundleId: bundleId, 
            id: nanoid(), 
            createdAt: sub(new Date(), { minutes: min++ }).toISOString(),
            question: cardQuestion,
            answer: cardAnswer
        } 
        //This will look drastically different when backend is setup! 
        try {
            const response = await axios.post(apiURL, newQuestion)
            const allQuestions = [...bundleQuestions, response.data]
            setBundleQuestions(allQuestions)
            setCardAnswer('')
            setCardQuestion('')

        } catch (err) {
            console.log(`Error ${err.message}`)
        }  finally {
            console.log('Question posted!')
            navigate(`/view/${id}`)
        }
    } 
    return {saveCard}
}

export default useCreateCards

//Still some issues witht rendering! - maybe put in a useEffect in DataContext?