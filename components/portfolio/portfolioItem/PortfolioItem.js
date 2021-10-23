import { React, useContext } from "react";
import Style from "./PortfolioItem.module.css";
import ImageGallery from "react-image-gallery";
import { GeneralData } from "../../../Context/Context";
const PortfolioItem = ({ projectTitle, images, projectDescription }) => {
  const generalData = useContext(GeneralData);
  const screenIsXS = generalData.screenIsXS;
  return (
    <div className={Style.PortfolioItemWrap}>
      <h1 className={Style.PortfolioItemTitle}>{projectTitle}</h1>
      <p className={Style.PortfolioItemDescription}>{projectDescription}</p>
      <div className={Style.PortfolioItemImgWrap}>
        <ImageGallery
          showPlayButton={false}
          thumbnailPosition={screenIsXS ? "bottom" : "right"}
          items={images}
        />
      </div>
    </div>
  );
};

export default PortfolioItem;
