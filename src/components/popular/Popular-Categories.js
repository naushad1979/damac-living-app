import { Row, Col } from "react-bootstrap";
import Button from "../ui/button/Button";
import Card from "../ui/card/Card";
import PopularCategoryData from "./PopularCategoryData";
import "./Popular-Categories.scss";
import  Image  from "../ui/image/Image";

const PopularCategories = () => {
  const { categories } = PopularCategoryData();

  return (
    <Row>
      {categories.map((cat) => (
        <Col xs lg="6">
          <Card>
            <Row>
              <Col xs lg="2">
                <Image src={cat.image} />
              </Col>
              <Col xs lg="3"></Col>
              <Col xs lg="7">                 
                  <div className="div">
                    <h2 className="h2">{cat.header}</h2>
                  </div>
                  <div className="text">{cat.title}</div>
                  <div className="description">{cat.description}</div>
                  <div className="button-align">
                    <Button>{cat.buttonTitle}</Button>
                  </div>               
              </Col>
            </Row>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default PopularCategories;
