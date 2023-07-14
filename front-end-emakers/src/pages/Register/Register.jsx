import '../Register/Register.css'
import LogoCompleta from '../../images/Logo_completa_sem_fundo2.png'
import { Link } from 'react-router-dom';
import RegisterButton from '../../components/RegisterPageButton/RegisterPageButton';

function Register() {
  return (
    <div className="reg-container"> 
    <div className="reg-login">
      <form id="form">
      <h1 className="reg_title">Registrar</h1>
        <div className="form-control-reg">
          <label htmlFor="name">Nome</label>
          <input id="name" type="name" name="name" />
        </div>
        <div className="form-control-reg">
          <label htmlFor="email">E-mail</label>
          <input id="email" type="text" name="email" />
        </div>
        <div className="form-control-reg">
          <label htmlFor="password">Senha</label>
          <input id="password" type="password" name="password" />
        </div>
        <div className="form-control-reg">
          <label htmlFor="password">Confirmar Senha</label>
          <input id="password" type="password" name="password" />
        </div>

      <div className="gender-image-container">
            <div className="form-control-reg">
              <label htmlFor="gender">Sexo</label>
              <select name="sexo" id="sexo" className="select-control">
                <option value="fem">Feminino</option>
                <option value="masc">Masculino</option>
                <option value="outro">Outro</option>
              </select>
            </div>
            <div className="form-control-reg">
              <label htmlFor="img">Imagem</label>
              <input id="img" type="file" name="img" />
            </div>
          </div>

        <Link to="/userpage">
        <RegisterButton className='button-page-register'/>
        </Link>
        <Link to="/" className='linklogin'>Já possui conta?</Link>
      </form>
    </div>

    <div className='reg2-container'>
      <img src={LogoCompleta} alt="Emakers" className='logocompleta'/>
      <p className='text-reg2'>Venha fazer parte da maior rede social também!</p>
    </div>
  </div>
  )
}

export default Register;