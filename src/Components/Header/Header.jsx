import './Header.css';

export const Header = ({onSearchInput, onToggleNavbar }) => {
    return (
        <div className='header'>
            <div>
                <img
                    width={'60px'}
                    src='https://static.vecteezy.com/system/resources/previews/026/109/507/non_2x/smartphone-logo-modern-electronics-smartphone-shop-design-electronic-goods-free-vector.jpg'
                    alt="logo"
                />
            </div>
            <div onClick={onToggleNavbar} style={{ cursor: 'pointer' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 48 48">
                    <path fill="#fff" d="M6 22H42V26H6zM6 10H42V14H6zM6 34H42V38H6z"></path>
                </svg>
            </div>
            <input type="text" onChange={(e) => onSearchInput(e.target.value)} />
            <div>header</div>
        </div>
    );
};