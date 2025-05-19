import React from "react";

const ProductTabs = ({ item }) => {
  return (
    <div className="product-description-section">
      <h4>Description</h4>
      <div
        dangerouslySetInnerHTML={{
          __html: item?.desc || "No description available for this product.",
        }}
      />
    </div>
  );
};

export default ProductTabs;
