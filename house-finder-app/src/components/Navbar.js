import { faHouse, faCartShopping, faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Navbar({ returnClickedStatus, favStatus, takeMeHome }) {

    const handleFavouritesClick = () => {
        returnClickedStatus(!favStatus);
    }

    const handleHomeClick = () => {
        takeMeHome();
    }


    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: "#cfcdcc", overflow: "hidden", display: "flex", justifyContent: "center" }}>
                <div id='1' style={{ padding: "1%" }}>
                    <div class=" navbar-collapse float-end" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item active">
                                <a class="nav-link" onClick={handleHomeClick}>
                                    <FontAwesomeIcon icon={faHouse} size='xl' style={{ color: "#2ba1ab", }} />
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link">
                                    <FontAwesomeIcon icon={faCartShopping} size='xl' style={{ color: "#2ba1ab", }} />
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#" onClick={handleFavouritesClick}>
                                    <FontAwesomeIcon icon={faHeart} size='xl' style={{ color: "#2ba1ab", }} />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
} 