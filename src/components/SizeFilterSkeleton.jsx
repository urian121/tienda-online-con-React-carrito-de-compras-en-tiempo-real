const SizeFilterSkeleton = () => {
  const renderSizeCircles = (count) =>
    Array.from({ length: count }).map((_, index) => (
      <div key={index} className="skeleton size-circle"></div>
    ));

  const renderCards = (count) =>
    Array.from({ length: count }).map((_, index) => (
      <div key={index} className="col-12 col-sm-6 col-lg-3">
        <div className="card card-skeleton">
          <div className="skeleton image-skeleton">
            <div className="skeleton shipping-badge"></div>
          </div>
          <div className="card-body">
            <div className="skeleton title-skeleton-card"></div>
            <div className="price-row">
              <div className="skeleton price-skeleton"></div>
              <div className="skeleton installment-skeleton"></div>
            </div>
            <div className="sizes-skeleton">{renderSizeCircles(4)}</div>
            <div className="skeleton button-skeleton"></div>
          </div>
        </div>
      </div>
    ));

  return (
    <div className="page-container">
      <div className="size-selector">
        <div className="size-title">
          <div className="skeleton title-skeleton"></div>
          <div className="skeleton count-skeleton"></div>
        </div>
        <div className="size-grid">{renderSizeCircles(8)}</div>
      </div>

      <div className="product-grid">
        <div className="row g-4">{renderCards(4)}</div>
      </div>
    </div>
  );
};

export default SizeFilterSkeleton;
