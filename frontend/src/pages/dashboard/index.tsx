import Head from "next/head"
import { canSSRauth } from "../../utils/canSSRauth"
import {Header} from '../../components/ui/Header/index'
import styles from './styles.module.scss'
import {FiRefreshCcw} from 'react-icons/fi'
import { setupAPIClient } from "../../services/api"
import { type } from "os"
import { use, useState } from "react"


type OrderProps ={
    id: string;
    table: string | number;
    status: boolean;
    draft: boolean
    name: string | null;
}

interface HomeProps{
    orders: OrderProps[];
}

export default function Dashboard({orders} : HomeProps){
    const [orderList, setOrderList] = useState(orders || [])

    function handleOpenModalView(id: string){
        alert("ID:" +id)
    }

    return(
        <>
        <Head>
            <title>Painel do Usuário</title>
        </Head>
        <div>
        <Header/>
            <main className={styles.container}>
                <div className={styles.containerHeader}>
                    <h1>Últimos pedidos</h1>
                        <button>
                            <FiRefreshCcw size={25} color=" #14870c"/>
                        </button>
                </div>

                <article className={styles.listOrders}>
                    {orderList.map(item =>(
                        <section key={item.id} className={styles.orderItem}>
                            <button onClick={() => handleOpenModalView(item.id)}>
                                <div className={styles.tag}></div>
                                <span>Mesa {item.table}</span>
                            </button>
                    </section>
                    ))}

                </article>
            </main>
            
        </div>
        </>
    )
}

export const getServerSideProps = canSSRauth(async (ctx) =>{
    const apiClient = setupAPIClient(ctx);
    const response = await apiClient.get('/order/list')


    return{
        props: {
            orders: response.data
        }
    }
})