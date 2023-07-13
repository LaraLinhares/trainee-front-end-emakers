import "./UserPage.css"
import CapaBob from "../../images/bob-capa2.png"
import FotoPerfil from "../../images/bob-profile.jpg"

function UserPage() {
  return (
    <div className="profile">
      <div className="cover-photo">
      <img 
        src={CapaBob} 
        alt="capa" 
        className="cover-photo-img" 
      />
      </div>
      <div className="profile-details">
        <div className="profile-picture">
        <img 
          src={FotoPerfil} 
          alt="foto" 
          className="profile-photo-img" 
        />
        </div>
        <div className="profile-info">
          <h2>Bob Esponja</h2>
          <p>hehehehehe</p>
        </div>
      </div>
      {/* ... */}
    </div>
  );
}

export default UserPage;

