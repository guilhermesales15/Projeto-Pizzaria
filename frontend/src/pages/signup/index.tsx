
import Head from 'next/head';
import styles from '../../../styles/home.module.scss'
import Image from 'next/image';
import {Button} from '../../components/ui/Button'

import logoimg from '../../../public/logo.png'

import { Input } from '../../components/ui/Input';

import Link from 'next/link';


export default function SignUp() {
  return (
    <>
    <Head>
      <title>Tela de Cadastro </title>
    </Head>
    <div className={styles.containerCenter}>
      <Image src={logoimg} alt="Logo Pizzaria"/>
      <div className={styles.login}>
        <h1>Criando sua conta</h1>
        <form>
          <Input
            placeholder='Digite seu email'
            type='text'
          />

          <Input
            placeholder='Digite seu Nome'
            type='text'
          />

          <Input
          placeholder='Digite sua senha'
          type='password'
          />

          <Button
            type="submit"
            loading={false}
          >Cadastrar</Button>
        </form>

        <Link href="/" className={styles.text}>
          Já possui uma conta? Entre aqui
        </Link>
          
        

      </div>
    </div>
    </>
  )
}
