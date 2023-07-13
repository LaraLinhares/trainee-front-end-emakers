import "./UserPage.css"
import CapaBob from "../../images/bob-capa2.png"
import FotoPerfil from "../../images/bob-profile.jpg"
import EmakersImage from "../../images/logo_semfundo.png"
import Foto1 from "../../images/bob-foto1.jpg"
import Foto2 from "../../images/bob-foto2.jpg"
import Foto3 from "../../images/bob-foto3.jpg"

function UserPage() {
  return (
    <div className="profile">
      {/* Capa e navbar */}
      <div className="capa">
        <div className="navbar">
          <img src={EmakersImage} alt="Logo da Emakers" className="logo-emakers"/>
        </div>
        <img src={CapaBob} alt="Capa do Perfil" className="bobcapa"/>
      </div>
      {/* Perfil e foto de perfil */}
      <div className="perfil-info">
          <img src={FotoPerfil} alt="Foto de Perfil" className="fotoperfil"/>
          <p className="name-profile">Bob Esponja, 36</p>
          <p className="bio-profile">
              Trabalho no Siri Cascudo 
          </p>
          <hr className="barra"/>
          <div className="post-foto">
            <img src={Foto1} alt="Foto" className="foto-prof"/>
            <img src={Foto2} alt="Foto" className="foto-prof"/>
            <img src={Foto3} alt="Foto" className="foto-prof"/>
          </div>
      </div>
    </div>
  );
}

export default UserPage;

