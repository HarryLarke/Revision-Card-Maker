import { useContext } from "react"
import { useParams, useNavigate } from "react-router-dom"

import DataContext from "../context/DataContext"
import api from '../api/cards'

const useCreateCards = () => {

    const { cardQuestion ,setCardQuestion, cardAnswer, setCardAnswer, questionLength, bundleQuestions, setBundleQuestions } = useContext(DataContext)
    const { id } = useParams()
    const bundleId = parseInt(id)
    const navigate = useNavigate()

    const saveCard = async (e) => {
        e.preventDefault()
        console.log(bundleId)
        console.log(questionLength)

        const newQuestion = {
            id: questionLength,
            question: cardQuestion,
            answer: cardAnswer
        } 
        //This will look drastically different when backend is setup! 
        try {
            const bundleResponse = await api.get(`/bundles/${bundleId}`)
            const bundle = bundleResponse.data

            const updatedQuestions = [...bundle.questions, newQuestion] 

            const response = await api.patch(`/bundles/${bundleId}`, {questions: updatedQuestions})

            const allQuestions = [response.data.questions]
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