import './App.css';
import { products } from './data/products';
import { Card } from './Components/Card/Card';
import { Header } from './Components/Header/Header';
import { useState } from 'react';
import { Navbar } from './Components/Navbar/Navbar';

function App() {
    const [searchQuery, setSearchQuery] = useState('');
    const [isNavbarOpen, setIsNavbarOpen] = useState(false);

    // Фильтрация товаров по бренду
    const getFilteredProducts = () => {
        return searchQuery
            ? products.filter(product => product.brand.includes(searchQuery))
            : products;
    };

    // Обработчик ввода в поле поиска
    const handleSearchInput = (query) => {
        console.log(query);
        setSearchQuery(query);
    };

    // Переключение состояния Navbar
    const toggleNavbar = () => {
        setIsNavbarOpen(prevState => !prevState);
    };

    return (
        <div>
            <Header isNavbarOpen={isNavbarOpen} onSearchInput={handleSearchInput} onToggleNavbar={toggleNavbar} />
            <Navbar isNavbarOpen={isNavbarOpen} />
            <div className="card-block">
                {getFilteredProducts().map((product, index) => (
                    <Card
                        key={index}
                        img={product.img}
                        name={product.name}
                        brand={product.brand}
                        rating={product.rating}
                        price={product.price}
                    />
                ))}
            </div>
        </div>
    );
}

export default App;