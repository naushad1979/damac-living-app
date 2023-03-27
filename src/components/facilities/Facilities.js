import ImageFigureButton from "../ui/button/ImageFigureButton";
import FacilityData from "./FacilityData";
import "./Facilities.scss";

const Facilities = () => {
  const clickHandler = () => {};
  const { FacilityList } = FacilityData();

  return (
    <div className="top-margin">
      {FacilityList.map((facility) => (
        <ImageFigureButton
          className="caption"
          height={facility.height}
          width={facility.width}
          image={facility.image}
          onClick={clickHandler}
          caption={facility.caption}
        />
      ))}
    </div>
  );
};

export default Facilities;
