import React from 'react'
import { useState } from 'react'
import Swal from 'sweetalert2';

const Essaie = () => {

    const [data, setData] = useState({
        date: new Date().toLocaleDateString("en-US"),
        name: "",
        birthday: "",
        email: "",
        number: ""
    })

    const { name, birthday, email, number, date } = data

    const handleChange = e =>
        setData({ ...data, [e.target.name]: e.target.value })

    const handleSubmit = async e => {
        e.preventDefault()
        try {
            await fetch("https://v1.nocodeapi.com/hgm/google_sheets/UrYQlTpGeSyFOyDC?tabId=Responses", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify([[date, name, birthday, email, number]]),
            })
        } catch (err) {
            console.log(err)
        }
    }

    function sumbited() {
        console.log("Sumbited");
        Swal.fire({
            title: 'Merci ❤',
            text: 'Un agent vas vous contacter sur whatsapp ou mobile dans quelque instants!',
            background: '#171717',
            color: 'white',
            showConfirmButton: false,
        })
        setTimeout(function () { window.location.replace("http://192.168.100.6:5173/iptv/");; }, 3000);
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <div className='formTitle'>
                    <h1>
                        Formulaire <span>essaie gratuit</span>
                    </h1>
                </div>
                <div className='group'>
                    <label htmlFor="name">Nom et prenom</label>
                    <input type="text" name="name" value={name} onChange={handleChange} required /></div>
                <div className='group'>
                    <label htmlFor="birthday">Date de naissance</label>
                    <input type="date" name="birthday" value={birthday} onChange={handleChange} required /></div>
                <div className='group'>
                    <label htmlFor="name">Email</label>
                    <input type="email" name="email" value={email} onChange={handleChange} required /></div>
                <div className='group'>
                    <label htmlFor="name">Numero Whatsapp</label>
                    <input type="number" name="number" value={number} onChange={handleChange} required />
                </div>
                <div>
                    <button onClick={() => sumbited()} >Submit</button>
                </div>
            </div>
        </form>
    )
}

export default Essaie