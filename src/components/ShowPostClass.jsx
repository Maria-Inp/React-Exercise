import { Component } from "react";
import garden from "../data/gardenData";

import styles from "./ShowPostClass.module.css";

export default class ShowPostClass extends Component {
  constructor(props) {
    super(props);

    this.state1 = {
      data: garden,
    };
  }
  render() {
    return (
      <>
        <div className={styles.container}>
          <h4 className={styles.title}>show post with class component</h4>
          <div className={styles.allBox}>
            {this.state1.data.map((g) => (
              <div key={g.id} className={styles.box}>
                <div className={styles.flowerPic}>
                  <img src={g.imageUrl} alt="" />
                </div>

                <div className={styles.plantName}><h5>Plant Name: {g.plantName}</h5></div>
                
                <div  className={styles.plantDesc}><p>{g.description}</p></div>

                <table className={styles.flowerTable}>
                  <tr>
                    <th>Botanical Name:</th>
                    <td>{g.botanicalName}</td>
                  </tr>
                  <tr>
                    <th>Flower Color:</th>
                    <td>{g.flowerColor}</td>
                  </tr>
                  <tr>
                    <th>Food Nutrients</th>
                    <td>{g.foodNutrients}</td>
                  </tr>
                  <tr>
                    <th>Blooming Times</th>
                    <td>{g.bloomingTimes}</td>
                  </tr>
                </table>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  }
}
