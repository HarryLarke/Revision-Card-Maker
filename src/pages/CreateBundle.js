import { useContext } from "react"


import DataContext from "../context/DataContext"
import useCreateBundle from "../hooks/useCreateBundle"

const CreateBundle = () => {

    const { saveBundle } = useCreateBundle()
    const { setBundleTitle, setBundleDescription } =  useContext(DataContext)
//Will need some if statements to make sure there is enough data here!
    return (
        <main
        className="Create">

            <h2>Firstly, let's create a bundle for your new revision cards:</h2>

            <form 
            className="Bundle-Create"
            action="submit"
            onSubmit={saveBundle}
            >   
                <h2
                className="Bundle-Title-Desciption"
                >Bundle Title:</h2>
                <label htmlFor="bundleTitle"/>
                <input
                id="bundleTitle"
                className="Input-Bundle"
                type="text" 
                placeholder="Title here:"
                onChange={(e) => setBundleTitle(e.target.value) }
                />
                

               <h2
               className="Bundle-Title-Desciption"
               >Bundle Description:</h2>
                <label htmlFor="bundleDes"/>
                <input
                    id="bundleDes"
                    className="Input-Bundle Input-BundleDescription"
                    type="text" 
                    placeholder="Desciption here:"
                    onChange={(e) => setBundleDescription(e.target.value)}/>
   

                <button 
                className="Button Button-Create"
                type="submit">Create Bundle</button>

            </form>
        </main>
    )

} 



export default CreateBundle