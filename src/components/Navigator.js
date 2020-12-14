import React from 'react'
import { NavLink } from 'react-router-dom'
import LocalMallIcon from '@material-ui/icons/LocalMall'
import SettingsIcon from '@material-ui/icons/Settings'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'

function Navigator() {
    return (
        <nav className="navbar">
            <NavLink to="/home" className="home-icon">
                <LocalMallIcon style={{ color: 'red', fontSize: '70' }} />
            </NavLink>
            <div className="nav-items">
                <NavLink
                    className="nav-item"
                    to="/home"
                    activeClassName="selected-nav"
                >
                    Home
                </NavLink>
                <NavLink
                    className="nav-item"
                    to="/products"
                    activeClassName="selected-nav"
                >
                    Products
                </NavLink>
                <NavLink
                    className="nav-item"
                    to="/shopping-cart"
                    activeClassName="selected-nav"
                >
                    <ShoppingCartIcon></ShoppingCartIcon>
                </NavLink>
                <NavLink
                    className="nav-item"
                    exact
                    to="/test"
                    activeClassName="selected-nav"
                >
                    Test
                </NavLink>
                <NavLink
                    className="nav-item"
                    exact
                    to="/error"
                    activeClassName="selected-nav"
                >
                    Error
                </NavLink>
                <NavLink
                    className="nav-item"
                    exact
                    to="/settings"
                    activeClassName="selected-nav"
                >
                    <SettingsIcon
                        style={{ color: 'black', fontSize: '20' }}
                    ></SettingsIcon>
                </NavLink>
                {/* <li>
                <Link to="/dashboard">Dashboard</Link>
            </li> */}
            </div>
        </nav>
    )
}

export default Navigator
