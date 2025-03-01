import axios from "axios"

import { useContext } from "react"
import { useNavigate } from "react-router-dom"


import DataContext from "../context/DataContext"
import api from '../api/cards'

//Do we want to pass in dataURL?
const useCreateBundle = () => {
  
    const navigate = useNavigate()
    const { bundles, setBundles, setBundleTitle, bundleTitle, setBundleDescription, bundleDescription } =  useContext(DataContext)
    const questionsObj = {"questions": []}
  

    console.log(bundleTitle, bundleDescription)

        const saveBundle = async (e) => {
            e.preventDefault()
            
          // do I need this??? ...probably
            const id = bundles.length + 1 //Look into the logic of this one!
            //pass into questions now or later?? For now just see if you can get the bundles made! -- would be dryer!
            const newBundle = {id, title:bundleTitle, description:bundleDescription, questions: questionsObj.questions }

            try {
                const response = await api.post('/bundles', newBundle) 
                const allBundles = [...bundles, response.data]
                setBundles(allBundles)
                setBundleTitle('')
                setBundleDescription('')
                navigate(`/view/${id}`)
            
                } catch(err) {console.log(`Error: ${err.message}`)}
    
            }

        return { saveBundle }

}

export default useCreateBundle