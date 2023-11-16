import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import DashboardCard from "./DashboardCard";

const Dashboard = () => {
  return (
    <>
      {/* navbar  */}

      <Navbar expand="lg" className="bg-primary">
        <Container>
          <Navbar.Brand href="#">
            <span className="text-light">ThinkAyurvedaFirst™</span>
          </Navbar.Brand>
          <NavDropdown title="Name" id="basic-nav-dropdown" className="text-light">
            <NavDropdown.Item href="#action/3.1" >Logout</NavDropdown.Item>
          </NavDropdown>
        </Container>
      </Navbar>


      {/* <Container className=" d-flex mt-4 ps-4">
        <h5>Dashboard</h5>
      </Container> */}

      {/* tab */}
      <Container className="mt-4">
        <Nav variant="tabs" defaultActiveKey="/home">
          <Nav.Item>
            <Nav.Link href="/home">Pending</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-1">Confirm</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2">Cancel</Nav.Link>
          </Nav.Item>
        </Nav>
      </Container>




      <Container>
        <DashboardCard />
      </Container>
    </>
  );
};

export default Dashboard;
