import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { EditeContact } from "./actionC.js";
import axios from "axios";
import { fetchDataSuccess, fetchDataFailure } from "./actionC.js";
import Nav from "../partials/nav.js";
import { Footer } from "../partials/footer.js";


const UpdateContact =  () => {
    console.log()
    const id = useParams()._id;
    // console.log('id',id)
    const contact = useSelector(data => data.infoContacts.find((student) => student._id == id));
    console.log('contact render :',contact)
    const [inputnom, setNom] = useState(contact ? contact.last_name : '');
    const [inputprenom, setPrenom] = useState(contact ? contact.first_name : '');
    const [inputage, setAge] = useState(contact ? contact.age : '');
    const [inputgenre, setGenre] = useState(contact ? contact.gender : '');
    const history = useNavigate();
    const  dispatch = useDispatch();
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
    useEffect(() => {
        if (contact) {
            setNom(contact.last_name);
            setPrenom(contact.first_name);
            setAge(contact.age);
            setGenre(contact.gender);
        }
        console.log('useEffect 2 :' ,contact)
    }, [contact]);
    
    
    const  submitHandler= (e)=>{
        e.preventDefault();
        const newContact = {first_name: inputprenom, last_name: inputnom,  age: inputage, gender: inputgenre};
        console.log('newContact',newContact);
        dispatch(EditeContact(newContact,id));
        history('/');
    }
    return (
        contact &&  (
            <div>
                <Nav />
                <div className="container" style={{backgroundColor: '#f4f5f7', paddingBottom: "50px"}}>
                    <hr></hr>
                    <h1>Update Contact </h1>
                    <hr></hr>
                    <form onSubmit={submitHandler}>
                        <div className="form-group">
                            <label for="prenom">Firs Name :</label>
                            <input type="text" className="form-control" id="prenom" placeholder="Enter Prenom" name="first_name" value={inputprenom} onChange={(e) => setPrenom(e.target.value)} required/>
                        </div>
                        <div className="form-group">
                            <label for="name">Last Name :</label>
                            <input type="text" className="form-control" id="name" placeholder="Enter Nom" name="last_name" value={inputnom} onChange={(e) => setNom(e.target.value)} required/>
                        </div>
                        <div className="form-group">
                            <label for="age">Age :</label>
                            <input type="text" className="form-control" id="age" placeholder="Enter Age" name="age" value={inputage} onChange={(e) => setAge(e.target.value)} required/>
                        </div>
                        <div class="form-group">
                        <label for="Genre">Gender :</label>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="gender" id="female" value="Female" checked={inputgenre === "Female"}  onChange={(e) => { setGenre(e.target.value)}} required />
                                <label className="form-check-label" for="female">
                                    Female
                                </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="gender" id="male" value="Male" checked={inputgenre === "Male"} onChange={(e) => { setGenre(e.target.value)}} required />
                                <label className="form-check-label" for="male">
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