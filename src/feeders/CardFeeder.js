import { useContext } from 'react'

import Card from '../components/Card'
import DataContext from '../context/DataContext'

const CardFeeder = () => {

const bundleQuestions = [
    {
       "id": 1,
       "question": "What is the capital of the UK?",
       "answer": "London"
     },
     {
       "id": 2,
       "question": "Why is Minecraft so great?",
       "answer": "Combination of freedom, simplicity and creativity in the game."
     },
     {
       "id": 3,
       "question": "If you could be any animal, what animal would you be?",
       "answer": "Eagle"
     },
     {
       "id": 4,
       "question": "What is my favourite genre of music?",
       "answer": "Jazz"
     },
     {
       "id": 5,
       "question": "What's the real reason why people don't like Jazz?",
       "answer": "They fear it's lack of boundaries and structure."
     },
     {
       "id": 6,
       "question": "What is the top Brexit Gezza?",
       "answer": "Dave"
     } ]
 
    let content 

    if(!bundleQuestions) {
        content = <p>Loading...</p>
    } else if (bundleQuestions)
        content = <p>Why is this not working!</p>

    return(
        <>
            {content}
        </>
    )
}
export default CardFeeder