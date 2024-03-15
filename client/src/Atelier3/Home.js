import { Routes, Route, BrowserRouter  } from "react-router-dom";
import Contacts from "./contacts.js";
import AjouterContact from "./AjouterContact.js";
import UpdateContact from "./UpdateContact.js";
const Home = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                        <Route path="/" element={<Contacts/>} />
                        <Route path="ajouter" element={<AjouterContact/>} />
                        <Route path="update/:age" element={<UpdateContact />} />
                </Routes>
            </BrowserRouter> 
        </div>
    )
};
export default Home;