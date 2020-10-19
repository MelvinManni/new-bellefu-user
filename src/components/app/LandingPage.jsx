import React from "react";
import { Container, Card, Col, Row } from "react-bootstrap";
import HeaderNav from "../navigations/HeaderNav";
import BottomNav from "../navigations/BottomNav";
import MainDesktop from "../categories/MainDesktop";
import DesktopSlideShow from "../slideshow/DesktpSlideShow";
import MobileSlideShow from "../slideshow/MobileSlideShow";
import AdSlide from "../slideshow/AdSlide";
import PremiunAds from "../Ads/PremiunAds";
import LatestAd from "../Ads/LatestAd";
import MobileCategory from "../categories/MobileCategory";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import { Trans, useTranslation } from "react-i18next";

export default function LandingPage() {
  const { t } = useTranslation();
  return (
    <div>
      <HeaderNav />
      <DesktopSlideShow />
      <MobileSlideShow />
      <Container>
        <Row>
          <Col md={4} lg={4} xl={4}>
            <Card className="mt-3 d-none d-lg-block ">
              <MainDesktop />
            </Card>
          </Col>
          <Col md={12} lg={8} xl={8}>
            <div className="mt-3 d-none d-lg-block ">
              <Card className="border-0">
                <div className="p-2">
                  <AdSlide />
                </div>
              </Card>
            </div>
            <div className="mt-2 d-lg-none d-sm-block d-md-block">
              <MobileCategory />
            </div>
            <div className="mt-5">
              <Row>
                <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                  <h4 className="mb-5">
                    {/* <Trans i18nKey="advert">Premium Ad</Trans> */}
                    {t("advert")}
                  </h4>
                </Col>
                <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                  <Link to="/product_list?plan=featured" className="d-flex flex-row-reverse" style={{ color: "inherit", textDecoration: "inherit" }}>
                    <p style={{ color: "#ffa500" }}>
                      View More
                      <BsArrowRight />
                    </p>
                  </Link>
                </Col>
              </Row>
              <PremiunAds />
            </div>
            <div className="mt-5">
              <Row>
                <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                  <h4 className="mb-5">Latest Ad</h4>
                </Col>
                <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                  <Link to="/product_list" className="d-flex flex-row-reverse" style={{ color: "inherit", textDecoration: "inherit" }}>
                    <p style={{ color: "#ffa500" }}>
                      View More
                      <BsArrowRight />
                    </p>
                  </Link>
                </Col>
              </Row>
              <LatestAd />
            </div>
          </Col>
        </Row>
      </Container>

      <BottomNav />
    </div>
  );
}
