import React from 'react'
import tv from '../pictures/tv2.png';
import tv2 from '../pictures/tv.png';
import logo2 from '../pictures/TFAREJ-IPTV.png';

const Main = () => {
  return (
    <div className='mainContainer'>
      <div className='mid middleLeft'>
      <div>
      <h1><img src={logo2}></img></h1>
        <p>
          ✔&nbsp; Plus de 20000+ chaîne TV et 50000+ VODs (Movies, Series,
          documentaires...)
        </p>
        <p>
          ✔&nbsp; Compatible avec vos Smartphones, Tablets, Smart TVs, Mac,
          Android Box ou PC.
        </p>
        <p>✔&nbsp; Meilleur prix au Maroc.</p>
        <p>✔&nbsp; Support active 24/7.</p>
        <br />
        <p>
          Pour profiter d'un essaie gratuit de 24h, Contactez nous chez +212
          66666666
        </p>
      </div>

      <div class="leftBottom">
            <a href='https://docs.google.com/forms/d/e/1FAIpQLSdX2sCFNgrjsizLX0IF_uxYlArY1V5xRSMyfG1GPEYc4FtbqQ/viewform'>Essaie gratuit!</a>
      </div>
      </div>
      <div className='mid middleRight pc'>
      <img src={tv} className='tv'/>
      </div>
      <div className='mid middleRight mobile'>
      <img src={tv2} className='tv'/>
      </div>
    </div>
  )
}

export default Main