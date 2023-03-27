import Figure from "react-bootstrap/Figure";

const ImageFigureButton = (props) => {
  return (     
      <Figure>
        <Figure.Image
          width={props.width}
          height={props.height}
          src={props.image}
          onClick={props.onclick}           
        />
        <Figure.Caption className={props.className}>
          {props.caption}
        </Figure.Caption>
      </Figure>     
  );
};

export default ImageFigureButton;
