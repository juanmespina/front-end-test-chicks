import { Container } from "react-bootstrap";
import NavigationBar from "src/components/NavigationBar";
import Products from "../pages/products";
import Footer from "../components/Footer";

export default function BaseLayout() {
  return (
    <>
      <NavigationBar />
      <Container fluid='lg' className="test-main-container">
        <Products />
      </Container>
      <Footer />
    </>
  );
}
