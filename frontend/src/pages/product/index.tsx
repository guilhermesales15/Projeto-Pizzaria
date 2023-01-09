import Head from "next/head";
import styles from './style.module.scss';
import { canSSRGuest } from "../../utils/canSSRguest";
import { Header } from "../../components/ui/Header";

export default function Product(){
    return(
        <>
        <Head>
            <title>Novo Produto - PizzariaJs</title>
        </Head>
        <div>
            <Header/>
            <main className={styles.container}>
                <h1>Novo Produto</h1>
                <form className={styles.form}>
                    <select>
                        <option>
                            bebida
                        </option>
                    </select>
                    <input className={styles.input} type="text" placeholder="digite o nome do produto"/>
                    <input className={styles.input} type="text" placeholder="Preço do produto" />
                    <textarea className={styles.input} placeholder="Descrição do produto"/>

                    <button className={styles.buttonAdd} type="submit">Cadastrar</button>
                </form>
            </main>
        </div>
        
        </>
    )


}

export const getServerSideProps = canSSRGuest(async(ctx)=>{
    return{
        props:{}
}
})