export default function ProductCard({ sale = true }) {
  const visibility = sale ? "test-visibility-hidden" : "";
  return (
    <div className="test-product-card">
      <div className="test-product-card-row test-justify-content-between">
        <div>
          <div className={`test-product-card-on-sale ${visibility}`}>
            <div className="test-product-card-on-sale-dot"></div>{" "}
            <p className="test-product-card-on-sale-paragraph"> ON SALE</p>
          </div>
          <div className="test-product-card-on-sale-availability">
            <p className="test-product-card-on-sale-availability-text">
              In stock
            </p>
          </div>
        </div>
        <div>
          <input
            className="test-product-card-on-sale-qty"
            type="number"
            defaultValue={5}
          />
        </div>
      </div>
      <div className="test-product-card-row test-justify-content-start">
        <img
          className="test-product-card-product-image"
          src="https://chicks-products.s3.amazonaws.com/151107d2-312e-4438-9224-a425cdab9452"
        />
      </div>
      <div className="test-product-card-row test-justify-content-between">
        <p className="test-product-card-product-name">Blue Partyhat</p>
        <div className="test-product-card-product-game-image">
          <img src="https://chicks-games.s3.amazonaws.com/3e94fb7b-2578-49c8-9397-f60899d0c4db" />
        </div>
      </div>
      <div className={`test-product-card-row test-justify-content-start ${visibility}`}>
        <p className="test-product-card-product-price">
          <b>$450.00</b>
        </p>
        <p className="test-product-card-product-old-price">$522.50</p>
      </div>
      <div className="test-product-card-row test-justify-content-start">
        <p className="test-product-card-product-description">
          Lorem ipsum dolor sit amet consetetur sadipscing elitr
        </p>
      </div>
      <div className="test-product-card-row test-justify-content-between">
        <button className="test-product-card-product-details-btn w-50">
          <p className="test-product-card-product-details-btn-text">DETAILS</p>
        </button>
        <button className="test-product-card-product-add-btn w-50">
          <p className="test-product-card-product-add-btn-text">ADD</p>
          <div className="test-product-card-product-add-btn-icon">
            <img src="https://chicksgold.com/icons/cart.svg" />
          </div>
        </button>
      </div>
    </div>
  );
}
