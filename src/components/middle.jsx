import React from 'react'
import tv from '../pictures/iptv.png';
import tv2 from '../pictures/iptvmb.png';
import logo2 from '../pictures/TFAREJ-IPTV.png';
import checkmark from '../pictures/check-mark.png';
import { useNavigate } from "react-router-dom";


const Main = () => {
  const navigate = useNavigate()
  return (
    <div className='mainContainer'>
      <div className='mid middleLeft'>
        <div>
        <div className="midh1">
        <h1>Beneficier du meilleur</h1>
          <h1><span>IPTV</span> au Maroc</h1>
        </div>

          <p>
            {/* <img src={checkmark} className='checkmark' />
            &nbsp; Compatible avec tous vos appareil
          </p>
          <p><img src={checkmark} className='checkmark' />
            &nbsp; Meilleur prix au Maroc.
            </p>
            <p><img src={checkmark} className='checkmark' />
            &nbsp;  Support active 24/7.
            </p>
          <p>
            <img src={checkmark} className='checkmark' />
            &nbsp; 20000+ chaîne TV
          </p>
          <p>
            <img src={checkmark} className='checkmark' />
            &nbsp; 50000+ VODs */}
            Achetez un abonnement IPTV avec jusqu'à 20000 chaînes TV et plus de 50000 VOD avec toutes les qualités FHD et 4K, de toutes les chaînes de télévision et services de streaming célèbres comme Netflix, HBO Max, Bein sports etc...
          </p>




           
        </div>

        <div className="leftBottom">
          <a className='plansB' >Nos plans</a> &nbsp; &nbsp;
          <a className='essaieB' onClick={() => {navigate("/essaie")}}>Essaie 24h</a>
        </div>
      </div>
      <div className='mid middleRight pc'>
        <img src={tv} className='tv' />
      </div>
      <div className='mid middleRight mobile'>
        <img src={tv2} className='tv' />
      </div>
    </div>
  )
}

export default Main
