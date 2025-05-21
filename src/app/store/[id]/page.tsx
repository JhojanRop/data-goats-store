'use client';
import { useEffect, useState } from 'react'
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels
} from '@headlessui/react'
import { StarIcon } from '@heroicons/react/20/solid'
import { HeartIcon, MinusIcon, PlusIcon } from '@heroicons/react/24/outline'
import { useParams } from 'next/navigation';
import { Product } from '@/types/product';
import Image from 'next/image';
import { classNames } from '@/utils/classNames';
import { useCart } from '@/context/CartContext';

export default function ProductPage() {
  const { id } = useParams()
  const [product, setProduct] = useState<Product | null>(null)
  const { dispatch } = useCart();

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await fetch(`/api/products/${id}`);
      const data = await response.json();
      setProduct(data);
    };
    fetchProduct();
  }, [id])

  const addToCart = () => {
    if (!product) return;
    dispatch({ type: "ADD_TO_CART", product });
  }

  if (product) return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
          {/* Image gallery */}
          <TabGroup className="flex flex-col-reverse">
            {/* Image selector */}
            <div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
              <TabList className="grid grid-cols-4 gap-6">
                {product.images?.map((image, i) => (
                  <Tab
                    key={image}
                    className="group relative flex h-24 cursor-pointer items-center justify-center rounded-md bg-white text-sm font-medium text-gray-900 uppercase hover:bg-gray-50 focus:ring-3 focus:ring-indigo-500/50 focus:ring-offset-4 focus:outline-hidden"
                  >
                    <span className="sr-only">{product.title}</span>
                    <span className="absolute inset-0 overflow-hidden rounded-md">
                      <Image
                        alt={`${product.title} image ${i + 1}`}
                        src={image}
                        width={500}
                        height={500}
                        className="h-full w-full object-cover object-center group-data-selected:opacity-100"
                      />
                    </span>
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 rounded-md ring-2 ring-transparent ring-offset-2 group-data-selected:ring-indigo-500"
                    />
                  </Tab>
                ))}
              </TabList>
            </div>

            <TabPanels>
              {product.images?.map((image, i) => (
                <TabPanel key={`${product.title} image ${i + 1}`}>
                  <Image
                    alt={`${product.title} image ${i + 1}`}
                    src={image}
                    width={500}
                    height={500}
                    className="aspect-square w-full object-cover sm:rounded-lg"
                  />
                </TabPanel>
              ))}
            </TabPanels>
          </TabGroup>

          {/* Product info */}
          <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">{product.title}</h1>

            <div className="mt-3">
              <h2 className="sr-only">Product information</h2>
              <div className='flex items-center gap-x-3'>
                {product.discountPercentage > 0 && (
                  <p className="text-3xl text-gray-500 line-through before:content-['$_']">{(product.price)}</p>
                )}
                <p className="text-3xl tracking-tight text-gray-900 before:content-['$_']">{(product.price - (product.price * (product.discountPercentage / 100))).toFixed(2)}</p>
              </div>
            </div>

            {/* Reviews */}
            <div className="mt-3">
              <h3 className="sr-only">Reviews</h3>
              <div className="flex items-center">
                <div className="flex items-center">
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <StarIcon
                      key={rating}
                      aria-hidden="true"
                      className={classNames(
                        product.rating > rating ? 'text-indigo-500' : 'text-gray-300',
                        'size-5 shrink-0',
                      )}
                    />
                  ))}
                </div>
                <p className="sr-only">{product.rating} out of 5 stars</p>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="sr-only">Description</h3>
              <p className='space-y-6 text-base text-gray-700'>{product.description}</p>
            </div>

            <form className="mt-6">
              {/* Colors */}
              <div>
                <h3 className="text-sm font-medium text-gray-600">Stock: {product.stock}</h3>
                <p className="text-sm font-medium text-gray-600">Availabity status: {product.availabilityStatus}</p>
              </div>

              <div className="mt-10 flex">
                <button
                  type="button"
                  className="flex max-w-xs flex-1 items-center justify-center rounded-md border border-transparent cursor-pointer bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50 focus:outline-hidden sm:w-full"
                  onClick={addToCart}
                >
                  Add to bag
                </button>

                <button
                  type="button"
                  className="ml-4 flex items-center justify-center rounded-md px-3 py-3 text-gray-400 hover:bg-gray-100 hover:text-gray-500"
                >
                  <HeartIcon aria-hidden="true" className="size-6 shrink-0" />
                  <span className="sr-only">Add to favorites</span>
                </button>
              </div>
            </form>

            <section aria-labelledby="details-heading" className="mt-12">
              <h2 id="details-heading" className="sr-only">
                Additional details
              </h2>

              <div className="divide-y divide-gray-200 border-t">
                <Disclosure as="div">
                  <h3>
                    <DisclosureButton className="group relative flex w-full items-center justify-between py-6 text-left">
                      <span className="text-sm font-medium text-gray-900 group-data-open:text-indigo-600">Dimensions</span>
                      <span className="ml-6 flex items-center">
                        <PlusIcon
                          aria-hidden="true"
                          className="block size-6 text-gray-400 group-hover:text-gray-500 group-data-open:hidden"
                        />
                        <MinusIcon
                          aria-hidden="true"
                          className="hidden size-6 text-indigo-400 group-hover:text-indigo-500 group-data-open:block"
                        />
                      </span>
                    </DisclosureButton>
                  </h3>
                  <DisclosurePanel className="pb-6">
                    <ul role="list" className="list-disc space-y-1 pl-5 text-sm/6 text-gray-700 marker:text-gray-300">
                      <li>
                        <span className="font-medium text-gray-900">Weight:</span> {product.weight} kg
                      </li>
                      <li>
                        <span className="font-medium text-gray-900">Width:</span> {product.dimensions.width} cm
                      </li>
                      <li>
                        <span className="font-medium text-gray-900">Height:</span> {product.dimensions.height} cm
                      </li>
                      <li>
                        <span className="font-medium text-gray-900">Depth:</span> {product.dimensions.depth} cm
                      </li>
                    </ul>
                  </DisclosurePanel>
                </Disclosure>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

