import { useMutation, useQueryClient } from "@tanstack/react-query"
import axios from "axios"
import { useRouter } from "next/navigation"
import toast from "react-hot-toast"
import { BackEnd_URL } from "../REST"
import { useUserInfoContext } from "@/context/users/userInfoContext"

const LogIn = async ({ email, password, userType }: { email: string; password: string; userType: 'student' | 'teacher' }) => {
    const res = await axios.post(`${BackEnd_URL}/auth/login`, {
        email,
        password,
        userType,
    }, { withCredentials: true })
    return res.data
}
export const useLogIn = () => {
        const router = useRouter()
        const { login } = useUserInfoContext()
        const cashQurey = useQueryClient()   
        return useMutation ({
        mutationFn: ({ email, password, userType }: { email: string; password: string; userType: 'student' | 'teacher' }) => LogIn({email, password, userType}),
        onSuccess: (data: { token: string; data: { user: { password: string; name: string; email: string; _id: string } } }) => {
            const { token , data : { user } } = data
            login({
                password: user.password,
                name: user.name,
                email: user.email,
                _id: user._id,
            }, token );
            cashQurey.invalidateQueries({queryKey : ['user']}) ;
            toast.success(` Welcom back ${user.name} . . Here is your portfolio `)
            router.push('/global/user/portfolio');
        },
        onError: () => {
            toast.success('sorry beasty . . But there is somthing wrong ')
        },
    })
}