/* eslint-disable react-hooks/exhaustive-deps */
import { useParams } from "react-router-dom";
import data from "../data/productData";
import { useEffect, useState } from "react";
import styles from "./DetailPage.module.css";

function DetailPage() {
  const { id } = useParams();

  const allProducts = data;
  const [product, setProduct] = useState({});

  useEffect(() => {
    setProduct(() => findProduct(id));
  }, []);

  const findProduct = (pID) => {
    return allProducts.find((p) => pID == p.id);
  };

  return (
    <div className={styles.container}>
      <div className={styles.productBox}>
        <div className={styles.imgBox}>
          <img src={product.image} alt="" />
        </div>
        <h5>{product.title}</h5>
        <p>{product.description}</p>
        <div>
          <h5>Category :</h5>
          <span>{product.category}</span>
        </div>
        <div>
          <h5>Price: </h5>
          <span>{product.price}</span>
        </div>
      </div>
    </div>
  );
}

export default DetailPage;
