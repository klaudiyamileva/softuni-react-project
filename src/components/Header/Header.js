import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import styles from "./Header.module.css"

export const Header = () => {
    const { auth } = useContext(AuthContext);

    return (
        <nav
            className="navbar navbar-expand-lg navbar-light bg-light bg-transparent"
            id="gtco-main-nav">
            <div className="container">
                <Link className="navbar-brand" to="/">Solution</Link>
                <div id="my-nav" className="collapse navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/work">
                                Work
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/blog">
                                Blog
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/careers">
                                Careers
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">
                                Contact
                            </Link>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        {auth.accessToken
                            ? <>
                                <Link to='/profile' className={styles.more} >MY PROFILE</Link>
                                <div>
                                    <Link to="/logout" className="btn btn-outline-dark my-2 my-sm-0 mr-3 text-uppercase">
                                        logout
                                    </Link>
                                </div>
                            </>
                            : <div>
                                <Link to="/login" className="btn btn-outline-dark my-2 my-sm-0 mr-3 text-uppercase">
                                    login
                                </Link>
                                <Link to="/register" className="btn btn-info my-2 my-sm-0 text-uppercase">
                                    sign up
                                </Link>
                            </div>
                        }
                    </form>
                </div>
            </div>
        </nav>
    );
};