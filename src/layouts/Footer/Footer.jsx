import { Col, Image, Row } from "react-bootstrap";
import BackgroundImgContainer from "../../components/BackgroundImgContainer";

const Footer = () => {
  return (
    <>
      <BackgroundImgContainer
        src="/images/footer/footer-img.png"
        bgClassName="d-lg-block d-none"
        className="py-20 px-15"
      >
        <Row className="gx-5">
          <Col className="d-flex align-items-center" xs={3}>
            <Image
              src="/images/footer/kampr_logo_transparent.png"
              alt="kampr-logo"
              style={{ width: 188, height: 31.5 }}
            />
          </Col>
          <Col className="d-flex align-items-center" xs={4}>
            <Image
              src="/images/footer/watch_friends_label.png"
              alt="watch-friends-label"
              style={{ height: 79 }}
            />
          </Col>
          <Col className="d-flex align-items-center" xs={5}>
            <div className="d-flex gap-1 position-relative w-100">
              <Image
                src="/images/footer/campfire_logo.png"
                alt="watch-friends-label"
                style={{ width: 40, height: 38 }}
                className="cursor-pointer"
              />
              <div className="d-flex justify-content-end position-absolute top-100 start-0 w-100 pt-1">
                <small className="cursor-pointer ps-2 text-muted fw-medium pe-2 border-end border-2 border-primary">
                  Book your Rv
                </small>
                <small className="cursor-pointer ps-2 text-muted fw-medium pe-2 border-end border-2 border-primary">
                  Book campsite
                </small>
                <small className="cursor-pointer ps-2 text-muted fw-medium">
                  Book adventure
                </small>
              </div>
            </div>
          </Col>
        </Row>
      </BackgroundImgContainer>
      <div className="d-lg-none d-flex justify-content-center bg-primary py-2 py-md-5">
        <Image src="/images/footer/kampr-logo-secondary.png" alt="" />
      </div>
    </>
  );
};

export default Footer;
