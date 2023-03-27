import { Row, Col } from "react-bootstrap";
import Button from "../ui/button/Button";
import HelpData from "./HelpData";
import "./Help.scss";
import { Fragment } from "react";
import Card from "react-bootstrap/Card";
import SocialMediaLinks from "../common/socialMedia/SocialMediaLinks";
import  Image  from "../ui/image/Image";

const Help = () => {
  const { helpCategories } = HelpData();

  return (
    <Fragment>
      <h2 className="header mt-5 left-align">Let us help you</h2>
      <Row>
        {helpCategories.map((cat) => (
          <Col xs lg="3" className="p-2">
            <Card className="card">
              <div className="center-align">
                <Image
                  src={cat.image}
                  style={{
                    height: cat.height,
                    width: cat.width,
                    marginTop: "1.5rem",
                  }}
                />
              </div>
              <Card.Body>
                <h3 className="header">{cat.header}</h3>
                <p className="p">{cat.title}</p>
                {cat.buttonTitle ? (
                  <Button>{cat.buttonTitle}</Button>
                ) : (
                  <SocialMediaLinks/>
                )}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Fragment>
  );
};

export default Help;
