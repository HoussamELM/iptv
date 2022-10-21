import React from 'react'
import { useState } from 'react'

const Essaie = () => {


    const [data, setData] = useState({

        date: new Date().toLocaleDateString("en-US"),
        name: "",
        email: "",
        number: ""
    })
    const { name, email, number, date } = data

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
                body: JSON.stringify([[date, name, email, number]]),
            })
        } catch (err) {
            console.log(err)
        }
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
                    <input type="text" name="name" value={name} onChange={handleChange} /></div>
                <div className='group'>
                    <label htmlFor="name">Email</label>
                    <input type="text" name="email" value={email} onChange={handleChange} /></div>
                <div className='group'>
                    <label htmlFor="name">Numero Whatsapp</label>
                    <input type="text" name="number" value={number} onChange={handleChange} />
                </div>
                <div>
                    <button>Submit</button>
                </div>

            </div>

        </form>
    )
}

export default Essaie