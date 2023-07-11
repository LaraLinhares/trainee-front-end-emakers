import { useState } from 'react';
import '../Login/Login.css'
import Entrar from '../../components/EntrarButton/Entrar';

function initialState(){
  return { user: '', password: ''};
}

const Login = () => {
  return (
    <div className="user-login">
      <h1 className="login_title">Entre em Sua Conta</h1>
      <form autoComplete="nope">
        <div className="form-control">
          <label htmlFor="email">E-mail</label>
          <input id="email" type="text" name="email" autoComplete="off" />
        </div>
        <div className="form-control">
          <label htmlFor="password">Senha</label>
          <input id="password" type="password" name="password" />
        </div>
        <Entrar className="button-entrar"></Entrar>
      </form>
    </div>
  );
}

export default Login;