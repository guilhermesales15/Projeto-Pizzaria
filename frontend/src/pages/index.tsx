import Head from 'next/head';
import styles from '../../styles/home.module.scss'
import Image from 'next/image';
import {Button} from '../components/ui/Button'

import logoimg from '../../public/logo.png'

import { Input } from '../components/ui/Input';

export default function Home() {
  return (
    <>
    <Head>
      <title>Tela de Login </title>
    </Head>
    <div className={styles.containerCenter}>
      <Image src={logoimg} alt="Logo Pizzaria"/>
      <div className={styles.login}>
        <form>
          <Input
            placeholder='Digite seu email'
            type='text'
          />
          <Input
          placeholder='Digite sua senha'
          type='password'
          />

          <Button
            type="submit"
            loading={false}
          >Acessar</Button>
        </form>

        <a className={styles.text}>Não possui uma conta? Cadastre-se</a>


      </div>
    </div>
    </>
  )
}
