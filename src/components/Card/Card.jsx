import "./card.css"
import { Link } from "react-router-dom";

const Card = ({ item, addCart }) => {
    const textFunc = (text, length) => {
        if (text.length > length) {
            return text.substr(0, length - 3).trim() + '...';
        } else {
            return text;
        }
    };

    return (
        <div className="card">
            <Link to={`/product/${item.id}`}>
                <img src={item.image} alt="" className="card-img" />
                <div>
                    <h2 className="card-title">{textFunc(item.title, 30)}</h2>
                    <p className="card-text">{textFunc(item.description, 40)}</p>
                </div>
            </Link>

            <p>{item.category}</p>
            <div className="card-block">
                <p>${item.price}</p>
                <button
                    onClick={() => {
                        addCart(item);
                    }}
                    className="card-button"
                >
                    Buy
                </button>
            </div>
        </div>
    );
};

export default Card;
