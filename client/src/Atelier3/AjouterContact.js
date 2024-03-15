// ! ----------------------import----------------------
import { useState } from "react";
import {  useNavigate    } from "react-router-dom";
import { AddContact } from "./actionC.js";
import {  useDispatch } from "react-redux";

// ! ----------------------Component----------------------
const AjouterContact = () => {
    // * ---------------------Consts ---------------------
    const [inputprenom, setPrenom] = useState('');
    const [inputnom, setNom] = useState('');
    const [inputage, setAge] = useState();
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
        const donner = {prenom: inputprenom, nom: inputnom, age: inputage };
        dispatch(AddContact(donner));
        history('/')
    };
    // * --------------------------return ------------------------------
    return(
        
        <div className="container" style={{backgroundColor: '#f4f5f7'}}>
            <h1>Ajouter de Contact </h1><hr></hr>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label for="prenom">Prenom :</label>
                    <input type="text" className="form-control" id="prenom" placeholder="Enter Name" name="prenom" value={inputprenom} onChange={handlePrenom} required/>
                </div>
                <div className="form-group">
                    <label for="name">Nom :</label>
                    <input type="text" className="form-control" id="name" placeholder="Enter Name" name="nom" value={inputnom} onChange={handleNom} required/>
                </div>
                
                <div className="form-group">
                    <label for="age">Age :</label>
                    <input type="text" className="form-control" id="age" placeholder="Enter Email" name="age" value={inputage} onChange={handleAge} required />
                </div>
                <button type="submit" className="btn btn-success my-2">Envoyer</button>
            </form>
        </div>
    )}
// ! ----------------------export----------------------
export default AjouterContact;