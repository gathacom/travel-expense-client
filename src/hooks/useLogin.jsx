import { checkUser } from "@/services/authService"
import { useEffect, useState } from "react"

const useLogin = ()=> {
    const [user , setUser] = useState({})
    
    useEffect(() => {
        const handleCheckUser = () =>{
            checkUser((success, res) => {
                if(success) {
                    setUser(res.data)
                }
            })
        }
        handleCheckUser()
    }, [])
    // console.log(user)
    return user
} 

export default useLogin