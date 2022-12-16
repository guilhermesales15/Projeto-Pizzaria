import {useState, FormEvent, useContext} from 'react';
import Head from 'next/head';
import styles from '../../../styles/home.module.scss'
import Image from 'next/image';
import {Button} from '../../components/ui/Button'

import logoimg from '../../../public/logo.png'

import { Input } from '../../components/ui/Input';

import Link from 'next/link';
import {AuthContext} from '../../contexts/AuthContext'
import { toast } from 'react-toastify';


export default function SignUp() {
  const {signUp} = useContext(AuthContext);

  const[name, setName] = useState('');
  const[email,setEmail]= useState('');
  const[password,setPassword] = useState('');

  const[ loading, setLoading] = useState(false)

  async function handleSignUp(event : FormEvent) {
    event.preventDefault();

    if( name=== ''|| email=== ''|| password=== ''){
      toast.error('Campos vazios, preencha corretamente')
      return;
    }

    setLoading(true);

    let data ={
      name,
      password,
      email
    }
    
    await signUp(data);

    setLoading(false);
  }

  return (
    <>
    <Head>
      <title>Tela de Cadastro </title>
    </Head>
    <div className={styles.containerCenter}>
      <Image src={logoimg} alt="Logo Pizzaria"/>
      <div className={styles.login}>
        <h1>Criando sua conta</h1>
        <form onSubmit={handleSignUp}>
          <Input
            placeholder='Digite seu email'
            type='text'
            value={email}
            onChange={(e) =>setEmail(e.target.value)}
          />

          <Input
            placeholder='Digite seu Nome'
            type='text'
            value={name}
            onChange ={(e) =>setName(e.target.value)}
          />

          <Input
          placeholder='Digite sua senha'
          type='password'
          value ={password}
          onChange = {(e) =>setPassword(e.target.value)}

          />

          <Button
            type="submit"
            loading={loading}
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
