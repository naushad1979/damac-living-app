import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col } from "react-bootstrap";
import ImageWithText from "../ui/text-Image/ImageWithText";
import "../../App.scss";
import MyPropertyData from "./MyPropertyData";

const MyProperties = () => {
 const{imageAttribs} = MyPropertyData();

  return (
    <div>
      <div className="title mt-4">My Properties</div>
      <Row>
        {imageAttribs.map((imgAttrib) => (
          <Col xs="12" md="6" lg="6" className="p-1">
            <ImageWithText
              src={imgAttrib.path}
              height={imgAttrib.height}
              cornerRadius={imgAttrib.cornerRadius}
              title={imgAttrib.title}
              subTitle={imgAttrib.subTitle}
            />
          </Col>
        ))}         
      </Row>
    </div>
  );
};

export default MyProperties;
