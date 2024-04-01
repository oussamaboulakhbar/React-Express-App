import { Routes, Route, BrowserRouter  } from "react-router-dom";
import Contacts from "./contacts.js";
import AjouterContact from "./ajouterContact.js";
import { Detail } from "./detail.js";
import UpdateContact from "./updateContact.js";
const Home = () => {
    return (
        <div>
            
            <BrowserRouter>
                <Routes>
                        <Route path="/" element={<Contacts/>} />
                        <Route path="ajouter" element={<AjouterContact/>} />
                        <Route path="update/:_id" element={<UpdateContact />} />
                        <Route path="detail/:_id" element={<Detail />} />
                </Routes>
            </BrowserRouter> 
        </div>
    )
};
export default Home;