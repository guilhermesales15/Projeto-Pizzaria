import Head from 'next/head';
import styles from '../../styles/home.module.scss'
import Image from 'next/image';
import {Button} from '../components/ui/Button'
import { useContext, FormEvent } from 'react';

import logoimg from '../../public/logo.png'

import { Input } from '../components/ui/Input';

import Link from 'next/link';
import { AuthContext } from '../contexts/AuthContext';

export default function Home() {
  const {signIn} = useContext(AuthContext)

  async function handleLogin(event : FormEvent ) {
    event.preventDefault()

    let data = {
      email : "teste@teste.com",
      password: "senha"
    }

    await signIn(data)
    
  }

  return (
    <>
    <Head>
      <title>Tela de Login </title>
    </Head>
    <div className={styles.containerCenter}>
      <Image src={logoimg} alt="Logo Pizzaria"/>
      <div className={styles.login}>
        <form onSubmit={handleLogin}>
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

        <Link href="/signup" className={styles.text}>
          Não possui uma conta? Cadastre-se
        </Link>
          
        

      </div>
    </div>
    </>
  )
}
