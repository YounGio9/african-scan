import React from 'react'
import logo from '../assets/Group 1logoFooter.png'
import { sections } from './Banner'
import { reseaux } from './Accueil'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../styles/Footer.css'


function Footer() {
  const mobile = window.matchMedia('(max-width: 650px)').matches
  const mobileStyle = {
    width: '100%',
    display: 'grid',
    justifyItems: 'center',
    gap: 10,
    marginBottom: 15
    }
  return (
    <div className='Footer'>
    <div className='Footer-infos'>
    <div style={mobileStyle}>
        {mobile && <img src={logo} alt={'logo'}></img>}
        <div className={'Footer-sections'}>
        {sections.map((section, idx) => 
            <span key={idx}>{section}</span>
        )}
        </div>
       
</div>

<div style={mobileStyle}>
{!mobile && <img src={logo} alt={'logo'}></img>}
        <span>Contacts: +229 5688268</span>
        <span>Email: africanscan@gmail.com</span>

</div>

<div style={mobileStyle}>
        <span>Nos médias</span>

        <div className={'Footer-reseaux'}>
        {reseaux.map((reseau, idx) => 
            <FontAwesomeIcon icon={reseau} key={idx} color={'#ce8037'} fontSize={30} />
        )}
        </div>
  </div>

  </div>
        <span style={{
          marginBottom: 20,
          
        }}>© 2023, AfricanScan.</span>
      
        

    </div>
  )
}

export default Footer