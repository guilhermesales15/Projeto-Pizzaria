import { GetServerSideProps, GetServerSidePropsContext, GetServerSidePropsResult, GetStaticPathsContext } from "next";
import { destroyCookie, parseCookies } from "nookies";
import { AuthTokenError } from "../services/error/AuthTokenError";

export function canSSRauth<P>( fn : GetServerSideProps<P>){
    return async(ctx: GetServerSidePropsContext): Promise<GetServerSidePropsResult<P>> =>{
        const cookies = parseCookies(ctx);

        const token = cookies['@nextauth.token'];

        if(!token){
            return{
                redirect:{
                    destination: '/',
                    permanent: false,
                }
            }
        }

        try{
            return await fn(ctx);

        }catch(err){
            if(err instanceof AuthTokenError){
                destroyCookie(ctx, '@nextauth.token');
                return{
                    redirect:{
                        destination: '/',
                        permanent: false
                    }
                }
            }
        }

    }

};