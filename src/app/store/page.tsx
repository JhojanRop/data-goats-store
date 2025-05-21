'use client'
import { Product } from '@/types/product';
import { useEffect, useState } from 'react'
import ProductCard from '@/components/ProductCard';

export default function StorePage() {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('/api/products?limit=15&page=1');
      const data = await response.json();
      setProducts(data.products);
    };
    fetchProducts();
  }, [])

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
          {products.length > 0 && products.map((product) => <ProductCard key={product.id} product={product} />)}
        </div>
      </div>
    </div>
  )
}
