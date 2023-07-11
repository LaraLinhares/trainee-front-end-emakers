import { useState } from 'react';
import WrittenSpaceLogin from '../../components/WrittenSpaceLogin/WrittenSpaceLogin';
import '../Login/Login.css'
import Entrar from '../../components/Entrar';

function initialState(){
  return { user: '', password: ''};
}

const Login = () => {
  return (
    <div>
        <h1>Entre em Sua Conta</h1>
        <p>E-mail</p>
        <WrittenSpaceLogin/>
        <p>Senha</p>
        <WrittenSpaceLogin/>
        <Entrar></Entrar>
    </div>
  )
}

export default Login;