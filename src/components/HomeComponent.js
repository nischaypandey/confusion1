import React from 'react';
import {Card,CardImg,CardText,CardBody,CardTitle,CardSubtitle } from 'reactstrap'
function RenderCard({item}) {
    return (
      <Card>
          <CardImg src={item.image} alt={item.name} />
          <CardBody >
              <CardTitle>
                  {item.name}
              </CardTitle>
    {item.designation ?<CardSubtitle>{item.designation}</CardSubtitle>:null}
    <CardText>{item.description}</CardText>
          </CardBody>
      </Card>
    );
}

function Home(props) {
    return(
        //here RenderCard is able to render all three props because they have same structure
        <div className="container">
           <div className="row align-items-start">
               <div className="col-12 col-md m-1">
                   <RenderCard item={props.dish} />
               </div>
               <div className="col-12 col-md m-1">
                   <RenderCard item={props.promotion} />
               </div>
               <div className="col-12 col-md m-1">
                   <RenderCard item={props.leader} />
               </div>
           </div>
        </div>

    );
}
//for leader some structure is changed

export default Home;