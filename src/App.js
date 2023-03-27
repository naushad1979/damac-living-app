import "./App.scss";
import TopHeader from "./components/header/TopHeader";
import Home from "./pages/Home"; 
import SideBar from "./components/sideBar/SideBar";
import { Row, Col, Container } from "react-bootstrap";
import FloatingButtons from "./components/common/FloatingButtons/FloatingButtons"

function App() {
  return (
    <div>      
      <Container fluid>
      <Row>
        <Col xs="12" md="1" lg="1">
          <div>
            <SideBar/>
          </div>
        </Col>
        <Col xs="12" md="11" lg="11">
          <TopHeader />
          <hr className="hr"/> 
          <Home />
          <FloatingButtons/>
        </Col>
      </Row>
    </Container>     
    </div>
  );
}

export default App;
