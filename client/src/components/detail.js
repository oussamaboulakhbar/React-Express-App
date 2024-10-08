import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom"
import axios from "axios";
import { fetchDataSuccess, fetchDataFailure } from "./actionC.js";
import Nav from "../partials/nav.js";
import { Footer } from "../partials/footer.js";


export const Detail = () => {
    const id = useParams()._id;
    const contact = useSelector(data => data.infoContacts.find((student) => student._id == id));
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
    }, []);
    return (
        contact && (
            <div>
                <Nav />
                <section className="container" style={{ backgroundColor: '#f4f5f7', paddingBottom: "50px" }}>
                    <hr></hr>
                    <h1>Detail Contact </h1>
                    <hr></hr>
                    <div className="container py-5 h-100">
                        <div className="row d-flex justify-content-center align-items-center h-100">
                            <div className="col col-lg-6 mb-4 mb-lg-0">
                                <div className="card mb-3" style={{ borderRadius: '.5rem' }}>
                                    <div className="row g-0">
                                        <div className="col-md-4 gradient-custom text-center text-white"
                                            style={{ borderTopLeftRadius: '.5rem', borderBottomLeftRadius: '.5rem' }}>
                                            {contact.gender === 'Female' ? (
                                                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava5-bg.webp"
                                                    alt="Avatar" className="img-fluid my-5" style={{ width: '80px' }} />
                                            ) : (
                                                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava6-bg.webp"
                                                    alt="avatar 1" className="img-fluid my-5" style={{ width: '80px' }} />
                                            )}
                                            <h5 style={{ color: 'black' }}>{contact.first_name}</h5>
                                            <i className="far fa-edit mb-5"></i>
                                        </div>
                                        <div className="col-md-8">
                                            <div className="card-body p-4">
                                                <h6>Information</h6>
                                                <hr className="mt-0 mb-4"></hr>
                                                <div className="row pt-1">
                                                    <div className="col-6 mb-2">
                                                        <h6>ID</h6>
                                                        <p className="text-muted">{contact._id}</p>
                                                    </div>
                                                    <div className="col-6 mb-2">
                                                        <h6>Nom</h6>
                                                        <p className="text-muted">{contact.last_name}</p>
                                                    </div>
                                                </div>
                                                <div className="row pt-1">
                                                    <div className="col-6 mb-2">
                                                        <h6>Age</h6>
                                                        <p className="text-muted">{contact.age}</p>
                                                    </div>
                                                    <div className="col-6 mb-2">
                                                        <h6>Genre</h6>
                                                        <p className="text-muted">{contact.gender}</p>
                                                    </div>
                                                </div>
                                                <div className="d-flex justify-content-start">
                                                    <a href="#!"><i className="fab fa-facebook-f fa-lg me-3"></i></a>
                                                    <a href="#!"><i className="fab fa-twitter fa-lg me-3"></i></a>
                                                    <a href="#!"><i className="fab fa-instagram fa-lg"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer />
            </div>)
    )
}