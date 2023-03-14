import { Link } from "react-router-dom";

export const Footer = () => {
    return (
        <footer className="container-fluid" id="gtco-footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="row">
                            <div className="col-6">
                                <h4>Contact Us</h4>
                                <ul className="nav flex-column company-nav">
                                    <li className="nav-item">
                                        <Link className="nav-link" href="/contact">
                                            Contact
                                        </Link>
                                    </li>
                                </ul>
                                <h4 className="mt-5">Follow Us</h4>
                                <ul className="nav follow-us-nav">
                                    <li className="nav-item">
                                        <Link to="" className="nav-link pl-0">
                                            <i className="fa fa-facebook" aria-hidden="true"></i>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="" className="nav-link">
                                            <i className="fa fa-twitter" aria-hidden="true"></i>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="" className="nav-link">
                                            <i className="fa fa-google" aria-hidden="true"></i>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="" 
                                        className="nav-link">
                                            <i className="fa fa-linkedin" aria-hidden="true"></i>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-12">
                                <p>
                                    © 2019. All Rights Reserved. Design by
                                    <Link href="https://gettemplates.co" target="_blank">
                                        GetTemplates
                                    </Link>
                                    .
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};
