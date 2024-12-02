import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
    return (
        <header className="header">
            <div className="header-container">
                <div className="logo">
                    <Link to="/">Carbon</Link>
                </div>
                <nav className="nav">
                    <ul className="nav-list">
                        <li className="nav-item">
                            <Link to="/">Главная</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/calculator">Калькулятор</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/profile">Профиль</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
