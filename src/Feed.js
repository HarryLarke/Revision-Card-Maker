import Bundle from "./Bundle"


const Feed = ({bundles}) => {

    return (
        <>
            {bundles.map(bundle => (
                <Bundle
                key={bundle.id}
                bundle={bundle}
                />
            ))}
        </>
    )
}
//Could do an if statement here to check for the number of items?? 
export default Feed 