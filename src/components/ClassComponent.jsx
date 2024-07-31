import { Component } from "react";
import data from "../data/productData";
import comments from "../data/comments";
import { FaRegUserCircle } from "react-icons/fa";
import { MdComment } from "react-icons/md";
import styles from "./ClassComponent.module.css";

export default class ClassComponent extends Component {
  constructor(props) {
    super(props);

    this.state1 = {
      id: 0,
    };

    this.state2 = {
      data: data,
    };

    this.state3 = {
      product: {},
    };

    this.state4 = {
      comments: comments,
    };

    this.state5 = {
      comment: [],
    };
  }

  //   componentDidMount() {
  //     console.log("Component did mount");
  //   }

  findProduct(pID) {
    return this.state2.data.find((p) => p.id == pID);
  }

  findComments(pID) {
    return this.state4.comments.filter((c) => c.postId == pID);
  }

  render() {
    return (
      <div className={styles.container}>
        <h4 className={styles.mainTitle}>show post with comment</h4>
        <div className={styles.button}>
          {this.state2.data.map((d) => (
            <div key={d.id}>
              <button
                onClick={() =>
                  this.setState(
                    { id: (this.state1.id = d.id) },
                    this.setState({
                      product: (this.state3.product = this.findProduct(
                        this.state1.id
                      )),
                    }),
                    this.setState({
                      comment: (this.state5.comment = this.findComments(
                        this.state1.id
                      )),
                    })
                  )
                }
              >
                Show Post {d.id}
              </button>
            </div>
          ))}
        </div>

        {Object.keys(this.state3.product).length === 0 ? null : (
          <div className={styles.productBox}>
            <div className={styles.imgBox}>
              <img src={this.state3.product.image} alt="" />
            </div>
            <div className={styles.title}>
              <h5>{this.state3.product.title}</h5>
            </div>
            <div className={styles.comments}>
              <div className={styles.commentIcon}>
                <MdComment />
                <h5>Comments</h5>
              </div>
              {this.state5.comment.map((c, index) => (
                <div key={index} className={styles.commentBox}>
                  <div className={styles.user}>
                    <FaRegUserCircle />
                    <span>{c.user.username}</span>
                  </div>
                  <div className={styles.text}><p>{c.body}</p></div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }

  //   componentDidUpdate(prevProps, prevState, snapshot) {
  //     console.log("Component did update");
  //     console.log(this.state1.id);
  //     console.log(this.state3.product);
  //     console.log(this.state5.comment);
  //   }
}
