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

    deleteRepeat(newData)

    const [searchItem, setSearchItem] = useState('');
    const [searchData, setSearchData] = useState([]);

    const searchArr = searchData.length > 0 ? searchData : newData


    useEffect(() => {
        let ignore = false;

        const res = fetch(`https://emoji.ymatuhin.workers.dev/?search=${searchItem}`)

        if (!ignore) {
            res
                .then((res) => res.json())
                .then((data) => setSearchData(data))
        }

        return () => {
            ignore = true;
        };
    }, [searchItem])


    return (
        <>
            <input type="text" id="input" placeholder="Enter keywords..." className="header__input"
                   onChange={(event) => setSearchItem(event.target.value)}/>
            <main className="main">
                <div className="container">
                    <div className="grid">
                        {searchArr
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