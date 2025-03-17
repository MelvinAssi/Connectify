import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import "./Header.css"
import Button from "../Button/Button.js"


const handleClick = (page) => {
    window.location.href = page;
  };

export default function Header(){
    const location = useLocation(); 
   return(
      <header className="headerContainer">
         <h1>Connectify</h1>
         <div>
            <ul>
                <li>
                    <Link 
                        to="/"  
                        className={`base-link ${location.pathname === '/' ? 'active-link' : ''}`}>
                            Accueil
                    </Link>
                </li>
                <li>
                    <Link 
                        to="/auth"  
                        className={`base-link ${location.pathname === '/auth' ? 'active-link' : ''}`}>
                            Connexion
                    </Link>
                </li>
                <li>
                    <Button text="Inscription" onClick={() => handleClick("/auth")} />
                </li>
            </ul>
         </div>
      </header>
 )
}