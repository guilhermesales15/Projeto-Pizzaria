import { type } from "os";
import { createContext, ReactNode,useState } from "react";

type AuthContextData = {
    user: UserProps;
    isAuthenticated: boolean;
    signIn (credentials: SignInProps) : Promise<void>;
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


    async function signIn(){
        alert("Login")
    }
    return(
        <AuthContext.Provider value={{user,isAuthenticated,signIn}}>
            {children}
        </AuthContext.Provider>
    )
}

