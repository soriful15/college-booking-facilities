import { useEffect } from "react"

const useTitle=title=>{
    useEffect(()=>{
        document.title=`${title} - Collage Book Facilities`
    },[title])
}
export default useTitle