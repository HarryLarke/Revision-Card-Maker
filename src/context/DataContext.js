import useFetchBundles from "../hooks/useFetchBundles";

import { createContext, useEffect, useState } from "react";

const DataContext = createContext({})

export const DataProvider = ({children}) => {
    const dataURL = "http://localhost:3001/bundles"
    const [ bundles, setBundles ] = useState([]) //Might be an object??
    const { data, isLoading, fetchError } = useFetchBundles(dataURL)

    useEffect(() => {setBundles(data)}, [data])

    return  (
        <DataContext.Provider
        value={{
            bundles, setBundles, data, isLoading, fetchError
        }}
        >{children}</DataContext.Provider>
    )
}

export default DataContext

