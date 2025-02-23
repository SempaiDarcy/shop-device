import './App.css'
import {products} from './data/products'
import {Card} from "./Components/Card";

function App() {

    return (
        <div>
            <div className='header'>
                <div>
                    <img
                        width={'60px'}
                        src='https://static.vecteezy.com/system/resources/previews/026/109/507/non_2x/smartphone-logo-modern-electronics-smartphone-shop-design-electronic-goods-free-vector.jpg'
                        alt="photo"
                    />
                </div>
                <div>header</div>
            </div>
            <div className="card-block">
                {products.map((el, index) =>
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
