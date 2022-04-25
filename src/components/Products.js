import React, { useState, useEffect } from "react";
import { add } from "../store/cartSlice";
import { useDispatch,useSelector } from "react-redux";
import { fetchProducts } from "../store/productSlice";
import { STATUSES } from "../store/productSlice";

const Products = () => {
//   const [products, setproducts] = useState([]);
  const {data:products,status} = useSelector((state)=>state.product);
  const dispatch = useDispatch();
  useEffect(() => {
      dispatch(fetchProducts());
    // const fetchProducts = async () => {
    //   const res = await fetch("https://fakestoreapi.com/products");
    //   const data = await res.json();
    //   // console.log(data);
    //   setproducts(data);
    // };
    // fetchProducts();
  }, []);

  const handleAdd = (product) => {
    dispatch(add(product));
  };

  if(status === STATUSES.LOADING)
  {
      return <h1>Loading...</h1>
  }
  if(status === STATUSES.ERROR)
  {
      return <h1>Something went wrong</h1>
  }

  return (
    <div className="productsWrapper">
      {products.map((product) => (
        <div className="card" key={product.id}>
          <img src={product.image} alt="" />
          <h4>{product.title}</h4>
          <h5>{product.price}</h5>
          <button onClick={() => handleAdd(product)} className="btn">
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default Products;
