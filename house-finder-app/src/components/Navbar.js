import {faHouse, faCartShopping, faHeart} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Navbar() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light" style={{backgroundColor: "#cfcdcc", overflow: "hidden",}}>
                <div id='1' style={{padding: "1%"}}>
                <a class="navbar-brand" href="#">Find-a-Home</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse float-end" id="navbarNav">
                    <ul class="navbar-nav">
                    <li class="nav-item active">
                        <a class="nav-link" href="#">
                            <FontAwesomeIcon icon={faHouse} size='xl' style={{color: "#2ba1ab",}} />
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">
                            <FontAwesomeIcon icon={faCartShopping} size='xl' style={{color: "#2ba1ab",}} />                        
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">
                            <FontAwesomeIcon icon={faHeart} size='xl' style={{color: "#2ba1ab",}} />
                        </a>
                    </li>
                    </ul>
                </div>
                </div>
      
            </nav>
        </div>
    )
} 