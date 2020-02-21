import React from "react";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardBody,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem
} from "reactstrap";
import {Link} from 'react-router-dom';


  function RenderComments({dish}) {
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


  const DishdetailComponent =(props)=> {
    if (props.dish != null) {
      var dish = props.dish;
      console.log("inside render of dish");
      return (
        <div className="container">
             <div className="row">
                    <Breadcrumb>
                    <BreadcrumbItem><Link to='/menu'>Menu</Link>
                    </BreadcrumbItem>
                    <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                    </div>
                </div>
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
        <RenderComments dish={props} />
      </div>
      </div>
      </div>
      );
    } else {
        console.log("empty dish");
      return <div></div>;
    }
  }


export default DishdetailComponent;