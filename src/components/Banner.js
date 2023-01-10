import React, { useState } from 'react'
import '../styles/Banner.css'
import logo from '../assets/africanscanlogo.jpg'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faX } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export const sections = ['Accueil', 'A propos', 'Librairie', "S'inscrire"]

export default function Banner() {
   
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <header className="Banner">
    <div className='Banner-first'>
    <img src={logo} alt={`logo`}></img>
        <div className='banner-right'>
            {sections.map((section, idx) => 
                <span key={idx}>{section}</span>
            )}
            <button className='command-btn'>Passer une commande</button>
        </div>
        {window.matchMedia('(max-width: 650px)').matches && <button style={{
          border: 0,
          background: 'transparent'
          }} onClick={() =>{setMenuOpen(!menuOpen)}}>
            {!menuOpen && <FontAwesomeIcon icon={faBars} color={'#9B3535'} fontSize={35} /> }
            {menuOpen && <FontAwesomeIcon icon={faX} color={'#9B3535'} fontSize={35} /> }
        </button> }

        
    </div>
        
      
              <div style={{
                display: menuOpen ? 'grid' : 'none',
                width: '100vw',
                justifyItems: 'center',
                gap: '20px',
                background: "rgba(255, 255, 255, 0.97)"
              }} className={'Banner-second'}>
                  {sections.map((section, idx) => 
                <span key={idx}>{section}</span>
            )}
              </div>
    </header>
  )
}
