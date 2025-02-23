import './App.css'
import {products} from './data/products'
import {Card} from "./Components/Card/Card";
import {Header} from "./Components/Header/Header";
import {useState} from "react";

function App() {
    const [inputName, setInputName] = useState('')
    const filteredProducts = inputName ? products.filter(el => el.brand === inputName) : products;
    const handleInput = (text) => {
        console.log(text)
        setInputName(text)
    }
    return (
        <div>
            <Header handleInput={handleInput}/>
            <div className="card-block">
                {filteredProducts.map((el, index) =>
                    <Card
                        key={index}
                        img={el.img}
                        name={el.name}
                        brand={el.brand}
                        rating={el.rating}
                        price={el.price}/>
                )
                }
            </div>
        </div>
    );
}

export default App;
