import { NavLink, useLocation, useNavigate } from "react-router-dom";
import "./navbar.css";
import { observer } from "mobx-react";
import navLinkStore from "../stores/NavLinkStore";
import capitalizeString from "../utils/capitalizeString";
import { useEffect } from "react";

function Navbar() {
    const store = navLinkStore;
    const location = useLocation();
    const navigate = useNavigate();

    const handleHover = (navlink: string, isHovered: boolean) => {
        store.setHovered(navlink, isHovered);
    };

    useEffect(() => {
        if (location.pathname === "/") {
            navigate("/features");
        }
    }, [location]);

    return (
        <header>
            <nav>
                {["features", "pricing", "blog", "discover"].map((navlink) => (
                    <NavLink
                        key={navlink}
                        onMouseEnter={() => handleHover(navlink, true)}
                        onMouseLeave={() => handleHover(navlink, false)}
                        to={`/${navlink}`}
                        className="nav-link"
                    >
                        <div className="nav-link-text">
                            {capitalizeString(navlink)}
                        </div>
                        <div
                            className={`nav-link-underline ${
                                store.hoveredStates[navlink] ? "hovered" : ""
                            }`}
                        ></div>
                    </NavLink>
                ))}
            </nav>

            <div className="nav-menu-right">
                <a href="/login" className="nav-link log-in">
                    <div>Login</div>
                </a>
                <a href="/signup" className="nav-link sign-up">
                    <div>Start Selling</div>
                </a>
            </div>
        </header>
    );
}

export default observer(Navbar);
