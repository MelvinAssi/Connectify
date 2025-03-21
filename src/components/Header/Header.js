import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import "./Header.css";
import Button from "../Button/Button.js";
import { UserContext } from "../../contexts/userContext.js";

export default function Header() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { currentUser, logOut } = useContext(UserContext);

  const handleClick = (page) => navigate(page);

  const logout = async () => {
    try {
      console.log("log out");
      await logOut();
      navigate("/");
    } catch (error) {
      
    }
  };

  const getLinkClass = (path) => `base-link ${pathname === path ? 'active-link' : ''}`;

  const authLinks = currentUser ? (
    <>      
      <li><Link to="/profile" className={getLinkClass('/profile')}>Profile</Link></li>
      {(pathname === '/profile'||pathname === '/contact' ) && (
        <li><Link to="/contact" className={getLinkClass('/contact')}>Contact</Link></li>
      )}
      <li><Button text="Déconnexion" onClick={logout} /></li>
    </>
  ) : (
    <>      
      <li><Link to="/login" className={getLinkClass('/login')}>Connexion</Link></li>
      <li><Button text="Inscription" className={getLinkClass('/signup')} onClick={() => handleClick("/signup")} /></li>
    </>
  );

  return (
    <header className="headerContainer">
      <h1>Connectify</h1>
      <div>
        <ul>
            <li><Link to="/" className={getLinkClass('/')}>Accueil</Link></li>
            {authLinks}
            </ul>
      </div>
    </header>
  );
}