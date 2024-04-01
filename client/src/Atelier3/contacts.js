import { useSelector, useDispatch } from "react-redux";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { DeleteContact, fetchDataSuccess, fetchDataFailure } from "./actionC.js";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios"
import Nav from "../partials/nav.js";
import { Footer } from "../partials/footer.js";




const Contacts = () => {
    const [search, setSearch] = useState("");
    const [order, setOrder] = useState("ASC")
    const contacts = useSelector(data => data.infoContacts);
    const dispatch = useDispatch();

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
    const sorting = (col) => {
        if (order === "ASC") {
            const sorted = [...contacts].sort((a, b) => 
            a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1)
            setOrder("DESC")
            return dispatch(fetchDataSuccess(sorted))
        } else {
            const sortDesc = [...contacts].sort((a, b) =>  
                a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1)
            setOrder("ASC")
            return dispatch(fetchDataSuccess(sortDesc));
        }
        
    }
    // ! ------------------------------------Return----------------------------------
    return (
        <div >
            <Nav />
            <div className="container" style={{ paddingBottom: "50px" }} >
                <hr></hr>
                <h1>Contact list </h1><hr></hr>
                {/* ---------------- -----------------------Ajouter ---------------------------- */}
                    <NavLink to="ajouter">
                        <button
                            style={{ marginLeft: "5px", marginBottom: "10px" }}
                            className="btn btn-success"
                        >Add Contact +
                        </button>
                    </NavLink>
                <Form>
                    <InputGroup>
                        <Form.Control value={search} onChange={(e) => setSearch(e.target.value)} placeholder='Search by name...' />
                    </InputGroup>
                </Form>
                <div>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col" onClick={() => sorting("_id")}>Id</th>
                                <th scope="col" onClick={() => sorting("first_name")}>First_name</th>
                                <th scope="col" onClick={() => sorting("last_name")}>Last_name</th>
                                <th scope="col" onClick={() => sorting("age")}>Age</th>
                                <th scope="col" onClick={() => sorting("gender")}>Gender</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {contacts
                                //! _____Search_____
                                .filter((contact) => {
                                    return search.toLowerCase() === ''
                                        ? contact
                                        : contact.first_name.toLowerCase().includes(search);
                                })
                                .map((contact, index) =>
                                    <tr key={index}>
                                        <td>{contact._id}</td>
                                        <td>{contact.first_name}</td>
                                        <td>{contact.last_name}</td>
                                        <td>{contact.age}</td>
                                        <td>{contact.gender}</td>
                                        <td>
                                            {/* ---------------- -----------------------Editer ---------------------------- */}
                                            <NavLink to={`update/${contact._id}`}>
                                                <button
                                                    style={{ marginRight: "5px" }}
                                                    type="button"
                                                    className="btn btn-success">
                                                    Edit
                                                </button>
                                            </NavLink>
                                            {/* ---------------- -----------------------Detail ---------------------------- */}
                                            <NavLink to={`detail/${contact._id}`}>
                                                <button
                                                    style={{ marginRight: "5px" }}
                                                    type="button"
                                                    className="btn btn-warning
                                                ">
                                                    Detail
                                                </button>
                                            </NavLink>
                                            {/* ---------------- -----------------------Supprimer ---------------------------- */}
                                            <button
                                                type="button"
                                                class="btn btn-danger"
                                                onClick={() => dispatch(DeleteContact(contact._id))}>
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                )}
                        </tbody>
                    </table>
                </div>
            </div>
            <Footer />
        </div>

    )
}
export default Contacts;