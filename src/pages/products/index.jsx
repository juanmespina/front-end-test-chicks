import { Row, Col, Form, Pagination } from "react-bootstrap";
import ProductCard from "./components/ProductCard";

export default function Products() {
  const productsCards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
  return (
    <>
      <Row>
        <Col xs={12} className="text-left">
          <h1>
            <b>Condimentum consectetur</b>
          </h1>
        </Col>
        <Col xs={12} className="mb-1 mt-2">
          <Row className="justify-content-between">
            <Col
              xs={5}
              md={3}
              className="py-2 px-3 test-material-select d-flex"
            >
              <img
                className="me-2"
                src="https://chicksgold.com/icons/item-default.svg"
              />
              <Form.Select className="ms-1 px-0 py-0" size="lg">
                <option className="d-flex justify-content-start">
                  <img
                    className="me-2"
                    src="https://chicksgold.com/icons/item-default.svg"
                  />
                  <p>Select a game</p>
                </option>
              </Form.Select>
            </Col>
            <Col xs={5} md={4} className="py-2 px-3 ms-2 test-material-input">
              <Form.Control
                className="h-100"
                type="text"
                defaultValue="Search"
                id="search"
                aria-describedby="search"
              />
            </Col>
            <Col
              xs={5}
              md={2}
              className="py-2 px-3 test-material-select 
            test-material-select-with-label d-flex"
            >
              <img
                className="me-2"
                src="https://chicksgold.com/icons/green-icons/item-bag.svg"
              />
              <div className="w-100 ms-1 px-0 py-0 test-material-label-select">
                <Form.Label htmlFor="input-price" className="mb-0">
                  Price
                </Form.Label>
                <Form.Select className="px-0 py-0" size="lg" id="input-price">
                  <option className="d-flex justify-content-start">
                    <img
                      className="me-2"
                      src="https://chicksgold.com/icons/item-default.svg"
                    />
                    <p>All</p>
                  </option>
                </Form.Select>
              </div>
            </Col>
            <Col
              xs={5}
              md={2}
              className="py-2 px-3 test-material-select 
            test-material-select-with-label d-flex"
            >
              <img
                className="me-2"
                src="https://chicksgold.com/icons/green-icons/feather.svg"
              />
              <div className="w-100 ms-1 px-0 py-0 test-material-label-select">
                <Form.Label htmlFor="input-price" className="mb-0">
                  Item type
                </Form.Label>
                <Form.Select className="px-0 py-0" size="lg" id="input-price">
                  <option className="d-flex justify-content-start">
                    <img
                      className="me-2"
                      src="https://chicksgold.com/icons/item-default.svg"
                    />
                    <p>All</p>
                  </option>
                </Form.Select>
              </div>
            </Col>
          </Row>
        </Col>
        <Col xs={12} className="test-main-content rounded-1 mt-3 p-5">
          <Row className="justify-content-between mt-3">
            <Col xs={6} md={4} lg={3} className="d-flex align-items-center">
              <p className="mb-0">Showing 20 - from 125</p>
            </Col>
            <Col
              xs={6}
              md={4}
              lg={2}
              className="py-2 px-3 test-material-select 
            test-material-select-with-label d-flex"
            >
              <img
                className="me-2"
                src="https://chicksgold.com/icons/green-icons/filter.svg"
              />
              <div className="w-100 ms-1 px-0 py-0 test-material-label-select">
                <Form.Label htmlFor="input-price" className="mb-0">
                  Sort by
                </Form.Label>
                <Form.Select className="px-0 py-0" size="lg" id="input-price">
                  <option className="d-flex justify-content-start">
                    <img
                      className="me-2"
                      src="https://chicksgold.com/icons/item-default.svg"
                    />
                    <p>Featured</p>
                  </option>
                </Form.Select>
              </div>
            </Col>
          </Row>
          <Row
            className="g-3 row-cols-1 mt-4 
          row-cols-md-2 row-cols-lg-3 row-cols-xl-4 row-cols-xxl-5"
          >
            {productsCards.map((item, index) => {
              console.log(index);
              const onSale = index % 2 == 0;
              return (
                <Col className="" key={index}>
                  <ProductCard sale={onSale} />
                </Col>
              );
            })}
          </Row>
          <Row className="justify-content-around mt-5">
            <Col md={5} className="d-flex justify-content-center">
              <Pagination className="test-pagination">
                <Pagination.Prev className="test-pagination-prev mx-2" />
                <Pagination.Item  active>{1}</Pagination.Item>
                <Pagination.Item>{2}</Pagination.Item>
                <Pagination.Item>{3}</Pagination.Item>
                <Pagination.Item>{4}</Pagination.Item>
                <Pagination.Ellipsis />
                <Pagination.Item>{11}</Pagination.Item>
                <Pagination.Next className="test-pagination-next mx-2" />
              </Pagination>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
}
