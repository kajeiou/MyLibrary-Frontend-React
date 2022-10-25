import '../styles/Menu.css';
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom';
function Banner() {
    return (
        <div className="menu">
            <div className="logo">
                
                <h4><img src={logo} alt="logo"/>Bienvenue sur l'application de gestion de livres</h4>
            </div>
            
            <ul>
                <Link to="/">
                    <li>Accueil</li>
                </Link>
                <Link to="register">
                    <li>Inscription</li>
                </Link>
                <Link to="login">
                    <li>Connexion</li>
                </Link>
            </ul>
        </div>
        
    )
}

export default Banner