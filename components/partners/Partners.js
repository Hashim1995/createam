import React from "react";
import Style from "./Partners.module.css";
import Image from "next/image";
import googleLogo from "./img/google.png";
import facebookLogo from "./img/facebook.png";
import instagramLogo from "./img/instagram.png";
import whatsappLogo from "./img/whatsapp.png";
import twitterLogo from "./img/twitter.png";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
// Import Swiper styles
import "swiper/css";

const Partners = () => {
  SwiperCore.use([Autoplay]);
  return (
    <div className={Style.PartnersWrap}>
      <Swiper
        loop={true}
        autoplay={{ delay: 3000 }}
        spaceBetween={50}
        slidesPerView={8}
      >
        <SwiperSlide>
          <div className={Style.PartnersImgWrap}>
            <Image
              className={Style.PartnersImg}
              alt="google"
              layout="fill"
              objectFit="contain"
              src={googleLogo}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={Style.PartnersImgWrap}>
            <Image
              className={Style.PartnersImg}
              alt="facebook"
              layout="fill"
              objectFit="contain"
              src={facebookLogo}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={Style.PartnersImgWrap}>
            <Image
              className={Style.PartnersImg}
              alt="instagram"
              layout="fill"
              objectFit="contain"
              src={instagramLogo}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={Style.PartnersImgWrap}>
            <Image
              className={Style.PartnersImg}
              alt="whatsapp"
              layout="fill"
              objectFit="contain"
              src={whatsappLogo}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={Style.PartnersImgWrap}>
            <Image
              className={Style.PartnersImg}
              alt="twitter"
              layout="fill"
              objectFit="contain"
              src={twitterLogo}
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Partners;
