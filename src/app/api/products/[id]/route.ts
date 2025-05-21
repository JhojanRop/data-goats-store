import { NextResponse } from 'next/server'
import { data } from '@/lib/data/products'
import type { NextRequest } from 'next/server'

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  const product = data.find((product) => product.sku === params.id)

  if (!product) return NextResponse.json({ message: 'Product not found' }, { status: 404 })
  return NextResponse.json(product)
}