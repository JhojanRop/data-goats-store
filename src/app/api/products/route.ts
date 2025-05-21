import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server';
import { data } from '@/lib/data/products';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const limit = parseInt(searchParams.get('limit') || '15')
  const page = parseInt(searchParams.get('page') || '1')
  const category = searchParams.get('category') || ''

  const start = (page - 1) * limit
  const end = start + limit

  const filteredData = data.filter((product) => product.availabilityStatus !== 'Out of Stock')
  const paginatedData = filteredData.slice(start, end)

  return NextResponse.json({
    products: paginatedData,
    total: filteredData.length,
    limit: limit,
    page: page,
    category: category,
  });
}