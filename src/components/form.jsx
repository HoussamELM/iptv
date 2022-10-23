import React, { Component } from "react";
import mobiscroll from "@mobiscroll/react-lite";
import "@mobiscroll/react-lite/dist/css/mobiscroll.min.css";
             


mobiscroll.settings = {
    theme:"auto"
}
class App extends Component {
    render() {
        return (
            <mobiscroll.Page className="page">
                <mobiscroll.Form className="form">
                    <div className="mbsc-form-group">
                        <div className="mbsc-form-group-title">Formulaire essaie gratuit</div>
                        <mobiscroll.Input placeholder="Quel est votre nom ?" className="input" value={number}>Nom</mobiscroll.Input>
                        <mobiscroll.Input placeholder="Quel est votre prenom?" className="input" value={number}>Prenom</mobiscroll.Input>
                        <mobiscroll.Input type="date" placeholder="Date de naissance" className="input" value={number}>Date de naissance</mobiscroll.Input>
                        <mobiscroll.Input type="email" placeholder="me@domain.com" className="input" value={number}>Email</mobiscroll.Input>
                    </div>
                    <div className="mbsc-btn-group-block">
                        <button type="submit" className="formButton">Valider</button>
                    </div>
                </mobiscroll.Form>
            </mobiscroll.Page>
        );
    }
};

export default App;