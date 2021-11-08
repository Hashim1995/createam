import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Style from "./Services.module.css";
import WebIcon from "@mui/icons-material/Web";
import CodeRoundedIcon from "@mui/icons-material/CodeRounded";
import ManageSearchRoundedIcon from "@mui/icons-material/ManageSearchRounded";
import { Button, Row, Col } from "antd";

const Services = () => {
  const { asPath } = useRouter();
  return (
    <div className={Style.ServicesWrap}>
      <div className={Style.ServicesTitleWrap}>
        <h1 className={Style.ServicesTitle}>Nə təklif edirik?</h1>
        <h4 className={Style.ServicesTitleText}>
          Texnologiyanın inkişafı ilə birlikdə artıq hər bir şirkət dijital
          dünyada öz yerini alır. Baku Createam komandası olaraq sizlərə, bu
          yenilənən dünya ilə uyğunlaşmağa köməklik göstərməkdən qürur duyuruq.
        </h4>
      </div>
      <div className={Style.ServicesItemsWrap}>
        <Row>
          <Col xs={24} sm={12} md={8}>
            <div className={Style.ServicesItem}>
              <WebIcon className={Style.ServicesItemIcon} />
              <h3 className={Style.ServicesItemTitle}>VEB DİZAYN</h3>
              <p className={Style.ServicesItemText}>
                Dizayn komandamız tərəfindən sizin istəyinizə uygun hər cür veb
                dizaynlar hazırlanır. İstifadəçi interfeysi və istifadəçi
                təcrübəsini nəzərə alaraq hazırlanan dizayn nümunələri tamamı
                ilə istifadəçi dostudur
              </p>
            </div>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <div className={Style.ServicesItem}>
              <CodeRoundedIcon className={Style.ServicesItemIcon} />
              <h3 className={Style.ServicesItemTitle}>VEB KODLAŞDIRMA </h3>
              <p className={Style.ServicesItemText}>
                Hazırlanan dizayn əsasında istənilən növ veb saytların
                hazırlanması xidmətini təklif edirik. Ən müasir texnologiyalar
                vasitəsi ilə kodlaşdırılan lahiyələrimiz `W3` standartlarına
                cavab verir. M.E.R.N Texnologi əsaslar ilə həyata keçirilən
                lahiyələr tamamı ilə developer dostudur. Yəni ki, dəyişiklik
                etmək, irəlidə daha başqa developerler tərfindən də işlənilməsi
                rahatdır.
              </p>
            </div>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <div className={Style.ServicesItem}>
              <ManageSearchRoundedIcon className={Style.ServicesItemIcon} />
              <h3 className={Style.ServicesItemTitle}>SEO</h3>
              <p className={Style.ServicesItemText}>
                Biz həmçinin, SEO (Search engine optimization) xidməti təklif
                edirik. Əgər sizdə saytınızın google kimi axtarış saytlarında ön
                sırada çıxmasını istəyirsinizsə bizə müraciət edin.
              </p>
            </div>
          </Col>
        </Row>
      </div>
      {asPath !== "/services" && (
        <Row>
          <Col className="center" span={24}>
            <Link passHref href="/services">
              <Button className="custom-ant-btn">Ətraflı</Button>
            </Link>
          </Col>
        </Row>
      )}
    </div>
  );
};

export default Services;
