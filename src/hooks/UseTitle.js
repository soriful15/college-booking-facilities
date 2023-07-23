import { useEffect } from "react"

const useTitle=title=>{
    useEffect(()=>{
        document.title=`${title} - Animal Toys KingDom`
    },[title])
}
export default useTitle