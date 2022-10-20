import React from 'react'
import logo from '../pictures/logo.png'
import phone from '../pictures/phone.png';
import Swal from 'sweetalert2';

const Navbar = () => {

function x(){
    Swal.fire({
        title: '06 19 83 41 23',
        text: 'Veuiller contactez nous sur Whatsapp!',
        imageUrl: 'https://i.imgur.com/pJfVFq9.png',
        imageAlt: 'Custom image',
        imageWidth: '35%',
        background: '#171717',
        color: 'white',
        showConfirmButton : false,
      })
}

    return (

        <nav className='navbar'>
            <div>
                <ul>
                    <li className='logo'><a href=''><img src={logo} alt='logo'></img></a></li>

                </ul>
            </div>
            <div>
                <ul>
                    <li className='nvb left'><a href='https://docs.google.com/forms/d/e/1FAIpQLSdX2sCFNgrjsizLX0IF_uxYlArY1V5xRSMyfG1GPEYc4FtbqQ/viewform' target='_blank'>Essaie gratuit</a></li>
                    <li className='nvb right'><a onClick={()=>x()}>Contactez nous</a></li>
                </ul>
            </div>
            <div className="phone">
                <ul>
                    <li className='phone'>
                        <a href="https://wa.me/+212619834123?text=Bonjour, je veux un essaie gratuit"><img src={phone}></img></a>
                    </li>
                </ul>
            </div>

        </nav>

    )
}

export default Navbar