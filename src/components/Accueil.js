import React from 'react'
import imgWelcome from '../assets/Group 2.png'
import '../styles/Accueil.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faFacebook, faInstagram, faTiktok } from "@fortawesome/free-brands-svg-icons";
import {scansOnline} from '../datas/scans-online'
import Wave from 'react-wavify';
import {videosOnline} from '../datas/videos-online'


export const reseaux = [ faFacebook, faTwitter, faInstagram, faTiktok]
let mobile = window.matchMedia('(max-width: 650px)').matches

function Accueil() {
  return (
    <div className='Accueil'>
        <div className='welcome'>
        <div className='infos'>
            <span>Bienvenue {mobile && <br />}Sur</span> <br />
            <span style={{color: '#D08138'}}>AfricanScan</span>
            {mobile &&  <img src={imgWelcome} alt={'Bienvenue'}></img>}
            <p>Le premier site de manga africain (Scans et animés) en Afrique et dans le monde qui publie des bandes dessinées africaines hautes en originalité.    </p>
            <div className='signin-signup'>
                <button> S'inscrire </button>
                <button style={{backgroundColor: 'transparent'}}>Se connecter</button>
            </div>
        </div>
        { !mobile &&  <img src={imgWelcome} alt={'Bienvenue'}></img>}

        </div>

        <div className='reseaux'>
            {reseaux.map((reseau, idx) => 
                <FontAwesomeIcon icon={reseau} fontSize={ mobile ? 24 : 35} color={'black'}></FontAwesomeIcon>
            )}

        </div>

        <Wave fill='#FBE0BA'
            paused={true}
            options={{
                height: mobile ? 20 : 120,
                amplitude: mobile ? 37 : 60,
                speed: 0.4,
                points: 2
            }}
            className={'wave'}
        />

        <div className='scans-online-section'>
        <div>
            <h3>Scans récemment mis en ligne</h3>
            {mobile ? (
                <ul className='scans-online'>
                {scansOnline.slice().splice(0, 2).map(({cover, name}, idx) => 
                    <li key={idx}>
                        <img src={cover} alt={name}></img>
                        <p>
                            <span>{name}</span>
                            <button>Lire maintenant</button>
                        </p>
                    </li>
                )}
                </ul>
            ) : (
                <ul className='scans-online'>
                {scansOnline.slice().splice(0, 3).map(({cover, name}, idx) => 
                    <li key={idx}>
                        <img src={cover} alt={name}></img>
                        <p>
                            <span>{name}</span>
                            <button>Lire maintenant</button>
                        </p>
                    </li>
                )}
                </ul>
            )
            }   
            </div>        
            
        </div>

        <div className='videos-online-section'>
            <h3>Videos récemment mises en ligne</h3>
            {mobile ? (
                <ul className='videos-online'>
                    {videosOnline.slice().splice(0, 1).map((video, idx) => 
                        <li key={idx}>
                            <img src={video} alt={`video animé`}></img>
                        </li>
                    )}
                </ul>
            ) : (
                <ul className='videos-online'>
                {videosOnline.slice().splice(0, 2).map((video, idx) => 
                        <li key={idx}>
                            <img src={video} alt={`video animé`}></img>
                        </li>
                    )}
                </ul>
            )}
        </div>

        <Wave fill='#FBE0BA'
            paused={true}
            options={{
                height: mobile ? 20 : 120,
                amplitude: mobile ? 37 : 60,
                speed: 0.4,
                points: 2
            }}
            className={'wave'}
        />

        <div className='Lancez-vous' style={{width: '100vw'}}>
            
            <strong style={{fontSize: 15}}>LANCEZ-VOUS MAINTENANT !</strong>
            <p style={{fontSize: 12, width: '90%'}}>
                Souscrivez a notre boite mail pour recevoir toutes les mises a jour 
            </p>

            <div id='subscribe'>
                    <input type={'email'} placeholder={'Votre email'} style={{
                        height: '80%',
                        border: 0,
                        background: 'transparent'
                    }}></input>
                    <button style={{
                        backgroundColor: '#D08138',
                        padding: '10px 25px',
                        borderRadius: 20,
                        border: 0
                    }}> S'inscrire</button>
            </div>
        </div>

    </div>
  )
}

export default Accueil