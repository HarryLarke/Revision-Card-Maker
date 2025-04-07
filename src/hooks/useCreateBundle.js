import axios from "axios"
import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import DataContext from "../context/DataContext"

//This JS file will likely need re-structuring in the near future!

const useCreateBundle = () => {
    const { bundles, setBundles, setBundleTitle, bundleTitle, setBundleDescription, bundleDescription } = useContext(DataContext)
    const apiURL = 'http://localhost:3500/bundles'
    const navigate = useNavigate() 

        const saveBundle = async (e) => {
            e.preventDefault()
            const id = bundles.length + 1 
            console.log(id)
            const NewBundleData = {id: id, title: bundleTitle, description: bundleDescription}

            try {
                const response = await axios.post(apiURL, NewBundleData)

                setBundleTitle('')
                setBundleDescription('')
                setBundles([...bundles, response.data])
                

            } catch(err) {
                return console.log(`Error: ${err.message}`)
            } finally {
                navigate(`/view/${id}`)
            }
        } 
        return {saveBundle}
    }   

export default useCreateBundle