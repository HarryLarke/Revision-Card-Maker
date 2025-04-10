import { useEffect } from "react"

const useKeyPress = (targetKey, callback) => {
    useEffect(() => {
        const keyHandler = (e) => {
            if (e.code === targetKey) {
                callback(e)
            }
        }
        window.addEventListener("keydown", keyHandler)
        return () => {
            window.removeEventListener("keydown", keyHandler)
        }
    }, [targetKey, callback])
}

export default useKeyPress
