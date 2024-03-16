import { useSelector, useDispatch } from "react-redux";
import { DeleteContact, fetchDataSuccess, fetchDataFailure } from "./actionC.js";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios"
const Contacts = () => {
    const contacts = useSelector(data => data.infoContacts)
    
    const dispatch = useDispatch()

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
        
    });

    // ! ------------------------------------handleClicks----------------------------------
    return (
        <div style={{ textAlign: "center" }}>
            <div >
                <h1>Liste de Contacts </h1><hr></hr>
                {/* ---------------- -----------------------Ajouter ---------------------------- */}
                <NavLink to="ajouter">
                    <button
                        style={{ marginLeft: "5px" }}
                        className="btn btn-success"
                    >Ajouter Contact +
                    </button>
                </NavLink>
                <div>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">Id</th>
                                <th scope="col">Prenom</th>
                                <th scope="col">Nom</th>
                                <th scope="col">Age</th>
                                <th scope="col">Handle</th>
                            </tr>
                        </thead>
                        <tbody>
                            {contacts.map((contact, index) =>
                                <tr key={index}>
                                    <td>{contact._id}</td>
                                    <td>{contact.prenom}</td>
                                    <td>{contact.nom}</td>
                                    <td>{contact.age}</td>
                                    
                                    <td>
                                        {/* ---------------- -----------------------Editer ---------------------------- */}
                                        <NavLink to={`update/${contact._id}`}>
                                            <button
                                                style={{ marginRight: "5px" }}
                                                type="button"
                                                className="btn btn-success">
                                                Editer
                                            </button>
                                        </NavLink>
                                        {/* ---------------- -----------------------Detail ---------------------------- */}
                                        <button
                                            style={{ marginRight: "5px" }}
                                            type="button"
                                            className="btn btn-warning
                                            ">
                                            Detail
                                        </button>
                                        {/* ---------------- -----------------------Supprimer ---------------------------- */}
                                        <button
                                            type="button"
                                            class="btn btn-danger"
                                            onClick={() => dispatch(DeleteContact(contact._id))}>
                                            Supprimer -
                                        </button>
                                    </td>

                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

        </div>

    )
}
export default Contacts;