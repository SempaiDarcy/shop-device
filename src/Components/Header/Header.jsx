export const Header = ({handleInput}) => {
    return (
        <div className='header'>
            <div>
                <img
                    width={'60px'}
                    src='https://static.vecteezy.com/system/resources/previews/026/109/507/non_2x/smartphone-logo-modern-electronics-smartphone-shop-design-electronic-goods-free-vector.jpg'
                    alt="photo"
                />
            </div>
            <input type="text" onChange={(e) => handleInput(e.target.value)}/>
            <div>header</div>
        </div>
    );
};
