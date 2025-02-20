import Feed from "./Feed"

import { useContext } from "react"
import DataContext from "./context/DataContext"

const Home = () => {

    const { bundles, fetchError, isLoading} = useContext(DataContext)

    return (
        <main
        className="Home">
        {isLoading && <h2>Loading Card Bundles...</h2>}

        {!isLoading && fetchError && <h2
        className="Error"
        >{fetchError}</h2>}

        {!isLoading && !fetchError && <Feed
        bundles={bundles}
        />}

        </main>
    )
}

export default Home