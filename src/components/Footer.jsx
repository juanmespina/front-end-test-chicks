import { Container, Row, Col } from "react-bootstrap";
export default function Footer() {
  return (
    <>
      <Row className="w-100 mx-0 test-payment-methods">
        <Col xs={12}>
          <Container>
            <div className="d-flex justify-content-start">
              <img
                className="me-3 test-payment-method-img test-visa"
                src="https://chicksgold.com/payment-methods/visa.svg"
              />
              <img
                className="me-3 test-payment-method-img test-master"
                src="https://chicksgold.com/payment-methods/mastercard.svg"
              />
              <img
                className="me-3 test-payment-method-img test-amex"
                src="https://chicksgold.com/payment-methods/amex.svg"
              />
              <img
                className="me-3 test-payment-method-img test-skrill"
                src="https://chicksgold.com/payment-methods/skrill.svg"
              />
              <img
                className="me-3 test-payment-method-img test-crypto"
                src="https://chicksgold.com/payment-methods/crypto.svg"
              />
              <p className="mb-0 d-flex align-items-center">and 50+ more</p>
            </div>
          </Container>
        </Col>
      </Row>
      <Row className="test-footer mx-0">
        <Col xs={12}>
          <Container className="test-social-networks pt-5 pb-4">
            <div className="d-flex justify-content-start w-100">
              <img
                className="me-2 test-social-network"
                src="https://chicksgold.com/icons/facebook.svg"
              />
              <img
                className="me-2 test-social-network"
                src="https://chicksgold.com/icons/instagram.svg"
              />
              <img
                className="me-2 test-social-network"
                src="https://chicksgold.com/icons/twitter.svg"
              />
              <img
                className="me-2 test-social-network"
                src="https://chicksgold.com/icons/discord.svg"
              />
            </div>
          </Container>
        </Col>
      </Row>
      <Row className="test-footer pt-2 mx-0">
        <Col xs={12}>
          <Container className="test py-4">
            <Row
              className="row-cols-1 row-cols-md-2 
            row-cols-lg-3 row-cols-xl-4 row-cols-xxl-5"
            >
              <Col className="pt-0">
                <img
                  className="test-logo-footer"
                  src="https://chicksgold.com/logo/chicks-logo-large.svg"
                />
                <div className="test-contact-email-footer mt-4">
                  <a href="mailto:support@chicksgold.com">
                    {" "}
                    <b>support@chicksgold.com</b>
                  </a>
                </div>{" "}
              </Col>
              <Col className="pt-4">
                <h6 className="test-footer-title">
                  <b>Chicks Gold</b>
                </h6>
                <p className="test-footer-link">
                  <a>Games</a>{" "}
                </p>
                <p className="test-footer-link">
                  <a>About us</a>
                </p>
                <p className="test-footer-link">
                  <a>Blog</a>
                </p>
                <p className="test-footer-link">
                  <a>Sitemap</a>
                </p>
              </Col>
              <Col className="pt-4">
                <h6 className="test-footer-title">
                  <b>Support</b>
                </h6>
                <p className="test-footer-link">
                  <a>Contact us</a>{" "}
                </p>
                <p className="test-footer-link">
                  <a>FAQ</a>
                </p>
              </Col>
              <Col className="pt-4">
                <h6 className="test-footer-title">
                  <b>Legal</b>
                </h6>
                <p className="test-footer-link">
                  <a>Privacy Policy</a>{" "}
                </p>
                <p className="test-footer-link">
                  <a>Terms of Service</a>{" "}
                </p>
                <p className="test-footer-link">
                  <a>Copyright Policy</a>{" "}
                </p>
              </Col>
              <Col className="pt-4 test-footer-trustpilot">
                <a className="w-100 d-flex justify-content-around test-footer-trustpilot-text p-1">
                  <Row  className="w-100">
                    <Col>
                      <div className="d-flex test-footer-trustpilot-start-wrapper">
                        <img
                          className="ms-1"
                          src="https://chicksgold.com/home/star_full.svg"
                        />
                        <img
                          className="ms-1"
                          src="https://chicksgold.com/home/star_full.svg"
                        />
                        <img
                          className="ms-1"
                          src="https://chicksgold.com/home/star_full.svg"
                        />
                        <img
                          className="ms-1"
                          src="https://chicksgold.com/home/star_full.svg"
                        />
                        <img
                          className="ms-1"
                          src="https://chicksgold.com/home/star_full.svg"
                        />
                      </div>
                    </Col>
                    <Col>
                      <p className="ms-1 mb-0">Truspilot Reviews</p>
                    </Col>
                  </Row>
                </a>{" "}
              </Col>
            </Row>
            <Row className="text-center">
              <p>© 2017 - 2020 Chicksgold.com. All Rights Reserved </p>
            </Row>
          </Container>
        </Col>
      </Row>
    </>
  );
}
