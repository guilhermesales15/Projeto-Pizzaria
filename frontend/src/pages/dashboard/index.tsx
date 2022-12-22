import { canSSRauth } from "../../utils/canSSRauth"

export default function Dashboard(){
    return(
        <div>
            <h1>Bem vindo</h1>
        </div>
    )
}

export const getServerSideProps = canSSRauth(async (ctx) =>{
    return{
        props: {}
    }
})