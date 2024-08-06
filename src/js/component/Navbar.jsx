import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark navbar-dark">
            <div className="container-fluid">
            <a className="navbar-brand w-80" href="#">BOOTSTRAP Miguel</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        </div>
        <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">About</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Services</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Contact</a>
            </li>
            </ul>
        </div>
        </nav>
  );
};
export default Navbar;