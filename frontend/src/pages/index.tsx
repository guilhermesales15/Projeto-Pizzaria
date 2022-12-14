import Head from 'next/head';
import styles from '../../styles/home.module.scss'
import Image from 'next/image';
import {Button} from '../components/ui/Button'
import { useContext, FormEvent, useState, useEffect } from 'react';

import logoimg from '../../public/logo.png'

import { Input } from '../components/ui/Input';

import Link from 'next/link';
import { AuthContext } from '../contexts/AuthContext';

export default function Home() {
  const {signIn} = useContext(AuthContext)

  const [email, setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleLogin(event : FormEvent ) {
    event.preventDefault()

    let data = {
      email, password
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
            value={email}
            onChange ={(e) => setEmail(e.target.value)}
          />
          <Input
          placeholder='Digite sua senha'
          type='password'
          value={password}
          onChange = {(e) => setPassword(e.target.value)}
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
