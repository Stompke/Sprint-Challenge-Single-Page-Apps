import React from "react";
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

export default function CharacterCard(props) {

  const cardStyles = {
    width: '300px',
    margin: '20px 10px'
  }


  return (
          <Card style={cardStyles}>
            <CardImg top width="100%" src={props.img} alt="Card image cap" />
            <CardBody>
              <CardTitle><strong>Name:</strong> {props.name}</CardTitle>
              <CardSubtitle><strong>Species:</strong> {props.species}</CardSubtitle>
              <CardText>{props.name} is still {props.status}.</CardText>
              <Button>more info</Button>
            </CardBody>
          </Card>
  );
}
