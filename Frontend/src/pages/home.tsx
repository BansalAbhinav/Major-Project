import { Link } from "react-router-dom";
import ProductCard from "../components/product_card";
const Home = () => {
  const addToCartHandler = () => {};
  return (
    <div className="home">
      <section></section>

      <h1>
        Latest Products
        <Link to="/search" className="findmore">
          More
        </Link>
      </h1>

      <main>
        <ProductCard
          productId="ferfrgrg"
          photo="https://m.media-amazon.com/images/I/514T0SvwkHL._SL1500_.jpg"
          name="Macbook Pro"
          price={232}
          stock={23}
          handler={addToCartHandler}
        />
      </main>
    </div>
  );
};

export default Home;
