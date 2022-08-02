import React, {useEffect, useState} from 'react';
import './Main.css'
import Item from "../Item/Item";


function Main({newData}) {

    //Функция удаления повторов
    function deleteRepeat(data) {
        const newArray = data.map((value) => {
            return [...new Set(value.keywords.split(" ").sort())].join(" ");
        })
        data.forEach(function (item, index) {
            item.keywords = newArray[index]
        })
    }


    const [searchItem, setSearchItem] = useState('');
    const [searchData, setSearchData] = useState([]);


    useEffect(() => {
        let controller = new AbortController();
        const signal = controller.signal

        const res = fetch(`https://emoji.ymatuhin.workers.dev/?search=${searchItem}`, {signal})

        res
            .then((res) => res.json())
            .then((data) => {
                deleteRepeat(data)
                setSearchData(data)
            })


        return () => {
            controller.abort()
        };
    }, [searchItem])


    return (
        <>
            <input type="text" id="input" placeholder="Enter keywords..." className="header__input"
                   onChange={(event) => setSearchItem(event.target.value)}/>
            <main className="main">
                <div className="container">
                    <div className="grid">
                        {searchData
                            .map((elem, index) =>
                                (<Item
                                    key={index}
                                    symbol={elem.symbol}
                                    title={elem.title}
                                    keywords={elem.keywords}
                                />))}
                    </div>
                </div>
            </main>
        </>
    );
}

export default Main;