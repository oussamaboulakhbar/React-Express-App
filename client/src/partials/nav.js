import { Link } from "react-router-dom"
const Nav = () => {
    return (
        <nav style={{ backgroundColor: 'rgba(136, 135, 135, 0.658)' }} >
            <ul class="nav justify-content-center">
                <li class="nav-item">
                    <a class="nav-link" href='/'>Home</a>
                    {/* <Link to='/'> Home</Link> */}
                </li>
                <li class="nav-item">
                    <a class="nav-link active" href='/ajouter'>Add</a>
                    {/* <Link to='/ajouter'> Ajouter</Link> */}
                </li>
                
            </ul>
        </nav>
    )
}
export default Nav;