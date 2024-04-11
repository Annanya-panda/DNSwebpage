// Navbar.js
import React from 'react';
import { FaBars, FaSearch } from 'react-icons/fa';

const Navbar = ({ toggleSidebar }) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" onClick={toggleSidebar}>
                    <FaBars />
                </button>
                <a className="navbar-brand" href="#">Homepage</a>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <form className="d-flex">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-success" type="submit"><FaSearch /></button>
                            </form>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
