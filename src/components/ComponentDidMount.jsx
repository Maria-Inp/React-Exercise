import { useEffect, useState } from "react";

import { RotatingLines } from "react-loader-spinner";
import data from "../data/productData";

import styles from "./ComponentDidMount.module.css";

function ComponentDidMount() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setProducts(data);
    }, 5000);
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <>
      <div className={styles.container}>
        <h4 className={styles.mainTitle}>get post in componentDidMount</h4>
        <div className={styles.mainBox}>
          {!products.length ? (
            <div className={styles.loader}>
              <RotatingLines
                visible={true}
                height="85"
                width="85"
                color="#135D66"
                strokeColor="#003C43"
                strokeWidth="5"
                animationDuration="0.75"
                ariaLabel="rotating-lines-loading"
                wrapperStyle={{}}
                wrapperClass=""
              />
            </div>
          ) : null}

          <div className={styles.allBox}>
            {products.map((p) => (
              <div key={p.id} className={styles.box}>
                <div className={styles.boxImg}>
                  <img src={p.image} alt="" />
                </div>
                <div className={styles.title}>
                  <span>{p.title}</span>
                </div>
                <div>
                  <p>{p.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ComponentDidMount;
