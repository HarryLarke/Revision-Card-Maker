import useFetchQuestions from '../hooks/useFetchQuestions'
import useFetchBundles from '../hooks/useFetchBundles'
import { createContext, useEffect, useState } from "react";
const DataContext = createContext({})

export const DataProvider = ({children}) => {
    const bundleDataURL = "http://localhost:3500/bundles"
    const cardDataURL = "http://localhost:3500/questions"
    const { data, isLoading, fetchError } = useFetchBundles(bundleDataURL)
    const { cardData, isCardLoading, fetchCardError} = useFetchQuestions(cardDataURL)

    //For Fetching Data! 
    const [ bundles, setBundles ] = useState([]) //Might be an object??
    const [ bundleQuestions, setBundleQuestions ] = useState([])
    const [ renderCards, setRenderCards ] = useState(null)
  
    //For Making Bundles
    const [ bundleTitle, setBundleTitle ] = useState('')
    const [ selectedBundleTitle, setSelectedBundleTitle ] = useState('') //will rid of this to make dryer!
    const [ bundleDescription, setBundleDescription ] = useState('')

    //For Making Cards
    const [ cardQuestion, setCardQuestion ] = useState('') //maybe use this in component???
    const [ cardAnswer, setCardAnswer ] = useState('')
    const [ card, setCard ] = useState([]) //Only for editing the card - same below
    const [ questionNumber, setQuestionNumber ] = useState(0)
    
    //For Practice Mode, ETC
    const [ showAnswers, setShowAnswers ] = useState(false) 
    let [ count, setCount ] = useState(1)
    let [ questionLength, setQuestionLength ] = useState(0) // Maybe employ a useEffect to reset back to 1? Instead of reseting it everywhere Or maybe have it remeber it?

    //Varying UseEffects for Fetching and loading data
    useEffect(() => {setBundles(data)}, [data])
    useEffect(() => {setBundleQuestions(cardData)}, [cardData])
        




    return  (
        <DataContext.Provider
        value={{
            bundles, setBundles, isCardLoading, fetchCardError, data, isLoading, fetchError, showAnswers, setShowAnswers, count, setCount,
            questionLength, setQuestionLength, bundleDescription, setBundleDescription, bundleTitle, setBundleTitle,
            cardQuestion, setCardQuestion, cardAnswer, setCardAnswer, bundleQuestions, setBundleQuestions, selectedBundleTitle, card, setCard,
            setSelectedBundleTitle, renderCards, setRenderCards, questionNumber, setQuestionNumber  
        }}
        >{children}</DataContext.Provider>
    )
}

export default DataContext

