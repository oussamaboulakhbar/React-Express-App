import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { EditeContact } from "./actionC.js";
import axios from "axios";
import { fetchDataSuccess, fetchDataFailure } from "./actionC.js";


const UpdateContact =  () => {
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3001/students');
                dispatch(fetchDataSuccess(response.data));
                
            } catch (error) {
                console.error('Error fetching data:', error);
                dispatch(fetchDataFailure(error.message));
            }
        };
        fetchData();
    },[]);
    const id = useParams()._id;
    const contact = useSelector(data => data.infoContacts.find((student) => student._id == id));
    const [inputnom, setNom] = useState(contact ? contact.nom : '');
    const [inputprenom, setPrenom] = useState(contact ? contact.prenom : '');
    const [inputage, setAge] = useState(contact ? contact.age : '');
    const history = useNavigate();
    const  dispatch = useDispatch();
    
    if (!contact) {
        return <div><h1>Contact not found</h1></div>;
    }
    
    const  submitHandler= (e)=>{
        const newContact = {prenom: inputprenom, nom: inputnom,  age: inputage};
        console.log(newContact);
        // dispatch(EditeContact(newContact));
        // history('/');
    }
    return (
        <div className="container" style={{backgroundColor: '#f4f5f7'}}>
            <h1>Update Contact </h1><hr></hr>
            <form onSubmit={submitHandler}>
                <div className="form-group">
                    <label for="prenom">Prenom :</label>
                    <input type="text" className="form-control" id="prenom" placeholder="Enter Prenom" name="prenom" value={inputprenom} onChange={(e) => setPrenom(e.target.value)} required/>
                </div>
                <div className="form-group">
                    <label for="name">Nom :</label>
                    <input type="text" className="form-control" id="name" placeholder="Enter Nom" name="nom" value={inputnom} onChange={(e) => setNom(e.target.value)} required/>
                </div>
                <div className="form-group">
                    <label for="age">Age :</label>
                    <input type="text" className="form-control" id="age" placeholder="Enter Age" name="age" value={inputage} onChange={(e) => setAge(e.target.value)} required/>
                </div>
                <button type="submit" className="btn btn-success my-2">Envoyer</button>
            </form>
        </div>
    
    )
    
}
export default  UpdateContact;
/*
<div>
            <h1>Update de Contact </h1><hr></hr>
            <form  onSubmit={submitHandler}>
                Nom: <input type="text" value={name} onChange={(e) => setName(e.target.value)} required /> 
                Email: <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} required /> 
                <input 
                        type="submit"
                        style={{marginLeft: "5px"}} 
                        className="btn btn-success" 
                        value="Update Contact"                            
                />  
            </form>
        </div> */