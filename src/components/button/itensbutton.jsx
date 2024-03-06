import React from 'react';

const ItemList = ({ items }) => {
    return (
        <ul className='minha-lista'>
            {items.map((item, index) => (
                <li className='meu-item' key={index}>{item}</li>
            ))}
        </ul>
    );
};

export default ItemList;
