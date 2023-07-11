import { Link } from "react-router-dom";
import '../EntrarButton/EntrarButton.css';

function Entrar() {
  return (
    <nav className="button">
        <Link to="/userpage">Entrar</Link>
    </nav>
  )
}

export default Entrar;