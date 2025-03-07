import axios from "axios"

import { useState, useEffect } from "react"

const useFetchBundles = (dataUrl) => {
    const [ cardData, setCardData ] = useState([])
    const [ fetchCardError, setFetchCardError ] = useState(null) 
    const [ isCardLoading, setIsCardLoading ] = useState(false)

    useEffect(() => {
        console.log(`Fetching from ${dataUrl}`)
        let isMounted = true 
        const source = axios.CancelToken.source() 

        const fetchData = async (url) => {
            setIsCardLoading(true)
            try {
                const response = await axios.get(url, {
                    cancelToken: source.token})
                
                if (isMounted) {
                    setCardData(response.data)
                    setFetchCardError(null)
                }} 
                catch(err) {
                    if(isMounted) {
                        setFetchCardError(err.message)
                        setData([])
                    }
                } finally { isMounted && setIsCardLoading(false)}
                
            }

        fetchData(dataUrl)

        const cleanUp = () => {
            isMounted = false
            source.cancel()
        }

        return cleanUp

    }, [dataUrl])

    return { cardData, fetchCardError, isCardLoading }
}

export default useFetchBundles