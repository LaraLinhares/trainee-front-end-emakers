import "./UserPage.css"
import CapaBob from "../../images/bob-capa2.png"
import FotoPerfil from "../../images/bob-profile.jpg"
import EmakersImage from "../../images/logo_semfundo.png"

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
      </div>
    </div>
  );
}

export default UserPage;

