import styles from './styles.module.scss';
import Link from 'next/link';
import {FiLogOut} from 'react-icons/fi'
import { AuthContext } from '../../../contexts/AuthContext';
import {useContext} from 'react';

export function Header(){

    const{signOut} = useContext(AuthContext)

    return(
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <Link href='/dashboard'>
                    <img src="/logo.png" width={150} height={50}/>
                </Link>


                <nav className={styles.menuNav}>
                    <Link href={"/category"}>
                        Categorias
                    </Link>

                    <Link href={"/product"}>
                        Cardapio
                    </Link>

                    <button onClick={signOut}>
                        <FiLogOut color='#fff' size={24}/>
                    </button>
                </nav>


            </div>
               
        </header>
    )
}