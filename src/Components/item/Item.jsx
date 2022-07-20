import React from 'react';
import './Item.css'

function Item({title, symbol, keywords}) {
    return (
        <div className='item'>
            <p className='item__emoji'>{symbol}</p>
            <h1 className='item__title'>{title}</h1>
            <p className='item__keywords'>{keywords}</p>
        </div>
    );
}

export default Item;