import '../Register/Register.css'
import LogoCompleta from '../../images/Logo_completa_sem_fundo2.png'

function Register() {
  return (
    <div className="reg-container"> 
    <div className="reg-login">
      <form autoComplete="nope" id="form">
      <h1 className="reg_title">Registrar</h1>
        <div className="form-control-reg">
          <label htmlFor="name">Nome</label>
          <input id="name" type="name" name="name" autoComplete="off" />
        </div>
        <div className="form-control-reg">
          <label htmlFor="email">E-mail</label>
          <input id="email" type="text" name="email" autoComplete="off" />
        </div>
        <div className="form-control-reg">
          <label htmlFor="password">Senha</label>
          <input id="password" type="password" name="password" />
        </div>
        <div className="form-control-reg">
          <label htmlFor="password">Confirmar Senha</label>
          <input id="password" type="password" name="password" />
        </div>
        {/* Mudar para ter opções dps */}
        <div className="form-control-reg">
          <label htmlFor="gender">Sexo</label>
          <input id="gender" type="gender" name="gender" autoComplete="off" />
        </div>

        {/* Implementar botão que recebe imagem */}
        {/* Implementar botão de registrar-se */}
{/*         <EntrarButton
          type="submit"
          theme="contained"
          className="submit-button"
          rounded
        >
          Entrar
        </EntrarButton> */}

        {/* Criar como link */}
        <p>Já possui conta?</p>
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