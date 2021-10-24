import { React, useContext } from "react";
import Style from "./Partners.module.css";
import Image from "next/image";
import diamond from "./img/diamond.png";
import rrn from "./img/rrn.png";
import tobacco from "./img/tobacco.png";
import gilan from "./img/gilan.png";
import construction from "./img/construction.svg";
import david from "./img/david.svg";
import { GeneralData } from "../../Context/Context";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
// Import Swiper styles
import "swiper/css";

const Partners = () => {
  const generalData = useContext(GeneralData);
  const screenIsXS = generalData.screenIsXS;

  SwiperCore.use([Autoplay]);
  return (
    <div className={Style.PartnersWrap}>
      <Swiper
        loop={true}
        autoplay={{ delay: 3000 }}
        spaceBetween={50}
        slidesPerView={screenIsXS ? 2 : 8}
      >
        <SwiperSlide>
          <div className={Style.PartnersImgWrap}>
            <Image
              className={Style.PartnersImg}
              alt="Diamond-textile"
              layout="fill"
              objectFit="contain"
              src={diamond}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={Style.PartnersImgWrap}>
            <Image
              className={Style.PartnersImg}
              alt="Gilan holding"
              layout="fill"
              objectFit="contain"
              src={gilan}
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className={Style.PartnersImgWrap}>
            <Image
              className={Style.PartnersImg}
              alt="Baku international tobacco"
              layout="fill"
              objectFit="contain"
              src={tobacco}
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className={Style.PartnersImgWrap}>
            <Image
              className={Style.PartnersImg}
              alt="Gilan Construction"
              layout="fill"
              objectFit="contain"
              src={construction}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={Style.PartnersImgWrap}>
            <Image
              className={Style.PartnersImg}
              alt="David C. H. Austin"
              layout="fill"
              objectFit="contain"
              src={david}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={Style.PartnersImgWrap}>
            <Image
              className={Style.PartnersImg}
              alt="RRNaqrup"
              layout="fill"
              objectFit="contain"
              src={rrn}
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Partners;
