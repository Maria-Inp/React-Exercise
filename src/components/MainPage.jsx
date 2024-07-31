import { useEffect, useState } from "react";

import data from "/src/data/productData";

import ComponentDidUpdate from "./ComponentDidUpdate";
import ComponentDidMount from "./ComponentDidMount";
import ClassComponent from "./ClassComponent";
import ShowPostFunctional from "./ShowPostFunctional";
import ShowPostClass from "./ShowPostClass";

function MainPage() {
  const [allProducts, setAllProducts] = useState([]);
  const [product, setProduct] = useState({});

  useEffect(() => {
    setAllProducts(data);
  }, []);

  useEffect(() => {
    setProduct(data[0]);
  }, []);
  return (
    <>
      <ComponentDidUpdate
        allProducts={allProducts}
        product={product}
        setProduct={setProduct}
      />
      <ComponentDidMount />
      <ClassComponent />
      <ShowPostFunctional />
      <ShowPostClass />
    </>
  );
}

export default MainPage;
