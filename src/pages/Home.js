import MyProperties from "../components/myProperties/MyProperties";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import WhatsNew from "../components/whatsNew/WhatsNew";
import Facilities from "../components/facilities/Facilities";
import PopularCategories from "../components/popular/Popular-Categories";
import Help from "../components/help/Help";
import Offer from "../components/offer/Offer";
import CopyRight from "../components/common/copyRight/CopyRight";

const Home = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col xs lg="6">
            <MyProperties />
          </Col>
          <Col xs lg="6" className="p-1">
            <WhatsNew />
          </Col>
        </Row>
        <Row>
          <Col xs lg="12">
            <Facilities />
          </Col>
        </Row>
        <Row>
          <Col xs lg="12 mt-5">
            <PopularCategories />
          </Col>
        </Row>
        <Row>
          <Col xs lg="12">
            <Help />
          </Col>
        </Row>
        <Row>
          <Col xs lg="12">
            <Offer />
          </Col>
        </Row>
        <Row>
          <Col xs lg="12">
            <CopyRight />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
