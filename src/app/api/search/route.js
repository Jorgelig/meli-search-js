import { NextResponse } from "next/server";

export async function GET(request, context) {
  const { url } = request;
  const { searchParams } = new URL(request.url);
  const q = searchParams.get('q');
  const limit = searchParams.get('limit');
  const response = await fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${q}&limit=${limit}`,
    {
      headers: {
        'Content-Type': 'application/json',
      }
    }
  );
  const data = await response.json();
  return NextResponse.json({ data });


}