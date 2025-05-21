import { useCart } from '@/context/CartContext';
import { Product } from '@/types/product';
import Image from 'next/image';
import Link from 'next/link';

export default function ProductCard({ product }: { product: Product }) {
  const { dispatch } = useCart();
  const addToCart = (product: Product) => {
    dispatch({ type: "ADD_TO_CART", product });
  };

  return (
    <div>
      <div className="relative">
        <Link href={`/store/${product.sku}`}>
          <div className="relative h-72 w-full overflow-hidden rounded-lg">
            <Image alt={`${product.title} image`} src={product.thumbnail || ""} fill className="object-cover" />
          </div>
          <div className="absolute inset-x-0 top-0 flex h-72 items-end justify-end overflow-hidden rounded-lg p-4 group opacity-0 hover:opacity-100 transition-opacity duration-300">
            <div
              aria-hidden="true"
              className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-30"
            />
            <p className="relative text-lg font-semibold text-white before:content-['$']">{(product.price - (product.price * product.discountPercentage / 100)).toFixed(2)}</p>
          </div>
        </Link>
        <div className="relative mt-4">
          <h3 className="text-sm font-medium text-gray-900">{product.title}</h3>
        </div>
      </div>

      <div className="mt-6">
        <button
          type="button"
          onClick={() => addToCart(product)}
          className="relative w-full flex items-center justify-center rounded-md border border-transparent bg-gray-100 px-8 py-2 text-sm font-medium text-gray-900 cursor-pointer hover:bg-gray-200"
        >
          Add to bag<span className="sr-only">, {product.title}</span>
        </button>
      </div>
    </div>
  )
}