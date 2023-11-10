import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { fetchdata } from '../../services/fetchApi';
function LandingPage() {
  const [users, setUsers] = useState([])
  const viewUsers =async () => {
    const response =await fetchdata()
    // console.log(response, "in LAnding");
    setUsers(response)
  }

  useEffect(() => {
    viewUsers()
  }, [])
  
  return (
    <>
      <Row className="d-flex">
        {users
          ? users.map((item) => (
              <Col lg={4} key={item.id} className="my-5">
                <Container>
                  <Card style={{ width: "18rem" }}>
                    <ListGroup variant="flush">
                      <ListGroup.Item>NAME : {item.name}</ListGroup.Item>
                      <ListGroup.Item>UserName: {item.username}</ListGroup.Item>
                      <ListGroup.Item>Email: {item.email}</ListGroup.Item>
                    </ListGroup>
                  </Card>
                </Container>
              </Col>
            ))
          : "No Users"}
      </Row>
    </>
  );
}

export default LandingPage