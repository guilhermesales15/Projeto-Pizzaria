import { type } from "os";
import { createContext, ReactNode,useState } from "react";
import {destroyCookie} from 'nookies';
import Router from 'next/router'

type AuthContextData = {
    user: UserProps;
    isAuthenticated: boolean;
    signIn (credentials: SignInProps) : Promise<void>;
    signOut () : void;
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

export const AuthContext = createContext({} as AuthContextData)

export function AuthProvider ({children}:AuthProviderProops){

    const [user, setUser] = useState<UserProps>()
    const isAuthenticated = !!user;


    async function signIn({email, password} : SignInProps){
        console.log("Email", email);
        console.log("Senha: ", password)
    }
    return(
        <AuthContext.Provider value={{user,isAuthenticated,signIn,signOut}}>
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

