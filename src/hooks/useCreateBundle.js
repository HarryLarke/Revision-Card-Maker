import axios from "axios"

import { useContext } from "react"
import { useNavigate } from "react-router-dom"


import DataContext from "../context/DataContext"
import bundlesApi from "../api/bundles"

//Do we want to pass in dataURL?
const useCreateBundle = () => {
  
    const navigate = useNavigate()
    const { bundles, setBundles, setBundleTitle, bundleTitle, setBundleDescription, bundleDescription } =  useContext(DataContext)


    console.log(bundleTitle, bundleDescription)

        const saveBundle = async (e) => {
            e.preventDefault()
            

            const id = bundles.length + 1 
            
            const newBundle = {id:id, title:bundleTitle, description:bundleDescription}

            try {
                const response = await bundlesApi.post('/bundles', newBundle) 
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