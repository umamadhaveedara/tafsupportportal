import React, { useState } from "react";
import { Button, Card, Row, Col, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const DashboardCard = () => {
  return (
    <>
      <Card className="mt-3">
        <Container>
          <Card.Body>
            <Row>
              <Col>
                <Card.Text>
                  <div className="d-flex justify-content-start ">
                    <p className="me-1">Patient Name:</p>
                    <p className="me-1">Umamadhav</p>
                  </div>
                  <div className="d-flex justify-content-start ">
                    <p className="me-1">Patient Number:</p>
                    <p className="me-1">987654321</p>
                  </div>
                  <div className="d-flex justify-content-start ">
                    <p className="me-1">Patient Email:</p>
                    <p className="me-1">Umamadhav@gmail.com</p>
                  </div>
                </Card.Text>
              </Col>
              <Col>
                <Card.Text>
                  <div className="d-flex justify-content-start ">
                    <p className="me-1">Doctor Name:</p>
                    <p className="me-1">Umamadhav</p>
                  </div>
                  <div className="d-flex justify-content-start ">
                    <p className="me-1">Doctor Number:</p>
                    <p className="me-1">987654321</p>
                  </div>
                  <div className="d-flex justify-content-start ">
                    <p className="me-1">Doctor Email:</p>
                    <p className="me-1">Umamadhav@gmail.com</p>
                  </div>
                </Card.Text>
              </Col>
              <Col>
                <Card.Text>
                  <div className="d-flex justify-content-start ">
                    <p className="me-1">Date & Time:</p>
                    <p className="me-1">10/07/2023 at 10:30</p>
                  </div>
                  <div className="d-flex justify-content-start ">
                    <p className="me-1">Specialization:</p>
                    <p className="me-1">Gynaecology</p>
                  </div>
                </Card.Text>
              </Col>
            </Row>
            <Row>
              <Col className="d-flex justify-content-end align-items-center pe-2">
                <Button variant="success" className="me-2">
                  Confirm
                </Button>
                <Button variant="danger">Cancel</Button>
              </Col>
            </Row>
          </Card.Body>
        </Container>
      </Card>
    </>
  );
};

export default DashboardCard;
