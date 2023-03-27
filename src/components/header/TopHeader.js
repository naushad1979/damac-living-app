import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import UserProfile from "../userProfile/UserProfile";
import { NavLink } from "react-router-dom";
import Notification from "../notification/Notification";
import "./TopHeader.scss";
import  Image  from "../ui/image/Image";

const TopHeader = () => {
  return (
    <Navbar collapseOnSelect expand="lg" >
      <Container>
        <NavLink to="/" className="margintop">
          <Image src="/images/Group 3922.svg"/>       
        </NavLink>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Notification />
          </Nav>
          <Nav>
            <UserProfile />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>    
  );
};

export default TopHeader;
