import React, {useState} from 'react';
import './Header.css'
import {data} from "../../Data/emoji";

function Header(props) {

    const [[], drawData] = useState(data)

    return (
        <header className="header">
            <a href="" className="header__link">
                <h1 className="header__title">Emoji Finder</h1>
                <span className="header__subtitle">Find emoji by keywords</span>
            </a>
            <input type="text" id="input" placeholder="Enter keywords..." className="header__input"/>
        </header>
    );
}

export default Header;