import axios from "axios"
import { useContext } from "react"
import { useNavigate } from "react-router-dom"

import DataContext from "../context/DataContext"

const useDeleteQuestion = () => {

    const apiURL = 'http://localhost:3500/questions'
    const navigate = useNavigate()
    const { card, bundleQuestions ,setBundleQuestions } = useContext(DataContext)
    //might have to set another bundleId here since the other wil be deleted??
    const { id } = card

    const deleteQuestion = async (e) => {
        e.preventDefault()
        try{ 
            const response = await axios.delete(`${apiURL}/${id}`)
            setBundleQuestions(bundleQuestions.filter(question => question.id !== id))
            navigate(`/view/${card.bundleId}`)
        } catch(err) {
            console.log(`Error: ${err.message}`)
        }
    }
    return{deleteQuestion}
}

export default useDeleteQuestion
