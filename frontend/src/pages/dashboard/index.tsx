import Head from "next/head"
import { canSSRauth } from "../../utils/canSSRauth"
import {Header} from '../../components/ui/Header/index'

export default function Dashboard(){
    return(
        <>
        <Head>
            <title>Painel do Usuário</title>
        </Head>
        <div>
        <Header/>

            <h1>Painel</h1>
        </div>
        </>
    )
}

export const getServerSideProps = canSSRauth(async (ctx) =>{
    return{
        props: {}
    }
})