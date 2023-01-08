import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} -Kaiser Tanveer`
    }, [title])
}

export default useTitle;