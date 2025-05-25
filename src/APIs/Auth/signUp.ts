import { useMutation, useQueryClient } from "@tanstack/react-query"
import axios from "axios"
import {  useRouter } from "next/navigation"
import toast from "react-hot-toast"
import { BackEnd_URL } from "../REST"
import { useUserInfoContext } from "@/context/users/userInfoContext"

export interface user {
        password: string;
        name: string;
        email: string;
    }

const SignUp = async (payload : user ) => {
    const res = await axios.post( `${BackEnd_URL}/auth/signup`, payload ,  { withCredentials: true } )
    return res.data
}
export const useSignUp = () => {
    const router = useRouter()
    const { login } = useUserInfoContext()
    const cashQurey = useQueryClient()
    return useMutation ({
        mutationFn : (payload : user ) => SignUp(payload),
        onSuccess : (data) => { 
            const { token , data : { user } } = data
            login({
                password: user.password,
                name: user.name,
                email: user.email,
                _id: user._id,
            }, token );
            cashQurey.invalidateQueries({queryKey : ['user']}) ;
            toast.success(` Ok ${user.name} , we created your account Now `)
            router.push('/global/user/portfolio');
        },
        onError : () => toast.error('Sorry but we could not create your account ')
    })
}