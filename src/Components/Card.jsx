import React from 'react';

export const Card = ({
                         img, name, brand,
                         rating,
                         price
                     }) => {
    return (
        <div className='card'>
            <div>
                <img src={img} width='150px' alt="здесь фото"/>
            </div>
            <div className='info'>
                <div>Name: {name}</div>
                <div>Brand: {brand}</div>
                <div>Rating: {rating}</div>
                <h3>{price}</h3>
            </div>
        </div>
    );
};
