import React from "react";
import Style from "./PortfolioItem.module.css";
import ImageGallery from "react-image-gallery";

const PortfolioItem = ({ projectTitle, images, projectDescription }) => {
  return (
    <div className={Style.PortfolioItemWrap}>
      <h1 className={Style.PortfolioItemTitle}>{projectTitle}</h1>
      <p className={Style.PortfolioItemDescription}>{projectDescription}</p>
      <div className={Style.PortfolioItemImgWrap}>
        <ImageGallery
          showPlayButton={false}
          thumbnailPosition="right"
          items={images}
        />
      </div>
    </div>
  );
};

export default PortfolioItem;
