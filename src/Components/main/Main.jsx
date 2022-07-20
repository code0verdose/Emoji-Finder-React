import React from 'react';
import './Main.css'
import {data} from "../../Data/emoji.js";
import Item from "../item/Item";

function Main(props) {

    //Функция удаления повторов
    function deleteRepeat(data) {
        const newArray = data.map((value) => {
            return [...new Set(value.keywords.split(" ").sort())].join(" ");
        })
        data.forEach(function (item, index) {
            item.keywords = newArray[index]
        })
        return newArray;
    }

    deleteRepeat(data)

    return (
        <main className="main">
            <div className="container">
                <div className="grid">
                    {data.map((elem) =>
                        (<Item key={elem.title} symbol={elem.symbol} title={elem.title} keywords={elem.keywords}/>))}
                </div>
            </div>
        </main>
    );
}

export default Main;