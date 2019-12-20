import React, { useState, useEffect } from "react";
import axios from 'axios';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


export default function LocationCard(props) {


    const {
      buttonLabel,
      className
    } = props;
  
    const [modal, setModal] = useState(false);
    const [nestedModal, setNestedModal] = useState(false);
    const [closeAll, setCloseAll] = useState(false);
  
    const toggle = () => setModal(!modal);
    const toggleNested = () => {
      setNestedModal(!nestedModal);
      setCloseAll(false);
      console.log(props.residents);
    }
    const toggleAll = () => {
      setNestedModal(!nestedModal);
      setCloseAll(true);
    }

  const cardStyles = {
    width: '300px',
    margin: '20px 10px'
  }

  // const [searchPlanet, setSearchPlanet] = useState([]);



  // const handleChange = event => {
  //   setSearchPlanet(event.target.value);
  //   console.log(event.target.value);
  //   console.log('hi');
  // };

  // useEffect(() => {
  //   console.log(searchPlanet);
    // searchPlanet.map(person => {
    //   axios.get(person)
    //   .then(response => {
    //     console.log(response.name);

    //   })
    //   .catch(error => {
    //     console.log(error);
    //   })
    // })
  // },[searchPlanet]);


//   {props.residents.map((resident) => (
//     axios.get(resident)
//     .then(response => {
//       console.log(response.name);
//     })
//   )
//   )
// } 


  return (
          <Card style={cardStyles}>
            
            <CardBody>
              <CardTitle><strong>Name:</strong> {props.name}</CardTitle>
              <CardSubtitle><strong>Dimension: {props.dimension}</strong> </CardSubtitle>
              <CardText><strong>Type: </strong>{props.type}</CardText>
              {/* <Button>See Residents</Button> */}
              <div>
                {/* <button value={props.residents} onClick={handleChange}>handle change</button> */}
      <Button value={props.residents}  color="danger" onClick={toggle}>See Residents</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader  toggle={toggle}>Residents of {props.name}</ModalHeader>
        <ModalBody>
  {/* {console.log(props.residents)} */}
          <ul>
          {props.residents.map((resident) => (
                        <li>resident: {resident}</li>
            )
            )
          } 
          </ul>
          <br />
          {/* <Button color="success" onClick={toggleNested}>Show Nested Modal</Button> */}
          <Modal isOpen={nestedModal} toggle={toggleNested} onClosed={closeAll ? toggle : undefined}>
            <ModalHeader>Nested Modal title</ModalHeader>
            <ModalBody>Stuff and things</ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={toggleNested}>Done</Button>{' '}
              <Button color="secondary" onClick={toggleAll}>All Done</Button>
            </ModalFooter>
          </Modal>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>Close</Button>{' '}
          {/* <Button color="secondary" onClick={toggle}>Cancel</Button> */}
        </ModalFooter>
      </Modal>
    </div>
            </CardBody>
          </Card>
  );
}
