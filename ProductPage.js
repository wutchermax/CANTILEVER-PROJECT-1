import React, { useState, useEffect } from 'react';
import ProductDetail from '../components/ProductDetail';
import ProductImageCarousel from '../components/ProductImageCarousel';
import ProductReviews from '../components/ProductReviews';

function ProductPage() {
  // Fetch product details, images, reviews from backend

  return (
    <div className="product-page">
      <ProductImageCarousel />
      <ProductDetail />
      <ProductReviews />
    </div>
  );
}

export default ProductPage;
