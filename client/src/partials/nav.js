const Nav = () => {
    return (
        <nav style={{ backgroundColor: 'rgba(136, 135, 135, 0.658)' }} >
            <ul className="nav justify-content-center">
                <li className="nav-item">
                    <a className="nav-link" href='/'>Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link active" href='/ajouter'>Add</a>
                </li>

            </ul>
        </nav>
    )
}
export default Nav;