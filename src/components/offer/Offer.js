import styles from "./Offer.module.scss";
import { Row, Col } from "react-bootstrap";
import ImageButton from "../ui/button/ImageButton";
import  Image  from "../ui/image/Image";

const Offer = () => {
  return (
    <div className={styles.maindiv}>
      <Row>
        <Col xs lg="6">
          <div className={styles.img}>         
            <Image src="/images/offer/Group138.png"/>
          </div>
          <h2 className={styles.h2}>Exclusive lifestyle offers only for DAMAC Residents.</h2>
          <h1 className={styles.h1}>DAMAC Residents Offers</h1>
          <div className={styles.buttonalign}>
            <ImageButton
              image="url('/images/icons/apple-appstore.svg')"
              width="250px"
              height="70px"
            /> 
            <ImageButton
              image="url('/images/icons/google-play.svg')"
              width="250px"
              height="70px"
            /> 
          </div>
        </Col>
        <Col xs lg="6">
          <div>            
            <Image src="/images/offer/Group205.png"/>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Offer;
