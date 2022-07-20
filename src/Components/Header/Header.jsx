import React from 'react';
import './Header.css'

function Header() {

    return (
        <header className="header">
            <a href="" className="header__link">
                <h1 className="header__title">Emoji Finder</h1>
                <span className="header__subtitle">Find emoji by keywords</span>
            </a>
        </header>
);
}

export default Header;