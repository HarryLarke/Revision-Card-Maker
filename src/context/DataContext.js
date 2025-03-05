import useFetchBundles from "../hooks/useFetchBundles";

import { createContext, useEffect, useState } from "react";

const DataContext = createContext({})

export const DataProvider = ({children}) => {
    const dataURL = "http://localhost:3001/bundles"
    const [ bundles, setBundles ] = useState([]) //Might be an object??
    const [ bundleTitle, setBundleTitle ] = useState('')
    const [ bundleDescription, setBundleDescription ] = useState('')
    const [ cardQuestion, setCardQuestion ] = useState('')
    const [ cardAnswer, setCardAnswer ] = useState('')
    const { data, isLoading, fetchError } = useFetchBundles(dataURL)
    const [ showAnswers, setShowAnswers ] = useState(false) 
    let [ count, setCount ] = useState(1)
    let [ questionLength, setQuestionLength ] = useState(1) // Maybe employ a useEffect to reset back to 1? Instead of reseting it everywhere Or maybe have it remeber it?

    useEffect(() => {setBundles(data)}, [data])

    return  (
        <DataContext.Provider
        value={{
            bundles, setBundles, data, isLoading, fetchError, showAnswers, setShowAnswers, count, setCount,
            questionLength, setQuestionLength, bundleDescription, setBundleDescription, bundleTitle, setBundleTitle,
            cardQuestion, setCardQuestion, cardAnswer, setCardAnswer
        }}
        >{children}</DataContext.Provider>
    )
}

export default DataContext

