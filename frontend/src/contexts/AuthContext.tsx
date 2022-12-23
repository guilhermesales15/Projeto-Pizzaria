import {api} from '../services/apiClient'
import { createContext, ReactNode,useState, useEffect } from "react";
import {destroyCookie, setCookie, parseCookies} from 'nookies';
import Router from 'next/router'
import {toast} from 'react-toastify'

type AuthContextData = {
    user: UserProps;
    isAuthenticated: boolean;
    signIn (credentials: SignInProps) : Promise<void>;
    signOut () : void;
    signUp (credentials: SignUpProps) : Promise<void>;
}

type UserProps = {
    id: string,
    name: string,
    email: string
}

type SignInProps = {
    email: string,
    password: string
}

type AuthProviderProops = {
    children : ReactNode;
}
type SignUpProps = {
    email:string,
    name: string,
    password: string
}

export const AuthContext = createContext({} as AuthContextData)

export function AuthProvider ({children}:AuthProviderProops){

    const [user, setUser] = useState<UserProps>()
    const isAuthenticated = !!user;

    useEffect(()=>{
        const {'@nextauth.token' : token} = parseCookies();
    
        if(token){
            api.get('/me').then(response =>{
                const {id, name, email} = response.data;

                setUser({
                    id,
                    name,
                    email
                })
            })
            .catch(()=>{
                signOut();
            })
            }

        
    }, [])


    async function signIn({email, password} : SignInProps){
        try{
            const response = await api.post('/session',{
                email,
                password
            })
            // console.log(response.data)

            const{id, name, token } = response.data;

            setCookie(undefined, '@nextauth.token', token, {
                maxAge: 60*60*24*30, // expirar em 1 mes
                path: "/"
            })

            setUser({
                id,
                name,
                email
            })

            api.defaults.headers['Authorization'] = `Bearer ${token}`

            toast.success("Login realizado com sucesso")

            Router.push('/dashboard')

            

        }catch(err){
            toast.error("Erro ao acessar")
        }
    }

    async function signUp({email,password,name}: SignUpProps) {
        try{
            const response = await api.post('/users', {
                name,email,password
            })

            toast.success('Conta cadastrada!!!')
            Router.push('/');

        }catch(err){
            toast.error('Erro no cadastro')
        }
        
    }
    return(
        <AuthContext.Provider value={{user,isAuthenticated,signIn,signOut,signUp}}>
            {children}
        </AuthContext.Provider>
    )
}

export function signOut(){
    try{
        destroyCookie(undefined, '@nextauth.token')
        Router.push('/')

    }catch{
        console.log('error ao deslogar')
    }
}

