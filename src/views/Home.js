import NavBar from "../components/nav-bar/nav-bar";
import Products from "../components/products/products";
import { useEffect, useState, useMemo } from "react";
import { Category } from "../context/catrgory";

const groupBy = (xs, key) =>
  xs.reduce((rv, x) => {
    rv[x[key]] = true || [];
    return rv;
  }, {});

function Home() {
  const [products, setProducts] = useState([]);
  // const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [minimumPrice, setMinimumPrice] = useState(null);
  const [maximumPrice, setMaximumPrice] = useState(null);
  const [selectedMinimumPrice, setSelectedMinimumPrice] = useState(null);
  const [selectedMaximumPrice, setSelectedMaximumPrice] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((items) => {
        setProducts(items);

        const minPrice = Math.floor(
          Math.min(...items.map((product) => product.price))
        );
        const maxPrice = Math.ceil(
          Math.max(...items.map((product) => product.price))
        );
        setMinimumPrice(minPrice ?? 0);
        setMaximumPrice(maxPrice ?? 0);
        setSelectedMinimumPrice(minPrice ?? 0);
        setSelectedMaximumPrice(maxPrice ?? 0);
      });
  }, []);

  const categories = useMemo(() => Object.keys(groupBy(products, "category")), [
    products,
  ]);

  useEffect(() => {
    if (products?.length > 0 && selectedCategory) {
      const prices = products
        .filter((product) => product.category === selectedCategory)
        .map((product) => product.price);

      const minPrice = Math.floor(Math.min(...prices));
      const maxPrice = Math.ceil(Math.max(...prices));
      setMinimumPrice(minPrice);
      setMaximumPrice(maxPrice);

      setSelectedMinimumPrice(minPrice);
      setSelectedMaximumPrice(maxPrice);
    }
  }, [products, selectedCategory]);

  return (
    <div>
      <Category.Provider
        value={{
          selectedCategory,
          setSelectedCategory,
          setSelectedMinimumPrice,
          setSelectedMaximumPrice,
        }}
      >
        <NavBar
          categories={categories}
          minimumPrice={minimumPrice}
          maximumPrice={maximumPrice}
          selectedMaximumPrice={selectedMaximumPrice}
          selectedMinimumPrice={selectedMinimumPrice}
        ></NavBar>
        <Products
          products={products}
          minimumPrice={selectedMinimumPrice}
          maximumPrice={selectedMaximumPrice}
        ></Products>
      </Category.Provider>
    </div>
  );
}

export default Home;
