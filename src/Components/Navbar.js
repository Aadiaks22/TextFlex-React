import React from "react";
//import { Link } from "react-router-dom";

function Navbar(props) {
  const handleRadioChange = (event) => {
    if (props.Mode === 'dark' && event.target.checked) {
      document.body.style.backgroundColor = event.target.value;
    }
  };

  return (
    <div>
      <nav className={`navbar navbar-expand-lg bg-${props.Mode}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href='#' style={{ color: props.Mode === 'dark' ? 'white' : 'black' }}>
            {props.title}
          </a>
          <button
            className={`navbar-toggler ${props.Mode === 'dark' ? 'navbar-dark' : 'navbar-light'}`}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#" style={{ color: props.Mode === 'dark' ? 'white' : 'black' }}>
                  Home
                </a>
              </li>
            </ul>
            <div className="d-flex align-items-center">
              <div className="btn-group mx-2" role="group" aria-label="Basic radio toggle button group">
                <input type="radio" className="btn-check" name="btnradio" id="btnradio1" value="Blue" autoComplete="off" onChange={handleRadioChange} checked={props.selectedColor === 'Blue'} />
                <label className="btn btn-outline-secondary" htmlFor="btnradio1">Blue</label>

                <input type="radio" className="btn-check" name="btnradio" id="btnradio2" value="Grey" autoComplete="off" onChange={handleRadioChange} checked={props.selectedColor === 'Grey'} />
                <label className="btn btn-outline-secondary" htmlFor="btnradio2">Grey</label>

                <input type="radio" className="btn-check" name="btnradio" id="btnradio3" value="Green" autoComplete="off" onChange={handleRadioChange} checked={props.selectedColor === 'Green'} />
                <label className="btn btn-outline-secondary" htmlFor="btnradio3">Green</label>
              </div>

              <div className="form-check form-switch mx-2">
                <input
                  className="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault"
                  onClick={props.enabledarkmode}
                />
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault" style={{ color: props.Mode === 'dark' ? 'white' : 'black' }}>
                  Enable DarkMode
                </label>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
