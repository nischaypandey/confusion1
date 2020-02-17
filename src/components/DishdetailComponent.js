import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardBody,
  CardTitle
} from "reactstrap";

class DishdetailComponent extends Component {
  constructor(props) {
    super(props);
    console.log("Helooo",this.props);
  }
  renderComments(dish) {
    var comments;
    if (dish != null) {
      comments = dish.comments;
      console.log("there!!!");
    } else {
      comments = null;
      console.log("nothing");
    }
    if (comments != null) {
        console.log("there is comment!!!");
      const coms = comments.map(com => {
        return (
          <div key={com.id}>
            <div className="row">
              <p>{com.comment}</p>
            </div>
            <div className="row">
              <p>-- {com.author}</p>
            </div>
          </div>
        );
      });
      return (
        <div className="container">
          <h4>Comments</h4>
          <div>{coms}</div>
        </div>
      );
    } else {
        console.log("there is no comment!!!");
      return <div></div>;
    }
  }


  render() {
    if (this.props.dish != null) {
      var dish = this.props.dish;
      console.log("inside render of dish");
      return (
        <div className="container">
            <div className="row">
        <div className="col-12 col-md-6 mt-5" key={dish.id}>
          <Card>
            <CardImg width="100%" object src={dish.image} alt={dish.name} />
            <CardBody>
              <CardTitle heading>{dish.name}</CardTitle>
              <CardText>{dish.description}</CardText>
            </CardBody>
          </Card>
        </div>
        <div className="col-12 col-md-6 mt-5">
        {this.renderComments(this.props.dish)}
      </div>
      </div>
      </div>
      );
    } else {
        console.log("empty dish");
      return <div></div>;
    }
  }
}

export default DishdetailComponent;