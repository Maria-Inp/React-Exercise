/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import styles from "./ComponentDidUpdate.module.css";
import { Link } from "react-router-dom";

function ComponentDidUpdate({ allProducts, product, setProduct }) {
  const [pID, setPID] = useState(1);

  const findProduct = (findID) => {
    return allProducts.find((p) => p.id === findID);
  };

  useEffect(() => {
    setProduct(findProduct(pID));
  }, [pID]);

  return (
    <div className={styles.container}>
      <h4 className={styles.mainTitle}>change post by using componentDidUpdate</h4>
      <div className={styles.button}>
        {allProducts.map((p) => (
          <button key={p.id} onClick={() => setPID(p.id)}>
            Show Product {p.id}
          </button>
        ))}
      </div>

      <div className={styles.productBox}>
        <div className={styles.productID}><span>Product {product.id}</span></div>
        <div className={styles.imgBox}>
          <img src={product.image} alt="" />
        </div>
        <h5>{product.title}</h5>
        <p>{product.description}</p>

        <Link className={styles.more} to={`/product/${product.id}`}>More information</Link>
      </div>
    </div>
  );
}

export default ComponentDidUpdate;
