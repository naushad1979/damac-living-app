import { Button } from "react-bootstrap";

const ImageButton = (props) => {
  return (
    <Button
      style={{
        backgroundImage: props.image,
        backgroundSize: "cover",
        width: props.width,
        height: props.height,
        backgroundColor: "#FAFAFA",
        borderColor: "#FAFAFA",
      }}
    />
  );
};

export default ImageButton;
