import './Card.css'

export const Card = ({
                         img, name, brand,
                         rating,
                         price,
                     }) => {
    return (
        <div className='card-component'>
            <div>
                <img src={img} width='150px' alt="здесь фото"/>
            </div>
            <div className='info'>
                <div>Name: {name}</div>
                <h3>Brand: {brand}</h3>
                <div>Rating: {rating}</div>
                <h3>{price}</h3>
            </div>
        </div>
    );
};
