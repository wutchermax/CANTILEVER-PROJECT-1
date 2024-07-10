import React from 'react';
import ProductDetail from '../components/ProductDetail';
import ProductImageCarousel from '../components/ProductImageCarousel';
import ProductReviews from '../components/ProductReviews';

function ProductPage() {
  return (
    <div className="product-page">
      <ProductImageCarousel />
      <ProductDetail />
      <ProductReviews />
    </div>
  );
}

export default ProductPage;
