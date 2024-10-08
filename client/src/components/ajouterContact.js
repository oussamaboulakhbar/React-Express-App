// ! ----------------------import----------------------
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AddContact } from "./actionC.js";
import { useDispatch } from "react-redux";
import Nav from "../partials/nav.js";
import { Footer } from "../partials/footer.js";

// ! ----------------------Component----------------------
const AjouterContact = () => {
    // * ---------------------Consts ---------------------
    const [inputprenom, setPrenom] = useState('');
    const [inputnom, setNom] = useState('');
    const [inputgenre, setGenre] = useState('');
    const [inputage, setAge] = useState('');
    const dispatch = useDispatch();
    const history = useNavigate();
    // * ---------------------Handle ( Nom $ Email) ---------------------
    const handlePrenom = (e) => {
        setPrenom(e.target.value);
    };
    const handleNom = (e) => {
        setNom(e.target.value);
    };
    const handleAge = (e) => {
        setAge(e.target.value);
    };

    // * ---------------------Handle Submit ------------------------------
    const handleSubmit = (e) => {

        e.preventDefault();
        const donner = { first_name: inputprenom, last_name: inputnom, age: inputage, gender: inputgenre };
        dispatch(AddContact(donner));
        history('/')
    };
    // * --------------------------return ------------------------------
    return (
        <div>
            <Nav />
            <div className="container" style={{ backgroundColor: '#f4f5f7', paddingBottom: "50px" }}>
                <hr></hr>
                <h1>Add Contact </h1>
                <hr></hr>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="prenom">First Name :</label>
                        <input type="text" className="form-control" id="prenom" placeholder="Enter First Name" name="first_name" value={inputprenom} onChange={handlePrenom} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="name">Last Name :</label>
                        <input type="text" className="form-control" id="name" placeholder="Enter Last Name" name="last_name" value={inputnom} onChange={handleNom} required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="age">Age :</label>
                        <input type="text" className="form-control" id="age" placeholder="Enter Age" name="age" value={inputage} onChange={handleAge} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="Genre">Gender :</label>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="gender" id="female" value="Female" onChange={(e) => { setGenre(e.target.value) }} />
                            <label className="form-check-label" htmlFor="female">
                                Female
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="gender" id="male" value="Male" onChange={(e) => { setGenre(e.target.value) }} />
                            <label className="form-check-label" htmlFor="male">
                                Male
                            </label>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-success my-2">Envoyer</button>
                </form>
            </div>
            <Footer />
        </div>
    )
}
// ! ----------------------export----------------------
export default AjouterContact;