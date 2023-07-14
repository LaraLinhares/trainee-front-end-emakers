import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Login/Login.css'
import EntrarButton from '../../components/EntrarButton/EntrarButton';
import LogoImage from '../../images/Logo_lateral_secundaria2.png'
import RegisterButton from '../../components/RegisterButton/RegisterButton.jsx';

// Valor Inicial
function initialState(){
  return { user: '', password: ''};
}

const Login = () => {
  
  // Inicio da implementação para atribuição de valor a email e senha
  const [values, setValues] = useState(initialState);

  function onChange(event){
    const {value, name} = event.target;

    setValues({
      ...values,
      [name]:value,
    });
  }

  return (
    <div className="login-container"> 
      <div className="user-login">
      <img src={LogoImage} alt="Logo" className='logolateral'/>
        <form autoComplete="nope" id="form">
        <h1 className="login_title">Entre em Sua Conta</h1>
          <div className="form-control">
            <label htmlFor="email">E-mail</label>
            <input 
            id="email" 
            type="text" 
            name="email" 
            autoComplete="off" 
            onChange={onChange} 
            value={values.email}
            />
          </div>
          <div className="form-control">
            <label htmlFor="password">Senha</label>
            <input 
            id="password" 
            type="password" 
            name="password" 
            onChange={onChange} 
            values={values.password}
            />
          </div>
          <EntrarButton
            type="submit"
            theme="contained"
            className="submit-button"
            rounded
          >
            Entrar
          </EntrarButton>
        </form>
      </div>

      <div className='register-container'>
        <h1 className='title-register'>Novo Aqui?</h1>
        <p className='text-register'>Registre-se e venha fazer parte da maior rede social!</p>
        <Link to="/register">
        <RegisterButton/>
        </Link>
      </div>
    </div>
  );
}

export default Login;