import React from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return(
        <nav className='navbar navbar-expand-lg navbar-mainbg'>
            <NavLink className='navbar-brand navbar-logo' to='/' exact>
                U.K. Covid 19 Statistics
            </NavLink>
            <button
                className='navbar-toggler'
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation">
                <i className="fas fa-bars text-white"></i>
            </button>

            <div
                className='collapse navbar-collapse'
                id='navbarSupportedContent'>
                <ul className='navbar-nav ms-auto'>

                    <div className='hori-selector'>
                        <div className='left'></div>
                        <div className='right'></div>
                    </div>

                    <li className='nav-item active'>
                        <NavLink className='nav-link' to='/' exact>
                            <i className='fas fa-tachometer-alt'></i>U.K.
                        </NavLink>
                    </li>

                    <li className='nav-item '>
                        <NavLink className='nav-link' to='/England' exact>
                            <i className='fas fa-tachometer-alt'></i>England
                        </NavLink>
                    </li>

                    <li className='nav-item '>
                        <NavLink className='nav-link' to='/Scotland' exact>
                            <i className='fas fa-tachometer-alt'></i>Scotland
                        </NavLink>
                    </li>

                    <li className='nav-item '>
                        <NavLink className='nav-link' to='/Wales' exact>
                            <i className='fas fa-tachometer-alt'></i>Wales
                        </NavLink>
                    </li>
                    <li className='nav-item '>
                        <NavLink className='nav-link' to='/NorthernIreland' exact>
                            <i className='fas fa-tachometer-alt'></i>Northern Ireland
                        </NavLink>
                    </li>

                </ul>
            </div>
        </nav>
    )
}

export default Navbar