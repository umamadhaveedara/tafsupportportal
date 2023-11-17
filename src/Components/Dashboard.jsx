import React, { useState } from "react";
import {
  Container,
  Nav,
  Navbar,
  Dropdown,
  Card,
  Row,
  Col,
  Button,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Dashboard = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [activeTab, setActiveTab] = useState("Pending");

  const handleMouseEnter = () => {
    setShowDropdown(true);
  };

  const handleMouseLeave = () => {
    setShowDropdown(false);
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const renderContent = () => {
    if (activeTab === "Confirm") {
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
                      Completed
                    </Button>
                    <Button variant="danger">Cancel</Button>
                  </Col>
                </Row>
              </Card.Body>
            </Container>
          </Card>
        </>
      );
    } else if (activeTab === "Pending") {
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
    } else if (activeTab === "Cancel") {
      
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
              </Card.Body>
            </Container>
          </Card>
        </>
      );
    } else {
      return null;
    }
  };

  return (
    <>
      <Navbar expand="lg" className="bg-primary d-flex justify-content-between">
        <Navbar.Brand href="#" className="ms-4">
          <span className="text-light">ThinkAyurvedaFirst™</span>
        </Navbar.Brand>
        <Dropdown
          align="end"
          show={showDropdown}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Dropdown.Toggle
            variant="light"
            id="dropdown-basic"
            className="toggle-without-arrow rounded-circle  bg-white text-black me-5"
          >
            A
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="#action/1">Logout</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Navbar>

      {/* tab */}
      <Container className="mt-4">
        <Nav variant="tabs" defaultActiveKey="/home">
          <Nav.Item>
            <Nav.Link
              eventKey="link-1"
              onClick={() => handleTabClick("Pending")}
            >
              Pending
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              eventKey="link-2"
              onClick={() => handleTabClick("Confirm")}
            >
              Confirm
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              eventKey="link-3"
              onClick={() => handleTabClick("Cancel")}
            >
              Cancel
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Container>

      <Container>{renderContent()}</Container>
    </>
  );
};

export default Dashboard;
