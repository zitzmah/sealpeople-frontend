import { Link } from "react-router-dom"

const Header = () => {
    return(
        <nav className="nav">
            <Link to='/'>
                <div>People App</div>
            </Link>
            
            <a href="http://localhost:3000">
                <div>People App</div>
            </a>
        </nav>
    )
}

export default Header;