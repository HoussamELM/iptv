import React from 'react'
import { useNavigate } from "react-router-dom";
import logo from '../pictures/logo.png'
import phone from '../pictures/phone.png';
import Swal from 'sweetalert2';

const Navbar = () => {

const nextURL = 'https://my-website.com/page_b';
const nextTitle = 'My new page title';
const nextState = { additionalInformation: 'Updated the URL with JS' };

function y(){
    window.history.pushState(nextState, nextTitle, nextURL);
}

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
const navigate = useNavigate()


    return (

        <nav className='navbar'>
            <div>
                <ul>
                    <li className='logo'><a onClick={() => {navigate("/")}}><img src={logo} alt='logo'></img></a></li>

                </ul>
            </div>
            <div>
                <ul>
                    <li className='nvb left'><a onClick={() => {navigate("/essaie")}}>Essaie gratuit</a></li>
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