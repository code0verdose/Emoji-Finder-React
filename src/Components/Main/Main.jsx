import React, {useState} from 'react';
import './Main.css'
import {data} from "../../data/emoji.js";
import Item from "../Item/Item";


//Функция удаления повторов
function deleteRepeat(data) {
    const newArray = data.map((value) => {
        return [...new Set(value.keywords.split(" ").sort())].join(" ");
    })
    data.forEach(function (item, index) {
        item.keywords = newArray[index]
    })
}

deleteRepeat(data)


function Main() {

    const [searchItem, setSearchItem] = useState('');

    return (
        <>
            <input type="text" id="input" placeholder="Enter keywords..." className="header__input"
                   onChange={(event) => setSearchItem(event.target.value)}/>
            <main className="main">
                <div className="container">
                    <div className="grid">
                        {data
                            .filter(value => {
                                if (searchItem === '') return value;
                                return value.title.toLowerCase().includes(searchItem.toLowerCase().trim())
                            })
                            .map((elem, index) =>
                                (<Item key={index} symbol={elem.symbol} title={elem.title}
                                       keywords={elem.keywords}/>))}
                    </div>
                </div>
            </main>
        </>
    );
}

export default Main;