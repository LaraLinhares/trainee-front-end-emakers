import "./UserPage.css"
import { Link } from "react-router-dom"

import CapaBob from "../../images/bob-capa2.png"
import FotoPerfil from "../../images/bob-profile.jpg"
import EmakersImage from "../../images/logo_semfundo.png"
import Foto1 from "../../images/bob-foto1.jpg"
import Foto2 from "../../images/bob-foto2.jpg"
import Foto3 from "../../images/bob-foto3.jpg"
import Lupa from "../../images/lupa.png"
import Notifica from "../../images/notifica.png"

function UserPage() {
  const fotosPost = [Foto1, Foto2, Foto3];

  return (
    <div className="profile">
      {/* Capa e navbar */}
      <div className="capa">
        <div className="navbar">
          <div className="logo-navbar-container">
            <img src={EmakersImage} alt="Logo da Emakers" className="logo-emakers"/>
          </div>
          <div className="icons-container">
            <img src={Lupa} 
              alt="Search Icon" 
              className="icon"
              /* onClick={handleSearch} */
            />
            <img src={Notifica} 
              alt="Notification Icon" 
              className="icon" 
            />
            <Link to="/userpage">
              <img src={FotoPerfil} alt="Profile Icon" className="icon" />
            </Link>
          </div>
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
          {fotosPost.map((foto, index) => (
              <img key={index} src={foto} alt="Foto" className="foto-prof" />
            ))}
          </div>
      </div>
    </div>
  );
}

export default UserPage;

