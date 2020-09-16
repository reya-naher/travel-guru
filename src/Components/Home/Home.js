import React, { useState } from 'react';
import './Home.css'
import { Card,Button, Container } from 'react-bootstrap';
// import data from '../../FakeData/FakePlace';
import { Link } from 'react-router-dom';



const Home = (params) => {
  const data = params.data
  return (
    <Container>
       {
        data.map(a =>
          <Card className="card col-md-4" style={{ width: '18rem' }}>
      <Card.Img variant="top" src={a.img} />
      <Card.Body>
          <Card.Title>{a.name}</Card.Title>
        <Card.Text>{a.description}
        </Card.Text>
              <Link to={"/place/"+a.name}>
                <Button variant="primary">Booking</Button></Link>
      </Card.Body>
          </Card>
)
    }
    </Container>
  );
};

export default Home;