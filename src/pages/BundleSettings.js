import { useContext } from "react"
import { useParams } from "react-router-dom"
import DataContext from "../context/DataContext"
import Button from "../buttons/Button"


const BundleSettings = () => {
    const { id } = useParams()
    const { bundles } = useContext(DataContext)

    const selectedBundle = bundles[Number(id) - 1]
    let title  
   if(selectedBundle) { title = selectedBundle.title}
   if(!selectedBundle) { title = 'Loading title...'} 

   let alert = <></>

   const activeAlert = <div>
        <p>Are you sure you want to Delete: {title}?</p>
        <button
        onClick={alert = <></>}
        >No</button>
        <button
        onClick={console.log("Deleting Bundle!")}
        >Yes</button>
    </div> 

  return (
    <main 
    className="Practice">
        <h2
        className="Header"
        >Bundle Settings: {title}</h2>
        {alert}
        <section
        className="Practice-Card"
        >   
              <Button
                    route={`/view/${id}`}
                    title={"Return"}
                    />
            <button
            className="Button Delete"
            onClick={alert = activeAlert}
            >
                Delete Bundle</button>
            <p>More features to be added!</p>
        </section>

    </main>
      
    
  )
}

export default BundleSettings
